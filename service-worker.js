if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,b)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const f=e=>a(e,d),r={module:{uri:d},exports:c,require:f};s[d]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(b(...e),c)))}}define(["./workbox-d1d97813"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.09681b41.js",revision:"8d1a8b4b1e299ce3fda3de638f132c37"},{url:"assets/404.html.1a1cbff9.js",revision:"d0cd626e5a5ac4730e16ab3d1527babc"},{url:"assets/app.670a4bc2.js",revision:"9993191c0e2fc64fa2687a8c53c442a7"},{url:"assets/app.html.355d8eb1.js",revision:"dac4d88b17bdfe09c57f31d08e088a13"},{url:"assets/app.html.686f0c34.js",revision:"9bd365b698dfe2dd0b7f88fa2b592747"},{url:"assets/component.html.19def9bd.js",revision:"a0260fa6a1636aed90a26260f1b377b8"},{url:"assets/component.html.552d5e44.js",revision:"e4b3d46daae1f026199a6fafbdff1c89"},{url:"assets/config.html.59f69cf1.js",revision:"319d16a0526baa68af8dbebed4e1f454"},{url:"assets/config.html.7499b8ce.js",revision:"a9cbcbbbb27ea1663fa2989a9d44d9f7"},{url:"assets/emitter.html.55d70093.js",revision:"c0b54562083a09968538536991b2215d"},{url:"assets/emitter.html.ab50911b.js",revision:"4b12d1beeaee242aeab3b5de02735f82"},{url:"assets/enhance.html.b4f4f008.js",revision:"b7cb0a45034b63b7f3b79a1b2ddb0612"},{url:"assets/enhance.html.e65bf135.js",revision:"9daa6c5ec0001e991f8998f29632bbd4"},{url:"assets/file.html.0a5d27eb.js",revision:"44ac94e66d9f89d9b0c10fbb72ea7d5c"},{url:"assets/file.html.3ef1c42c.js",revision:"fb7e71a49977fa93ddb0baba601a4fd1"},{url:"assets/file.html.942e27b4.js",revision:"a9f77909da44bd99c7e380599b18818f"},{url:"assets/file.html.a25e1ab5.js",revision:"fd26cd507e500a46a937488929d4442c"},{url:"assets/index.html.0e0463b7.js",revision:"5c59ad0d16339b0f4a040a8f360c7f60"},{url:"assets/index.html.3b4f6607.js",revision:"902542ae8ae5a4b2b1f84a41474642fc"},{url:"assets/index.html.3faef935.js",revision:"103d339fec9ed41fee9b44a3d34a484f"},{url:"assets/index.html.66f1eba6.js",revision:"4c2d23b01649f205b03d26e6a1f1f195"},{url:"assets/index.html.9e19eeeb.js",revision:"c039705e54f7f217047885236e29289b"},{url:"assets/index.html.b456b302.js",revision:"6636f493cb5a71af84b3ce6136d30c31"},{url:"assets/index.html.df7439c3.js",revision:"4e67b14a3b95cdbf5099c5754cf23b94"},{url:"assets/index.html.eb344a43.js",revision:"28a67c8a43e9c4cb7d7564daa604684a"},{url:"assets/page.html.7d4b5432.js",revision:"1ec7cc1c06835a490318cc81f32cf440"},{url:"assets/page.html.b16cbb74.js",revision:"8d85366fbfc38815d49582ef2c1b5d03"},{url:"assets/photoswipe.esm.cf77b1ae.js",revision:"a161e9f0f413b7279a37a1b80c9d0cf2"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/storage.html.057feb38.js",revision:"711dab64a88dc7c2aa0fad711a7803ef"},{url:"assets/storage.html.404b4ac2.js",revision:"554d643d8cc8be93ebf8e2e2bc4c2407"},{url:"assets/style.0e6ae498.css",revision:"b2c2c1419d3db8c765b3dc926c90b891"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"c88ee1e867177d975debe39b97713a05"},{url:"404.html",revision:"770951208659625456ffc1cc47148eb9"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
