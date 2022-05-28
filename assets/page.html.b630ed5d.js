import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as i,a as p,b as c,w as l,e as n,d as a}from"./app.cc4e183b.js";const d={},r=n(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> $Page</h1><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">$Page</span><span class="token generic class-name"><span class="token operator">&lt;</span>
  Data <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  Custom <span class="token keyword">extends</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> options<span class="token operator">:</span> PageOptions<span class="token operator">&lt;</span>Data<span class="token punctuation">,</span> Custom<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570:</p><ul><li><code>name</code>: \u9875\u9762\u7B80\u79F0</li><li><code>options</code>: \u9875\u9762\u9009\u9879</li></ul></li></ul><p>\u6846\u67B6\u63D0\u4F9B\u7684\u9875\u9762\u6CE8\u518C\u5668</p><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><h3 id="onregister" tabindex="-1"><a class="header-anchor" href="#onregister" aria-hidden="true">#</a> onRegister</h3><ul><li>\u7C7B\u578B: <code>(): void</code></li></ul><p>\u5728\u9875\u9762\u5373\u5C06\u6CE8\u518C\u65F6\u8C03\u7528</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6B64\u65F6 this \u4E0A\u5C1A\u672A\u6302\u8F7D\u5C0F\u7A0B\u5E8F\u539F\u751F\u65B9\u6CD5</p></div><h3 id="onapplaunch" tabindex="-1"><a class="header-anchor" href="#onapplaunch" aria-hidden="true">#</a> onAppLaunch</h3><ul><li><p>\u7C7B\u578B: <code>onAppLaunch(options: WechatMiniprogram.App.LaunchShowOption): void | Promise&lt;void&gt;</code></p></li><li><p>\u53C2\u6570:</p><ul><li><code>options</code>: App \u542F\u52A8\u65F6\u7684 <code>onLaunch</code> \u53C2\u6570</li></ul></li></ul><p>\u5728 <code>App.onLaunch</code> \u89E6\u53D1\u65F6\u8C03\u7528</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6846\u67B6\u5728 App \u542F\u52A8\u65F6\u4EC5\u89E6\u53D1\u6B64\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u68C0\u6D4B\u4E0E\u7B49\u5F85\u5F02\u6B65\u65B9\u6CD5\u8FD4\u56DE\u3002</p></div><h3 id="onawake" tabindex="-1"><a class="header-anchor" href="#onawake" aria-hidden="true">#</a> onAwake</h3><ul><li><p>\u7C7B\u578B: <code>onAwake(time: number): void | Promise&lt;void&gt;</code></p></li><li><p>\u53C2\u6570:</p><ul><li><code>time</code>: \u4E3A\u672C\u6B21\u4F11\u7720\u65F6\u95F4\uFF0C\u5355\u4F4D ms</li></ul></li></ul><p>\u5728\u5C0F\u7A0B\u5E8F\u4ECE\u540E\u53F0\u5524\u9192\u65F6\u8C03\u7528</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6846\u67B6\u5728 App \u542F\u52A8\u65F6\u4EC5\u89E6\u53D1\u6B64\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u68C0\u6D4B\u4E0E\u7B49\u5F85\u5F02\u6B65\u65B9\u6CD5\u8FD4\u56DE\u3002</p></div><h3 id="onpreload" tabindex="-1"><a class="header-anchor" href="#onpreload" aria-hidden="true">#</a> onPreload</h3><ul><li><p>\u7C7B\u578B: <code>onPreload(options: PageQuery): void | Promise&lt;void&gt;</code></p></li><li><p>\u53C2\u6570:</p><ul><li><code>options</code>: \u4E3A\u901A\u8FC7\u89E6\u53D1\u9884\u52A0\u8F7D\u643A\u5E26\u53C2\u6570\u751F\u6210\u7684\u53C2\u6570\u5BF9\u8C61</li></ul></li></ul><p>\u9884\u52A0\u8F7D\u751F\u547D\u5468\u671F\uFF0C\u53EF\u5728\u5176\u4ED6\u9875\u9762\u4E2D\u4F7F\u7528 <code>this.$preload(pageNameWithArgs | pageUrlWIthArgs)</code> \u89E6\u53D1\u7279\u5B9A\u9875\u9762\u7684\u9884\u52A0\u8F7D\u5468\u671F\u3002</p><p>\u4F60\u53EF\u4EE5\u5728\u7528\u6237\u7279\u5B9A\u884C\u4E3A\u540E\u6839\u636E\u7528\u6237\u884C\u4E3A\u6F0F\u6597\u7279\u70B9\u9884\u52A0\u8F7D\u5BF9\u5E94\u754C\u9762\u51C6\u5907\u6570\u636E\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u5C0F\u7A0B\u5E8F\u5206\u5305</p><p>\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u6BCF\u4E2A\u5206\u5305\u4E0B\u9875\u9762\u4F1A\u5728\u9996\u6B21\u8BF7\u6C42\u8DF3\u8F6C\u5230\u67D0\u4E2A\u5206\u5305\u9875\u9762\u65F6\u6CE8\u518C\uFF0C\u6240\u4EE5\u6B64\u65F6\u8FDB\u5165\u7684\u9996\u4E2A\u9875\u9762\u65E0\u6CD5\u89E6\u53D1 <code>onPreload</code> \u5468\u671F\u3002</p></div><h3 id="onnavigate" tabindex="-1"><a class="header-anchor" href="#onnavigate" aria-hidden="true">#</a> onNavigate</h3><ul><li><p>\u7C7B\u578B: <code>onNavigate(options: PageQuery): void | Promise&lt;void&gt;</code></p></li><li><p>\u53C2\u6570:</p><ul><li><code>options</code>: \u4E3A\u901A\u8FC7\u89E6\u53D1\u9884\u52A0\u8F7D\u643A\u5E26\u53C2\u6570\u751F\u6210\u7684\u53C2\u6570\u5BF9\u8C61</li></ul></li></ul><p>\u9875\u9762\u5373\u5C06\u88AB\u8DF3\u8F6C\u65F6\u89E6\u53D1\u3002</p><p>\u5728\u8FDB\u884C\u9875\u9762\u95F4\u8DF3\u8F6C\u65F6\u5417\uFF0C\u4F1A\u5148\u6267\u884C\u5BF9\u5E94\u9875\u9762\u7684 <code>onNavigate</code> \u518D\u8FDB\u884C\u8DF3\u8F6C\u3002</p><p>\u5EFA\u8BAE\u5C06\u4F4E\u8017\u65F6 (&lt; 150ms) \u7684\u64CD\u4F5C\u653E\u5165 <code>onNavigate</code> \u5468\u671F\uFF0C\u5E76\u5728 <code>onLoad</code> \u65F6\u5224\u65AD <code>onNavigate</code> \u662F\u5426\u6210\u529F\u89E6\u53D1\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E3A\u89E6\u53D1 <code>onNavigate</code> \u751F\u547D\u5468\u671F\uFF0C\u8DF3\u8F6C\u5FC5\u987B\u4F7F\u7528\u6846\u67B6\u5305\u88C5\u7684\u65B9\u6CD5:</p><ul><li><code>$go</code></li><li><code>$redirect</code></li><li><code>$switch</code></li><li><code>$reLaunch</code></li><li><code>$bindGo</code></li><li><code>$bindRedirect</code></li><li><code>$bindSwitch</code></li><li><code>$bindReLaunch</code></li></ul></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E\u540C\u6B65\u6216\u5F02\u6B65\u7684 <code>onNavigate</code> \u5747\u53D7\u5230\u652F\u6301\uFF0C\u4E3A\u4E86\u907F\u514D\u6267\u884C\u65F6\u95F4\u8F83\u957F\u7684\u65B9\u6CD5\u963B\u585E\u8DF3\u8F6C\u3001\u8FF7\u60D1\u7528\u6237\uFF0C\u5728\u8FBE\u5230 <code>maxDelay</code> \u65F6\u957F\u540E\u6846\u67B6\u4F1A\u5F3A\u5236\u8FDB\u884C\u8DF3\u8F6C\uFF0C\u800C\u4E0D\u518D\u7B49\u5F85 <code>onNavigate</code> \u5B8C\u6210\u3002</p><p>\u53E6\u5916\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u6BCF\u4E2A\u5206\u5305\u4E0B\u9875\u9762\u4F1A\u5728\u9996\u6B21\u8BF7\u6C42\u8DF3\u8F6C\u5230\u67D0\u4E2A\u5206\u5305\u9875\u9762\u65F6\u6CE8\u518C\uFF0C\u6240\u4EE5\u6B64\u65F6\u8FDB\u5165\u7684\u9996\u4E2A\u9875\u9762\u65E0\u6CD5\u89E6\u53D1 <code>onNavigate</code> \u5468\u671F\u3002</p></div><h2 id="\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165" aria-hidden="true">#</a> \u6CE8\u5165</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> $name</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u5F53\u524D\u9875\u9762\u540D\u79F0</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> $state</h3><ul><li>\u7C7B\u578B: <code>Record&lt;string, any&gt;</code></li></ul><p>\u6846\u67B6\u751F\u6210\u7684\u9875\u9762\u72B6\u6001</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F60\u53EF\u4EE5\u8003\u8651\u5C06\u90E8\u5206\u81EA\u5B9A\u4E49\u6269\u5C55\u7684\u6570\u636E\u6CE8\u5165\u5230\u6B64\u5904</p></div><ul><li><code>$state.firstOpen</code>: \u662F\u5426\u662F\u7B2C\u4E00\u4E2A\u6253\u5F00\u7684\u9875\u9762</li></ul><h3 id="\u4E8B\u4EF6\u6D3E\u53D1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u6D3E\u53D1" aria-hidden="true">#</a> \u4E8B\u4EF6\u6D3E\u53D1</h3>`,38),u=a("\u4E8B\u4EF6\u6D3E\u53D1\u76F8\u5173\uFF0C\u5747\u4E3A "),k=a("$Emitter"),v=a(" \u5B9E\u4F8B\u5C5E\u6027\u6216\u65B9\u6CD5"),h=n(`<ul><li><p><code>$on(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): void</code>: \u76D1\u542C <code>type</code> \u4E8B\u4EF6</p></li><li><p><code>$emit(type:string, event?:any): void</code>: \u540C\u6B65\u89E6\u53D1 <code>type</code> \u4E8B\u4EF6</p></li><li><p><code>$emitAsync(type:string, event?:any): Promise&lt;void&gt;</code>: \u5F02\u6B65\u89E6\u53D1 <code>type</code> \u4E8B\u4EF6\u5E76\u63A5\u53D7\u56DE\u8C03</p></li><li><p><code>$off(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): Promise&lt;void&gt;</code>: \u53D6\u6D88\u76D1\u542C <code>type</code> \u7684 <code>handler</code> \u4E8B\u4EF6\u6216\u5168\u90E8\u4E8B\u4EF6 (\u5F53\u672A\u4F20\u5165 <code>handler</code>)</p></li></ul><h3 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h3><ul><li>\u7C7B\u578B: <code>Record&lt;string, ComponentInstance&gt;</code></li></ul><p>\u6307\u5B9A\u4E86 ref \u7684\u5B50\u7EC4\u4EF6\u5B9E\u4F8B Map\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5F15\u7528</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">binding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRef1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>customComp<span class="token punctuation">;</span> <span class="token comment">// \u6839\u636E ref \u5C5E\u6027\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5F15\u7528</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $</h3><p>\u7236\u5B50\u7EC4\u4EF6\u6C9F\u901A\u5668</p><p>\u63D0\u4F9B\u4E86\u901A\u8FC7 <code>binding=&quot;$&quot;</code> \u5F62\u5F0F\u5EFA\u7ACB\u7236\u5B50\u7EC4\u4EF6/\u9875\u9762\u4E0E\u7EC4\u4EF6\u6C9F\u901A\u7684\u80FD\u529B</p><h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> $preload</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$preload</span><span class="token punctuation">(</span>pagename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u63D0\u524D\u9884\u52A0\u8F7D\u6307\u5B9A\u9875\u9762\uFF0C\u5373\u89E6\u53D1\u5BF9\u5E94\u9875\u9762\u7684 <code>onPreload</code> \u751F\u547D\u5468\u671F</p><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> $go</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$go</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>NavigateToSuccessCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u5BFC\u822A\u5230\u6307\u5B9A\u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.navigateTo</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$go</span><span class="token punctuation">(</span><span class="token string">&quot;play?vid=xxx&amp;cid=xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> $redirect</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$redirect</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u9875\u9762, \u5373<strong>\u66FF\u6362\u9875\u9762\uFF0C\u4E0D\u4EA7\u751F\u5386\u53F2</strong>\u3002</p><p>\u672C\u51FD\u6570\u662F <code>wx.redirectTo</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$redirect</span><span class="token punctuation">(</span><span class="token string">&quot;about?year=2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> $switch</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> $<span class="token keyword">switch</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u8DF3\u8F6C\u5230\u6307\u5B9A tabBar \u9875\u9762\uFF0C\u5E76\u5173\u95ED\u5176\u4ED6\u6240\u6709\u975E tabBar \u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.switchTab</code> \u7684\u5C01\u88C5</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8DEF\u5F84\u53C2\u6570\u53EA\u7528\u4E8E\u89E6\u53D1 <code>onNavigate</code> (<code>wx.switchTab</code> \u4E0D\u652F\u6301\u53C2\u6570)</p></div><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="relaunch" tabindex="-1"><a class="header-anchor" href="#relaunch" aria-hidden="true">#</a> $reLaunch</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$reLaunch</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u5173\u95ED\u6240\u6709\u9875\u9762\uFF0C\u4E4B\u540E\u6253\u5F00\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.reLaunch</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$launch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="back" tabindex="-1"><a class="header-anchor" href="#back" aria-hidden="true">#</a> $back</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$back</span><span class="token punctuation">(</span>delta <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>delta</code>: \u540E\u9000\u7684\u5C42\u7EA7\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>1</code></li></ul></li></ul><p>\u672C\u51FD\u6570\u662F <code>wx.navigateBack</code> \u7684\u7B80\u5355\u5C01\u88C5</p><h3 id="bindgo" tabindex="-1"><a class="header-anchor" href="#bindgo" aria-hidden="true">#</a> $bindGo</h3><p><code>$go</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindGo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-before</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickBefore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  click go
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="bindredirect" tabindex="-1"><a class="header-anchor" href="#bindredirect" aria-hidden="true">#</a> $bindRedirect</h3><p><code>$redirect</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindRedirect<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/play<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-after</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickAfter<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  click redirect
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="bindswitch" tabindex="-1"><a class="header-anchor" href="#bindswitch" aria-hidden="true">#</a> $bindSwitch</h3><p><code>$switch</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><p><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E <code>wx.switchTab()</code> \u4E0D\u652F\u6301\u53C2\u6570\uFF0C\u53C2\u6570\u4EC5\u7528\u4E8E\u89E6\u53D1\u5BF9\u5E94\u9875\u9762\u7684 <code>onNavigate</code> \u751F\u547D\u5468\u671F</p></div></li><li><p><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</p></li><li><p><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</p></li></ul><h3 id="bindrelaunch" tabindex="-1"><a class="header-anchor" href="#bindrelaunch" aria-hidden="true">#</a> $bindRelaunch</h3><p><code>$reLaunch</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul>`,49);function m(g,b){const s=t("RouterLink");return o(),i("div",null,[r,p("p",null,[u,c(s,{to:"/api/enhance/emitter.html"},{default:l(()=>[k]),_:1}),v]),h])}var x=e(d,[["render",m],["__file","page.html.vue"]]);export{x as default};
