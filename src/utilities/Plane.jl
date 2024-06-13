
# For clipping Planes
# TODO: Consider moving this to GeometryBasics?
struct Plane{N, T}
    normal::Vec{N, T}
    distance::T
end

Plane(point::Point{N}, normal::Vec{N}) where N = Plane(normal, dot(point, normal))

const Plane2{T} = Plane{2, T}
const Plane3{T} = Plane{3, T}
const Plane2f = Plane{2, Float32}
const Plane3f = Plane{3, Float32}
const Plane2d = Plane{2, Float64}
const Plane3d = Plane{3, Float64}

function distance(plane::Plane{N}, point::VecTypes{N}) where N
    return dot(point, plane.normal) - plane.distance
end

gl_plane_format(plane::Plane3) = to_ndim(Vec4f, plane.normal, plane.distance)

function planes(rect::Rect3f)
    mini = minimum(rect)
    maxi = maximum(rect)
    return [
        Plane3f(Vec3f( 1,  0,  0),  mini[1]),
        Plane3f(Vec3f( 0,  1,  0),  mini[2]),
        Plane3f(Vec3f( 0,  0,  1),  mini[3]),
        Plane3f(Vec3f(-1,  0,  0), -maxi[1]),
        Plane3f(Vec3f( 0, -1,  0), -maxi[2]),
        Plane3f(Vec3f( 0,  0, -1), -maxi[3])
    ]
end

function is_clipped(plane::Plane3, p::VecTypes)
    return dot(plane.normal, to_ndim(Point3f, p, 0)) - plane.distance < 0.0
end
function is_clipped(planes::Vector{Plane3}, p::VecTypes)
    return any(plane -> is_clipped(plane, p), planes)
end

function apply_clipping_planes(planes::Vector{<: Plane3}, rect::Rect3{T}) where T
    ps = corners(rect)
    temp = copy(ps)
    mini = minimum(rect)
    maxi = maximum(rect)

    for plane in planes
        # project corner points so that none get clipped
        copyto!(temp, ps)
        for i in eachindex(temp)
            d = distance(plane, temp[i])
            temp[i] -= min(0.0, d) * plane.normal
        end

        # generate a axis aligned bbox >= projected points
        bb = Rect3{T}(temp)

        # reductively combine with other bboxes
        mini = max.(minimum(bb), mini)
        maxi = min.(maximum(bb), maxi)
    end

    widths = maxi .- mini
    dim_valid = widths .> 0.0

    return Rect3{T}(ifelse.(dim_valid, mini, NaN), ifelse.(dim_valid, widths, NaN))
end