################################################################################
#                    Poly - the not so primitive, primitive                    #
################################################################################

"""
Special method for polys so we don't fall back to atomic meshes, which are much more
complex and slower to draw than standard paths with single color.
"""
function draw_plot(scene::Scene, screen::Screen, @nospecialize(poly::Poly))
    # dispatch on input arguments to poly to use smarter drawing methods than
    # meshes if possible
    draw_poly(scene, screen, poly, to_value.(poly.input_args)...)
end

# Override `is_cairomakie_atomic_plot` to allow `poly` to remain a unit,
# instead of auto-decomposing in lines and mesh.
is_cairomakie_atomic_plot(plot::Poly) = true

"""
Fallback method for args without special treatment.
"""
function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), args...)
    draw_poly_as_mesh(scene, screen, poly)
end

function draw_poly_as_mesh(scene, screen, @nospecialize(poly))
    draw_plot(scene, screen, poly.plots[1])
    draw_plot(scene, screen, poly.plots[2])
end


# in the rare case of per-vertex colors redirect to mesh drawing
function draw_poly(
        scene::Scene, screen::Screen, @nospecialize(poly),
        points::Vector{<:Point2}, color::AbstractArray, strokecolor, strokewidth
    )
    draw_poly_as_mesh(scene, screen, poly)
end

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), points::Vector{<:Point2})
    color = to_cairo_color(poly.color[], poly)
    strokecolor = to_cairo_color(poly.strokecolor[], poly)
    strokestyle = Makie.convert_attribute(poly.linestyle[], key"linestyle"())
    draw_poly(scene, screen, poly, points, color, strokecolor, strokestyle, poly.strokewidth[])
end

# when color is a Makie.AbstractPattern, we don't need to go to Mesh
function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), points::Vector{<:Point2}, color::Union{Colorant, Cairo.CairoPattern},
        strokecolor, strokestyle, strokewidth)
    points = cairo_project(poly, points)
    Cairo.move_to(screen.context, points[1]...)
    for p in points[2:end]
        Cairo.line_to(screen.context, p...)
    end
    Cairo.close_path(screen.context)

    set_source(screen.context, color)

    Cairo.fill_preserve(screen.context)
    Cairo.set_source_rgba(screen.context, rgbatuple(to_color(strokecolor))...)
    Cairo.set_line_width(screen.context, strokewidth)
    isnothing(strokestyle) || Cairo.set_dash(screen.context, diff(Float64.(strokestyle)) .* strokewidth)
    Cairo.stroke(screen.context)
end

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), points_list::Vector{<:Vector{<:Point2}})
    color = to_cairo_color(poly.color[], poly)
    strokecolor = to_cairo_color(poly.strokecolor[], poly)
    strokestyle = Makie.convert_attribute(poly.linestyle[], key"linestyle"())

    broadcast_foreach(points_list, color,
        strokecolor, strokestyle, poly.strokewidth[], Ref(poly.model[])) do points, color, strokecolor, strokestyle, strokewidth, model
            draw_poly(scene, screen, poly, points, color, model, strokecolor, strokestyle, strokewidth)
    end
end

draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), rect::Rect2) = draw_poly(scene, screen, poly, [rect])

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), rects::Vector{<:Rect2})
    projected_rects = cairo_project.((poly,), rects)
    color = to_cairo_color(poly.color[], poly)

    linestyle = Makie.convert_attribute(poly.linestyle[], key"linestyle"())
    if isnothing(linestyle)
        linestyle_diffed = nothing
    elseif linestyle isa AbstractVector{Float64}
        linestyle_diffed = diff(Float64.(linestyle))
    else
        error("Wrong type for linestyle: $(poly.linestyle[]).")
    end
    strokecolor = to_cairo_color(poly.strokecolor[], poly)
    broadcast_foreach(projected_rects, color, strokecolor, poly.strokewidth[]) do r, c, sc, sw
        Cairo.rectangle(screen.context, origin(r)..., widths(r)...)
        set_source(screen.context, c)
        Cairo.fill_preserve(screen.context)
        isnothing(linestyle_diffed) || Cairo.set_dash(screen.context, linestyle_diffed .* sw)
        set_source(screen.context, sc)
        Cairo.set_line_width(screen.context, sw)
        Cairo.stroke(screen.context)
    end
end

function polypath(ctx, polygon)
    isempty(polygon) && return nothing
    ext = decompose(Point2f, polygon.exterior)
    Cairo.set_fill_type(ctx, Cairo.CAIRO_FILL_RULE_EVEN_ODD)
    Cairo.move_to(ctx, ext[1]...)
    for point in ext[2:end]
        Cairo.line_to(ctx, point...)
    end
    Cairo.close_path(ctx)
    interiors = decompose.(Point2f, polygon.interiors)
    for interior in interiors
        # Cairo needs to have interiors counter clockwise
        n = length(interior)
        Cairo.move_to(ctx, interior[1]...)
        for idx in 2:n
            point = interior[idx]
            Cairo.line_to(ctx, point...)
        end
        Cairo.close_path(ctx)
    end
