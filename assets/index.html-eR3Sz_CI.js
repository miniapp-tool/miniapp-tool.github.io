import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as a,c as s,f as n,b as e,d as o,a as i,e as c}from"./app-118o3NLt.js";const r={},p=e("p",null,"小程序网络框架，大小仅 12.02kb。",-1),u=c('<h2 id="request-与-createrequest" tabindex="-1"><a class="header-anchor" href="#request-与-createrequest" aria-hidden="true">#</a> request 与 createRequest</h2><p>框架提供了 <code>createRequest</code> 工厂和全局 <code>request</code> 方法，同时补齐了常用的 <code>Headers</code> 和 <code>URLSearchParams</code>。</p><p><code>createRequest</code> 是一个工厂函数，它会返回 <code>request</code> 方法和 <code>cookieStore</code>，并允许你通过如下选项控制默认行为，这些选项会被应用到每次请求中 (除非你在请求时覆盖):</p>',3),k=c("<li><code>server</code>: 访问的默认域名</li><li><code>redirect</code>: 默认重定向策略，支持 <code>follow</code> 和 <code>manual</code>，默认为 <code>follow</code></li><li><code>enableCache</code>: 开启 cache</li><li><code>enableChunked</code>: 开启 transfer-encoding chunked。</li><li><code>enableHttp2</code>: 开启 http2</li>",5),h=e("code",null,"enableHttpDNS",-1),m={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"httpDNSServiceId",-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[e("code",null,"enableQuic"),o(": 开启 quic")],-1),q=e("li",null,[e("code",null,"forceCellularNetwork"),o(": 强制使用蜂窝网络发送请求")],-1),b=e("li",null,[e("code",null,"timeout"),o(": 超时时间，单位为毫秒。默认值为 60000")],-1),g=c(`<p>默认的 <code>request</code> 和 <code>createRequest</code> 生成的 <code>request</code> 支持两个参数，第一个参数为请求的地址，第二个参数为 <code>RequestOptions</code>，支持 <code>wx.request</code> 的全部选项。</p><p>在使用时，你应该避免使用 <code>url</code> <code>data</code> 和 <code>header</code> 选项。前者已经作为第一个参数提供，后两者的的替代选项是 <code>body</code> 和 <code>headers</code>。</p><p><code>request</code> 会自动保存响应的 Cookie，并在请求时附加对应的 Cookie，同时完善了以下选项:</p><ul><li><code>method</code> 额外支持小写的方法名</li><li><code>body</code> 额外支持 <code>URLSearchParams</code> 和 <code>null</code></li><li><code>headers</code> 额外支持 <code>Headers</code> 实例与数组格式的 Headers</li><li>新增 <code>cookieScope</code> 控制附带的 Cookie 范围 (默认为 <code>url</code>)</li><li>新增 <code>cookieStore</code> 控制请求时读取和响应时写入的 CookieStore 实例 (默认为内置全局实例)</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在微信基础库 <code>3.2.3</code> 版本及以上，你可以设置 <code>redirect: manual</code> 到每一个请求，这样状态码为 301 的请求会被原样保留而不是直接跳转，重定向请求下发的 Cookie 也可以被记录。</p><p>框架无法解析重定向响应中的 Cookie，所以其他版本的基础库或者未设置 <code>redirect</code> 选项发出的请求仍然受到限制。</p></div><p><code>request</code> 会返回一个 <code>Promise</code>，你可以通过 <code>then</code> 方法获取响应，或者通过 <code>catch</code> 方法捕获错误。</p><p>请求成功 (任何状态码) 会触发 <code>.then</code> 回调，返回包含下列信息的对象:</p><ul><li>status: 数字形式的响应状态码</li><li>headers: Headers 实例</li><li>data: 响应数据</li></ul><p>如果请求失败 (基础库、底层或网络问题)，会走 <code>.catch</code> 逻辑，返回一个 <code>RequestError</code> 错误。你可以通过 <code>message</code> 属性获取错误信息，或者通过 <code>errno</code> 属性获取错误码。</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2><p>框架提供了 <code>Cookie</code> 来存储/序列化 Cookie 数据。</p><p>Cookie 类有如下内容:</p><p>静态成员:</p><ul><li><code>name: string</code>: Cookie 名称</li><li><code>value: string</code>: Cookie 值</li><li><code>domain: string</code>: Cookie 域名</li><li><code>path: string</code>: Cookie 路径</li><li><code>expires: number | &quot;session&quot; | &quot;outdate&quot;</code>: 过期时间</li><li><code>httpOnly: boolean</code>: 是否只在 HTTP 下使用</li></ul><p>方法:</p><ul><li><p><code>isExpired(): boolean</code>: 判断 Cookie 是否已过期</p></li><li><p><code>isPersistence(): boolean</code>: 判断 Cookie 是否可持久化</p></li><li><p><code>isDomainMatched(domain: string): boolean</code>: 判断 Cookie 是否匹配域名</p><ul><li><code>domain</code>: 域名</li></ul></li><li><p><code>isPathMatched(path: string): boolean</code>: 判断 Cookie 是否匹配路径</p><ul><li><code>path</code>: 路径</li></ul></li><li><p><code>toString(): string</code>: 将 Cookie 转换为字符串</p></li><li><p><code>toJSON(): CookieType</code>: 将 Cookie 序列化为对象</p></li></ul><p>其中 CookieType 是序列化的 Cookie 对象类型，包含以下字段:</p><ul><li><code>name</code>: Cookie 名称</li><li><code>value</code>: Cookie 值</li><li><code>path</code>: Cookie 路径</li><li><code>expires</code>: 过期时间 (Date 对象)</li><li><code>maxAge</code>: 最大存活时间 (秒)</li><li><code>domain</code>: Cookie 域名</li><li><code>secure</code>: 是否只在 HTTPS 下使用</li><li><code>httpOnly</code>: 是否只在 HTTP 下使用</li><li><code>sameSite</code>: 是否只在同域下使用</li></ul><p>其中 <code>name</code> 和 <code>value</code> 时必须的，其他项是可选的。</p><h2 id="cookiestore" tabindex="-1"><a class="header-anchor" href="#cookiestore" aria-hidden="true">#</a> CookieStore</h2><p>框架提供 <code>CookieStore</code> 对 Cookie 进行存储。创建 <code>CookieStore</code> 实后，你可以在其中读取/写入 Cookie:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cookieStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CookieStore</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 <code>key</code> 是可选的，不填会使用默认值。我们的建议是在 <code>app.js</code> 手动初始化一个全局实例并挂载到 <code>App</code> 对象上全局使用。如果你的不同分包之间需要隔离，可在各分包内初始化。</p><div class="hint-container caution"><p class="hint-container-title">创建多个相同 key 的实例会引发问题</p></div><p><code>CookieStore</code> 实例提供了以下方法：</p><ul><li><code>get(name, options)</code>: 获取 Cookie</li><li><code>getValue(name, options)</code>: 获取 Cookie 值</li><li><code>has(name, options)</code>: 是否有 Cookie</li><li><code>set(options)</code>: 设置 Cookie</li><li><code>list()</code>: 按 domain 结构获取全部 Cookie</li><li><code>getCookies(options)</code>: 获取满足条件的 Cookie</li><li><code>getAllCookies()</code>: 获取全部 Cookies</li><li><code>getCookiesMap(options)</code>: 获取满足条件的 Cookie 键值 Map</li><li><code>apply(cookies)</code>: 向存储中应用 Cookie</li><li><code>clear(domain?)</code>: 清除 <code>domain</code> 下的全部 cookie，不填 domain 则清除全部 Cookies</li><li><code>applyHeader(header, domainOrURL)</code>: 应用 header 中的 cookies</li><li><code>applyResponse(response, domainOrURL)</code>: 应用 response 中的 cookies，其中 response 为 <code>wx.request</code> 的 <code>success</code> 回调对象</li><li><code>getHeader(options)</code>: 获取 cookie header</li></ul><p>其中 <code>options</code> 为可选参数，支持以下选项:</p><ul><li><p>任意组合以下键值的对象</p><ul><li><code>domain</code>: 指定域名</li><li><code>path</code>: 指定路径</li></ul></li><li><p>字符串形式的 URL 地址</p></li></ul>`,28);function f(v,x){const d=t("ExternalLinkIcon");return a(),s("div",null,[p,n(" more "),u,e("ul",null,[k,e("li",null,[h,o(": 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 "),e("a",m,[o("移动解析HttpDNS"),i(d)])]),e("li",null,[C,o(": ttpDNS 服务商 Id。 HttpDNS 用法详见 "),e("a",_,[o("移动解析HttpDNS"),i(d)])]),S,q,b]),g])}const N=l(r,[["render",f],["__file","index.html.vue"]]);export{N as default};
