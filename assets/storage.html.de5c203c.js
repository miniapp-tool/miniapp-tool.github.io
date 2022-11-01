import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.391fa0a5.js";const p={},t=e(`<h1 id="存储-api" tabindex="-1"><a class="header-anchor" href="#存储-api" aria-hidden="true">#</a> 存储 API</h1><h2 id="非持久化数据" tabindex="-1"><a class="header-anchor" href="#非持久化数据" aria-hidden="true">#</a> 非持久化数据</h2><p>存入的数据只能取出一次，且仅在当次小程序启动中有效</p><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 存入的键值</li><li><code>data</code>: 存入的数据，可为任意值。</li></ul></li></ul><p>存数据。该数据只能取出一次，且仅在当次小程序启动中有效。</p><h3 id="take" tabindex="-1"><a class="header-anchor" href="#take" aria-hidden="true">#</a> take</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">take</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>取出在本次小程序启动后设置的数据。</p><p>当数据已经被取过一次后，后续返回 <code>undefined</code>。</p><h2 id="可持久化数据" tabindex="-1"><a class="header-anchor" href="#可持久化数据" aria-hidden="true">#</a> 可持久化数据</h2><p><code>get</code> 和 <code>set</code> 设置的数据可持久化，且可以设置过期时间。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意由于微信小程序底层上的问题，自动清除只发生在下一次读取并发现已经失效时，如果你没有后续读取对应的存储，它们会一直保存 (即使已经过期)。</p><p>所以如果你使用了大量临时的键值去存入数据，你可能需要定期通过 <code>check</code> 手动检查并清除过期数据。</p></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">set</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  expire<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&quot;keep&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;once&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;once&quot;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>key</code>: 设置的键名</p></li><li><p><code>value</code>: 存入的值</p></li><li><p><code>expire</code>: 过期时间</p><ul><li><code>&#39;once&#39;</code>: 仅本次启动有效</li><li><code>&#39;keep&#39;</code>: 表示保持上一次缓存时间</li><li>数字: 代表过期时间，单位为毫秒</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>请注意，如果传入 <code>&#39;keep&#39;</code> 时，存储中不存在同名键值，则该值也不会被写入。</p></div></li></ul><p>存储数据。</p><h3 id="setaync" tabindex="-1"><a class="header-anchor" href="#setaync" aria-hidden="true">#</a> setAync</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">setAync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  expire<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token string">&quot;keep&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;once&quot;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><code>set</code> 的异步版本，在设置大量数据时可考虑使用。</p><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 设置的键名</li></ul></li></ul><p>读取数据。</p><p>当数据已经过期或不存在时，返回 <code>undefined</code>。</p><h3 id="getaync" tabindex="-1"><a class="header-anchor" href="#getaync" aria-hidden="true">#</a> getAync</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getAync</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 设置的键名</li></ul></li></ul><p><code>get</code> 的异步版本，在读取大量数据避免阻塞线程时可考虑使用。</p><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p>删除某个键名对应的数据。</p><h3 id="removeasync" tabindex="-1"><a class="header-anchor" href="#removeasync" aria-hidden="true">#</a> removeAsync</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">removeAsync</span><span class="token punctuation">(</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p><code>remove</code> 的异步版本，在删除大量数据避免阻塞线程时可考虑使用。</p><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check" aria-hidden="true">#</a> check</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p>检查所有数据暂存，并清理已过期数据。</p><h3 id="checkasync" tabindex="-1"><a class="header-anchor" href="#checkasync" aria-hidden="true">#</a> checkAsync</h3><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p><code>check</code> 的异步版本</p>`,38),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","storage.html.vue"]]);export{u as default};
