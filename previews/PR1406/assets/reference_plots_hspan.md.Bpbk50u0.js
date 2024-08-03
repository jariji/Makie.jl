import{_ as e,c as a,o,a7 as t}from"./chunks/framework.COMQAJVd.js";const i="/previews/PR1406/assets/63f34f0.RnsOJCbo.png",b=JSON.parse('{"title":"hspan","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/hspan.md","filePath":"reference/plots/hspan.md","lastUpdated":null}'),s={name:"reference/plots/hspan.md"},l=t(`<h1 id="hspan" tabindex="-1">hspan <a class="header-anchor" href="#hspan" aria-label="Permalink to &quot;hspan&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.hspan-reference-plots-hspan" href="#Makie.hspan-reference-plots-hspan">#</a> <b><u>Makie.hspan</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ys_low, ys_high; xmin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xmax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ys_lowhigh; xmin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xmax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Create horizontal bands spanning across a <code>Scene</code> with 2D projection. The bands will be placed from <code>ys_low</code> to <code>ys_high</code> in data coordinates and <code>xmin</code> to <code>xmax</code> in scene coordinates (0 to 1). All four of these can have single or multiple values because they are broadcast to calculate the final spans. Both bounds can be passed together as an interval <code>ys_lowhigh</code>.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>hspan</code> function is <code>HSpan</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/8a19ab947c87441c4eef3163453139046c572812/MakieCore/src/recipes.jl#L453-L544" target="_blank" rel="noreferrer">source</a></p></div><br><a id="example-63f34f0"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><img src="`+i+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-label="Permalink to &quot;alpha&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>The alpha value of the colormap or color attribute. Multiple alphas like in <code>plot(alpha=0.2, color=(:red, 0.5)</code>, will get multiplied.</p><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>Sets the color of the poly. Can be a <code>Vector{&lt;:Colorant}</code> for per vertex colors or a single <code>Colorant</code>. A <code>Matrix{&lt;:Colorant}</code> can be used to color the mesh with a texture, which requires the mesh to contain texture coordinates. Vector or Matrices of numbers can be used as well, which will use the colormap arguments to map the numbers to colors. One can also use <code>Makie.LinePattern</code>, to cover the poly with a regular stroke pattern.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap :viridis</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s. <code>PlotUtils.cgrad(...)</code>, <code>Makie.Reverse(any_colormap)</code> can be used as well, or any symbol from ColorBrewer or PlotUtils. To see all available color gradients, you can call <code>Makie.available_gradients()</code>.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The values representing the start and end points of <code>colormap</code>.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>The color transform function. Can be any function, but only works well together with <code>Colorbar</code> for <code>identity</code>, <code>log</code>, <code>log2</code>, <code>log10</code>, <code>sqrt</code>, <code>logit</code>, <code>Makie.pseudolog10</code> and <code>Makie.Symlog10</code>.</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="depth-shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth-shift" aria-label="Permalink to &quot;depth_shift&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="highclip" tabindex="-1">highclip <a class="header-anchor" href="#highclip" aria-label="Permalink to &quot;highclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value above the colorrange.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector-clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector-clear" aria-label="Permalink to &quot;inspector_clear&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector-hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector-hover" aria-label="Permalink to &quot;inspector_hover&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector-label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector-label" aria-label="Permalink to &quot;inspector_label&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="joinstyle" tabindex="-1">joinstyle <a class="header-anchor" href="#joinstyle" aria-label="Permalink to &quot;joinstyle&quot;">​</a></h3><p>Defaults to <code>@inherit joinstyle</code></p><p>No docs available.</p><h3 id="linecap" tabindex="-1">linecap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;linecap&quot;">​</a></h3><p>Defaults to <code>@inherit linecap</code></p><p>No docs available.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Sets the dash pattern of the line. Options are <code>:solid</code> (equivalent to <code>nothing</code>), <code>:dot</code>, <code>:dash</code>, <code>:dashdot</code> and <code>:dashdotdot</code>. These can also be given in a tuple with a gap style modifier, either <code>:normal</code>, <code>:dense</code> or <code>:loose</code>. For example, <code>(:dot, :loose)</code> or <code>(:dashdot, :dense)</code>.</p><p>For custom patterns have a look at <a href="/previews/PR1406/api#Makie.Linestyle"><code>Makie.Linestyle</code></a>.</p><h3 id="lowclip" tabindex="-1">lowclip <a class="header-anchor" href="#lowclip" aria-label="Permalink to &quot;lowclip&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value below the colorrange.</p><h3 id="miter-limit" tabindex="-1">miter_limit <a class="header-anchor" href="#miter-limit" aria-label="Permalink to &quot;miter_limit&quot;">​</a></h3><p>Defaults to <code>@inherit miter_limit</code></p><p>No docs available.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="nan-color" tabindex="-1">nan_color <a class="header-anchor" href="#nan-color" aria-label="Permalink to &quot;nan_color&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color for NaN values.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="shading" tabindex="-1">shading <a class="header-anchor" href="#shading" aria-label="Permalink to &quot;shading&quot;">​</a></h3><p>Defaults to <code>NoShading</code></p><p>No docs available.</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="stroke-depth-shift" tabindex="-1">stroke_depth_shift <a class="header-anchor" href="#stroke-depth-shift" aria-label="Permalink to &quot;stroke_depth_shift&quot;">​</a></h3><p>Defaults to <code>-1.0e-5</code></p><p>Depth shift of stroke plot. This is useful to avoid z-fighting between the stroke and the fill.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>Sets the color of the outline around a marker.</p><h3 id="strokecolormap" tabindex="-1">strokecolormap <a class="header-anchor" href="#strokecolormap" aria-label="Permalink to &quot;strokecolormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokewidth</code></p><p>Sets the width of the outline.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p><h3 id="xmax" tabindex="-1">xmax <a class="header-anchor" href="#xmax" aria-label="Permalink to &quot;xmax&quot;">​</a></h3><p>Defaults to <code>1</code></p><p>The end of the bands in relative axis units (0 to 1) along the x dimension.</p><h3 id="xmin" tabindex="-1">xmin <a class="header-anchor" href="#xmin" aria-label="Permalink to &quot;xmin&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>The start of the bands in relative axis units (0 to 1) along the x dimension.</p>',107),r=[l];function n(h,c,d,p,u,k){return o(),a("div",null,r)}const m=e(s,[["render",n]]);export{b as __pageData,m as default};
