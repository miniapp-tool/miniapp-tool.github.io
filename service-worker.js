if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const r=e=>a(e,d),t={module:{uri:d},exports:f,require:r};s[d]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-c2f86a11"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-489bf90b.js",revision:"8d1ae488d6c42c3b71b3451fbd1a0cc5"},{url:"assets/404.html-e3f01d36.js",revision:"3c8e199ddda5081610379a11a82b8414"},{url:"assets/app-ea619423.js",revision:"d6dff0c06f5014b50780a09ab7d18617"},{url:"assets/app.html-75d2b6b9.js",revision:"4ea69a511bcf7fa0e076956c515d7ee2"},{url:"assets/app.html-ae159f9e.js",revision:"ddd6630bdcab14f057c4926435b44bb2"},{url:"assets/component.html-2526ad83.js",revision:"18da8900759397965b57f71bea348343"},{url:"assets/component.html-ca21ba17.js",revision:"d556ab8726b38d2e216877a74171b9fc"},{url:"assets/config.html-7e1a5220.js",revision:"37e8cfd22173d64ceb4f4c2718709e03"},{url:"assets/config.html-eaa411f3.js",revision:"0a4bb1f93dacb8686de39e70fd0a4788"},{url:"assets/emitter.html-40dddb41.js",revision:"5b1bd43d2d5146dd029f58704a96b488"},{url:"assets/emitter.html-669b1ba8.js",revision:"c6ff4c31f9715676dd9e0cd7ce65e416"},{url:"assets/enhance.html-92980662.js",revision:"9ae45a46b4247b09cfebeeb6cdbca289"},{url:"assets/enhance.html-c0145c5b.js",revision:"bee37283d1a2179efcb02939b4d4b355"},{url:"assets/file.html-312a6580.js",revision:"eec407696adf52550ae9c8f7faa07ba3"},{url:"assets/file.html-41e2c904.js",revision:"ca891c8d30e2953c3acb29902a71e99a"},{url:"assets/file.html-76c66ded.js",revision:"7de8b0afe7aa8cc2b84c7a4a93010030"},{url:"assets/file.html-f1f30a10.js",revision:"731dfd170d02ef6d1bdd06b1fb1d6352"},{url:"assets/framework-b75370dc.js",revision:"e371769f476685ac1277191ccf0a865d"},{url:"assets/index.html-2c1940b1.js",revision:"cf71ab97a3561a41c06f480173d8394e"},{url:"assets/index.html-35fd0b96.js",revision:"52df27fd4f2ba4ae67b82e60f7d107ac"},{url:"assets/index.html-6061402e.js",revision:"eb05db55d81bb6f5454b4508139a8754"},{url:"assets/index.html-68de2141.js",revision:"03c00c6d00cdea26a9a8aa64d7fe6fc9"},{url:"assets/index.html-711f4e2a.js",revision:"d4f643b4ace58c6331cd758963c1b126"},{url:"assets/index.html-8f1487a3.js",revision:"5a40870661fe350e166be3ab9431a9ea"},{url:"assets/index.html-b9d62eac.js",revision:"fe6c23ad188b46f9bab80545438ce2ee"},{url:"assets/index.html-cceb8164.js",revision:"1087a9e1421903449e02408fceca2045"},{url:"assets/page.html-345fe29d.js",revision:"333f204f26ea0422f7e1d730b8de8781"},{url:"assets/page.html-fffb811c.js",revision:"f0e0d2daac7ecc9331f3a188a8bee5ea"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-f4eae90e.js",revision:"1e39c7509b572886ef68a597127e222b"},{url:"assets/storage.html-41891203.js",revision:"f15f4b53ccbe18ddb9527ccf95f82500"},{url:"assets/storage.html-d92d6ed6.js",revision:"36120dcaab025ced053c9a3bc5e74209"},{url:"assets/style-039ba6c0.css",revision:"ff314f1970cec52b66681d422c4a5b9d"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"d399805f2fcf09264f8623721a32e7c1"},{url:"404.html",revision:"16bf4fed3bc80ce3ed1876a55eb0fbf0"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
