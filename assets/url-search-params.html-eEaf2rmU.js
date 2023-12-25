import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as p,a as n,b as s,d as o,e as l}from"./app-iJZl8Z8y.js";const c={},r=n("h1",{id:"urlsearchparams",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#urlsearchparams","aria-hidden":"true"},"#"),s(" URLSearchParams")],-1),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams",target:"_blank",rel:"noopener noreferrer"},d=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">URLSearchParams</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> params<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    init<span class="token operator">?</span><span class="token operator">:</span>
      <span class="token operator">|</span> URLSearchParams
      <span class="token operator">|</span> <span class="token builtin">string</span>
      <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
      <span class="token operator">|</span> Iterable<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Append a new name-value pair to the query string.
   */</span>
  <span class="token function">append</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * If \`value\` is provided, removes all name-value pairs
   * where name is \`name\` and value is \`value\`..
   *
   * If \`value\` is not provided, removes all name-value pairs whose name is \`name\`.
   */</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns an ES6 \`Iterator\` over each of the name-value pairs in the query.
   * Each item of the iterator is a JavaScript \`Array\`. The first item of the \`Array\`is the \`name\`, the second item of the \`Array\` is the \`value\`.
   *
   * Alias for \`urlSearchParams[@@iterator]()\`.
   */</span>
  <span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Iterates over each name-value pair in the query and invokes the given function.
   *
   * \`\`\`js
   * const myURL = new URL(&#39;https://example.org/?a=b&amp;#x26;c=d&#39;);
   * myURL.searchParams.forEach((value, name, searchParams) =&gt; <span class="token punctuation">{</span>
   *   console.log(name, value, myURL.searchParams === searchParams);
   * <span class="token punctuation">}</span>);
   * // Prints:
   * //   a b true
   * //   c d true
   * \`\`\`
   * <span class="token keyword">@param</span> <span class="token parameter">fn</span> Invoked for each name-value pair in the query
   * <span class="token keyword">@param</span> <span class="token parameter">thisArg</span> To be used as \`this\` value for when \`fn\` is called
   */</span>
  <span class="token function">forEach</span><span class="token punctuation">(</span>
    <span class="token function-variable function">callbackfn</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> iterable<span class="token operator">:</span> URLSearchParams<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    thisArg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns the value of the first name-value pair whose name is \`name\`. If there
   * are no such pairs, \`null\` is returned.
   * <span class="token keyword">@return</span> or \`null\` if there is no name-value pair with the given \`name\`.
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns the values of all name-value pairs whose name is \`name\`. If there are
   * no such pairs, an empty array is returned.
   */</span>
  <span class="token function">getAll</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Checks if the \`URLSearchParams\` object contains key-value pair(s) based on\`name\` and an optional \`value\` argument.
   *
   * If \`value\` is provided, returns \`true\` when name-value pair with
   * same \`name\` and \`value\` exists.
   *
   * If \`value\` is not provided, returns \`true\` if there is at least one name-value
   * pair whose name is \`name\`.
   */</span>
  <span class="token function">has</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns an ES6 \`Iterator\` over the names of each name-value pair.
   *
   * \`\`\`js
   * const params = new URLSearchParams(&#39;foo=bar&amp;#x26;foo=baz&#39;);
   * for (const name of params.keys()) <span class="token punctuation">{</span>
   *   console.log(name);
   * <span class="token punctuation">}</span>
   * // Prints:
   * //   foo
   * //   foo
   * \`\`\`
   */</span>
  <span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Sets the value in the \`URLSearchParams\` object associated with \`name\` to\`value\`. If there are any pre-existing name-value pairs whose names are \`name\`,
   * set the first such pair&#39;s value to \`value\` and remove all others. If not,
   * append the name-value pair to the query string.
   *
   * \`\`\`js
   * const params = new URLSearchParams();
   * params.append(&#39;foo&#39;, &#39;bar&#39;);
   * params.append(&#39;foo&#39;, &#39;baz&#39;);
   * params.append(&#39;abc&#39;, &#39;def&#39;);
   * console.log(params.toString());
   * // Prints foo=bar&amp;#x26;foo=baz&amp;#x26;abc=def
   *
   * params.set(&#39;foo&#39;, &#39;def&#39;);
   * params.set(&#39;xyz&#39;, &#39;opq&#39;);
   * console.log(params.toString());
   * // Prints foo=def&amp;#x26;abc=def&amp;#x26;xyz=opq
   * \`\`\`
   */</span>
  <span class="token function">set</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Sort all existing name-value pairs in-place by their names. Sorting is done
   * with a [stable sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability), so relative order between name-value pairs
   * with the same name is preserved.
   *
   * This method can be used, in particular, to increase cache hits.
   *
   * \`\`\`js
   * const params = new URLSearchParams(&#39;query[]=abc&amp;#x26;type=search&amp;#x26;query[]=123&#39;);
   * params.sort();
   * console.log(params.toString());
   * // Prints query%5B%5D=abc&amp;#x26;query%5B%5D=123&amp;#x26;type=search
   * \`\`\`
   */</span>
  <span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns the search parameters serialized as a string, with characters
   * percent-encoded where necessary.
   */</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Returns an ES6 \`Iterator\` over the values of each name-value pair.
   */</span>
  <span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IterableIterator<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,k){const a=t("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[s("更多信息请参考 "),n("a",u,[s("MDN"),o(a)])]),d])}const f=e(c,[["render",v],["__file","url-search-params.html.vue"]]);export{f as default};
