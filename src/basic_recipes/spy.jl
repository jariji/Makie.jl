"""
spy(x::Range, y::Range, z::AbstractSparseArray)

Visualizes big sparse matrices.
Usage:
```julia
N = 200_000
x = sprand(Float64, N, N, (3(10^6)) / (N*N));
spy(x)
# or if you want to specify the range of x and y:
spy(0..1, 0..1, x)
```
"""
@recipe Spy (x, y, z) begin
    marker = Rect
    markersize = automatic
    framecolor = :black
    framevisible = true
    framesize = 1
    color = nothing
    MakieCore.mixin_generic_plot_attributes()...
    MakieCore.mixin_colormap_attributes()...
end

function convert_arguments(::Type{<:Spy}, args...)
    x, y, z = convert_arguments(Heatmap, args...)
    return (x, y, SparseArrays.sparse(z))
end

function convert_arguments(::Type{<: Spy}, x, y, z::SparseArrays.AbstractSparseArray)
    return (x, y, z)
end

needs_tight_limits(::Spy) = true

function plot!(p::Spy)
    rect = lift(p, p.x, p.y) do x, y
        xe = extrema(x)
        ye = extrema(y)
        Rect2f((xe[1], ye[1]), (xe[2] - xe[1], ye[2] - ye[1]))
    end
    # TODO FastPixel isn't accepting marker size in data coordinates
    # but instead in pixel - so we need to fix that in GLMakie for consistency
    # and make this nicer when redoing unit support
    markersize = lift(p, p.markersize, rect, p.z) do msize, rect, z
        if msize === automatic
            widths(rect) ./ Vec2f(size(z))
        else
            msize
        end
    end
    # TODO correctly align marker
    xycol = lift(p, rect, p.z, markersize) do rect, z, markersize
        x, y, color = SparseArrays.findnz(z)
        mhalf = markersize ./ 2
        points = map(x, y) do x, y
            p01 = (Point2f(x, y) .- 1) ./ Point2f(size(z))
            return (p01 .* widths(rect)) .+ minimum(rect) .+ mhalf
        end
        points, convert(Vector{Float32}, color)
    end
    color = map(p, p.color, xycol) do color, xycol
        return isnothing(color) ? xycol[2] : color
    end

    scatter!(
        p,
        lift(first, p, xycol);
        color = color,
        markerspace = :data,
        marker = p.marker, markersize = markersize,
        inspectable = p.inspectable, visible = p.visible,
        MakieCore.colormap_attributes(p)...,
    )

    lines!(p, rect,
        color = p.framecolor,
        linewidth = p.framesize,
        inspectable = p.inspectable,
        visible=p.framevisible
    )
end
