import{b as n}from"./app.2abc33a7.js";const s={},a=n('<h1 id="文件-api" tabindex="-1"><a class="header-anchor" href="#文件-api" aria-hidden="true">#</a> 文件 API</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>请注意，框架会自动帮你添加 <code>USER_DATA_PATH</code> 作为前缀，因此你无需关注它。</p></div><h2 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname" aria-hidden="true">#</a> dirname</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dirname</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>获得路径的文件夹部分</p><h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> exists</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断文件或文件夹是否存在</p><h2 id="isdir" tabindex="-1"><a class="header-anchor" href="#isdir" aria-hidden="true">#</a> isDir</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isDir</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断路径是否是文件夹</p><h2 id="isfile" tabindex="-1"><a class="header-anchor" href="#isfile" aria-hidden="true">#</a> isFile</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isFile</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断路径是否是文件</p><h2 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">ls</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>列出目录下内容</p><h2 id="readfile" tabindex="-1"><a class="header-anchor" href="#readfile" aria-hidden="true">#</a> readFile</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">readFile</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 所读取文件的路径</p></li><li><p><code>encoding</code>: 文件的编码格式，默认 <code>utf-8</code></p></li></ul></li><li><p>返回值:</p><ul><li>当文件不存在时，返回 <code>undefined</code></li></ul></li></ul><p>读取文件内容</p><h2 id="readjson" tabindex="-1"><a class="header-anchor" href="#readjson" aria-hidden="true">#</a> readJSON</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">readJSON</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>\n  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 所读取文件的路径，实际读取会自动添加 <code>.json</code> 后缀名</p></li><li><p><code>encoding</code>: 文件的编码格式，默认 <code>utf-8</code></p></li></ul></li><li><p>返回值:</p><ul><li>当 JSON 文件不存在或解析失败时，返回 <code>undefined</code></li></ul></li></ul><p>读取 JSON 文件内容并解析。</p><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mkdir</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> recursive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待创建的文件夹</p></li><li><p><code>recursive</code>: 是否递归创建可能不存在的父目录</p></li></ul></li></ul><p>创建目录</p><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">rm</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;dir&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待删除内容的路径</p></li><li><p><code>type</code>: 所删除内容的类型，可选，传入明确的 <code>type</code> 可提升性能</p></li></ul></li></ul><p>删除文件或文件夹</p><h2 id="writefile" tabindex="-1"><a class="header-anchor" href="#writefile" aria-hidden="true">#</a> writeFile</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待写入的文件路径，若文件或其父文件夹不存在会自动创建</p></li><li><p><code>data</code>: 写入文件的数据，可接受任意可序列化的数据或</p></li><li><p><code>encoding</code>: 文件编码选项，默认 <code>utf-8</code> (数据) 或 <code>binary</code> (Buffer)</p></li></ul></li></ul><p>向指定文件写入内容</p><h2 id="writejson" tabindex="-1"><a class="header-anchor" href="#writejson" aria-hidden="true">#</a> writeJSON</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">writeJSON</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 带写入文件的路径，若文件和父文件夹不存在会自动创建，实际写入会自动添加 <code>.json</code> 后缀名</li><li><code>data</code>: 写入文件的数据，可接受任意可序列化的数据</li><li><code>encoding</code>: 文件编码选项，默认 <code>utf-8</code> (数据)</li></ul></li></ul><p>向指定文件写入可序列化数据</p><h2 id="savefile" tabindex="-1"><a class="header-anchor" href="#savefile" aria-hidden="true">#</a> saveFile</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">saveFile</span><span class="token punctuation">(</span>tempFilePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><ul><li><code>tempFilePath</code>: 缓存文件路径</li><li><code>path</code>: 保存文件路径</li></ul></li></ul><p>将缓存文件保存到本地文件存储。</p><h2 id="saveonlinefile" tabindex="-1"><a class="header-anchor" href="#saveonlinefile" aria-hidden="true">#</a> saveOnlineFile</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">saveOnlineFile</span><span class="token punctuation">(</span>options<span class="token operator">:</span> SaveOnlineFileOption<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>参数:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/** 保存在线文件选项接口 */</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SaveOnlineFileOption</span> <span class="token punctuation">{</span>\n  <span class="token doc-comment comment">/** 在线文件路径 */</span>\n  onlinePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** 本地保存路径 */</span>\n  savePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** 本地保存文件名 */</span>\n  saveName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** 成功回调函数 */</span>\n  success<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** 失败回调函数 */</span>\n  fail<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>errMsg<span class="token operator">:</span> WechatMiniprogram<span class="token punctuation">.</span>GeneralCallbackResult<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token doc-comment comment">/** 状态码错误回调函数 */</span>\n  error<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>statusCode<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li></ul><p>将在线文件保存到本地指定位置 (会自动创建本地保存文件夹与文件)。</p><h2 id="unzip" tabindex="-1"><a class="header-anchor" href="#unzip" aria-hidden="true">#</a> unzip</h2><ul><li><p>类型:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">unzip</span><span class="token punctuation">(</span>\n  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  unzipPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  successFunc<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 待解压的压缩文件路径</li><li><code>unzipPath</code>: 解压到的目录 (你无需关注它是否已经存在)</li><li><code>successFunc</code>: 解压成功的回调函数</li></ul></li></ul><p>将缓存文件保存到本地文件存储。</p>',44);s.render=function(n,s){return a};export{s as default};
