import{_ as s,c as i,o as a,a7 as t}from"./chunks/framework.CBLuZwrP.js";const e="/dev/assets/23d1a23.BISzqlYc.png",h="/dev/assets/b56037a.K8OH8iuv.png",l="/dev/assets/c77d462.Cs5wFahx.png",n="/dev/assets/552291a.D4cixr79.png",p="/dev/assets/782651c.y7JKS9CW.png",C=JSON.parse('{"title":"boxplot","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/boxplot.md","filePath":"reference/plots/boxplot.md","lastUpdated":null}'),k={name:"reference/plots/boxplot.md"},o=t(`<h1 id="boxplot" tabindex="-1">boxplot <a class="header-anchor" href="#boxplot" aria-label="Permalink to &quot;boxplot&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.boxplot-reference-plots-boxplot" href="#Makie.boxplot-reference-plots-boxplot">#</a> <b><u>Makie.boxplot</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Draw a Tukey style boxplot. The boxplot has 3 components:</p><ul><li><p>a <code>crossbar</code> spanning the interquartile (IQR) range with a midline marking the median</p></li><li><p>an <code>errorbar</code> whose whiskers span <code>range * iqr</code></p></li><li><p>points marking outliers, that is, data outside the whiskers</p></li></ul><p><strong>Arguments</strong></p><ul><li><p><code>x</code>: positions of the categories</p></li><li><p><code>y</code>: variables within the boxes</p></li></ul><p><strong>Plot type</strong></p><p>The plot type alias for the <code>boxplot</code> function is <code>BoxPlot</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/509953c1de268fe5940c896c8dd85bd6f2c54307/MakieCore/src/recipes.jl#L453-L532" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><a id="example-23d1a23"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">categories </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(categories, values)</span></span></code></pre></div><img src="`+e+`" width="600px" height="450px"><a id="example-b56037a"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">categories </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(categories, values, dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dodge, show_notch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dodge)</span></span></code></pre></div><img src="`+h+`" width="600px" height="450px"><p>Colors are customizable. The <code>color</code> attribute refers to the color of the boxes, whereas <code>outliercolor</code> refers to the color of the outliers. If not scalars (e.g. <code>:red</code>), these attributes must have the length of the data. If <code>outliercolor</code> is not provided, outliers will have the same color as their box, as shown above.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>For all indices corresponding to points within the same box, <code>color</code> (but not <code>outliercolor</code>) must have the same value.</p></div><a id="example-c77d462"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">categories </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(categories, values, dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dodge, show_notch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :blue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, dodge) , outliercolor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:yellow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><img src="`+l+`" width="600px" height="450px"><h4 id="Using-statistical-weights" tabindex="-1">Using statistical weights <a class="header-anchor" href="#Using-statistical-weights" aria-label="Permalink to &quot;Using statistical weights {#Using-statistical-weights}&quot;">​</a></h4><a id="example-552291a"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Distributions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100_000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, N)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Uniform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), N)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pdf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Normal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], x, y)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], x, y, weights </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> w)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+n+`" width="600px" height="450px"><h4 id="Horizontal-axis" tabindex="-1">Horizontal axis <a class="header-anchor" href="#Horizontal-axis" aria-label="Permalink to &quot;Horizontal axis {#Horizontal-axis}&quot;">​</a></h4><a id="example-782651c"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">categories </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax_vert </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    xlabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ylabel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;values&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    xticks </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;one&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;two&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;three&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ax_horiz </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Axis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    xlabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;values&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># note that x/y still correspond to horizontal/vertical axes respectively</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ylabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;categories&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    yticks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;one&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;two&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;three&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Note: same order of category/value, despite different axes</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax_vert, categories, values) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># \`orientation=:vertical\` is default</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">boxplot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ax_horiz, categories, values; orientation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:horizontal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+p+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>No docs available.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap</code></p><p>No docs available.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>No docs available.</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="dodge" tabindex="-1">dodge <a class="header-anchor" href="#dodge" aria-label="Permalink to &quot;dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Vector of <code>Integer</code> (length of data) of grouping variable to create multiple side-by-side boxes at the same <code>x</code> position.</p><h3 id="dodge-gap" tabindex="-1">dodge_gap <a class="header-anchor" href="#dodge-gap" aria-label="Permalink to &quot;dodge_gap&quot;">​</a></h3><p>Defaults to <code>0.03</code></p><p>Spacing between dodged boxes.</p><h3 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h3><p>Defaults to <code>0.2</code></p><p>Shrinking factor, <code>width -&gt; width * (1 - gap)</code>.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>@inherit inspectable</code></p><p>No docs available.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h3><p>Defaults to <code>@inherit marker</code></p><p>No docs available.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize&quot;">​</a></h3><p>Defaults to <code>@inherit markersize</code></p><p>No docs available.</p><h3 id="mediancolor" tabindex="-1">mediancolor <a class="header-anchor" href="#mediancolor" aria-label="Permalink to &quot;mediancolor&quot;">​</a></h3><p>Defaults to <code>@inherit linecolor</code></p><p>No docs available.</p><h3 id="medianlinewidth" tabindex="-1">medianlinewidth <a class="header-anchor" href="#medianlinewidth" aria-label="Permalink to &quot;medianlinewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>No docs available.</p><h3 id="n-dodge" tabindex="-1">n_dodge <a class="header-anchor" href="#n-dodge" aria-label="Permalink to &quot;n_dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="notchwidth" tabindex="-1">notchwidth <a class="header-anchor" href="#notchwidth" aria-label="Permalink to &quot;notchwidth&quot;">​</a></h3><p>Defaults to <code>0.5</code></p><p>Multiplier of <code>width</code> for narrowest width of notch.</p><h3 id="orientation" tabindex="-1">orientation <a class="header-anchor" href="#orientation" aria-label="Permalink to &quot;orientation&quot;">​</a></h3><p>Defaults to <code>:vertical</code></p><p>Orientation of box (<code>:vertical</code> or <code>:horizontal</code>).</p><h3 id="outliercolor" tabindex="-1">outliercolor <a class="header-anchor" href="#outliercolor" aria-label="Permalink to &quot;outliercolor&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="outlierstrokecolor" tabindex="-1">outlierstrokecolor <a class="header-anchor" href="#outlierstrokecolor" aria-label="Permalink to &quot;outlierstrokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokecolor</code></p><p>No docs available.</p><h3 id="outlierstrokewidth" tabindex="-1">outlierstrokewidth <a class="header-anchor" href="#outlierstrokewidth" aria-label="Permalink to &quot;outlierstrokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokewidth</code></p><p>No docs available.</p><h3 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h3><p>Defaults to <code>1.5</code></p><p>Multiple of IQR controlling whisker length.</p><h3 id="show-median" tabindex="-1">show_median <a class="header-anchor" href="#show-median" aria-label="Permalink to &quot;show_median&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Show median as midline.</p><h3 id="show-notch" tabindex="-1">show_notch <a class="header-anchor" href="#show-notch" aria-label="Permalink to &quot;show_notch&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Draw the notch.</p><h3 id="show-outliers" tabindex="-1">show_outliers <a class="header-anchor" href="#show-outliers" aria-label="Permalink to &quot;show_outliers&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Show outliers as points.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokewidth</code></p><p>No docs available.</p><h3 id="weights" tabindex="-1">weights <a class="header-anchor" href="#weights" aria-label="Permalink to &quot;weights&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Vector of statistical weights (length of data). By default, each observation has weight <code>1</code>.</p><h3 id="whiskercolor" tabindex="-1">whiskercolor <a class="header-anchor" href="#whiskercolor" aria-label="Permalink to &quot;whiskercolor&quot;">​</a></h3><p>Defaults to <code>@inherit linecolor</code></p><p>No docs available.</p><h3 id="whiskerlinewidth" tabindex="-1">whiskerlinewidth <a class="header-anchor" href="#whiskerlinewidth" aria-label="Permalink to &quot;whiskerlinewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>No docs available.</p><h3 id="whiskerwidth" tabindex="-1">whiskerwidth <a class="header-anchor" href="#whiskerwidth" aria-label="Permalink to &quot;whiskerwidth&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>Multiplier of <code>width</code> for width of T&#39;s on whiskers, or <code>:match</code> to match <code>width</code>.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Width of the box before shrinking.</p>',114),r=[o];function d(E,c,g,y,u,F){return a(),i("div",null,r)}const m=s(k,[["render",d]]);export{C as __pageData,m as default};
