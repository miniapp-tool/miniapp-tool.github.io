import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as t,o as c}from"./app-C_XCWVIz.js";const l={};function a(d,e){return c(),i("div",null,e[0]||(e[0]=[t('<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h1><h2 id="cookie-对象" tabindex="-1"><a class="header-anchor" href="#cookie-对象"><span>Cookie 对象</span></a></h2><p><code>@mptool/net</code> 通过如下的对象格式格式生成/序列化 Cookie:</p><ul><li><code>name</code>: Cookie 名称</li><li><code>value</code>: Cookie 值</li><li><code>path</code>: Cookie 路径</li><li><code>expires</code>: 过期时间 (Date 对象)</li><li><code>maxAge</code>: 最大存活时间 (秒)</li><li><code>domain</code>: Cookie 域名</li><li><code>secure</code>: 是否只在 HTTPS 下使用</li><li><code>httpOnly</code>: 是否只在 HTTP 下使用</li><li><code>sameSite</code>: 是否只在同域下使用</li></ul><p>其中 <code>name</code> 和 <code>value</code> 时必须的，其他项是可选的。</p><h2 id="cookie-类" tabindex="-1"><a class="header-anchor" href="#cookie-类"><span>Cookie 类</span></a></h2><p><code>@mptool/net</code> 有一个 <code>Cookie</code> 类，用于处理 Cookie 对象。</p><p>构造函数:</p><ul><li><p><code>constructor(cookie: CookieType)</code></p><ul><li><code>cookie</code>: Cookie 对象</li></ul></li></ul><p>静态成员:</p><ul><li><code>name: string</code>: Cookie 名称</li><li><code>value: string</code>: Cookie 值</li><li><code>domain: string</code>: Cookie 域名</li><li><code>path: string</code>: Cookie 路径</li><li><code>expires: number | &quot;session&quot; | &quot;outdate&quot;</code>: 过期时间</li><li><code>httpOnly: boolean</code>: 是否只在 HTTP 下使用</li></ul><p>方法:</p><ul><li><p><code>isExpired(): boolean</code>: 判断 Cookie 是否已过期</p></li><li><p><code>isPersistence(): boolean</code>: 判断 Cookie 是否可持久化</p></li><li><p><code>isDomainMatched(domain: string): boolean</code>: 判断 Cookie 是否匹配域名</p><ul><li><code>domain</code>: 域名</li></ul></li><li><p><code>isPathMatched(path: string): boolean</code>: 判断 Cookie 是否匹配路径</p><ul><li><code>path</code>: 路径</li></ul></li><li><p><code>toString(): string</code>: 将 Cookie 转换为字符串</p></li><li><p><code>toJSON(): CookieType</code>: 将 Cookie 序列化为对象</p></li></ul>',13)]))}const r=o(l,[["render",a],["__file","cookie.html.vue"]]),s=JSON.parse('{"path":"/net/api/cookie.html","title":"Cookie","lang":"zh-CN","frontmatter":{"description":"Cookie Cookie 对象 @mptool/net 通过如下的对象格式格式生成/序列化 Cookie: name: Cookie 名称 value: Cookie 值 path: Cookie 路径 expires: 过期时间 (Date 对象) maxAge: 最大存活时间 (秒) domain: Cookie 域名 secure: 是否只在 ...","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/net/api/cookie.html"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"Cookie"}],["meta",{"property":"og:description","content":"Cookie Cookie 对象 @mptool/net 通过如下的对象格式格式生成/序列化 Cookie: name: Cookie 名称 value: Cookie 值 path: Cookie 路径 expires: 过期时间 (Date 对象) maxAge: 最大存活时间 (秒) domain: Cookie 域名 secure: 是否只在 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-07T13:47:37.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-09-07T13:47:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cookie\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-07T13:47:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Cookie 对象","slug":"cookie-对象","link":"#cookie-对象","children":[]},{"level":2,"title":"Cookie 类","slug":"cookie-类","link":"#cookie-类","children":[]}],"git":{"createdTime":1725716857000,"updatedTime":1725716857000,"contributors":[{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"net/api/cookie.md","localizedDate":"2024年9月7日","autoDesc":true,"excerpt":"\\n<h2>Cookie 对象</h2>\\n<p><code>@mptool/net</code> 通过如下的对象格式格式生成/序列化 Cookie:</p>\\n<ul>\\n<li><code>name</code>: Cookie 名称</li>\\n<li><code>value</code>: Cookie 值</li>\\n<li><code>path</code>: Cookie 路径</li>\\n<li><code>expires</code>: 过期时间 (Date 对象)</li>\\n<li><code>maxAge</code>: 最大存活时间 (秒)</li>\\n<li><code>domain</code>: Cookie 域名</li>\\n<li><code>secure</code>: 是否只在 HTTPS 下使用</li>\\n<li><code>httpOnly</code>: 是否只在 HTTP 下使用</li>\\n<li><code>sameSite</code>: 是否只在同域下使用</li>\\n</ul>"}');export{r as comp,s as data};
