if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let d={};const r=e=>a(e,c),t={module:{uri:c},exports:d,require:r};s[c]=Promise.all(f.map((e=>t[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-d1d97813"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.12581823.js",revision:"3f95f94ba129a50ed215b47e16fdfd88"},{url:"assets/404.html.7537dfab.js",revision:"e5e29b75891332ed49533f8649f5d2bf"},{url:"assets/app.bb5a7055.js",revision:"4b942c64ca5e4c37e19ce5b39683bdc1"},{url:"assets/app.html.26b55d60.js",revision:"20ea3094fe8f25c5c8aba9373f83161a"},{url:"assets/app.html.97545771.js",revision:"13985271fae5190f685066d3bc36bd82"},{url:"assets/component.html.abed0c60.js",revision:"3f594fc4e38def7d073b2b40b9285d1b"},{url:"assets/component.html.fb228ef4.js",revision:"1f07ec617b5546417153e042d5c5f96d"},{url:"assets/config.html.3399c029.js",revision:"a311acf505c8751aa7ddd0c43302f1e2"},{url:"assets/config.html.6de2ad35.js",revision:"8e602856f226cb4938be1ce0a205849d"},{url:"assets/emitter.html.1e2c938c.js",revision:"a8874f1e078c578e9017742f7400d0fe"},{url:"assets/emitter.html.810561dd.js",revision:"065eb93c1b93dfc4629b13b955cfc31e"},{url:"assets/enhance.html.5820891d.js",revision:"db020ef3adc7fd100b2f909e70cf976a"},{url:"assets/enhance.html.9d942ddf.js",revision:"d86e97074b0278fab52e93a25e34d5ed"},{url:"assets/file.html.1e8c7776.js",revision:"3aaae6ff5ceb3a8eeadee59c47d89647"},{url:"assets/file.html.43a433f1.js",revision:"fead0a7f3f48abb710296efe6fa45241"},{url:"assets/file.html.a432a0d1.js",revision:"c09c17a7f82c0283bfd8f8aa7ae76298"},{url:"assets/file.html.d6c6e6ea.js",revision:"5bcdf1f44a86bb8493640021867ec147"},{url:"assets/index.html.149f629c.js",revision:"042b42ef68a9bb884c21c41fb6ae140d"},{url:"assets/index.html.427b3724.js",revision:"5da632726691b2a58ffcfe51623e5ec4"},{url:"assets/index.html.540b1649.js",revision:"ac10cf619edb0e30dd1a01325d90a716"},{url:"assets/index.html.652759f3.js",revision:"5419404903acefcb9224ef9f1d9e3876"},{url:"assets/index.html.98caa846.js",revision:"ea370ccf065c2cb0057dbbb62ac7bf83"},{url:"assets/index.html.9febbe07.js",revision:"fabbcb1818938748a199839ae04c39db"},{url:"assets/index.html.c10e2071.js",revision:"21f110b8e69edba4636ffaec90202f99"},{url:"assets/index.html.d5070566.js",revision:"9b654731233cd94a201b28f9c1828fb6"},{url:"assets/page.html.10761e06.js",revision:"9ef738e7609b687658fd5e796b46fed3"},{url:"assets/page.html.ac0e390d.js",revision:"90b54d4852c18efb1ac47043e2c231fb"},{url:"assets/photoswipe.esm.a992dea2.js",revision:"317c562e1a4f43455c48b2cc085d9520"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/storage.html.6f3fdd11.js",revision:"53fde3504c97c0a5ea6d04b040eedff7"},{url:"assets/storage.html.7236ee27.js",revision:"c42cc2f8fb1701a7fbcf6949a31a9cf4"},{url:"assets/style.283fcb96.css",revision:"6b3aa0c00777482ca10ebc5f37e7c076"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"278a2ad5607bd998f209d8d74460f40b"},{url:"404.html",revision:"e8ba565092e3bf37fb80f9c44af35648"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
