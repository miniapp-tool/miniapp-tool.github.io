if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const c=e=>a(e,r),b={module:{uri:r},exports:t,require:c};s[r]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(d(...e),t)))}}define(["./workbox-d1d97813"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.09681b41.js",revision:"8d1a8b4b1e299ce3fda3de638f132c37"},{url:"assets/404.html.a76dab27.js",revision:"9e4d0874738091f05128669267c88c68"},{url:"assets/app.346b51cd.js",revision:"222167e0a8d0f844618fe47c132dd00b"},{url:"assets/app.html.6edee3b8.js",revision:"6c6cfc754e674a85b1ac7e66be7182f2"},{url:"assets/app.html.bbc35d64.js",revision:"75dcabbc500c3c0a82479ab40c122032"},{url:"assets/component.html.0a13b110.js",revision:"b7a8e354146daaf8f10f53b24e7bfeb7"},{url:"assets/component.html.8819c0c3.js",revision:"f91d421dd3587661026d64622af98907"},{url:"assets/config.html.4189e19c.js",revision:"778a96d053b34d27889ab6d682690dca"},{url:"assets/config.html.8273b481.js",revision:"2404f06bb9f74b4ce380323cf7a7849e"},{url:"assets/emitter.html.340876a8.js",revision:"9c40cc9ee81a20825973fdba6ef2b022"},{url:"assets/emitter.html.3e85fbef.js",revision:"14d364371c278a5ad1006ebf230941b8"},{url:"assets/enhance.html.292e627e.js",revision:"fd9fd685d188164197010bbdfb3d25a3"},{url:"assets/enhance.html.b791a745.js",revision:"1cc263e1169ead11ab11f4053f42b843"},{url:"assets/file.html.4007eaa2.js",revision:"bc639162eb437d3de5b4a920499107cd"},{url:"assets/file.html.b8d3950a.js",revision:"fc77e2b12586c6bea71e74320eb619e7"},{url:"assets/file.html.c5cc9956.js",revision:"28cd50350173da173cab1af855ff4921"},{url:"assets/file.html.ca4d5fa6.js",revision:"1184689e0f82344432eb9dc516ab48e6"},{url:"assets/index.html.01421d84.js",revision:"8f40fe4acfbb716033468b23788a8396"},{url:"assets/index.html.12a1a5d7.js",revision:"2b9369a745e1de7b41669471ebbbace9"},{url:"assets/index.html.3a31c7bd.js",revision:"e56fae4a8e3a1779166e9b47fd6e7a57"},{url:"assets/index.html.52781b5b.js",revision:"1f926483e7321db049ae5499e7dd668a"},{url:"assets/index.html.62dc4753.js",revision:"517b30d73ef80011b363d5279d148aa2"},{url:"assets/index.html.7f516bfc.js",revision:"48469a7dfc632678904217cda758171c"},{url:"assets/index.html.d3e0150a.js",revision:"54d07c5684cfd53058f9f86390c68d5d"},{url:"assets/index.html.eb976c73.js",revision:"1a19733913836b51b998640c457cef12"},{url:"assets/page.html.1f2b6687.js",revision:"e5d471fee4580ac0faa94983031b59ed"},{url:"assets/page.html.5fe33086.js",revision:"4370bd340df953ec74802bf3233eb964"},{url:"assets/photoswipe.esm.cf77b1ae.js",revision:"a161e9f0f413b7279a37a1b80c9d0cf2"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/storage.html.a23bf73d.js",revision:"d41818046d81562f9bf6af1b8121e65f"},{url:"assets/storage.html.e04e07ae.js",revision:"3649860ac5dac1bed5954659da30a92f"},{url:"assets/style.0e6ae498.css",revision:"b2c2c1419d3db8c765b3dc926c90b891"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"a61ce52408434fc2cb23d5654b96a4b7"},{url:"404.html",revision:"e4b78620f92ddfa7a37a8057be4aa815"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
