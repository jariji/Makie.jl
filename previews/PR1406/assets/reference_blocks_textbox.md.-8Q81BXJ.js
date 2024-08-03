import{_ as a,c as e,o as i,a7 as s}from"./chunks/framework.COMQAJVd.js";const t="/previews/PR1406/assets/fe302a6.D_FZa9Tf.png",o="/previews/PR1406/assets/b6da08e.C6oC2sYV.png",f=JSON.parse('{"title":"Textbox","description":"","frontmatter":{},"headers":[],"relativePath":"reference/blocks/textbox.md","filePath":"reference/blocks/textbox.md","lastUpdated":null}'),l={name:"reference/blocks/textbox.md"},n=s(`<h1 id="textbox" tabindex="-1">Textbox <a class="header-anchor" href="#textbox" aria-label="Permalink to &quot;Textbox&quot;">​</a></h1><p>The <code>Textbox</code> supports entry of a simple, single-line string, with optional validation logic. <a id="example-fe302a6"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Textbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], placeholder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Enter a string...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Textbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+t+`" width="600px" height="450px"><h2 id="validation" tabindex="-1">Validation <a class="header-anchor" href="#validation" aria-label="Permalink to &quot;Validation&quot;">​</a></h2><p>The <code>validator</code> attribute is used with <code>validate_textbox(string, validator)</code> to determine if the current string is valid. It can be a <code>Regex</code> that needs to match the complete string, or a <code>Function</code> taking a <code>String</code> as input and returning a <code>Bool</code>. If the validator is a type T (for example <code>Float64</code>), validation will be <code>tryparse(T, string)</code>. The textbox will not allow submitting the currently entered value if the validator doesn&#39;t pass. <a id="example-b6da08e"></a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Textbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], placeholder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Enter a frequency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    validator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Float64, tellwidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">frequency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Observable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stored_string) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    frequency[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Float64, s)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sinecurve </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @lift</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">frequency </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xs))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], xs, sinecurve)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><img src="`+o+'" width="600px" height="450px"><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><h3 id="alignmode" tabindex="-1">alignmode <a class="header-anchor" href="#alignmode" aria-label="Permalink to &quot;alignmode&quot;">​</a></h3><p>Defaults to <code>Inside()</code></p><p>The alignment of the textbox in its suggested bounding box.</p><h3 id="bordercolor" tabindex="-1">bordercolor <a class="header-anchor" href="#bordercolor" aria-label="Permalink to &quot;bordercolor&quot;">​</a></h3><p>Defaults to <code>RGBf(0.8, 0.8, 0.8)</code></p><p>Color of the box border.</p><h3 id="bordercolor-focused" tabindex="-1">bordercolor_focused <a class="header-anchor" href="#bordercolor-focused" aria-label="Permalink to &quot;bordercolor_focused&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT[]</code></p><p>Color of the box border when focused.</p><h3 id="bordercolor-focused-invalid" tabindex="-1">bordercolor_focused_invalid <a class="header-anchor" href="#bordercolor-focused-invalid" aria-label="Permalink to &quot;bordercolor_focused_invalid&quot;">​</a></h3><p>Defaults to <code>RGBf(1, 0, 0)</code></p><p>Color of the box border when focused and invalid.</p><h3 id="bordercolor-hover" tabindex="-1">bordercolor_hover <a class="header-anchor" href="#bordercolor-hover" aria-label="Permalink to &quot;bordercolor_hover&quot;">​</a></h3><p>Defaults to <code>COLOR_ACCENT_DIMMED[]</code></p><p>Color of the box border when hovered.</p><h3 id="borderwidth" tabindex="-1">borderwidth <a class="header-anchor" href="#borderwidth" aria-label="Permalink to &quot;borderwidth&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>Width of the box border.</p><h3 id="boxcolor" tabindex="-1">boxcolor <a class="header-anchor" href="#boxcolor" aria-label="Permalink to &quot;boxcolor&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>Color of the box.</p><h3 id="boxcolor-focused" tabindex="-1">boxcolor_focused <a class="header-anchor" href="#boxcolor-focused" aria-label="Permalink to &quot;boxcolor_focused&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>Color of the box when focused.</p><h3 id="boxcolor-focused-invalid" tabindex="-1">boxcolor_focused_invalid <a class="header-anchor" href="#boxcolor-focused-invalid" aria-label="Permalink to &quot;boxcolor_focused_invalid&quot;">​</a></h3><p>Defaults to <code>RGBAf(1, 0, 0, 0.3)</code></p><p>Color of the box when focused.</p><h3 id="boxcolor-hover" tabindex="-1">boxcolor_hover <a class="header-anchor" href="#boxcolor-hover" aria-label="Permalink to &quot;boxcolor_hover&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>Color of the box when hovered.</p><h3 id="cornerradius" tabindex="-1">cornerradius <a class="header-anchor" href="#cornerradius" aria-label="Permalink to &quot;cornerradius&quot;">​</a></h3><p>Defaults to <code>5</code></p><p>Corner radius of text box.</p><h3 id="cornersegments" tabindex="-1">cornersegments <a class="header-anchor" href="#cornersegments" aria-label="Permalink to &quot;cornersegments&quot;">​</a></h3><p>Defaults to <code>20</code></p><p>Corner segments of one rounded corner.</p><h3 id="cursorcolor" tabindex="-1">cursorcolor <a class="header-anchor" href="#cursorcolor" aria-label="Permalink to &quot;cursorcolor&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color of the cursor.</p><h3 id="defocus-on-submit" tabindex="-1">defocus_on_submit <a class="header-anchor" href="#defocus-on-submit" aria-label="Permalink to &quot;defocus_on_submit&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the textbox is defocused when a string is submitted.</p><h3 id="displayed-string" tabindex="-1">displayed_string <a class="header-anchor" href="#displayed-string" aria-label="Permalink to &quot;displayed_string&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>The currently displayed string (for internal use).</p><h3 id="focused" tabindex="-1">focused <a class="header-anchor" href="#focused" aria-label="Permalink to &quot;focused&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>If the textbox is focused and receives text input.</p><h3 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-label="Permalink to &quot;font&quot;">​</a></h3><p>Defaults to <code>:regular</code></p><p>Font family.</p><h3 id="fontsize" tabindex="-1">fontsize <a class="header-anchor" href="#fontsize" aria-label="Permalink to &quot;fontsize&quot;">​</a></h3><p>Defaults to <code>@inherit :fontsize 16.0f0</code></p><p>Text size.</p><h3 id="halign" tabindex="-1">halign <a class="header-anchor" href="#halign" aria-label="Permalink to &quot;halign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The horizontal alignment of the textbox in its suggested bounding box.</p><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The height setting of the textbox.</p><h3 id="placeholder" tabindex="-1">placeholder <a class="header-anchor" href="#placeholder" aria-label="Permalink to &quot;placeholder&quot;">​</a></h3><p>Defaults to <code>&quot;Click to edit...&quot;</code></p><p>A placeholder text that is displayed when the saved string is nothing.</p><h3 id="reset-on-defocus" tabindex="-1">reset_on_defocus <a class="header-anchor" href="#reset-on-defocus" aria-label="Permalink to &quot;reset_on_defocus&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the displayed text is reset to the stored text when defocusing the textbox without submitting.</p><h3 id="restriction" tabindex="-1">restriction <a class="header-anchor" href="#restriction" aria-label="Permalink to &quot;restriction&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Restricts the allowed unicode input via is_allowed(char, restriction).</p><h3 id="stored-string" tabindex="-1">stored_string <a class="header-anchor" href="#stored-string" aria-label="Permalink to &quot;stored_string&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>The currently stored string.</p><h3 id="tellheight" tabindex="-1">tellheight <a class="header-anchor" href="#tellheight" aria-label="Permalink to &quot;tellheight&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s height.</p><h3 id="tellwidth" tabindex="-1">tellwidth <a class="header-anchor" href="#tellwidth" aria-label="Permalink to &quot;tellwidth&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls if the parent layout can adjust to this element&#39;s width.</p><h3 id="textcolor" tabindex="-1">textcolor <a class="header-anchor" href="#textcolor" aria-label="Permalink to &quot;textcolor&quot;">​</a></h3><p>Defaults to <code>@inherit :textcolor :black</code></p><p>Text color.</p><h3 id="textcolor-placeholder" tabindex="-1">textcolor_placeholder <a class="header-anchor" href="#textcolor-placeholder" aria-label="Permalink to &quot;textcolor_placeholder&quot;">​</a></h3><p>Defaults to <code>RGBf(0.5, 0.5, 0.5)</code></p><p>Text color for the placeholder.</p><h3 id="textpadding" tabindex="-1">textpadding <a class="header-anchor" href="#textpadding" aria-label="Permalink to &quot;textpadding&quot;">​</a></h3><p>Defaults to <code>(8, 8, 8, 8)</code></p><p>Padding of the text against the box.</p><h3 id="validator" tabindex="-1">validator <a class="header-anchor" href="#validator" aria-label="Permalink to &quot;validator&quot;">​</a></h3><p>Defaults to <code>str-&gt;begin true end</code></p><p>Validator that is called with validate_textbox(string, validator) to determine if the current string is valid. Can by default be a RegEx that needs to match the complete string, or a function taking a string as input and returning a Bool. If the validator is a type T (for example Float64), validation will be <code>tryparse(T, string)</code>.</p><h3 id="valign" tabindex="-1">valign <a class="header-anchor" href="#valign" aria-label="Permalink to &quot;valign&quot;">​</a></h3><p>Defaults to <code>:center</code></p><p>The vertical alignment of the textbox in its suggested bounding box.</p><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h3><p>Defaults to <code>Auto()</code></p><p>The width setting of the textbox.</p>',105),h=[n];function r(d,p,c,k,u,g){return i(),e("div",null,h)}const E=a(l,[["render",r]]);export{f as __pageData,E as default};
