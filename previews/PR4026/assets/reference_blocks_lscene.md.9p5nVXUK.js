import{_ as i,c as s,o as a,a7 as e}from"./chunks/framework.BynpFNYC.js";const t="/previews/PR4026/assets/515d964.C8u-WWV3.png",u=JSON.parse('{"title":"LScene","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/lscene.md","filePath":"reference/blocks/lscene.md","lastUpdated":null}'),n={name:"reference/blocks/lscene.md"},h=e(`<h1 id="lscene" tabindex="-1">LScene <a class="header-anchor" href="#lscene" aria-label="Permalink to &quot;LScene&quot;">​</a></h1><p>If you need a normal Makie scene in a layout, for example for 3D plots, you have to use <code>LScene</code> right now. It&#39;s just a wrapper around the normal <code>Scene</code> that makes it block. The underlying Scene is accessible via the <code>scene</code> field. You can plot into the <code>LScene</code> directly, though.</p><p>You can pass keyword arguments to the underlying <code>Scene</code> object to the <code>scenekw</code> keyword. Currently, it can be necessary to pass a couple of attributes explicitly to make sure they are not inherited from the main scene. To see what parameters are applicable, have a look at the <a href="/previews/PR4026/explanations/scenes#Scenes">scene docs</a><a id="example-515d964"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PointLight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RGBf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">al </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AmbientLight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RGBf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lscene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LScene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], show_axis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, scenekw </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (lights </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [pl, al], backgroundcolor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, clear</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># now you can plot into lscene like you&#39;re used to</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> meshscatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lscene, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:gray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><img src="`+t+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alignmode" tabindex="-1">alignmode <a class="header-anchor" href="#alignmode" aria-label="Permalink to &quot;alignmode&quot;">​</a></h3><p>Defaults to <code>Inside()</code></p><p>The alignment of the scene in its suggested bounding box.</p><h3 id="dim1-conversion" tabindex="-1">dim1_conversion <a class="header-anchor" href="#dim1-conversion" aria-label="Permalink to &quot;dim1_conversion&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Global state for the x dimension conversion.</p><h3 id="dim2-conversion" tabindex="-1">dim2_conversion <a class="header-anchor" href="#dim2-conversion" aria-label="Permalink to &quot;dim2_conversion&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Global state for the y dimension conversion.</p><h3 id="dim3-conversion" tabindex="-1">dim3_conversion <a class="header-anchor" href="#dim3-conversion" aria-label="Permalink to &quot;dim3_conversion&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Global state for the z dimension conversion.</p><h3 id="halign" tabindex="-1">halign <a class="header-anchor" href="#halign" aria-label="Permalink to &quot;halign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The horizontal alignment of the scene in its suggested bounding box.</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>The height setting of the scene.</p><h3 id="show-axis" tabindex="-1">show_axis <a class="header-anchor" href="#show-axis" aria-label="Permalink to &quot;show_axis&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls the visibility of the 3D axis plot object.</p><h3 id="tellheight" tabindex="-1">tellheight <a class="header-anchor" href="#tellheight" aria-label="Permalink to &quot;tellheight&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s height</p><h3 id="tellwidth" tabindex="-1">tellwidth <a class="header-anchor" href="#tellwidth" aria-label="Permalink to &quot;tellwidth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s width</p><h3 id="valign" tabindex="-1">valign <a class="header-anchor" href="#valign" aria-label="Permalink to &quot;valign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The vertical alignment of the scene in its suggested bounding box.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>The width setting of the scene.</p>',39),l=[h];function o(p,k,r,d,c,g){return a(),s("div",null,l)}const y=i(n,[["render",o]]);export{u as __pageData,y as default};
