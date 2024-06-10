using Makie
using GLMakie, Test
using FileIO
using GeometryBasics
using GeometryBasics: origin
using Random
using ReferenceTests

if !GLMakie.ModernGL.enable_opengl_debugging
    # can't error, since we can't enable debugging for users
    @warn("TESTING WITHOUT OPENGL DEBUGGING")
end

GLMakie.activate!(framerate=1.0, scalefactor=1.0)

@testset "mimes" begin
    Makie.inline!(true)
    f, ax, pl = scatter(1:4)
    @test showable("image/png", f)
    @test showable("image/jpeg", f)
    # see https://github.com/MakieOrg/Makie.jl/pull/2167
    @test !showable("blaaa", f)
    Makie.inline!(false)
end

# run the unit test suite
include("unit_tests.jl")

@testset "Reference Tests" begin
    @testset "refimages" begin
        ReferenceTests.mark_broken_tests()
        recorded_files, recording_dir = @include_reference_tests GLMakie "refimages.jl" joinpath(@__DIR__, "glmakie_refimages.jl")
        missing_images, scores = ReferenceTests.record_comparison(recording_dir)
        ReferenceTests.test_comparison(scores; threshold = 0.05)
    end

    GLMakie.closeall()
    GC.gc(true) # make sure no finalizers act up!
end

@testset "Tick Events" begin
    function check_tick(tick, state, count)
        @test tick.state == state
        @test tick.count == count
        @test tick.time > 1e-9
        @test tick.delta_time > 1e-9
    end

    f, a, p = scatter(rand(10));
    @test events(f).tick[] == Makie.Tick()

    filename = "$(tempname()).png"
    try
        Makie.save(filename, f)
        tick = events(f).tick[] 
        check_tick(tick, Makie.OneTimeRenderTick, 1)
    finally
        rm(filename)
    end

    f, a, p = scatter(rand(10));
    tick_record = Makie.Tick[]
    on(t -> push!(tick_record, t), events(f).tick)
    screen = GLMakie.Screen(render_on_demand = true, framerate = 30.0, pause_rendering = false, visible = false)
    display(screen, f.scene)
    sleep(0.15)
    GLMakie.pause_renderloop!(screen)
    sleep(0.1)
    GLMakie.closeall()

    # Why does it start with a skipped tick?
    check_tick(tick_record[1], Makie.SkippedRenderTick, 1)
    check_tick(tick_record[2], Makie.RegularRenderTick, 2)
    i = 3
    while (tick_record[i].state == Makie.SkippedRenderTick)
        check_tick(tick_record[i], Makie.SkippedRenderTick, i)
        i += 1
    end
    check_tick(tick_record[i], Makie.PausedRenderTick, i)
end