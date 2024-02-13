not_implemented_for(x) = error("Not implemented for $(x). You might want to put:  `using Makie` into your code!")

to_func_name(x::Symbol) = Symbol(lowercase(string(x)))
# Fallback for Plot ...
# Will get overloaded by recipe Macro
plotsym(x) = :plot

function func2string(func::F) where F <: Function
    string(F.name.mt.name)
end

plotfunc(::Plot{F}) where F = F
plotfunc(::Type{<: AbstractPlot{Func}}) where Func = Func
plotfunc(::T) where T <: AbstractPlot = plotfunc(T)
plotfunc(f::Function) = f

func2type(x::T) where T = func2type(T)
func2type(x::Type{<: AbstractPlot}) = x
func2type(f::Function) = Plot{f}

plotkey(::Type{<: AbstractPlot{Typ}}) where Typ = Symbol(lowercase(func2string(Typ)))
plotkey(::T) where T <: AbstractPlot = plotkey(T)
plotkey(::Nothing) = :scatter
plotkey(any) = nothing


argtypes(::T) where {T <: Tuple} = T

function create_axis_like end
function create_axis_like! end
function figurelike_return end
function figurelike_return! end

function _create_plot end
function _create_plot! end



plot(args...; kw...) = _create_plot(plot, Dict{Symbol, Any}(kw), args...)
plot!(args...; kw...) = _create_plot!(plot, Dict{Symbol, Any}(kw), args...)

"""
Each argument can be named for a certain plot type `P`. Falls back to `arg1`, `arg2`, etc.
"""
function argument_names(plot::P) where {P<:AbstractPlot}
    argument_names(P, length(plot.converted))
end

function argument_names(::Type{<:AbstractPlot}, num_args::Integer)
    # this is called in the indexing function, so let's be a bit efficient
    ntuple(i -> Symbol("arg$i"), num_args)
end

# Since we can use Plot like a scene in some circumstances, we define this alias
theme(x::SceneLike, args...) = theme(x.parent, args...)
theme(x::AbstractScene) = x.theme
theme(x::AbstractScene, key; default=nothing) = deepcopy(get(x.theme, key, default))
theme(x::AbstractPlot, key; default=nothing) = deepcopy(get(x.attributes, key, default))

Attributes(x::AbstractPlot) = x.attributes

default_theme(scene, T) = Attributes()

