if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3766307f4baf4b996509613908c05f84"},{url:"api/enhance/app.html",revision:"469de922447647c999920a6ae1877567"},{url:"api/enhance/component.html",revision:"fb69bb3798e24148f3f302f595fb4855"},{url:"api/enhance/config.html",revision:"9910689b70dca7ddf50fa95a0aa6e7cc"},{url:"api/enhance/emitter.html",revision:"2dd53cd9e6125eb3cdd7d1a72abd4d16"},{url:"api/enhance/index.html",revision:"20744a73830604f19f5b1ffce9d75768"},{url:"api/enhance/page.html",revision:"cdda3e88be386b1f0c7ba506ffb73571"},{url:"api/file.html",revision:"dee996c2da0aed309df39855cb0cc0f5"},{url:"assets/404.15fc5620.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.a27017bd.js",revision:null},{url:"assets/app.html.3d62ff8f.js",revision:null},{url:"assets/app.html.4181d3b0.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.19688a17.js",revision:null},{url:"assets/component.html.d6097f83.js",revision:null},{url:"assets/config.html.5deb8b74.js",revision:null},{url:"assets/config.html.6dd9fdf5.js",revision:null},{url:"assets/emitter.html.a2fbb2a5.js",revision:null},{url:"assets/emitter.html.b64a5c6d.js",revision:null},{url:"assets/enhance.html.2c929e90.js",revision:null},{url:"assets/enhance.html.8401a138.js",revision:null},{url:"assets/file.html.0039dbf4.js",revision:null},{url:"assets/file.html.06418c95.js",revision:null},{url:"assets/file.html.0cb24bb2.js",revision:null},{url:"assets/file.html.63696486.js",revision:null},{url:"assets/get-started.html.1a19fe91.js",revision:null},{url:"assets/get-started.html.787ee216.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.0ce4f347.js",revision:null},{url:"assets/index.html.62a44a89.js",revision:null},{url:"assets/index.html.e05d9152.js",revision:null},{url:"assets/Layout.941aba6c.js",revision:null},{url:"assets/page.html.579f9f38.js",revision:null},{url:"assets/page.html.5ba1a281.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.4d3c8010.css",revision:null},{url:"guide/enhance.html",revision:"54be4ac98b1049cb3f06cee9f17c516b"},{url:"guide/file.html",revision:"f0a3fb016330c22ffaee5c4d2727c556"},{url:"guide/get-started.html",revision:"8a7928583aa9905885e52d169d94c7c6"},{url:"index.html",revision:"c495ecd72d70625daba043ea627b1cd6"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
