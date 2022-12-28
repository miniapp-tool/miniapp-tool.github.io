import{_ as e,V as i,W as d,a0 as c}from"./framework-b75370dc.js";const o={},l=c('<h2 id="文件-api" tabindex="-1"><a class="header-anchor" href="#文件-api" aria-hidden="true">#</a> 文件 API</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意，框架会自动帮你添加 <code>USER_DATA_PATH</code> 作为前缀，因此你无需关注它。</p></div><h3 id="工具类" tabindex="-1"><a class="header-anchor" href="#工具类" aria-hidden="true">#</a> 工具类</h3><ul><li><p><code>dirname(path)</code></p><p>返回路径的文件夹部分</p></li><li><p><code>exists(path)</code></p><p>返回布尔值，代表文件或文件夹是否存在</p></li><li><p><code>isDir(path)</code></p><p>返回布尔值，代表路径是否是文件夹</p></li><li><p><code>isFile(path)</code></p><p>返回布尔值，代表路径是否是文件</p></li></ul><h2 id="读取类" tabindex="-1"><a class="header-anchor" href="#读取类" aria-hidden="true">#</a> 读取类</h2><ul><li><p><code>ls(path)</code></p><p>以数组形式列出目录下所有内容</p></li><li><p><code>readFile(path, encoding)</code></p><p>读取指定路径的文件内容并返回。当文件不存在时，返回 <code>undefined</code>。</p><p><code>encoding</code> 为文件的编码格式，可选，当文件为文本文件时默认 <code>&quot;utf-8&quot;</code>，为二进制文件时默认为 <code>&#39;buffer&#39;</code></p></li><li><p><code>readJSON(path, encoding)</code></p><p>读取可序列化文件数据并返回解析结果。</p><p>当 JSON 文件不存在或解析失败时，返回 <code>undefined</code></p><ul><li><code>path</code>: 读取的文件路径，不应含有 <code>.json</code> 后缀</li><li><code>encoding</code>: 文件的编码格式，可选，默认 <code>utf-8</code></li></ul></li></ul><h3 id="操作类" tabindex="-1"><a class="header-anchor" href="#操作类" aria-hidden="true">#</a> 操作类</h3><ul><li><p><code>mkdir(path, recursive)</code></p><p>创建目录。第二个参数 <code>recursive</code>可选，代表是否递归父目录。</p></li><li><p><code>rm(path, type): void</code></p><p>删除指定路径。</p><p>第二个参数 <code>type</code> 是可选的，可填入 <code>&quot;dir&quot;</code> 或 <code>&quot;file&quot;</code>，填入可提升删除性能</p></li><li><p><code>writeFile(path, data, encoding)</code></p><p>写入文件</p><ul><li><code>path</code>: 待写入的文件路径，若文件或其父文件夹不存在会自动创建</li><li><code>data</code>: 待写入的数据，可接受任意可序列化的数据或 Buffer</li><li><code>encoding</code>: 文件编码选项，可选，默认 <code>utf-8</code> (数据) 或 <code>binary</code> (Buffer)</li></ul></li><li><p><code>writeJSON(path, data, encoding)</code></p><p>写入可序列化数据为 JSON</p><ul><li><code>path</code>: 写入文件的路径，若父文件夹不存在会自动创建</li><li><code>data</code>: 写入文件的数据，可接受任意可序列化的数据</li><li><code>encoding</code>: 文件编码选项，默认 <code>utf-8</code></li></ul></li><li><p><code>saveFile(tempFilePath, path)</code></p><p>将缓存文件保存到本地文件存储。</p><ul><li><code>tempFilePath</code>: 缓存文件路径</li><li><code>path</code>: 保存文件路径</li></ul></li><li><p><code>saveOnlineFile(onlinePath, localPath): Promise&lt;void&gt;</code></p><p>将在线文件保存到本地指定位置</p><ul><li><code>onlinePath</code>: 在线文件路径</li><li><code>localPath</code>: 本地文件路径</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你无需关注本地保存路径是否已经存在。</p></div></li><li><p><code>unzip(zipFilePath, targetPath): Promise&lt;void&gt;</code></p><p>解压文件</p><ul><li><code>zipFilePath</code>: 待解压的压缩文件路径</li><li><code>targetPath</code>: 解压到的目录</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你无需关注解压目录是否已经存在。</p></div></li></ul><h2 id="存储-api" tabindex="-1"><a class="header-anchor" href="#存储-api" aria-hidden="true">#</a> 存储 API</h2><h3 id="存取" tabindex="-1"><a class="header-anchor" href="#存取" aria-hidden="true">#</a> 存取</h3><p><code>put</code> 和 <code>take</code> 可以存入任何数据，但存入的数据只能取出一次，且仅在当次小程序启动中有效。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了保证性能，以及由于小程序对 <code>Function</code> 进行了特殊处理，我们不会对存入的数据进行深拷贝。</p></div><ul><li><p><code>put&lt;T = unknown&gt;(key, data)</code>: 存数据。</p></li><li><p><code>take&lt;T = unknown&gt;(key)</code>: 取数据</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当数据已经被取过一次后，后续返回 <code>undefined</code>。</p></div></li></ul><h3 id="可持久化数据" tabindex="-1"><a class="header-anchor" href="#可持久化数据" aria-hidden="true">#</a> 可持久化数据</h3><p><code>get</code> 和 <code>set</code> 设置的数据可持久化，且可以设置过期时间。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意由于微信小程序底层上的问题，自动清除只发生在下一次读取并发现已经失效时，如果你没有后续读取对应的存储，它们会一直保存 (即使已经过期)。</p><p>所以如果你使用了大量临时的键值去存入数据，你可能需要定期通过 <code>check</code> 手动检查并清除过期数据。</p></div><ul><li><p><code>set(key, value, expire)</code></p><p>同步设置数据。</p><ul><li><p><code>key</code>: 设置的键名</p></li><li><p><code>value</code>: 存入的值</p></li><li><p><code>expire</code>: 过期时间，可选，默认为 <code>&#39;once&#39;</code></p><ul><li><code>&#39;once&#39;</code>: 默认，表示仅本次启动有效</li><li><code>&#39;keep&#39;</code>: 表示保持上一次有效时间</li><li>数字: 已毫秒为单位的有效时间</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意，如果传入 <code>&#39;keep&#39;</code> 时，存储中不存在同名键值，则该值也不会被写入。</p></div></li><li><p><code>setAync(key, value, expire)</code></p><p><code>set</code> 的异步版本，在设置大量数据时可考虑使用，返回一个 Promise。</p></li><li><p><code>get(key)</code></p><p>同步读取数据并返回。</p><p>当数据已经过期时，返回 <code>undefined</code>。</p><ul><li><code>key</code>: 设置的键名</li></ul></li><li><p><code>getAync(key)</code></p><p><code>get</code> 的异步版本，在读取大量数据避免阻塞线程时可考虑使用，返回一个 Promise。</p><ul><li><code>key</code>: 设置的键名</li></ul></li><li><p><code>remove(key)</code></p><p>同步删除数据。</p><ul><li><code>key</code>: 删除的键名</li></ul></li><li><p><code>removeAsync(key)</code></p><p>异步删除数据，返回一个 Promise。</p><ul><li><code>key</code>: 删除的键名</li></ul></li><li><p><code>check()</code></p><p>同步检查并清理过期数据。</p></li><li><p><code>checkAsync()</code></p><p>异步检查并清理过期数据，返回一个 Promise。</p></li></ul>',17),p=[l];function t(a,n){return i(),d("div",null,p)}const h=e(o,[["render",t],["__file","file.html.vue"]]);export{h as default};