"""
# Plot Recipes in `Makie`

There's two types of recipes. *Type recipes* define a simple mapping from a
user defined type to an existing plot type. *Full recipes* can customize the
theme and define a custom plotting function.

## Type recipes

Type recipe are really simple and just overload the argument conversion
pipeline. This can be done for all plot types or for a subset of plot types:

    # All plot types
    convert_arguments(P::Type{<:AbstractPlot}, x::MyType) = convert_arguments(P, rand(10, 10))
    # Only for scatter plots
    convert_arguments(P::Type{<:Scatter}, x::MyType) = convert_arguments(P, rand(10, 10))

Optionally you may define the default plot type so that `plot(x::MyType)` will
use this:

    plottype(::MyType) = Surface

## Full recipes with the `@recipe` macro

A full recipe for `MyPlot` comes in two parts. First is the plot type name,
arguments and theme definition which are defined using the `@recipe` macro.
Second is a custom `plot!` for `MyPlot`, implemented in terms of the atomic
plotting functions.

We use an example to show how this works:

    # arguments (x, y, z) && theme are optional
    @recipe(MyPlot, x, y, z) do scene
        Attributes(
            plot_color = :red
        )
    end

This macro expands to several things. Firstly a type definition:

    const MyPlot{ArgTypes} = Plot{myplot, ArgTypes}

The type parameter of `Plot` contains the function instead of e.g. a
symbol. This way the mapping from `MyPlot` to `myplot` is safer and simpler.
(The downside is we always need a function `myplot` - TODO: is this a problem?)

The following signatures are defined to make `MyPlot` nice to use:

    myplot(args...; kw_args...) = ...
    myplot!(scene, args...; kw_args...) = ...
    myplot(kw_args::Dict, args...) = ...
    myplot!(scene, kw_args::Dict, args...) = ...
    #etc (not 100% settled what signatures there will be)

A specialization of `argument_names` is emitted if you have an argument list
`(x,y,z)` provided to the recipe macro:

    argument_names(::Type{<: MyPlot}) = (:x, :y, :z)

This is optional but it will allow the use of `plot_object[:x]` to
fetch the first argument from the call
`plot_object = myplot(rand(10), rand(10), rand(10))`, for example.
Alternatively you can always fetch the `i`th argument using `plot_object[i]`,
and if you leave out the `(x,y,z)`, the default version of `argument_names`
will provide `plot_object[:arg1]` etc.

The theme given in the body of the `@recipe` invocation is inserted into a
specialization of `default_theme` which inserts the theme into any scene that
plots `MyPlot`:

    function default_theme(scene, ::MyPlot)
        Attributes(
            plot_color = :red
        )
    end

As the second part of defining `MyPlot`, you should implement the actual
plotting of the `MyPlot` object by specializing `plot!`:

    function plot!(plot::MyPlot)
        # normal plotting code, building on any previously defined recipes
        # or atomic plotting operations, and adding to the combined `plot`:
        lines!(plot, rand(10), color = plot[:plot_color])
        plot!(plot, plot[:x], plot[:y])
        plot
    end

It's possible to add specializations here, depending on the argument *types*
supplied to `myplot`. For example, to specialize the behavior of `myplot(a)`
when `a` is a 3D array of floating point numbers:

    const MyVolume = MyPlot{Tuple{<:AbstractArray{<: AbstractFloat, 3}}}
    argument_names(::Type{<: MyVolume}) = (:volume,) # again, optional
    function plot!(plot::MyVolume)
        # plot a volume with a colormap going from fully transparent to plot_color
        volume!(plot, plot[:volume], colormap = :transparent => plot[:plot_color])
        plot
    end

The docstring given to the recipe will be transferred to the functions it generates.

"""
macro recipe(theme_func, Tsym::Symbol, args::Symbol...)
    funcname_sym = to_func_name(Tsym)
    funcname! = esc(Symbol("$(funcname_sym)!"))
    PlotType = esc(Tsym)
    funcname = esc(funcname_sym)
    expr = quote
        $(funcname)() = not_implemented_for($funcname)
        const $(PlotType){$(esc(:ArgType))} = Plot{$funcname,$(esc(:ArgType))}
        $(MakieCore).plotsym(::Type{<:$(PlotType)}) = $(QuoteNode(Tsym))
        Core.@__doc__ ($funcname)(args...; kw...) = _create_plot($funcname, Dict{Symbol, Any}(kw), args...)
        ($funcname!)(args...; kw...) = _create_plot!($funcname, Dict{Symbol, Any}(kw), args...)
        $(MakieCore).default_theme(scene, ::Type{<:$PlotType}) = $(esc(theme_func))(scene)
        export $PlotType, $funcname, $funcname!
    end
    if !isempty(args)
        push!(
            expr.args,
            :(
                $(esc(:($(MakieCore).argument_names)))(::Type{<:$PlotType}, len::Integer) =
                    $args
            ),
        )
    end
    expr
end

function is_attribute end
function default_attribute_values end
function attribute_default_expressions end
function _attribute_docs end
function attribute_names end

attribute_names(_) = nothing

macro recipe(Tsym::Symbol, args...)

    funcname_sym = to_func_name(Tsym)
    funcname! = esc(Symbol("$(funcname_sym)!"))
    PlotType = esc(Tsym)
    funcname = esc(funcname_sym)

    syms = args[1:end-1]
    for sym in syms
        sym isa Symbol || throw(ArgumentError("Found argument that is not a symbol in the position where optional argument names should appear: $sym"))
    end
    attrblock = args[end]
    if !(attrblock isa Expr && attrblock.head === :block)
        throw(ArgumentError("Last argument is not a begin end block"))
    end
    attrs = [extract_attribute_metadata(arg) for arg in attrblock.args if !(arg isa LineNumberNode)]

    q = quote
        $(funcname)() = not_implemented_for($funcname)
        const $(PlotType){$(esc(:ArgType))} = Plot{$funcname,$(esc(:ArgType))}
        $(MakieCore).plotsym(::Type{<:$(PlotType)}) = $(QuoteNode(Tsym))
        Core.@__doc__ function ($funcname)(args...; kw...)
            kwdict = Dict{Symbol, Any}(kw)
            _create_plot($funcname, kwdict, args...)
        end
        function ($funcname!)(args...; kw...)
            kwdict = Dict{Symbol, Any}(kw)
             _create_plot!($funcname, kwdict, args...)
        end
        function MakieCore.is_attribute(T::Type{<:$(PlotType)}, sym::Symbol)
            sym in MakieCore.attribute_names(T)
        end
        function MakieCore.attribute_names(::Type{<:$(PlotType)})
            Set{Symbol}([$([QuoteNode(a.symbol) for a in attrs]...)])
        end

        function $(MakieCore).default_theme(scene, ::Type{<:$PlotType})
            $(make_attr_dict_expr(attrs, :scene))
        end

        function MakieCore.attribute_default_expressions(::Type{<:$PlotType})
            $(
                if attrs === nothing
                    Dict{Symbol, String}()
                else
                    Dict{Symbol, String}([a.symbol => _defaultstring(a.default) for a in attrs])
                end
            )
        end

        function MakieCore._attribute_docs(::Type{<:$PlotType})
            Dict(
                $(
                    (attrs !== nothing ?
                        [Expr(:call, :(=>), QuoteNode(a.symbol), a.docs) for a in attrs] :
                        [])...
                )
            )
        end
        
        export $PlotType, $funcname, $funcname!
    end

    q
