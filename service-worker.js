if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const f=e=>a(e,c),t={module:{uri:c},exports:r,require:f};s[c]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(d(...e),r)))}}define(["./workbox-0f878b90"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.30712616.js",revision:"d57640c7733751e738cba6aac7245e36"},{url:"assets/404.html.7537dfab.js",revision:"e5e29b75891332ed49533f8649f5d2bf"},{url:"assets/app.8784fe14.js",revision:"266057b7099d5956b37a28da75b62b63"},{url:"assets/app.html.0d164683.js",revision:"5fd78d9f8ebbcbf12dbf592d6fe2e6cc"},{url:"assets/app.html.8cfc2080.js",revision:"3459c47f949c335ab93d15fb4ad176c6"},{url:"assets/component.html.b26e8672.js",revision:"68ff2c1b98e7870f0d704b7a9b1b0057"},{url:"assets/component.html.fd5bd450.js",revision:"80c1010a02802e41c9f7b69c4678b288"},{url:"assets/config.html.09030e66.js",revision:"f36fc5458d3d58edabf8a3ee1677446c"},{url:"assets/config.html.8b5e93af.js",revision:"dc32afc90b6a0d6881758e66c015465f"},{url:"assets/emitter.html.a1ed2842.js",revision:"9095cb220415e0c219c81a138bdb5c26"},{url:"assets/emitter.html.fa65c413.js",revision:"b522501540c79b2ed4226d225b7ede20"},{url:"assets/enhance.html.1a0ad01c.js",revision:"261e00662cda0947a7a6070b70fcae36"},{url:"assets/enhance.html.b47e8d22.js",revision:"0fc1d8714b14f8c30d17d781c8bd9b3e"},{url:"assets/file.html.63bf08f1.js",revision:"1c1278bf5ca400588a93a795edf466fd"},{url:"assets/file.html.a9926458.js",revision:"d4b3a68347d34884764aedc8ca8c81a5"},{url:"assets/file.html.b3a65de0.js",revision:"e03c835179fa8aee2467d6a3793080f5"},{url:"assets/file.html.bd7f1254.js",revision:"11b39a1375106021429775d0fb4a0e96"},{url:"assets/index.html.1adff0a4.js",revision:"ac3b3cc4b971964b74f3027790497a0c"},{url:"assets/index.html.3bd78a0a.js",revision:"f53efa1848c2d28bb306170c512489a2"},{url:"assets/index.html.4d2a8cc9.js",revision:"42e7057d1ca5134537238c9f2f05022f"},{url:"assets/index.html.56a22074.js",revision:"5b3fea5029e1e0d59c0fd170c6ede727"},{url:"assets/index.html.5805702d.js",revision:"e172e37b4d8ba4d6c7ae89158f3df086"},{url:"assets/index.html.6e70a2f2.js",revision:"2444a798906e698bd559ebaeb53d4f1b"},{url:"assets/index.html.8aadf778.js",revision:"1541ba22d6976c9eafd1c6555faa69e2"},{url:"assets/index.html.b5324ce3.js",revision:"34d0334879ef42ee158df049806b0798"},{url:"assets/page.html.52c5b7a3.js",revision:"5d6829a58cd39ad05e37b2b93b2b87d0"},{url:"assets/page.html.aa7863a0.js",revision:"f66ebe8408f2cd0f128cd8b4d690139c"},{url:"assets/photoswipe.esm.1cf3a6fe.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/storage.html.46a11402.js",revision:"ce05041b11a8333ce73b1c3945f8f039"},{url:"assets/storage.html.a9b6b4f8.js",revision:"4d5b0cdb8dd9a44d19159eec2644d7e0"},{url:"assets/style.9f7b4d87.css",revision:"9cf9b2fd642ef9454b8f3b7dc5f3f750"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"ecf98df09006cc42db6c82890c435f8c"},{url:"404.html",revision:"bb02222f856b3586064a391e9e45a5ad"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
