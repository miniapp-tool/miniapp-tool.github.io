if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9da0afe1ad2845b61e736af1a773a264"},{url:"api/enhance/app.html",revision:"e8e187c1f94dfc5b64d9f38a3ec2c206"},{url:"api/enhance/component.html",revision:"923ce6f317e3f0d7478b8aa171c555d7"},{url:"api/enhance/config.html",revision:"4f94540ffb668c2d2ff3e439e11fb3ee"},{url:"api/enhance/emitter.html",revision:"1f211fdbeb6f2ef5fe2fba42c3d490d1"},{url:"api/enhance/index.html",revision:"46b4734144605c5ba8fb25fe5cf5ae04"},{url:"api/enhance/page.html",revision:"e4024df0d646021118bbdb0639401e6b"},{url:"api/file/file.html",revision:"046ba92058e3ee47703e734bce24f71c"},{url:"api/file/index.html",revision:"8c1ac391abe99c956aefd06b82c6ee51"},{url:"api/file/storage.html",revision:"6a6fa778b922501c876699b0624acd8d"},{url:"assets/404.f9fad0d8.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.38815fa9.js",revision:null},{url:"assets/app.html.5daf53c8.js",revision:null},{url:"assets/app.html.bdfea8ff.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.04b180ad.js",revision:null},{url:"assets/component.html.20e3b685.js",revision:null},{url:"assets/config.html.23577354.js",revision:null},{url:"assets/config.html.edef5a7f.js",revision:null},{url:"assets/emitter.html.a109ca5f.js",revision:null},{url:"assets/emitter.html.a2d8718d.js",revision:null},{url:"assets/enhance.html.2af1221d.js",revision:null},{url:"assets/enhance.html.41b3202b.js",revision:null},{url:"assets/file.html.0ab59175.js",revision:null},{url:"assets/file.html.52d97ada.js",revision:null},{url:"assets/file.html.648a9489.js",revision:null},{url:"assets/file.html.ff2dd30f.js",revision:null},{url:"assets/get-started.html.4e8f36fe.js",revision:null},{url:"assets/get-started.html.a8131836.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.2f2e84f8.js",revision:null},{url:"assets/index.html.6c122367.js",revision:null},{url:"assets/index.html.8d792646.js",revision:null},{url:"assets/index.html.97eeb2cc.js",revision:null},{url:"assets/index.html.d220f18b.js",revision:null},{url:"assets/Layout.8adccd29.js",revision:null},{url:"assets/page.html.15ae4b24.js",revision:null},{url:"assets/page.html.1f39ff6b.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/storage.html.1ba09788.js",revision:null},{url:"assets/storage.html.71c0244a.js",revision:null},{url:"assets/style.0db1126b.css",revision:null},{url:"guide/enhance.html",revision:"333078b8fb8692abeff5c7b9a81c7ed9"},{url:"guide/file.html",revision:"80cc0a36c1d618838542b7d5c825a9a5"},{url:"guide/get-started.html",revision:"50ee7d884d846282bc1fa966b0b03c3b"},{url:"index.html",revision:"388ec9134d34fd180a5935e0d3915d06"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
