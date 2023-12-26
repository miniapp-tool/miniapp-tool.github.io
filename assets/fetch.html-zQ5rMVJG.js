import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as t}from"./app-AfU5obVN.js";const e={},o=t(`<h1 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h1><h2 id="fetch-1" tabindex="-1"><a class="header-anchor" href="#fetch-1" aria-hidden="true">#</a> fetch</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FetchBody</span> <span class="token operator">=</span> ArrayBuffer <span class="token operator">|</span> URLSearchParams <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FetchOptions<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> ArrayBuffer<span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Omit<span class="token operator">&lt;</span>
    WechatMiniprogram<span class="token punctuation">.</span>RequestOption<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;url&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;method&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;header&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;data&quot;</span>
  <span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 请求方法
   */</span>
  method<span class="token operator">?</span><span class="token operator">:</span>
    <span class="token operator">|</span> <span class="token string">&quot;options&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;OPTIONS&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;get&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;GET&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;head&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;HEAD&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;post&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;POST&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;put&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;PUT&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;delete&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;DELETE&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;trace&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;TRACE&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;connect&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;CONNECT&quot;</span>
    <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 请求头
   */</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 请求主体
   */</span>
  body<span class="token operator">?</span><span class="token operator">:</span> FetchBody<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Cookie 作用域
   */</span>
  cookieScope<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Cookie Store
   */</span>
  cookieStore<span class="token operator">?</span><span class="token operator">:</span> CookieStore<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FetchResult<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> ArrayBuffer<span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  status<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  headers<span class="token operator">:</span> Headers<span class="token punctuation">;</span>
  data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> fetch<span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> ArrayBuffer<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> method<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> body<span class="token punctuation">,</span> <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> FetchOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>FetchResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch-2" tabindex="-1"><a class="header-anchor" href="#fetch-2" aria-hidden="true">#</a> Fetch</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">FetchInitOptions</span>
  <span class="token keyword">extends</span> <span class="token class-name">Pick<span class="token operator">&lt;</span>
    WechatMiniprogram<span class="token punctuation">.</span>RequestOption<span class="token punctuation">,</span>
    <span class="token operator">|</span> <span class="token string">&quot;redirect&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;enableCache&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;enableChunked&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;enableHttp2&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;enableHttpDNS&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;enableQuic&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;httpDNSServiceId&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;forceCellularNetwork&quot;</span>
    <span class="token operator">|</span> <span class="token string">&quot;timeout&quot;</span>
  <span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 访问的默认域名
   */</span>
  server<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Cookie Store
   */</span>
  cookieStore<span class="token operator">?</span><span class="token operator">:</span> CookieStore <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">FetchType</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">|</span> ArrayBuffer<span class="token punctuation">,</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> FetchOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>FetchResult<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Fetch</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> FetchInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> FetchType<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function l(c,i){return n(),a("div",null,p)}const k=s(e,[["render",l],["__file","fetch.html.vue"]]);export{k as default};
