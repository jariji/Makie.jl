import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.Yta-EbBf.js";const t="/previews/PR3948/assets/4adb559.zfs5igSc.png",n="/previews/PR3948/assets/4adb559.zfs5igSc.png",h="/previews/PR3948/assets/27c021f.GVSzL6Gi.png",F=JSON.parse('{"title":"Wrapping existing recipes for new types","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/wrap-existing-recipe.md","filePath":"tutorials/wrap-existing-recipe.md","lastUpdated":null}'),p={name:"tutorials/wrap-existing-recipe.md"},l=e(`<h1 id="Wrapping-existing-recipes-for-new-types" tabindex="-1">Wrapping existing recipes for new types <a class="header-anchor" href="#Wrapping-existing-recipes-for-new-types" aria-label="Permalink to &quot;Wrapping existing recipes for new types {#Wrapping-existing-recipes-for-new-types}&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>There are multiple ways one can extend the functionalities of Makie, for example, user can define a totally new plot type from scratch. Another common use case is to &quot;teach&quot; Makie how to draw user-defined data structure for different existing recipes.</p><p>In this tutorial, we will show you how to teach Makie to plot our custom data type <code>MyHist</code> that is a simplified histogram type.</p><p>To define recipes, one only needs to use <code>MakieCore.jl</code>, this is especially handy when you&#39;re a package developer and want to avoid depend on the full Makie.jl. For demonstration purpose, this tutorial will use <code>CairoMakie.jl</code> to visualize things as we go.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MakieCore, CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyHist</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bincounts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bincenters</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>Our target type is the <code>MyHist</code>, which has two fields, as defined above. Roughly speaking, when we plot a histograms, we&#39;re talking about drawing a bar plot, where <code>barcenters</code> tells us where to draw these bars and <code>barcounts</code> tells us how high each bar is.</p><h2 id="BarPlot-recipe-–-extend-Makie.convert_arguments" tabindex="-1">BarPlot recipe – extend <code>Makie.convert_arguments</code> <a class="header-anchor" href="#BarPlot-recipe-–-extend-Makie.convert_arguments" aria-label="Permalink to &quot;BarPlot recipe – extend \`Makie.convert_arguments\` {#BarPlot-recipe-–-extend-Makie.convert_arguments}&quot;">​</a></h2><p>The first recipe we want to teach Makie to draw is <code>BarPlot()</code>. As we allured to before, the two fields we have in the <code>MyHist</code> type basically tell us how to draw it as a BarPlot. Makie exposes the following method for this type of customization:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">convert_arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Type{&lt;:BarPlot}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyHist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> convert_arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(P, h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bincenters, h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bincounts)</span></span></code></pre></div><a id="example-95d7784"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyHist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">barplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(h)</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><h2 id="Hist-recipe-–-override-Makie.plot!" tabindex="-1">Hist recipe – override <code>Makie.plot!</code> <a class="header-anchor" href="#Hist-recipe-–-override-Makie.plot!" aria-label="Permalink to &quot;Hist recipe – override \`Makie.plot!\` {#Hist-recipe-–-override-Makie.plot!}&quot;">​</a></h2><p>The second recipe we want to customize for our <code>MyHist</code> type is the <code>Hist()</code> recipe. This cannot be achieved by <code>convert_arguments</code> as we did for <code>BarPlot()</code>, because normally <code>Makie.hist()</code> takes raw data as input, but we already have the binned data in our <code>MyHist</code> type.</p><p>The first thing one might try is to override the <code>plot!</code> method for <code>Hist</code> recipe: <a id="example-4adb559"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Hist{&lt;:Tuple{&lt;:MyHist}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    barplot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot, plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plot</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyHist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(h; color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, direction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+n+`" width="600px" height="450px"><p>This almost works, but we see that the keyword arguments are not passed to the <code>barplot!</code> function. To handle these attributes properly, we need to override/merge the default attributes of the underlying plot type (in this case, <code>BarPlot</code>) with the user-passed attributes. Since Makie 0.21, <code>shared_attributes</code> was introduced for this use case, which extracts all valid attributes for the target plot type: <a id="example-27c021f"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">plot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Hist{&lt;:Tuple{&lt;:MyHist}}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Only forward valid attributes for BarPlot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    valid_attributes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">shared_attributes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot, BarPlot)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    barplot!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(plot, valid_attributes, plot[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> MyHist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(h; color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, direction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+h+'" width="600px" height="450px">',21),k=[l];function r(d,o,c,g,E,y){return a(),i("div",null,k)}const C=s(p,[["render",r]]);export{F as __pageData,C as default};
