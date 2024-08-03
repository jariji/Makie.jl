import{_ as a,c as i,o as s,a7 as e}from"./chunks/framework.DDoLFTin.js";const t="/previews/PR3958/assets/bbb0821.BsdP8hDe.png",g=JSON.parse('{"title":"crossbar","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/crossbar.md","filePath":"reference/plots/crossbar.md","lastUpdated":null}'),o={name:"reference/plots/crossbar.md"},l=e(`<h1 id="crossbar" tabindex="-1">crossbar <a class="header-anchor" href="#crossbar" aria-label="Permalink to &quot;crossbar&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.crossbar-reference-plots-crossbar" href="#Makie.crossbar-reference-plots-crossbar">#</a> <b><u>Makie.crossbar</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">crossbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, ymin, ymax; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Draw a crossbar. A crossbar represents a range with a (potentially notched) box. It is most commonly used as part of the <code>boxplot</code>.</p><p><strong>Arguments</strong></p><ul><li><p><code>x</code>: position of the box</p></li><li><p><code>y</code>: position of the midline within the box</p></li><li><p><code>ymin</code>: lower limit of the box</p></li><li><p><code>ymax</code>: upper limit of the box</p></li></ul><p><strong>Plot type</strong></p><p>The plot type alias for the <code>crossbar</code> function is <code>CrossBar</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/8f0a6cf29655c6362d190ef8e494cd8a90760b64/MakieCore/src/recipes.jl#L453-L512" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><a id="example-bbb0821"></a><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ymins </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ymaxs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">crossbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xs, ys, ymins, ymaxs, dodge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dodge, show_notch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><img src="`+t+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>No docs available.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap&quot;">​</a></h3><p>Defaults to <code>@inherit colormap</code></p><p>No docs available.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>No docs available.</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="dodge" tabindex="-1">dodge <a class="header-anchor" href="#dodge" aria-label="Permalink to &quot;dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="dodge-gap" tabindex="-1">dodge_gap <a class="header-anchor" href="#dodge-gap" aria-label="Permalink to &quot;dodge_gap&quot;">​</a></h3><p>Defaults to <code>0.03</code></p><p>No docs available.</p><h3 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h3><p>Defaults to <code>0.2</code></p><p>Shrinking factor, <code>width -&gt; width * (1 - gap)</code>.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable&quot;">​</a></h3><p>Defaults to <code>@inherit inspectable</code></p><p>No docs available.</p><h3 id="midlinecolor" tabindex="-1">midlinecolor <a class="header-anchor" href="#midlinecolor" aria-label="Permalink to &quot;midlinecolor&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="midlinewidth" tabindex="-1">midlinewidth <a class="header-anchor" href="#midlinewidth" aria-label="Permalink to &quot;midlinewidth&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>No docs available.</p><h3 id="n-dodge" tabindex="-1">n_dodge <a class="header-anchor" href="#n-dodge" aria-label="Permalink to &quot;n_dodge&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="notchmax" tabindex="-1">notchmax <a class="header-anchor" href="#notchmax" aria-label="Permalink to &quot;notchmax&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Upper limit of the notch.</p><h3 id="notchmin" tabindex="-1">notchmin <a class="header-anchor" href="#notchmin" aria-label="Permalink to &quot;notchmin&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Lower limit of the notch.</p><h3 id="notchwidth" tabindex="-1">notchwidth <a class="header-anchor" href="#notchwidth" aria-label="Permalink to &quot;notchwidth&quot;">​</a></h3><p>Defaults to <code>0.5</code></p><p>Multiplier of <code>width</code> for narrowest width of notch.</p><h3 id="orientation" tabindex="-1">orientation <a class="header-anchor" href="#orientation" aria-label="Permalink to &quot;orientation&quot;">​</a></h3><p>Defaults to <code>:vertical</code></p><p>Orientation of box (<code>:vertical</code> or <code>:horizontal</code>).</p><h3 id="show-midline" tabindex="-1">show_midline <a class="header-anchor" href="#show-midline" aria-label="Permalink to &quot;show_midline&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Show midline.</p><h3 id="show-notch" tabindex="-1">show_notch <a class="header-anchor" href="#show-notch" aria-label="Permalink to &quot;show_notch&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Whether to draw the notch.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokewidth</code></p><p>No docs available.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Width of the box before shrinking.</p>',71),h=[l];function r(n,d,p,c,k,b){return s(),i("div",null,h)}const u=a(o,[["render",r]]);export{g as __pageData,u as default};
