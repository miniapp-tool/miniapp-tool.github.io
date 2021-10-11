import{r as e,c as t,b as p,a as o,w as c,F as l,d as n,e as a,o as i}from"./app.fff708a8.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const u={},d=n(`<h1 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> $Component</h1><ul><li>\u7C7B\u578B: <code>$Component(options: ComponentOPtions): string</code></li></ul><p>\u6846\u67B6\u63D0\u4F9B\u7684\u7EC4\u4EF6\u6CE8\u518C\u5668\u3002</p><h2 id="\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165" aria-hidden="true">#</a> \u6CE8\u5165</h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> $id</h3><ul><li>\u7C7B\u578B: <code>number</code></li></ul><p>\u5F53\u524D\u7EC4\u4EF6\u7684\u552F\u4E00\u6807\u8BC6</p><h3 id="refid" tabindex="-1"><a class="header-anchor" href="#refid" aria-hidden="true">#</a> $refID</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u5F53\u524D\u7EC4\u4EF6\u4E0A\u7528\u4E8E\u7D22\u5F15\u7684 ref ID \u503C</p><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> $root</h3><ul><li>\u7C7B\u578B: <code>PageInstance</code></li></ul><p>\u5F53\u524D\u7EC4\u4EF6\u6240\u5C5E\u7684\u9875\u9762\u5B9E\u4F8B</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u53EA\u5728 <code>attached</code>, <code>ready</code> \u751F\u547D\u5468\u671F\u540E\u751F\u6548</p></div><h3 id="parent" tabindex="-1"><a class="header-anchor" href="#parent" aria-hidden="true">#</a> $parent</h3><ul><li>\u7C7B\u578B: <code>PageInstance | ComponentInstance</code></li></ul><p>\u5F53\u524D\u7EC4\u4EF6\u6240\u5C5E\u7684\u7236\u7EC4\u4EF6\u6216\u7236\u9875\u9762\u5B9E\u4F8B</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u53EA\u5728 <code>attached</code>, <code>ready</code> \u751F\u547D\u5468\u671F\u540E\u751F\u6548</p></div><h3 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h3><ul><li>\u7C7B\u578B: <code>Record&lt;string, ComponentInstance&gt;</code></li></ul><p>\u6307\u5B9A\u4E86 ref \u7684\u5B50\u7EC4\u4EF6\u5B9E\u4F8B Map\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5F15\u7528</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name">binding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRef1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lifetimes<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>customComp<span class="token punctuation">;</span> <span class="token comment">// \u6839\u636E ref \u5C5E\u6027\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5F15\u7528</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> $call</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$call</span><span class="token punctuation">(</span>method<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>method</code>: \u9700\u8981\u8C03\u7528\u7684\u65B9\u6CD5\u540D\u79F0</li><li><code>args</code>: \u4E3A\u9700\u8981\u4F20\u9012\u7684\u53C2\u6570</li></ul></li></ul><p>\u901A\u8FC7\u6D88\u606F\u7684\u65B9\u5F0F\u8C03\u7528\u7236\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u5373\u4F7F\u7236\u7EC4\u4EF6\u65B9\u6CD5\u4E0D\u5B58\u5728\u4E5F\u4E0D\u4F1A\u62A5\u9519</p><h3 id="emitter" tabindex="-1"><a class="header-anchor" href="#emitter" aria-hidden="true">#</a> $emitter</h3>`,26),k=a("\u4E8B\u4EF6\u6D3E\u53D1\u5668\uFF0C\u662F\u4E00\u4E2A "),m=a("$Emitter"),b=a(" \u5B9E\u4F8B"),h=n(`<ul><li><p><code>$emitter.on(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): void</code>: \u76D1\u542C <code>type</code> \u4E8B\u4EF6</p></li><li><p><code>$emitter.emit(type:string, event?:any): void</code>: \u540C\u6B65\u89E6\u53D1 <code>type</code> \u4E8B\u4EF6</p></li><li><p><code>$emitter.emitAsync(type:string, event?:any): Promise&lt;void&gt;</code>: \u5F02\u6B65\u89E6\u53D1 <code>type</code> \u4E8B\u4EF6\u5E76\u63A5\u53D7\u56DE\u8C03</p></li><li><p><code>$emitter.off(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): Promise&lt;void&gt;</code>: \u53D6\u6D88\u76D1\u542C <code>type</code> \u7684 <code>handler</code> \u4E8B\u4EF6\u6216\u5168\u90E8\u4E8B\u4EF6 (\u5F53\u672A\u4F20\u5165 <code>handler</code>)</p></li><li><p><code>$emitter.all</code>: \u4E8B\u4EF6\u540D\u79F0\u5230\u5DF2\u6CE8\u518C\u5904\u7406\u51FD\u6570\u7684\u6620\u5C04</p></li></ul><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> $</h3><p>\u7236\u5B50\u7EC4\u4EF6\u6C9F\u901A\u5668</p><p>\u63D0\u4F9B\u4E86\u901A\u8FC7 <code>binding=&quot;$&quot;</code> \u5F62\u5F0F\u5EFA\u7ACB\u7236\u5B50\u7EC4\u4EF6/\u9875\u9762\u4E0E\u7EC4\u4EF6\u6C9F\u901A\u7684\u80FD\u529B</p><h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> $preload</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$preload</span><span class="token punctuation">(</span>pagename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u63D0\u524D\u9884\u52A0\u8F7D\u6307\u5B9A\u9875\u9762\uFF0C\u5373\u89E6\u53D1\u5BF9\u5E94\u9875\u9762\u7684 <code>onPreload</code> \u751F\u547D\u5468\u671F</p><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> $go</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$go</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>NavigateToSuccessCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u5BFC\u822A\u5230\u6307\u5B9A\u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.navigateTo</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$go</span><span class="token punctuation">(</span><span class="token string">&quot;play?vid=xxx&amp;cid=xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> $redirect</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$redirect</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u9875\u9762, \u5373<strong>\u66FF\u6362\u9875\u9762\uFF0C\u4E0D\u4EA7\u751F\u5386\u53F2</strong>\u3002</p><p>\u672C\u51FD\u6570\u662F <code>wx.redirectTo</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$redirect</span><span class="token punctuation">(</span><span class="token string">&quot;about?year=2021&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> $switch</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> $<span class="token keyword">switch</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u8DF3\u8F6C\u5230\u6307\u5B9A tabBar \u9875\u9762\uFF0C\u5E76\u5173\u95ED\u5176\u4ED6\u6240\u6709\u975E tabBar \u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.switchTab</code> \u7684\u5C01\u88C5</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8DEF\u5F84\u53C2\u6570\u53EA\u7528\u4E8E\u89E6\u53D1 <code>onNavigate</code> (<code>wx.switchTab</code> \u4E0D\u652F\u6301\u53C2\u6570)</p></div><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="relaunch" tabindex="-1"><a class="header-anchor" href="#relaunch" aria-hidden="true">#</a> $reLaunch</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$reLaunch</span><span class="token punctuation">(</span>
  pagename<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>pagename</code>: \u9875\u9762\u7B80\u79F0\uFF0C\u53EF\u4EE5\u5E26\u4E0A <code>queryString</code></li></ul></li></ul><p>\u5173\u95ED\u6240\u6709\u9875\u9762\uFF0C\u4E4B\u540E\u6253\u5F00\u5230\u5E94\u7528\u5185\u7684\u67D0\u4E2A\u9875\u9762</p><p>\u672C\u51FD\u6570\u662F <code>wx.reLaunch</code> \u7684\u5C01\u88C5</p><div class="custom-container tip"><p class="custom-container-title">\u793A\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$launch</span><span class="token punctuation">(</span><span class="token string">&quot;main?user=mrhope&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="back" tabindex="-1"><a class="header-anchor" href="#back" aria-hidden="true">#</a> $back</h3><ul><li><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">$back</span><span class="token punctuation">(</span>delta <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u53C2\u6570:</p><ul><li><code>delta</code>: \u540E\u9000\u7684\u5C42\u7EA7\u6570\uFF0C\u9ED8\u8BA4\u4E3A <code>1</code></li></ul></li></ul><p>\u672C\u51FD\u6570\u662F <code>wx.navigateBack</code> \u7684\u7B80\u5355\u5C01\u88C5</p><h3 id="bindgo" tabindex="-1"><a class="header-anchor" href="#bindgo" aria-hidden="true">#</a> $bindGo</h3><p><code>$go</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindGo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>play<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-before</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickBefore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  click go
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h3 id="bindredirect" tabindex="-1"><a class="header-anchor" href="#bindredirect" aria-hidden="true">#</a> $bindRedirect</h3><p><code>$redirect</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
  <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$bindRedirect<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/pages/play<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-after</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onClickAfter<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  click redirect
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><h3 id="bindswitch" tabindex="-1"><a class="header-anchor" href="#bindswitch" aria-hidden="true">#</a> $bindSwitch</h3><p><code>$switch</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><p><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E <code>wx.switchTab()</code> \u4E0D\u652F\u6301\u53C2\u6570\uFF0C\u53C2\u6570\u4EC5\u7528\u4E8E\u89E6\u53D1\u5BF9\u5E94\u9875\u9762\u7684 <code>onNavigate</code> \u751F\u547D\u5468\u671F</p></div></li><li><p><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</p></li><li><p><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</p></li></ul><h3 id="bindrelaunch" tabindex="-1"><a class="header-anchor" href="#bindrelaunch" aria-hidden="true">#</a> $bindRelaunch</h3><p><code>$reLaunch</code> \u7684\u89C6\u56FE\u5C42\u4EE3\u7406\u65B9\u6CD5\uFF0C\u4F60\u9700\u8981\u5728\u89C6\u56FE\u5C42\u4F7F\u7528 data-set \u6765\u7ED1\u5B9A\u8DF3\u8F6C\u914D\u7F6E:</p><ul><li><code>data-url</code> \u8DF3\u8F6C\u5230\u7684\u9875\u9762\u7B80\u79F0\u6216\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u5E26\u53C2\u6570</li><li><code>data-before</code> \u8DF3\u8F6C\u524D\u6267\u884C</li><li><code>data-after</code> \u8DF3\u8F6C\u540E\u6267\u884C</li></ul>`,45);function g(v,f){const s=e("RouterLink");return i(),t(l,null,[d,p("p",null,[k,o(s,{to:"/api/enhance/emitter.html"},{default:c(()=>[m]),_:1}),b]),h],64)}var $=r(u,[["render",g]]);export{$ as default};
