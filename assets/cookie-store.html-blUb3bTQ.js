import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-h7W7dqKw.js";const o={},p=e(`<h1 id="cookiestore" tabindex="-1"><a class="header-anchor" href="#cookiestore" aria-hidden="true">#</a> CookieStore</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CookieStoreOptions</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">SetCookieOptions</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  domain<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  expires<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  maxAge<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  httpOnly<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CookieStore</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token doc-comment comment">/** 存储键值 */</span>
    key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取 Cookie 对象
   *
   * <span class="token keyword">@param</span> <span class="token parameter">name</span> Cookie 名称
   * <span class="token keyword">@param</span> <span class="token parameter">options</span> Cookie 选项
   * <span class="token keyword">@return</span> cookie 对象
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> Cookie <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取 Cookie 值
   *
   * <span class="token keyword">@param</span> <span class="token parameter">name</span> Cookie 名称
   * <span class="token keyword">@param</span> <span class="token parameter">options</span> Cookie 选项
   * <span class="token keyword">@return</span> Cookie 值
   */</span>
  <span class="token function">getValue</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 是否有特定的 Cookie
   *
   * <span class="token keyword">@param</span> <span class="token parameter">name</span> Cookie 名称
   * <span class="token keyword">@param</span> <span class="token parameter">options</span> Cookie 选项
   * <span class="token keyword">@return</span> 是否存在
   */</span>
  <span class="token function">has</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 设置 cookie
   */</span>
  <span class="token function">set</span><span class="token punctuation">(</span>cookieOptions<span class="token operator">:</span> SetCookieOptions<span class="token punctuation">)</span><span class="token operator">:</span> Cookie<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 删除 cookie
   *
   * <span class="token keyword">@param</span> <span class="token parameter">name</span> cookie 名称
   * <span class="token keyword">@param</span> <span class="token parameter">domain</span> 域名
   */</span>
  <span class="token keyword">delete</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取所有域名和 cookies 结构
   */</span>
  <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取 cookies 对象数组
   *
   * <span class="token keyword">@param</span> <span class="token parameter">options</span> Cookie 选项
   * <span class="token keyword">@return</span> Cookie 对象数组
   */</span>
  <span class="token function">getCookies</span><span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> Cookie<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取所有 cookies 对象
   *
   * <span class="token keyword">@return</span> Cookie 对象数组
   */</span>
  <span class="token function">getAllCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Cookie<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取 cookies key/value 对象
   *
   * <span class="token keyword">@return</span> 键值 Map
   */</span>
  <span class="token function">getCookiesMap</span><span class="token punctuation">(</span>options<span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 应用 Cookies
   *
   * <span class="token keyword">@param</span> <span class="token parameter">cookies</span> 待设置的 Cookie 数组
   */</span>
  <span class="token function">apply</span><span class="token punctuation">(</span>cookies<span class="token operator">:</span> Cookie<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 清除 cookies
   *
   * <span class="token keyword">@param</span> <span class="token parameter">domain</span> 指定域名
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span>domain<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 应用 header cookies
   *
   * <span class="token keyword">@param</span> <span class="token parameter">header</span> 小程序 response header
   * <span class="token keyword">@param</span> <span class="token parameter">domainOrURL</span> Url 或域名
   */</span>
  <span class="token function">applyHeader</span><span class="token punctuation">(</span>header<span class="token operator">:</span> WechatMiniprogram<span class="token punctuation">.</span>IAnyObject<span class="token punctuation">,</span> domainOrURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 应用响应 cookies
   *
   * <span class="token keyword">@param</span> <span class="token parameter">response</span> 小程序 response
   * <span class="token keyword">@param</span> <span class="token parameter">domainOrURL</span> Url 或域名
   */</span>
  <span class="token function">applyResponse</span><span class="token punctuation">(</span>
    response<span class="token operator">:</span> WechatMiniprogram<span class="token punctuation">.</span>RequestSuccessCallbackResult<span class="token punctuation">,</span>
    domainOrURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 获取 request cookie header
   *
   * <span class="token keyword">@param</span> <span class="token parameter">options</span> Cookie 选项
   * <span class="token keyword">@return</span> request cookie header
   */</span>
  <span class="token function">getHeader</span><span class="token punctuation">(</span>options<span class="token operator">:</span> CookieStoreOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[p];function i(c,l){return s(),a("div",null,t)}const k=n(o,[["render",i],["__file","cookie-store.html.vue"]]);export{k as default};
