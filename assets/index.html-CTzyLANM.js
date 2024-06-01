import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-COzWPrAY.js";const e={},p=t(`<h2 id="parsehtml" tabindex="-1"><a class="header-anchor" href="#parsehtml"><span>parseHTML</span></a></h2><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">parseHTML</span><span class="token operator">:</span> <span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> AnyNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><h2 id="getrichtextnodes" tabindex="-1"><a class="header-anchor" href="#getrichtextnodes"><span>getRichTextNodes</span></a></h2><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ElementNode</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  attrs<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> RichTextNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TextNode</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">;</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RichTextNode</span> <span class="token operator">=</span> ElementNode <span class="token operator">|</span> TextNode<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">NodeHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  node<span class="token operator">:</span> ElementNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ElementNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ElementNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ParserOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 是否附加标签名到 class
   *
   * <span class="token keyword">@default</span> true
   */</span>
  appendClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 处理 Tag
   */</span>
  transform<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span>AllowTag<span class="token punctuation">,</span> NodeHandler<span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getRichTextNodes</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> AnyNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> appendClass<span class="token punctuation">,</span> transform <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> ParserOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RichTextNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h2 id="gettext" tabindex="-1"><a class="header-anchor" href="#gettext"><span>getText</span></a></h2><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getText</span><span class="token operator">:</span> <span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> AnyNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre>`,6),o=[p];function c(r,l){return a(),s("div",null,o)}const u=n(e,[["render",c],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/parser/api/","title":"@mptool/parser","lang":"zh-CN","frontmatter":{"title":"@mptool/parser","icon":"folder","index":false,"description":"parseHTML getRichTextNodes getText","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/parser/api/"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"@mptool/parser"}],["meta",{"property":"og:description","content":"parseHTML getRichTextNodes getText"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T12:05:10.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-01T12:05:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"@mptool/parser\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T12:05:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"parseHTML","slug":"parsehtml","link":"#parsehtml","children":[]},{"level":2,"title":"getRichTextNodes","slug":"getrichtextnodes","link":"#getrichtextnodes","children":[]},{"level":2,"title":"getText","slug":"gettext","link":"#gettext","children":[]}],"git":{"createdTime":1717243510000,"updatedTime":1717243510000,"contributors":[{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"parser/api/README.md","localizedDate":"2024年6月1日","autoDesc":true,"excerpt":"<h2>parseHTML</h2>\\n<pre><code class=\\"language-ts\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">parseHTML</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>content<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> AnyNode<span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n</code></pre>"}');export{u as comp,d as data};
