import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e,b as t,e as o}from"./app-118o3NLt.js";const c={},p=t("p",null,"小程序 HTML 解析器，大小仅 3.5kb。",-1),l=o(`<h2 id="gettext" tabindex="-1"><a class="header-anchor" href="#gettext" aria-hidden="true">#</a> getText</h2><p>获取一段 HTML 中的文本内容。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@mptool/parser&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">&quot;&lt;div&gt;hello &lt;span&gt;world&lt;/span&gt;&lt;/div&gt;&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getText</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getrichtextnodes" tabindex="-1"><a class="header-anchor" href="#getrichtextnodes" aria-hidden="true">#</a> getRichTextNodes</h2><p>解析一段 HTML，异步返回节点数组数组，第二个参数是行为选项</p><ul><li><p>任何小程序 <code>&lt;rich-text&gt;</code> 不支持的标签和属性都会被移除。</p></li><li><p>所有节点会默认附加和标签名相同的类名，可以通过 <code>appendClass: false</code> 取消</p></li><li><p>你可以通过行为选项中的 <code>transform</code> 方法对节点进行转换，返回值会被用于替换原节点.</p><p>transform 方法接收一个对象，键名为节点标签，值是一个读取当前节点对象并返回新对象或 <code>null</code> 的函数。</p></li></ul>`,6);function i(d,r){return s(),a("div",null,[p,e(" more "),l])}const h=n(c,[["render",i],["__file","index.html.vue"]]);export{h as default};
