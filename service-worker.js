if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let r={};const f=e=>a(e,b),t={module:{uri:b},exports:r,require:f};s[b]=Promise.all(d.map((e=>t[e]||f(e)))).then((e=>(i(...e),r)))}}define(["./workbox-c2f86a11"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-22c3b112.js",revision:"1dd4a027559e4158b6ed13d5ca1b8186"},{url:"assets/404.html-e3f01d36.js",revision:"3c8e199ddda5081610379a11a82b8414"},{url:"assets/app-5a0527cb.js",revision:"ce4356af7b3f2e7c3cb616535cfc6474"},{url:"assets/app.html-359a105b.js",revision:"646757fbd600ae1764fabb47b125f2d2"},{url:"assets/app.html-8848c498.js",revision:"952d7b531d821027062950d9dc155a3d"},{url:"assets/component.html-6c6bad82.js",revision:"79121ad077307bca02e1b16904b30538"},{url:"assets/component.html-ec930206.js",revision:"229b672a54954dccb048e72982d2f513"},{url:"assets/config.html-18edbb8f.js",revision:"5586bfa41d2a1f647f505375cffc0ed7"},{url:"assets/config.html-440b3f5b.js",revision:"9250b79619d3b2ec1a40318da93b160b"},{url:"assets/emitter.html-9ea47606.js",revision:"a3c5917a2745b845cad79e85d955682b"},{url:"assets/emitter.html-d14733d2.js",revision:"d6ce16b3f16b3670b25079a64a019066"},{url:"assets/enhance.html-18df69ab.js",revision:"1df62e0f298cdfb85732162dcae837e3"},{url:"assets/enhance.html-a2a78b99.js",revision:"5ddc3daebf45b1dd192bcdbb36573a39"},{url:"assets/file.html-1ea0adbb.js",revision:"f5ce1d4d67ad4d21c1f03d45be9a3908"},{url:"assets/file.html-262cf6e9.js",revision:"081bafd8fe16a0e27e36f47494f0dd9b"},{url:"assets/file.html-32e10833.js",revision:"a26b59ff5f36204856adf14197885e57"},{url:"assets/file.html-e732f9be.js",revision:"4dc5129faab9eca1fa3b9077d66810bd"},{url:"assets/framework-e8f93d7f.js",revision:"7668b56b60dbfdb10371b7ad4ffef1ef"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-00947599.js",revision:"780d350a6ca4ae49f50e875e33f22e8b"},{url:"assets/index.html-0fe15c1b.js",revision:"e598405adba45be099b091917a7da142"},{url:"assets/index.html-24350f11.js",revision:"e9a1550494c02d85d2f6146bfa4a8ad7"},{url:"assets/index.html-4b7dbb38.js",revision:"2c4bd082c0daccb6cc97056e8c322c6a"},{url:"assets/index.html-589133b4.js",revision:"003aacd1a7f86b42125df5033425ddcf"},{url:"assets/index.html-8ad764b5.js",revision:"6ef48a0753f5734dca71b802127d1510"},{url:"assets/index.html-9dcb6698.js",revision:"e41679cbba97c3af321b63350e0c785d"},{url:"assets/index.html-a93beb28.js",revision:"49714eb301329cb27c922db5552ef264"},{url:"assets/index.html-c62d7e8d.js",revision:"083cbafdda38de5db1c685974d4baecf"},{url:"assets/index.html-d0cd17d3.js",revision:"32c860ad93d023cd00e5fe2e5c757626"},{url:"assets/page.html-68566c0e.js",revision:"ce0fd63fe2725d7b0250bdec595b2c57"},{url:"assets/page.html-a929b97f.js",revision:"e4f494bede1a74260aaa8b2adc264f94"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-1c8de12f.js",revision:"9ea8366e4b18b69a54cdde73c0137745"},{url:"assets/storage.html-684f6e62.js",revision:"2889fde577826a2207254ef8690f7a40"},{url:"assets/storage.html-ce84ca8b.js",revision:"9614aa3ea334b14a18d7783b6971497e"},{url:"assets/style-80d78764.css",revision:"caf046a19193fef62ae47f5f2f6536e0"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"90bb0b878bee15886058a7a68a896054"},{url:"404.html",revision:"5c2a49443be163126562d65c9bf42f63"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