end

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), polygon::Polygon)
    return draw_poly(scene, screen, poly, [polygon])
end
function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), circle::Circle)
    return draw_poly(scene, screen, poly, decompose(Point2f, circle))
end

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), polygons::AbstractArray{<:Polygon})
    projected_polys = cairo_project.((poly,), polygons)
    color = to_cairo_color(poly.color[], poly)
    strokecolor = to_cairo_color(poly.strokecolor[], poly)
    strokestyle = Makie.convert_attribute(poly.linestyle[], key"linestyle"())

    broadcast_foreach(projected_polys, color, strokecolor, strokestyle, poly.strokewidth[]) do po, c, sc, ss, sw
        polypath(screen.context, po)
        set_source(screen.context, c)
        Cairo.fill_preserve(screen.context)
        set_source(screen.context, sc)
        Cairo.set_line_width(screen.context, sw)
        Cairo.stroke(screen.context)
    end

end

function draw_poly(scene::Scene, screen::Screen, @nospecialize(poly), polygons::AbstractArray{<: MultiPolygon})
    projected_polys = cairo_project.((poly,), polygons)
    color = to_cairo_color(poly.color[], poly)
    strokecolor = to_cairo_color(poly.strokecolor[], poly)
    strokestyle = Makie.convert_attribute(poly.linestyle[], key"linestyle"())
    broadcast_foreach(projected_polys, color, strokecolor, strokestyle, poly.strokewidth[]) do mpo, c, sc, ss, sw
        for po in mpo.polygons
            polypath(screen.context, po)
            set_source(screen.context, c)
            Cairo.fill_preserve(screen.context)
            set_source(screen.context, sc)
            isnothing(ss) || Cairo.set_dash(screen.context, diff(Float64.(ss)) .* sw)
            Cairo.set_line_width(screen.context, sw)
            Cairo.stroke(screen.context)
        end
    end

end


################################################################################
#                                     Band                                     #
#     Override because band is usually a polygon, but because it supports      #
#        gradients as well via `mesh` we have to intercept the poly use        #
################################################################################

function draw_plot(scene::Scene, screen::Screen,
        band::Band{<:Tuple{<:AbstractVector{<:Point2},<:AbstractVector{<:Point2}}})

    if !(band.color[] isa AbstractArray)
        color = to_cairo_color(band.color[], band)
        upperpoints = band[1][]
        lowerpoints = band[2][]
        points = vcat(lowerpoints, reverse(upperpoints))
        points = cairo_project(band, points)
        Cairo.move_to(screen.context, points[1]...)
        for p in points[2:end]
            Cairo.line_to(screen.context, p...)
        end
        Cairo.close_path(screen.context)
        set_source(screen.context, color)
        Cairo.fill(screen.context)
    else
        for p in band.plots
            draw_plot(scene, screen, p)
        end
    end

    nothing
end

# Override `is_cairomakie_atomic_plot` to allow this dispatch of `band` to remain a unit,
# instead of auto-decomposing in lines and mesh.
function is_cairomakie_atomic_plot(plot::Band{<:Tuple{<:AbstractVector{<:Point2},<:AbstractVector{<:Point2}}})
    return true
end

#################################################################################
#                                  Tricontourf                                  #
# Tricontourf creates many disjoint polygons that are adjacent and form contour #
#  bands, however, at the gaps we see white antialiasing artifacts. Therefore   #
#               we override behavior and draw each band in one go               #
#################################################################################

function draw_plot(scene::Scene, screen::Screen, tric::Tricontourf)

    pol = only(tric.plots)::Poly
    colornumbers = pol.color[]
    colors = to_cairo_color(colornumbers, pol)
    polygons = pol[1][]
    projected_polys = cairo_project.((tric,), polygons)

    function draw_tripolys(polys, colornumbers, colors)
        for (i, (pol, colnum, col)) in enumerate(zip(polys, colornumbers, colors))
            polypath(screen.context, pol)
            if i == length(colornumbers) || colnum != colornumbers[i+1]
                set_source(screen.context, col)
                Cairo.fill(screen.context)
            end
        end
        return
    end

    draw_tripolys(projected_polys, colornumbers, colors)

    return
end

# Override `is_cairomakie_atomic_plot` to allow `Tricontourf` to remain a unit,
# instead of auto-decomposing in lines and mesh.
function is_cairomakie_atomic_plot(plot::Tricontourf)
    return true
end
