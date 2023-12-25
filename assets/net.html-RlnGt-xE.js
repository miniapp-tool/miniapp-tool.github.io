import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as n,a as e,b as o,d as i,e as c}from"./app-_sW5Zjjz.js";const s={},r=c('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>小程序网络框架，大小仅 12.02kb。</p></div><h2 id="fetch-与-fetch" tabindex="-1"><a class="header-anchor" href="#fetch-与-fetch" aria-hidden="true">#</a> Fetch 与 fetch</h2><p>框架提供了 <code>Fetch</code> 工厂和全局 <code>fetch</code> 方法，同时补齐了常用的 <code>Headers</code> 和 <code>URLSearchParams</code>。</p><p><code>Fetch</code> 是一个工厂函数，它会返回一个 <code>fetch</code> 方法，你可以提供如下选项来控制默认行为，这些选项会被应用到每次请求中 (除非你在请求时覆盖):</p>',4),p=c("<li><code>server</code>: 访问的默认域名</li><li><code>redirect</code>: 默认重定向策略，支持 <code>follow</code> 和 <code>manual</code>，默认为 <code>follow</code></li><li><code>enableCache</code>: 开启 cache</li><li><code>enableChunked</code>: 开启 transfer-encoding chunked。</li><li><code>enableHttp2</code>: 开启 http2</li>",5),h=e("code",null,"enableHttpDNS",-1),k={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"httpDNSServiceId",-1),m={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("code",null,"enableQuic"),o(": 开启 quic")],-1),f=e("li",null,[e("code",null,"forceCellularNetwork"),o(": 强制使用蜂窝网络发送请求")],-1),C=e("li",null,[e("code",null,"timeout"),o(": 超时时间，单位为毫秒。默认值为 60000")],-1),S=c(`<p>默认的 <code>fetch</code> 和 <code>Fetch</code> 配置好的 <code>fetch</code> 支持两个参数，第一个参数为请求的地址，第二个参数为 <code>FetchOptions</code>，支持默认 <code>wx.request</code> 的全部选项。</p><p>在使用时，你应该避免使用 <code>url</code> <code>data</code> 和 <code>header</code> 选项。前者已经作为第一个参数提供，后两者的的替代选项是 <code>body</code> 和 <code>headers</code>。</p><p><code>fetch</code> 会自动保存相应的 Cookie，并在请求时附加对应的 Cookie，同时完善了以下选项:</p><ul><li><code>method</code> 额外支持小写的方法名</li><li><code>body</code> 额外支持 <code>URLSearchParams</code> 和 <code>null</code></li><li><code>headers</code> 额外支持 <code>Headers</code> 实例与数组格式的 Headers</li><li>新增 <code>cookieScope</code> 控制附带的 Cookie 范围 (默认为 <code>url</code>)</li><li>新增 <code>cookieStore</code> 控制请求时读取和响应时写入的 CookieStore 实例 (默认为内置全局实例)</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在微信基础库 <code>3.2.3</code> 版本及以上，你可以设置 <code>redirect: manual</code> 到每一个请求，这样状态码为 301 的请求会被原样保留而不是直接跳转，重定向请求下发的 Cookie 也可以被记录。</p><p>其他版本的基础库或者未设置 <code>redirect</code> 选项发出的请求，框架无法解析重定向相应中的 Cookie 。</p></div><p><code>fetch</code> 会返回一个 <code>Promise</code>，你可以通过 <code>then</code> 方法获取响应，或者通过 <code>catch</code> 方法捕获错误。</p><p>只要请求成功，无论响应状态码是多少，都会走 <code>.then</code> 逻辑，返回包含下列信息的对象:</p><ul><li>status: 数字形式的响应状态码</li><li>headers: Headers 实例</li><li>data: 响应数据</li></ul><p>如果请求失败，会走 <code>.catch</code> 逻辑，返回下列信息的对象:</p><ul><li>errMsg: 错误信息</li><li>errno: 错误码</li></ul><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>框架提供了 <code>Cookie</code> 来保存 Cookie 数据，并提供 <code>CookieStore</code> 进行存储管理。</p><h3 id="cookiestore" tabindex="-1"><a class="header-anchor" href="#cookiestore" aria-hidden="true">#</a> CookieStore</h3><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><p>可通过它新建一个 <code>CookieStore</code> 实例:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CookieStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>key</code> 是可选的，不填会使用默认值。我们的建议是在 <code>app.js</code> 手动初始化一个全局实例并挂载到 <code>App</code> 对象上全局使用。</p><p>如果你的不同分包之间需要隔离，可在各分包内初始化。</p><div class="hint-container caution"><p class="hint-container-title">创建多个相同 key 的实例会引发问题</p></div><p><code>CookieStore</code> 实例提供了以下方法：</p><ul><li><code>get(name, options)</code>: 获取 Cookie</li><li><code>getValue(name, options)</code>: 获取 Cookie 值</li><li><code>has(name, options)</code>: 是否有 Cookie</li><li><code>set(options)</code>: 设置 Cookie</li><li><code>list()</code>: 按 domain 结构获取全部 Cookie</li><li><code>getCookies(options)</code>: 获取满足条件的 Cookie</li><li><code>getAllCookies()</code>: 获取全部 Cookies</li><li><code>getCookiesMap(options)</code>: 获取满足条件的 Cookie 键值 Map</li><li><code>apply(cookies)</code>: 向存储中应用 Cookie</li><li><code>clear(domain?)</code>: 清除 <code>domain</code> 下的全部 cookie</li><li><code>applyHeader(header, domainOrURL)</code>: 应用 header 中的 cookies</li><li><code>applyResponse(response, domainOrURL)</code>: 应用 response 中的 cookies</li><li><code>getHeader(options)</code>: 获取 cookie header</li></ul>`,21);function v(b,g){const d=a("ExternalLinkIcon");return l(),n("div",null,[r,e("ul",null,[p,e("li",null,[h,o(": 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 "),e("a",k,[o("移动解析HttpDNS"),i(d)])]),e("li",null,[u,o(": ttpDNS 服务商 Id。 HttpDNS 用法详见 "),e("a",m,[o("移动解析HttpDNS"),i(d)])]),_,f,C]),S])}const x=t(s,[["render",v],["__file","net.html.vue"]]);export{x as default};
