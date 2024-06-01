import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as o,b as p,d as n,a as c,w as l,e as a,o as i}from"./app-COzWPrAY.js";const r={},d=a(`<ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">$Page</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  Data <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  Custom <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> PageOptions<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Custom<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><p>参数:</p><ul><li><code>name</code>: 页面简称</li><li><code>options</code>: 页面选项</li></ul></li></ul><p>框架提供的页面注册器</p><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展"><span>扩展</span></a></h2><h3 id="onregister" tabindex="-1"><a class="header-anchor" href="#onregister"><span>onRegister</span></a></h3><ul><li>类型: <code>(): void</code></li></ul><p>在页面即将注册时调用</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此时 this 上尚未挂载小程序原生方法</p></div><h3 id="onapplaunch" tabindex="-1"><a class="header-anchor" href="#onapplaunch"><span>onAppLaunch</span></a></h3><ul><li><p>类型: <code>onAppLaunch(options: WechatMiniprogram.App.LaunchShowOption): void | Promise&lt;void&gt;</code></p></li><li><p>参数:</p><ul><li><code>options</code>: App 启动时的 <code>onLaunch</code> 参数</li></ul></li></ul><p>在 <code>App.onLaunch</code> 触发时调用</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>框架在 App 启动时仅触发此方法，不会检测与等待异步方法返回。</p></div><h3 id="onawake" tabindex="-1"><a class="header-anchor" href="#onawake"><span>onAwake</span></a></h3><ul><li><p>类型: <code>onAwake(time: number): void | Promise&lt;void&gt;</code></p></li><li><p>参数:</p><ul><li><code>time</code>: 为本次休眠时间，单位 ms</li></ul></li></ul><p>在小程序从后台唤醒时调用</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>框架在 App 启动时仅触发此方法，不会检测与等待异步方法返回。</p></div><h3 id="onpreload" tabindex="-1"><a class="header-anchor" href="#onpreload"><span>onPreload</span></a></h3><ul><li><p>类型: <code>onPreload(options: PageQuery): void | Promise&lt;void&gt;</code></p></li><li><p>参数:</p><ul><li><code>options</code>: 为通过触发预加载携带参数生成的参数对象</li></ul></li></ul><p>预加载生命周期，可在其他页面中使用 <code>this.$preload(pageNameWithArgs | pageUrlWIthArgs)</code> 触发特定页面的预加载周期。</p><p>你可以在用户特定行为后根据用户行为漏斗特点预加载对应界面准备数据。</p><div class="hint-container warning"><p class="hint-container-title">小程序分包</p><p>由于小程序每个分包下页面会在首次请求跳转到某个分包页面时注册，所以此时进入的首个页面无法触发 <code>onPreload</code> 周期。</p></div><h3 id="onnavigate" tabindex="-1"><a class="header-anchor" href="#onnavigate"><span>onNavigate</span></a></h3><ul><li><p>类型: <code>onNavigate(options: PageQuery): void | Promise&lt;void&gt;</code></p></li><li><p>参数:</p><ul><li><code>options</code>: 为通过触发预加载携带参数生成的参数对象</li></ul></li></ul><p>页面即将被跳转时触发。</p><p>在进行页面间跳转时吗，会先执行对应页面的 <code>onNavigate</code> 再进行跳转。</p><p>建议将低耗时 (&lt; 150ms) 的操作放入 <code>onNavigate</code> 周期，并在 <code>onLoad</code> 时判断 <code>onNavigate</code> 是否成功触发。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为触发 <code>onNavigate</code> 生命周期，跳转必须使用框架包装的方法:</p><ul><li><code>$go</code></li><li><code>$redirect</code></li><li><code>$switch</code></li><li><code>$reLaunch</code></li><li><code>$bindGo</code></li><li><code>$bindRedirect</code></li><li><code>$bindSwitch</code></li><li><code>$bindReLaunch</code></li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于同步或异步的 <code>onNavigate</code> 均受到支持，为了避免执行时间较长的方法阻塞跳转、迷惑用户，在达到 <code>maxDelay</code> 时长后框架会强制进行跳转，而不再等待 <code>onNavigate</code> 完成。</p><p>另外由于小程序每个分包下页面会在首次请求跳转到某个分包页面时注册，所以此时进入的首个页面无法触发 <code>onNavigate</code> 周期。</p></div><h2 id="注入" tabindex="-1"><a class="header-anchor" href="#注入"><span>注入</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>$name</span></a></h3><ul><li>类型: <code>string</code></li></ul><p>当前页面名称</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state"><span>$state</span></a></h3><ul><li>类型: <code>Record&lt;string, any&gt;</code></li></ul><p>框架生成的页面状态</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以考虑将部分自定义扩展的数据注入到此处</p></div><ul><li><code>$state.firstOpen</code>: 是否是第一个打开的页面</li></ul><h3 id="事件派发" tabindex="-1"><a class="header-anchor" href="#事件派发"><span>事件派发</span></a></h3>`,37),u=a(`<ul><li><p><code>$on(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): void</code>: 监听 <code>type</code> 事件</p></li><li><p><code>$emit(type:string, event?:any): void</code>: 同步触发 <code>type</code> 事件</p></li><li><p><code>$emitAsync(type:string, event?:any): Promise&lt;void&gt;</code>: 异步触发 <code>type</code> 事件并接受回调</p></li><li><p><code>$off(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): Promise&lt;void&gt;</code>: 取消监听 <code>type</code> 的 <code>handler</code> 事件或全部事件 (当未传入 <code>handler</code>)</p></li></ul><h3 id="refs" tabindex="-1"><a class="header-anchor" href="#refs"><span>$refs</span></a></h3><ul><li>类型: <code>Record&lt;string, ComponentInstance&gt;</code></li></ul><p>指定了 ref 的子组件实例 Map，可用于获取子组件引用</p><div class="hint-container tip"><p class="hint-container-title">示例</p><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">binding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRef1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token function">$Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>customComp<span class="token punctuation">;</span> <span class="token comment">// 根据 ref 属性获取子组件的实例引用</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span>$</span></a></h3><p>父子组件沟通器</p><p>提供了通过 <code>binding=&quot;$&quot;</code> 形式建立父子组件/页面与组件沟通的能力</p><h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload"><span>$preload</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token function">$preload</span><span class="token punctuation">(</span>pageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>pageName</code>: 页面简称，可以带上 <code>queryString</code></li></ul></li></ul><p>提前预加载指定页面，即触发对应页面的 <code>onPreload</code> 生命周期</p><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go"><span>$go</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token function">$go</span><span class="token punctuation">(</span>
  pageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>NavigateToSuccessCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>pageName</code>: 页面简称，可以带上 <code>queryString</code></li></ul></li></ul><p>导航到指定页面</p><p>本函数是 <code>wx.navigateTo</code> 的封装</p><div class="hint-container tip"><p class="hint-container-title">示例</p><pre><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$go</span><span class="token punctuation">(</span><span class="token string">&quot;play?vid=xxx&amp;cid=xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect"><span>$redirect</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token function">$redirect</span><span class="token punctuation">(</span>
  pageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>pageName</code>: 页面简称，可以带上 <code>queryString</code></li></ul></li></ul><p>重定向到指定页面, 即<strong>替换页面，不产生历史</strong>。</p><p>本函数是 <code>wx.redirectTo</code> 的封装</p><div class="hint-container tip"><p class="hint-container-title">示例</p><pre><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$redirect</span><span class="token punctuation">(</span><span class="token string">&quot;about?year=2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>$switch</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> $<span class="token keyword">switch</span><span class="token punctuation">(</span>
  pageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>pageName</code>: 页面简称，可以带上 <code>queryString</code></li></ul></li></ul><p>跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面</p><p>本函数是 <code>wx.switchTab</code> 的封装</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>路径参数只用于触发 <code>onNavigate</code> (<code>wx.switchTab</code> 不支持参数)</p></div><div class="hint-container tip"><p class="hint-container-title">示例</p><pre><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="relaunch" tabindex="-1"><a class="header-anchor" href="#relaunch"><span>$reLaunch</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token function">$reLaunch</span><span class="token punctuation">(</span>
  pageName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>pageName</code>: 页面简称，可以带上 <code>queryString</code></li></ul></li></ul><p>关闭所有页面，之后打开到应用内的某个页面</p><p>本函数是 <code>wx.reLaunch</code> 的封装</p><div class="hint-container tip"><p class="hint-container-title">示例</p><pre><code class="language-js"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$launch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="back" tabindex="-1"><a class="header-anchor" href="#back"><span>$back</span></a></h3><ul><li><p>类型:</p><pre><code class="language-ts"><span class="token keyword">function</span> <span class="token function">$back</span><span class="token punctuation">(</span>delta <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></li><li><p>参数:</p><ul><li><code>delta</code>: 后退的层级数，默认为 <code>1</code></li></ul></li></ul><p>本函数是 <code>wx.navigateBack</code> 的简单封装</p><h3 id="bindgo" tabindex="-1"><a class="header-anchor" href="#bindgo"><span>$bindGo</span></a></h3><p><code>$go</code> 的视图层代理方法，你需要在视图层使用 data-set 来绑定跳转配置:</p><ul><li><code>data-url</code> 跳转到的页面简称或绝对路径，可带参数</li><li><code>data-before</code> 跳转前执行</li><li><code>data-after</code> 跳转后执行</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">catch:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindGo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-before</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickBefore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  click go
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="bindredirect" tabindex="-1"><a class="header-anchor" href="#bindredirect"><span>$bindRedirect</span></a></h3><p><code>$redirect</code> 的视图层代理方法，你需要在视图层使用 data-set 来绑定跳转配置:</p><ul><li><code>data-url</code> 跳转到的页面简称或绝对路径，可带参数</li><li><code>data-before</code> 跳转前执行</li><li><code>data-after</code> 跳转后执行</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name"><span class="token namespace">catch:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindRedirect<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/play<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-after</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickAfter<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  click redirect
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="bindswitch" tabindex="-1"><a class="header-anchor" href="#bindswitch"><span>$bindSwitch</span></a></h3><p><code>$switch</code> 的视图层代理方法，你需要在视图层使用 data-set 来绑定跳转配置:</p><ul><li><p><code>data-url</code> 跳转到的页面简称或绝对路径，可带参数</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>由于 <code>wx.switchTab()</code> 不支持参数，参数仅用于触发对应页面的 <code>onNavigate</code> 生命周期</p></div></li><li><p><code>data-before</code> 跳转前执行</p></li><li><p><code>data-after</code> 跳转后执行</p></li></ul><h3 id="bindrelaunch" tabindex="-1"><a class="header-anchor" href="#bindrelaunch"><span>$bindRelaunch</span></a></h3><p><code>$reLaunch</code> 的视图层代理方法，你需要在视图层使用 data-set 来绑定跳转配置:</p><ul><li><code>data-url</code> 跳转到的页面简称或绝对路径，可带参数</li><li><code>data-before</code> 跳转前执行</li><li><code>data-after</code> 跳转后执行</li></ul><h3 id="bindback" tabindex="-1"><a class="header-anchor" href="#bindback"><span>$bindBack</span></a></h3><p><code>$back</code> 的视图层代理方法，你需要在视图层使用 dataset 来绑定跳转配置:</p><ul><li><code>data-delta</code> 回退层数</li><li><code>data-before</code> 跳转前执行</li><li><code>data-after</code> 跳转后执行</li></ul>`,52);function k(h,g){const s=t("RouteLink");return i(),o("div",null,[d,p("p",null,[n("事件派发相关，均为 "),c(s,{to:"/enhance/api/emitter.html"},{default:l(()=>[n("$Emitter")]),_:1}),n(" 实例属性或方法")]),u])}const v=e(r,[["render",k],["__file","page.html.vue"]]),f=JSON.parse('{"path":"/enhance/api/page.html","title":"$Page","lang":"zh-CN","frontmatter":{"title":"$Page","order":4,"description":"类型: 参数: name: 页面简称 options: 页面选项 框架提供的页面注册器 扩展 onRegister 类型: (): void 在页面即将注册时调用 注意 此时 this 上尚未挂载小程序原生方法 onAppLaunch 类型: onAppLaunch(options: WechatMiniprogram.App.LaunchShowOp...","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/enhance/api/page.html"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"$Page"}],["meta",{"property":"og:description","content":"类型: 参数: name: 页面简称 options: 页面选项 框架提供的页面注册器 扩展 onRegister 类型: (): void 在页面即将注册时调用 注意 此时 this 上尚未挂载小程序原生方法 onAppLaunch 类型: onAppLaunch(options: WechatMiniprogram.App.LaunchShowOp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T12:05:10.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-01T12:05:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"$Page\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T12:05:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[{"level":3,"title":"onRegister","slug":"onregister","link":"#onregister","children":[]},{"level":3,"title":"onAppLaunch","slug":"onapplaunch","link":"#onapplaunch","children":[]},{"level":3,"title":"onAwake","slug":"onawake","link":"#onawake","children":[]},{"level":3,"title":"onPreload","slug":"onpreload","link":"#onpreload","children":[]},{"level":3,"title":"onNavigate","slug":"onnavigate","link":"#onnavigate","children":[]}]},{"level":2,"title":"注入","slug":"注入","link":"#注入","children":[{"level":3,"title":"$name","slug":"name","link":"#name","children":[]},{"level":3,"title":"$state","slug":"state","link":"#state","children":[]},{"level":3,"title":"事件派发","slug":"事件派发","link":"#事件派发","children":[]},{"level":3,"title":"$refs","slug":"refs","link":"#refs","children":[]},{"level":3,"title":"$","slug":"","link":"#","children":[]},{"level":3,"title":"$preload","slug":"preload","link":"#preload","children":[]},{"level":3,"title":"$go","slug":"go","link":"#go","children":[]},{"level":3,"title":"$redirect","slug":"redirect","link":"#redirect","children":[]},{"level":3,"title":"$switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"$reLaunch","slug":"relaunch","link":"#relaunch","children":[]},{"level":3,"title":"$back","slug":"back","link":"#back","children":[]},{"level":3,"title":"$bindGo","slug":"bindgo","link":"#bindgo","children":[]},{"level":3,"title":"$bindRedirect","slug":"bindredirect","link":"#bindredirect","children":[]},{"level":3,"title":"$bindSwitch","slug":"bindswitch","link":"#bindswitch","children":[]},{"level":3,"title":"$bindRelaunch","slug":"bindrelaunch","link":"#bindrelaunch","children":[]},{"level":3,"title":"$bindBack","slug":"bindback","link":"#bindback","children":[]}]}],"git":{"createdTime":1717243510000,"updatedTime":1717243510000,"contributors":[{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1491},"filePathRelative":"enhance/api/page.md","localizedDate":"2024年6月1日","autoDesc":true,"excerpt":"<ul>\\n<li>\\n<p>类型:</p>\\n<pre><code class=\\"language-ts\\"><span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">$Page</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span>\\n  Data <span class=\\"token keyword\\">extends</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">any</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n  Custom <span class=\\"token keyword\\">extends</span> Record<span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token builtin\\">any</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> options<span class=\\"token operator\\">:</span> PageOptions<span class=\\"token operator\\">&lt;</span>Data<span class=\\"token punctuation\\">,</span> Custom<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">void</span><span class=\\"token punctuation\\">;</span>\\n</code></pre>\\n<p>参数:</p>\\n<ul>\\n<li><code>name</code>: 页面简称</li>\\n<li><code>options</code>: 页面选项</li>\\n</ul>\\n</li>\\n</ul>"}');export{v as comp,f as data};
