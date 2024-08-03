import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.DDoLFTin.js";const t="/previews/PR3958/assets/53ed40c.DWX51kI9.png",n="/previews/PR3958/assets/1fb9eb9.2gFUAN8k.png",h="/previews/PR3958/assets/13dd6e5.BveucpV8.png",F=JSON.parse('{"title":"triplot","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/triplot.md","filePath":"reference/plots/triplot.md","lastUpdated":null}'),l={name:"reference/plots/triplot.md"},p=e(`<h1 id="triplot" tabindex="-1">triplot <a class="header-anchor" href="#triplot" aria-label="Permalink to &quot;triplot&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.triplot-reference-plots-triplot" href="#Makie.triplot-reference-plots-triplot">#</a> <b><u>Makie.triplot</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(positions; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(triangles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Triangulation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Plots a triangulation based on the provided position or <code>Triangulation</code> from DelaunayTriangulation.jl.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>triplot</code> function is <code>Triplot</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/8f0a6cf29655c6362d190ef8e494cd8a90760b64/MakieCore/src/recipes.jl#L453-L517" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>A <code>triplot</code> plots a triangle mesh generated from an arbitrary set of points. The input data can either be point based (like <code>scatter</code> or <code>lines</code>) or a <code>Triangulation</code> from <a href="https://github.com/DanielVandH/DelaunayTriangulation.jl" target="_blank" rel="noreferrer">DelaunayTriangulation.jl</a>. <a id="example-53ed40c"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DelaunayTriangulation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Random</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Random</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">seed!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Point2f, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f, ax, tr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(points, show_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, triangle_color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :lightblue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tri </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triangulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(points)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax, tr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], tri, show_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌ Warning: Using non-Float64 coordinates may cause issues. If you run into problems, consider using Float64 coordinates.</span></span>
<span class="line"><span>└ @ DelaunayTriangulation ~/.julia/packages/DelaunayTriangulation/FJ3Ab/src/algorithms/triangulation/main.jl:133</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><p>You can use <code>triplot</code> to visualise the <a href="https://danielvandh.github.io/DelaunayTriangulation.jl/stable/boundary_handling/#Ghost-Triangles" target="_blank" rel="noreferrer">ghost edges</a> surrounding the boundary. <a id="example-1fb9eb9"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DelaunayTriangulation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">angles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2pi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(angles); </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(angles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(angles); </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(angles </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n)]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; n] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># clockwise inner</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">outer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n); n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># counter-clockwise outer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boundary_nodes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[outer], [inner]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tri </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triangulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(points; boundary_nodes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boundary_nodes)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f, ax, tr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tri; show_ghost_edges </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, show_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+n+`" width="600px" height="450px"><p>You can also highlight the constrained edges and display the convex hull, which is especially useful when the triangulation is no longer convex. <a id="example-13dd6e5"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DelaunayTriangulation</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Random</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Random</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">seed!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">outer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.99</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boundary_points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [[outer], [inner]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">boundary_nodes, points </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> convert_boundary_points_to_indices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(boundary_points)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tri </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triangulate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(points; boundary_nodes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> boundary_nodes)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">refine!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tri; max_area</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1e-3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">get_area</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tri))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f, ax, tr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> triplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tri, show_constrained_edges </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, constrained_edge_linewidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, show_convex_hull </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+h+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="bounding-box" tabindex="-1">bounding_box <a class="header-anchor" href="#bounding-box" aria-label="Permalink to &quot;bounding_box&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets the bounding box for truncating ghost edges which can be a <code>Rect2</code> (or <code>BBox</code>) or a tuple of the form <code>(xmin, xmax, ymin, ymax)</code>. By default, the rectangle will be given by <code>[a - eΔx, b + eΔx] × [c - eΔy, d + eΔy]</code> where <code>e</code> is the <code>ghost_edge_extension_factor</code>, <code>Δx = b - a</code> and <code>Δy = d - c</code> are the lengths of the sides of the rectangle, and <code>[a, b] × [c, d]</code> is the bounding box of the points in the triangulation.</p><h3 id="constrained-edge-color" tabindex="-1">constrained_edge_color <a class="header-anchor" href="#constrained-edge-color" aria-label="Permalink to &quot;constrained_edge_color&quot;">​</a></h3><p>Defaults to <code>:magenta</code></p><p>Sets the color of the constrained edges.</p><h3 id="constrained-edge-linestyle" tabindex="-1">constrained_edge_linestyle <a class="header-anchor" href="#constrained-edge-linestyle" aria-label="Permalink to &quot;constrained_edge_linestyle&quot;">​</a></h3><p>Defaults to <code>@inherit linestyle</code></p><p>Sets the linestyle of the constrained edges.</p><h3 id="constrained-edge-linewidth" tabindex="-1">constrained_edge_linewidth <a class="header-anchor" href="#constrained-edge-linewidth" aria-label="Permalink to &quot;constrained_edge_linewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>Sets the width of the constrained edges.</p><h3 id="convex-hull-color" tabindex="-1">convex_hull_color <a class="header-anchor" href="#convex-hull-color" aria-label="Permalink to &quot;convex_hull_color&quot;">​</a></h3><p>Defaults to <code>:red</code></p><p>Sets the color of the convex hull.</p><h3 id="convex-hull-linestyle" tabindex="-1">convex_hull_linestyle <a class="header-anchor" href="#convex-hull-linestyle" aria-label="Permalink to &quot;convex_hull_linestyle&quot;">​</a></h3><p>Defaults to <code>:dash</code></p><p>Sets the linestyle of the convex hull.</p><h3 id="convex-hull-linewidth" tabindex="-1">convex_hull_linewidth <a class="header-anchor" href="#convex-hull-linewidth" aria-label="Permalink to &quot;convex_hull_linewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>Sets the width of the convex hull.</p><h3 id="ghost-edge-color" tabindex="-1">ghost_edge_color <a class="header-anchor" href="#ghost-edge-color" aria-label="Permalink to &quot;ghost_edge_color&quot;">​</a></h3><p>Defaults to <code>:blue</code></p><p>Sets the color of the ghost edges.</p><h3 id="ghost-edge-extension-factor" tabindex="-1">ghost_edge_extension_factor <a class="header-anchor" href="#ghost-edge-extension-factor" aria-label="Permalink to &quot;ghost_edge_extension_factor&quot;">​</a></h3><p>Defaults to <code>0.1</code></p><p>Sets the extension factor for the rectangle that the exterior ghost edges are extended onto.</p><h3 id="ghost-edge-linestyle" tabindex="-1">ghost_edge_linestyle <a class="header-anchor" href="#ghost-edge-linestyle" aria-label="Permalink to &quot;ghost_edge_linestyle&quot;">​</a></h3><p>Defaults to <code>@inherit linestyle</code></p><p>Sets the linestyle of the ghost edges.</p><h3 id="ghost-edge-linewidth" tabindex="-1">ghost_edge_linewidth <a class="header-anchor" href="#ghost-edge-linewidth" aria-label="Permalink to &quot;ghost_edge_linewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>Sets the width of the ghost edges.</p><h3 id="joinstyle" tabindex="-1">joinstyle <a class="header-anchor" href="#joinstyle" aria-label="Permalink to &quot;joinstyle&quot;">​</a></h3><p>Defaults to <code>@inherit joinstyle</code></p><p>No docs available.</p><h3 id="linecap" tabindex="-1">linecap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;linecap&quot;">​</a></h3><p>Defaults to <code>@inherit linecap</code></p><p>No docs available.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle&quot;">​</a></h3><p>Defaults to <code>:solid</code></p><p>Sets the linestyle of triangle edges.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h3><p>Defaults to <code>@inherit marker</code></p><p>Sets the shape of the points.</p><h3 id="markercolor" tabindex="-1">markercolor <a class="header-anchor" href="#markercolor" aria-label="Permalink to &quot;markercolor&quot;">​</a></h3><p>Defaults to <code>@inherit markercolor</code></p><p>Sets the color of the points.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>@inherit markersize</code></p><p>Sets the size of the points.</p><h3 id="miter-limit" tabindex="-1">miter_limit <a class="header-anchor" href="#miter-limit" aria-label="Permalink to &quot;miter_limit&quot;">​</a></h3><p>Defaults to <code>@inherit miter_limit</code></p><p>No docs available.</p><h3 id="recompute-centers" tabindex="-1">recompute_centers <a class="header-anchor" href="#recompute-centers" aria-label="Permalink to &quot;recompute_centers&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Determines whether to recompute the representative points for the ghost edge orientation. Note that this will mutate <code>tri.representative_point_list</code> directly.</p><h3 id="show-constrained-edges" tabindex="-1">show_constrained_edges <a class="header-anchor" href="#show-constrained-edges" aria-label="Permalink to &quot;show_constrained_edges&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Determines whether to plot the constrained edges.</p><h3 id="show-convex-hull" tabindex="-1">show_convex_hull <a class="header-anchor" href="#show-convex-hull" aria-label="Permalink to &quot;show_convex_hull&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Determines whether to plot the convex hull.</p><h3 id="show-ghost-edges" tabindex="-1">show_ghost_edges <a class="header-anchor" href="#show-ghost-edges" aria-label="Permalink to &quot;show_ghost_edges&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Determines whether to plot the ghost edges.</p><h3 id="show-points" tabindex="-1">show_points <a class="header-anchor" href="#show-points" aria-label="Permalink to &quot;show_points&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Determines whether to plot the individual points. Note that this will only plot points included in the triangulation.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>Sets the color of triangle edges.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>1</code></p><p>Sets the linewidth of triangle edges.</p><h3 id="triangle-color" tabindex="-1">triangle_color <a class="header-anchor" href="#triangle-color" aria-label="Permalink to &quot;triangle_color&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>Sets the color of the triangles.</p>',93),k=[p];function r(o,d,E,g,c,y){return a(),i("div",null,k)}const C=s(l,[["render",r]]);export{F as __pageData,C as default};
