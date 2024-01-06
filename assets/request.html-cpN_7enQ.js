import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-D8sMd8ho.js";const t={},p=e(`<h2 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> request</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestBody</span> <span class="token operator">=</span>
  <span class="token operator">|</span> WechatMiniprogram<span class="token punctuation">.</span>IAnyObject
  <span class="token operator">|</span> ArrayBuffer
  <span class="token operator">|</span> URLSearchParams
  <span class="token operator">|</span> <span class="token builtin">string</span>
  <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestOptions<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token builtin">any</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
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
  body<span class="token operator">?</span><span class="token operator">:</span> RequestBody<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Cookie 作用域
   */</span>
  cookieScope<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Cookie Store
   */</span>
  cookieStore<span class="token operator">?</span><span class="token operator">:</span> CookieStore<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestResponse<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token builtin">any</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Status Code */</span>
  status<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Response headers */</span>
  headers<span class="token operator">:</span> Headers<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Response data */</span>
  data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 错误码 */</span>
  errno<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestType</span> <span class="token operator">=</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span></span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token builtin">any</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> RequestOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RequestResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> request<span class="token operator">:</span> <span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">string</span></span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
    <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token builtin">any</span>
  <span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    method<span class="token punctuation">,</span>
    headers<span class="token punctuation">,</span>
    body<span class="token punctuation">,</span>
    cookieScope<span class="token punctuation">,</span>
    cookieStore<span class="token punctuation">,</span>
    <span class="token operator">...</span>options
  <span class="token punctuation">}</span><span class="token operator">?</span><span class="token operator">:</span> RequestOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RequestResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestInitOptions</span>
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
   * Cookie 存储
   */</span>
  cookieStore<span class="token operator">?</span><span class="token operator">:</span> CookieStore <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 响应处理器
   *
   * <span class="token keyword">@throws</span> <span class="token punctuation">{</span>RequestError<span class="token punctuation">}</span> 自定义的错误数据
   */</span>
  responseHandler<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">&lt;</span>
    <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span></span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
      <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token builtin">any</span>
    <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token doc-comment comment">/** 响应数据 */</span>
    response<span class="token operator">:</span> RequestResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 请求地址 */</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 请求配置 */</span>
    options<span class="token operator">:</span> RequestOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> RequestResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 错误处理器
   *
   * <span class="token keyword">@throws</span> <span class="token punctuation">{</span>RequestError<span class="token punctuation">}</span> 自定义的错误数据
   */</span>
  errorHandler<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">&lt;</span>
    <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">never</span><span class="token punctuation">,</span> <span class="token builtin">never</span><span class="token operator">&gt;</span></span> <span class="token operator">|</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> ArrayBuffer <span class="token operator">=</span> Record<span class="token operator">&lt;</span>
      <span class="token builtin">string</span><span class="token punctuation">,</span>
      <span class="token builtin">any</span>
    <span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token operator">&gt;</span><span class="token punctuation">(</span>
    <span class="token doc-comment comment">/** 错误信息 */</span>
    error<span class="token operator">:</span> RequestError<span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 请求地址 */</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** 请求配置 */</span>
    options<span class="token operator">:</span> RequestOptions<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> RequestResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">never</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestFactory</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Cookie 存储
   */</span>
  cookieStore<span class="token operator">:</span> CookieStore<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 请求方法
   */</span>
  request<span class="token operator">:</span> RequestType<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token parameter">options</span> request 配置选项
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createRequest</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">?</span><span class="token operator">:</span> RequestInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> RequestFactory<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function l(c,i){return s(),a("div",null,o)}const k=n(t,[["render",l],["__file","request.html.vue"]]);export{k as default};
