import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-DN9tQp4j.js";const t={},l=e(`<h1 id="存储-api" tabindex="-1"><a class="header-anchor" href="#存储-api"><span>存储 API</span></a></h1><h2 id="非持久化数据" tabindex="-1"><a class="header-anchor" href="#非持久化数据"><span>非持久化数据</span></a></h2><p>存入的数据只能取出一次，且仅在当次小程序启动中有效</p><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put"><span>put</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> put</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 存入的键值</li><li><code>data</code>: 存入的数据，可为任意值。</li></ul></li></ul><p>存数据。该数据只能取出一次，且仅在当次小程序启动中有效。</p><h3 id="take" tabindex="-1"><a class="header-anchor" href="#take"><span>take</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> take</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>取出在本次小程序启动后设置的数据。</p><p>当数据已经被取过一次后，后续返回 <code>undefined</code>。</p><h2 id="可持久化数据" tabindex="-1"><a class="header-anchor" href="#可持久化数据"><span>可持久化数据</span></a></h2><p><code>get</code> 和 <code>set</code> 设置的数据可持久化，且可以设置过期时间。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意由于微信小程序底层上的问题，自动清除只发生在下一次读取并发现已经失效时，如果你没有后续读取对应的存储，它们会一直保存 (即使已经过期)。</p><p>所以如果你使用了大量临时的键值去存入数据，你可能需要定期通过 <code>check</code> 手动检查并清除过期数据。</p></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set"><span>set</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  expire</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;keep&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;once&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>key</code>: 设置的键名</p></li><li><p><code>value</code>: 存入的值</p></li><li><p><code>expire</code>: 过期时间</p><ul><li><code>&#39;once&#39;</code>: 仅本次启动有效</li><li><code>&#39;keep&#39;</code>: 表示保持上一次缓存时间</li><li>数字: 代表过期时间，单位为毫秒</li><li>0: 代表永久有效</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意，如果传入 <code>&#39;keep&#39;</code> 时，存储中不存在同名键值，则该值也不会被写入。</p></div></li></ul><p>存储数据。</p><h3 id="setasync" tabindex="-1"><a class="header-anchor" href="#setasync"><span>setAsync</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> setAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  value</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  expire</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;keep&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;once&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">WechatMiniprogram</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">GeneralCallbackResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><code>set</code> 的异步版本，在设置大量数据时可考虑使用。</p><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 设置的键名</li></ul></li></ul><p>读取数据。</p><p>当数据已经过期或不存在时，返回 <code>undefined</code>。</p><h3 id="getasync" tabindex="-1"><a class="header-anchor" href="#getasync"><span>getAsync</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 设置的键名</li></ul></li></ul><p><code>get</code> 的异步版本，在读取大量数据避免阻塞线程时可考虑使用。</p><h3 id="remove" tabindex="-1"><a class="header-anchor" href="#remove"><span>remove</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> remove</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p>删除某个键名对应的数据。</p><h3 id="removeasync" tabindex="-1"><a class="header-anchor" href="#removeasync"><span>removeAsync</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> removeAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  key</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">WechatMiniprogram</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">GeneralCallbackResult</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p><code>remove</code> 的异步版本，在删除大量数据避免阻塞线程时可考虑使用。</p><h3 id="check" tabindex="-1"><a class="header-anchor" href="#check"><span>check</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> check</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p>检查所有数据暂存，并清理已过期数据。</p><h3 id="checkasync" tabindex="-1"><a class="header-anchor" href="#checkasync"><span>checkAsync</span></a></h3><ul><li><p>类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> checkAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>key</code>: 删除的键名</li></ul></li></ul><p><code>check</code> 的异步版本</p>`,38),h=[l];function n(k,p){return a(),s("div",null,h)}const g=i(t,[["render",n],["__file","storage.html.vue"]]),c=JSON.parse('{"path":"/file/api/storage.html","title":"存储 API","lang":"zh-CN","frontmatter":{"description":"存储 API 非持久化数据 存入的数据只能取出一次，且仅在当次小程序启动中有效 put 类型: 参数: key: 存入的键值 data: 存入的数据，可为任意值。 存数据。该数据只能取出一次，且仅在当次小程序启动中有效。 take 类型: 参数: path: 传入的路径 取出在本次小程序启动后设置的数据。 当数据已经被取过一次后，后续返回 undefi...","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/file/api/storage.html"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"存储 API"}],["meta",{"property":"og:description","content":"存储 API 非持久化数据 存入的数据只能取出一次，且仅在当次小程序启动中有效 put 类型: 参数: key: 存入的键值 data: 存入的数据，可为任意值。 存数据。该数据只能取出一次，且仅在当次小程序启动中有效。 take 类型: 参数: path: 传入的路径 取出在本次小程序启动后设置的数据。 当数据已经被取过一次后，后续返回 undefi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T18:49:55.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-06-01T18:49:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T18:49:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"非持久化数据","slug":"非持久化数据","link":"#非持久化数据","children":[{"level":3,"title":"put","slug":"put","link":"#put","children":[]},{"level":3,"title":"take","slug":"take","link":"#take","children":[]}]},{"level":2,"title":"可持久化数据","slug":"可持久化数据","link":"#可持久化数据","children":[{"level":3,"title":"set","slug":"set","link":"#set","children":[]},{"level":3,"title":"setAsync","slug":"setasync","link":"#setasync","children":[]},{"level":3,"title":"get","slug":"get","link":"#get","children":[]},{"level":3,"title":"getAsync","slug":"getasync","link":"#getasync","children":[]},{"level":3,"title":"remove","slug":"remove","link":"#remove","children":[]},{"level":3,"title":"removeAsync","slug":"removeasync","link":"#removeasync","children":[]},{"level":3,"title":"check","slug":"check","link":"#check","children":[]},{"level":3,"title":"checkAsync","slug":"checkasync","link":"#checkasync","children":[]}]}],"git":{"createdTime":1717267795000,"updatedTime":1717267795000,"contributors":[{"name":"renovate[bot]","email":"29139614+renovate[bot]@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.1,"words":630},"filePathRelative":"file/api/storage.md","localizedDate":"2024年6月1日","autoDesc":true,"excerpt":"\\n<h2>非持久化数据</h2>\\n<p>存入的数据只能取出一次，且仅在当次小程序启动中有效</p>\\n<h3>put</h3>\\n<ul>\\n<li>\\n<p>类型:</p>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">function</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> put</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\">T</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> unknown</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;(</span><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">key</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">data</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> unknown</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> void</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>参数:</p>\\n<ul>\\n<li><code>key</code>: 存入的键值</li>\\n<li><code>data</code>: 存入的数据，可为任意值。</li>\\n</ul>\\n</li>\\n</ul>"}');export{g as comp,c as data};
