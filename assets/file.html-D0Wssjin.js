import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-BGMZcyGN.js";const t={},p=e(`<h1 id="文件-api" tabindex="-1"><a class="header-anchor" href="#文件-api"><span>文件 API</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所有路径以绝对路径开头即可，框架会自动帮你添加 <code>USER_DATA_PATH</code>。</p></div><h2 id="dirname" tabindex="-1"><a class="header-anchor" href="#dirname"><span>dirname</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">dirname</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>获得路径的文件夹部分</p><h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists"><span>exists</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断文件或文件夹是否存在</p><h2 id="isdir" tabindex="-1"><a class="header-anchor" href="#isdir"><span>isDir</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isDir</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断路径是否是文件夹</p><h2 id="isfile" tabindex="-1"><a class="header-anchor" href="#isfile"><span>isFile</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isFile</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>判断路径是否是文件</p><h2 id="ls" tabindex="-1"><a class="header-anchor" href="#ls"><span>ls</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">ls</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 传入的路径</li></ul></li></ul><p>列出目录下内容</p><h2 id="readfile" tabindex="-1"><a class="header-anchor" href="#readfile"><span>readFile</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">readFile</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 所读取文件的路径</p></li><li><p><code>encoding</code>: 文件的编码格式，默认 <code>utf-8</code></p></li></ul></li><li><p>返回值:</p><ul><li>当文件不存在时，返回 <code>undefined</code></li></ul></li></ul><p>读取文件内容</p><h2 id="readjson" tabindex="-1"><a class="header-anchor" href="#readjson"><span>readJSON</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">readJSON</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 所读取文件的路径，实际读取会自动添加 <code>.json</code> 后缀名</p></li><li><p><code>encoding</code>: 文件的编码格式，默认 <code>utf-8</code></p></li></ul></li><li><p>返回值:</p><ul><li>当 JSON 文件不存在或解析失败时，返回 <code>undefined</code></li></ul></li></ul><p>读取 JSON 文件内容并解析。</p><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir"><span>mkdir</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">mkdir</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> recursive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待创建的文件夹</p></li><li><p><code>recursive</code>: 是否递归创建可能不存在的父目录</p></li></ul></li></ul><p>创建目录</p><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm"><span>rm</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">rm</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&quot;dir&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待删除内容的路径</p></li><li><p><code>type</code>: 所删除内容的类型，可选，传入明确的 <code>type</code> 可提升性能</p></li></ul></li></ul><p>删除文件或文件夹</p><h2 id="writefile" tabindex="-1"><a class="header-anchor" href="#writefile"><span>writeFile</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><p><code>path</code>: 待写入的文件路径，若文件或其父文件夹不存在会自动创建</p></li><li><p><code>data</code>: 写入文件的数据，可接受任意可序列化的数据或</p></li><li><p><code>encoding</code>: 文件编码选项，默认 <code>utf-8</code> (数据) 或 <code>binary</code> (Buffer)</p></li></ul></li></ul><p>向指定文件写入内容</p><h2 id="writejson" tabindex="-1"><a class="header-anchor" href="#writejson"><span>writeJSON</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">writeJSON</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> <span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>path</code>: 带写入文件的路径，若文件和父文件夹不存在会自动创建，实际写入会自动添加 <code>.json</code> 后缀名</li><li><code>data</code>: 写入文件的数据，可接受任意可序列化的数据</li><li><code>encoding</code>: 文件编码选项，默认 <code>utf-8</code> (数据)</li></ul></li></ul><p>向指定文件写入可序列化数据</p><h2 id="savefile" tabindex="-1"><a class="header-anchor" href="#savefile"><span>saveFile</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">saveFile</span><span class="token punctuation">(</span>tempFilePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>tempFilePath</code>: 缓存文件路径</li><li><code>path</code>: 保存文件路径</li></ul></li></ul><p>将缓存文件保存到本地文件存储。</p><h2 id="saveonlinefile" tabindex="-1"><a class="header-anchor" href="#saveonlinefile"><span>saveOnlineFile</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">saveOnlineFile</span><span class="token punctuation">(</span>
  onlinePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  targetPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>onlinePath</code>: 在线文件路径</li><li><code>targetPath</code>: 目标文件路径</li></ul></li><li><p>返回值:</p><p>当保存失败时，<code>err</code> 为文字格式的失败消息或数字格式的非 <code>200</code> 状态码</p></li></ul><p>将在线文件保存到本地指定位置 (会自动创建本地保存文件夹与文件)。</p><h2 id="unzip" tabindex="-1"><a class="header-anchor" href="#unzip"><span>unzip</span></a></h2><ul><li><p>类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">unzip</span><span class="token punctuation">(</span>zipFilePath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> targetPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数:</p><ul><li><code>zipFilePath</code>: 待解压的压缩文件路径</li><li><code>targetPath</code>: 解压到的目录 (你无需关注它是否已经存在)</li></ul></li><li><p>返回值:</p><p>当解压失败时，<code>err</code> 为文字格式的失败消息</p></li></ul><p>将缓存文件保存到本地文件存储。</p>`,44),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","file.html.vue"]]),k=JSON.parse('{"path":"/file/api/file.html","title":"文件 API","lang":"zh-CN","frontmatter":{"description":"文件 API 提示 所有路径以绝对路径开头即可，框架会自动帮你添加 USER_DATA_PATH。 dirname 类型: 参数: path: 传入的路径 获得路径的文件夹部分 exists 类型: 参数: path: 传入的路径 判断文件或文件夹是否存在 isDir 类型: 参数: path: 传入的路径 判断路径是否是文件夹 isFile 类型: ...","head":[["meta",{"property":"og:url","content":"https://miniapp-tool.github.io/file/api/file.html"}],["meta",{"property":"og:site_name","content":"MP Tool"}],["meta",{"property":"og:title","content":"文件 API"}],["meta",{"property":"og:description","content":"文件 API 提示 所有路径以绝对路径开头即可，框架会自动帮你添加 USER_DATA_PATH。 dirname 类型: 参数: path: 传入的路径 获得路径的文件夹部分 exists 类型: 参数: path: 传入的路径 判断文件或文件夹是否存在 isDir 类型: 参数: path: 传入的路径 判断路径是否是文件夹 isFile 类型: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T08:32:33.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2024-03-02T08:32:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T08:32:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"dirname","slug":"dirname","link":"#dirname","children":[]},{"level":2,"title":"exists","slug":"exists","link":"#exists","children":[]},{"level":2,"title":"isDir","slug":"isdir","link":"#isdir","children":[]},{"level":2,"title":"isFile","slug":"isfile","link":"#isfile","children":[]},{"level":2,"title":"ls","slug":"ls","link":"#ls","children":[]},{"level":2,"title":"readFile","slug":"readfile","link":"#readfile","children":[]},{"level":2,"title":"readJSON","slug":"readjson","link":"#readjson","children":[]},{"level":2,"title":"mkdir","slug":"mkdir","link":"#mkdir","children":[]},{"level":2,"title":"rm","slug":"rm","link":"#rm","children":[]},{"level":2,"title":"writeFile","slug":"writefile","link":"#writefile","children":[]},{"level":2,"title":"writeJSON","slug":"writejson","link":"#writejson","children":[]},{"level":2,"title":"saveFile","slug":"savefile","link":"#savefile","children":[]},{"level":2,"title":"saveOnlineFile","slug":"saveonlinefile","link":"#saveonlinefile","children":[]},{"level":2,"title":"unzip","slug":"unzip","link":"#unzip","children":[]}],"git":{"createdTime":1709368353000,"updatedTime":1709368353000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.62,"words":786},"filePathRelative":"file/api/file.md","localizedDate":"2024年3月2日","autoDesc":true,"excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>所有路径以绝对路径开头即可，框架会自动帮你添加 <code>USER_DATA_PATH</code>。</p>\\n</div>\\n<h2>dirname</h2>\\n<ul>\\n<li>\\n<p>类型:</p>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">dirname</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n<li>\\n<p>参数:</p>\\n<ul>\\n<li><code>path</code>: 传入的路径</li>\\n</ul>\\n</li>\\n</ul>"}');export{u as comp,k as data};
