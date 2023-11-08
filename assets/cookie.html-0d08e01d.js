import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-cd67b3fd.js";const o={},t=e(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CookieType</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * cookie name
   */</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * cookie value
   */</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * cookie path
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * absolute expiration date for the cookie
   */</span>
  expires<span class="token operator">?</span><span class="token operator">:</span> Date <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * relative max age of the cookie in seconds from when the client receives it (integer or undefined)
   * Note: when using with express&#39;s res.cookie() method, multiply maxAge by 1000 to convert to milliseconds
   */</span>
  maxAge<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * domain for the cookie,
   * may begin with &quot;.&quot; to indicate the named domain or any subdomain of it
   */</span>
  domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * indicates that this cookie should only be sent over HTTPs
   */</span>
  secure<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * indicates that this cookie should not be accessible to client-side JavaScript
   */</span>
  httpOnly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * indicates a cookie ought not to be sent along with cross-site requests
   */</span>
  sameSite<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Cookie 类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Cookie</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  domain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  expires<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&quot;session&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;outdate&quot;</span><span class="token punctuation">;</span>
  httpOnly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>cookie<span class="token operator">:</span> CookieType<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@returns</span> 是否已过期
   */</span>
  <span class="token function">isExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@returns</span> 是否可持久化
   */</span>
  <span class="token function">isPersistence</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">domain</span> 域名
   * <span class="token keyword">@returns</span> 是否匹配
   */</span>
  <span class="token function">isDomainMatched</span><span class="token punctuation">(</span>domain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">path</span> 路径
   * <span class="token keyword">@returns</span> 是否匹配
   */</span>
  <span class="token function">isPathMatched</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> CookieType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[t];function p(c,l){return s(),a("div",null,i)}const u=n(o,[["render",p],["__file","cookie.html.vue"]]);export{u as default};
