import{_ as a,c as e,o as s,a7 as i}from"./chunks/framework.BynpFNYC.js";const t="/previews/PR4026/assets/a4cdf18.CnXz-EY1.png",g=JSON.parse('{"title":"spy","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/spy.md","filePath":"reference/plots/spy.md","lastUpdated":null}'),l={name:"reference/plots/spy.md"},o=i(`<h1 id="spy" tabindex="-1">spy <a class="header-anchor" href="#spy" aria-label="Permalink to &quot;spy&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.spy-reference-plots-spy" href="#Makie.spy-reference-plots-spy">#</a> <b><u>Makie.spy</u></b> — <i>Function</i>. <p>spy(x::Range, y::Range, z::AbstractSparseArray)</p><p>Visualizes big sparse matrices. Usage:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200_000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sprand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float64, N, N, (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N));</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">spy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or if you want to specify the range of x and y:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">spy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x)</span></span></code></pre></div><p><strong>Plot type</strong></p><p>The plot type alias for the <code>spy</code> function is <code>Spy</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/24579ac9c2ee84f427ea7dafe5ff2fcb8e0b9a87/MakieCore/src/recipes.jl#L453-L521" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><a id="example-a4cdf18"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SparseArrays</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dimension of the sparse matrix</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # independent probability that an entry is zero</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sprand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(N, N, p)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f, ax, plt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> spy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(A, markersize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, marker </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, framecolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :lightgrey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hidedecorations!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># remove axis labeling</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Visualization of a random sparse matrix&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+t+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-label="Permalink to &quot;alpha&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>The alpha value of the colormap or color attribute. Multiple alphas like in <code>plot(alpha=0.2, color=(:red, 0.5)</code>, will get multiplied.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap :viridis</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s. <code>PlotUtils.cgrad(...)</code>, <code>Makie.Reverse(any_colormap)</code> can be used as well, or any symbol from ColorBrewer or PlotUtils. To see all available color gradients, you can call <code>Makie.available_gradients()</code>.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The values representing the start and end points of <code>colormap</code>.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>The color transform function. Can be any function, but only works well together with <code>Colorbar</code> for <code>identity</code>, <code>log</code>, <code>log2</code>, <code>log10</code>, <code>sqrt</code>, <code>logit</code>, <code>Makie.pseudolog10</code> and <code>Makie.Symlog10</code>.</p><h3 id="depth-shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth-shift" aria-label="Permalink to &quot;depth_shift&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="framecolor" tabindex="-1">framecolor <a class="header-anchor" href="#framecolor" aria-label="Permalink to &quot;framecolor&quot;">​</a></h3><p>Defaults to <code>:black</code></p><p>No docs available.</p><h3 id="framesize" tabindex="-1">framesize <a class="header-anchor" href="#framesize" aria-label="Permalink to &quot;framesize&quot;">​</a></h3><p>Defaults to <code>1</code></p><p>No docs available.</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="highclip" tabindex="-1">highclip <a class="header-anchor" href="#highclip" aria-label="Permalink to &quot;highclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value above the colorrange.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector-clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector-clear" aria-label="Permalink to &quot;inspector_clear&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector-hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector-hover" aria-label="Permalink to &quot;inspector_hover&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector-label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector-label" aria-label="Permalink to &quot;inspector_label&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="lowclip" tabindex="-1">lowclip <a class="header-anchor" href="#lowclip" aria-label="Permalink to &quot;lowclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value below the colorrange.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="nan-color" tabindex="-1">nan_color <a class="header-anchor" href="#nan-color" aria-label="Permalink to &quot;nan_color&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color for NaN values.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p>',80),n=[o];function r(p,h,d,c,k,u){return s(),e("div",null,n)}const b=a(l,[["render",r]]);export{g as __pageData,b as default};
