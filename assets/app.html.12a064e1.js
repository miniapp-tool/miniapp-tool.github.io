import{r as e,o as a,c as n,b as t,a as s,w as o,F as i,d as p,e as r}from"./app.fb79a2fd.js";const d={},l=p('<h1 id="app" tabindex="-1"><a class="header-anchor" href="#app" aria-hidden="true">#</a> $App</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="onawake" tabindex="-1"><a class="header-anchor" href="#onawake" aria-hidden="true">#</a> onAwake</h3><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">onAwake</span><span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>time</code>: 本次切入后台的时间，单位 ms</li></ul></li></ul><p>在小程序从后台唤醒时调用</p><h2 id="注入" tabindex="-1"><a class="header-anchor" href="#注入" aria-hidden="true">#</a> 注入</h2><h3 id="emitter" tabindex="-1"><a class="header-anchor" href="#emitter" aria-hidden="true">#</a> $emitter</h3>',7),c=r("事件派发器，是一个 "),h=r("Emitter"),u=r(" 实例"),m=p("<ul><li><p><code>$emitter.on(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): void</code>: 监听 <code>type</code> 事件</p></li><li><p><code>$emitter.emit(type:string, event?:any): void</code>: 同步触发 <code>type</code> 事件</p></li><li><p><code>$emitter.emitAsync(type:string, event?:any): Promise&lt;void&gt;</code>: 异步触发 <code>type</code> 事件并接受回调</p></li><li><p><code>$emitter.off(type:string, handler: (event?:any) =&gt; void | Promise&lt;void&gt;): Promise&lt;void&gt;</code>: 取消监听 <code>type</code> 的 <code>handler</code> 事件或全部事件 (当未传入 <code>handler</code>)</p></li><li><p><code>$emitter.all</code>: 事件名称到已注册处理函数的映射</p></li></ul>",1);d.render=function(p,r){const d=e("RouterLink");return a(),n(i,null,[l,t("p",null,[c,s(d,{to:"/api/enhance/emitter.html"},{default:o((()=>[h])),_:1}),u]),m],64)};export{d as default};
