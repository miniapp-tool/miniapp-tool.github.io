import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-COzWPrAY.js";const p={},o=t(`<h2 id="request" tabindex="-1"><a class="header-anchor" href="#request"><span>request</span></a></h2><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">RequestBody</span> <span class="token operator">=</span>
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
</code></pre><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch"><span>Fetch</span></a></h2><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RequestInitOptions</span>
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
</code></pre>`,4),e=[o];function c(r,l){return a(),s("div",null,e)}const i=n(p,[["render",c],["__file","request.html.vue"]]),m=JSON.parse('{"path":"/net/api/request.html","title":"request","lang":"zh-CN","frontmatter":{"title":"request","description":"request Fetch","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/net/api/request.html"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"request"}],["meta",{"property":"og:description","content":"request Fetch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T12:05:10.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-01T12:05:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"request\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T12:05:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"request","slug":"request","link":"#request","children":[]},{"level":2,"title":"Fetch","slug":"fetch","link":"#fetch","children":[]}],"git":{"createdTime":1717243510000,"updatedTime":1717243510000,"contributors":[{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"net/api/request.md","localizedDate":"2024年6月1日","autoDesc":true,"excerpt":"<h2>request</h2>\\n<pre><code class=\\"language-ts\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">RequestBody</span> <span class=\\"token operator\\">=</span>\\n  <span class=\\"token operator\\">|</span> WechatMiniprogram<span class=\\"token punctuation\\">.</span>IAnyObject\\n  <span class=\\"token operator\\">|</span> ArrayBuffer\\n  <span class=\\"token operator\\">|</span> URLSearchParams\\n  <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">string</span>\\n  <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">RequestOptions<span class=\\"token operator\\">&lt;</span>\\n  <span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">never</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">never</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">unknown</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">string</span> <span class=\\"token operator\\">|</span> ArrayBuffer <span class=\\"token operator\\">=</span> Record<span class=\\"token operator\\">&lt;</span>\\n    <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token builtin\\">any</span>\\n  <span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token operator\\">&gt;</span></span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Omit<span class=\\"token operator\\">&lt;</span>\\n    WechatMiniprogram<span class=\\"token punctuation\\">.</span>RequestOption<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token string\\">\\"url\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"method\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"header\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"data\\"</span>\\n  <span class=\\"token operator\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 请求方法\\n   */</span>\\n  method<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"options\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"OPTIONS\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"get\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"GET\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"head\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"HEAD\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"post\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"POST\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"put\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"PUT\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"delete\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"DELETE\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"trace\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"TRACE\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"connect\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token string\\">\\"CONNECT\\"</span>\\n    <span class=\\"token operator\\">|</span> <span class=\\"token keyword\\">undefined</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 请求头\\n   */</span>\\n  headers<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">string</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * 请求主体\\n   */</span>\\n  body<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> RequestBody<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * Cookie 作用域\\n   */</span>\\n  cookieScope<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/**\\n   * Cookie Store\\n   */</span>\\n  cookieStore<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> CookieStore<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">RequestResponse<span class=\\"token operator\\">&lt;</span>\\n  <span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">never</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">never</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">unknown</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">string</span> <span class=\\"token operator\\">|</span> ArrayBuffer <span class=\\"token operator\\">=</span> Record<span class=\\"token operator\\">&lt;</span>\\n    <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token builtin\\">any</span>\\n  <span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token operator\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token doc-comment comment\\">/** Status Code */</span>\\n  status<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/** Response headers */</span>\\n  headers<span class=\\"token operator\\">:</span> Headers<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token doc-comment comment\\">/** Response data */</span>\\n  data<span class=\\"token operator\\">:</span> <span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">RequestError</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Error</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token doc-comment comment\\">/** 错误码 */</span>\\n  errno<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">RequestType</span> <span class=\\"token operator\\">=</span> <span class=\\"token operator\\">&lt;</span>\\n  <span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">never</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">never</span><span class=\\"token operator\\">&gt;</span></span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">unknown</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">string</span> <span class=\\"token operator\\">|</span> ArrayBuffer <span class=\\"token operator\\">=</span> Record<span class=\\"token operator\\">&lt;</span>\\n    <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token builtin\\">any</span>\\n  <span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>\\n  url<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n  options<span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> RequestOptions<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">Promise</span><span class=\\"token operator\\">&lt;</span>RequestResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> request<span class=\\"token operator\\">:</span> <span class=\\"token operator\\">&lt;</span>\\n  <span class=\\"token constant\\">T</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\"><span class=\\"token builtin\\">string</span></span> <span class=\\"token operator\\">|</span> ArrayBuffer <span class=\\"token operator\\">|</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">never</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">never</span><span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">|</span> <span class=\\"token builtin\\">unknown</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> Record<span class=\\"token operator\\">&lt;</span>\\n    <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token builtin\\">any</span>\\n  <span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">(</span>\\n  url<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">{</span>\\n    method<span class=\\"token punctuation\\">,</span>\\n    headers<span class=\\"token punctuation\\">,</span>\\n    body<span class=\\"token punctuation\\">,</span>\\n    cookieScope<span class=\\"token punctuation\\">,</span>\\n    cookieStore<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token operator\\">...</span>options\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">?</span><span class=\\"token operator\\">:</span> RequestOptions<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token builtin\\">Promise</span><span class=\\"token operator\\">&lt;</span>RequestResponse<span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;&gt;</span><span class=\\"token punctuation\\">;</span>\\n</code></pre>"}');export{i as comp,m as data};