end

_defaultstring(x) = string(Base.remove_linenums!(x))
_defaultstring(x::String) = repr(x)

function extract_attribute_metadata(arg)
    has_docs = arg isa Expr && arg.head === :macrocall && arg.args[1] isa GlobalRef

    if has_docs
        docs = arg.args[3]
        attr = arg.args[4]
    else
        docs = nothing
        attr = arg
    end

    if !(attr isa Expr && attr.head === :(=) && length(attr.args) == 2)
        error("$attr is not a valid attribute line like :x[::Type] = default_value")
    end
    left = attr.args[1]
    default = attr.args[2]
    if left isa Symbol
        attr_symbol = left
        type = Any
    else
        if !(left isa Expr && left.head === :(::) && length(left.args) == 2)
            error("$left is not a Symbol or an expression such as x::Type")
        end
        attr_symbol = left.args[1]::Symbol
        type = left.args[2]
    end

    (docs = docs, symbol = attr_symbol, type = type, default = default)
end

function make_attr_dict_expr(attrs, scenesym::Symbol)

    pairs = map(attrs) do a

        d = a.default
        if d isa Expr && d.head === :macrocall && d.args[1] == Symbol("@inherit")
            if length(d.args) != 4
                error("@inherit works with exactly 2 arguments, expression was $d")
            end
            if !(d.args[3] isa QuoteNode)
                error("Argument 1 of @inherit must be a :symbol, got $(d.args[3])")
            end
            key, default = d.args[3:4]
            # first check scene theme
            # then default value
            d = quote
                if haskey(thm, $key)
                    to_value(thm[$key]) # only use value of theme entry
                else
                    $default
                end
            end
        end

        Expr(:call, :(=>), QuoteNode(a.symbol), d)
    end

    quote
        thm = theme($scenesym)
        Dict($(pairs...))
    end
end

"""
    Plot(args::Vararg{<:DataType,N})

Returns the Plot type that represents the signature of `args`.
Example:

```julia
Plot(Vector{Point2f}) == Plot{plot, Tuple{<:Vector{Point2f}}}
```
This can be used to more conveniently create recipes for `plot(mytype)` without the recipe macro:

```julia
struct MyType ... end

function Makie.plot!(plot::Plot(MyType))
    ...
end

plot(MyType(...))
```
"""
function Plot(args::Vararg{DataType,N}) where {N}
    Plot{plot, <:Tuple{args...}}
end

function Plot(::Type{T}) where {T}
    Plot{plot, <:Tuple{T}}
end

function Plot(::Type{T1}, ::Type{T2}) where {T1,T2}
    Plot{plot, <:Tuple{T1,T2}}
end

"""
    `plottype(plot_args...)`

Any custom argument combination that has a preferred way to be plotted should overload this.
e.g.:
```julia
    # make plot(rand(5, 5, 5)) plot as a volume
    plottype(x::Array{<: AbstractFloat, 3}) = Volume
```
"""
plottype(plot_args...) = Plot{plot} # default to dispatch to type recipes!

function validate_kw(P::Type{<:Plot}, kw::Dict{Symbol})
    nameset = attribute_names(P)
    nameset === nothing && return
    unknown = setdiff(keys(kw), nameset)
    if !isempty(unknown)
        n = length(unknown)
        throw(ArgumentError(
            """Unknown attribute$(n > 1 ? "s" : "") for plot type $P: $(join(unknown, ", ", " and ")).
            The available attributes are: $(join(sort(collect(nameset)), ", ", " and "))."""
        ))
    end
end