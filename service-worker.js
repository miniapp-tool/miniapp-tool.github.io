if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7e3cf82169e7e01c4d1219ffb9cd924c"},{url:"api/enhance/app.html",revision:"7d0d6b5c777421bbcb9b475f5b622dfe"},{url:"api/enhance/component.html",revision:"6fa3d2773c074eb09ddf6ab64d1b3912"},{url:"api/enhance/config.html",revision:"1dfcceaa0880a76bb44bf701eafc5b97"},{url:"api/enhance/emitter.html",revision:"391c10b83ad43e13c727d04189797a49"},{url:"api/enhance/index.html",revision:"b2252ecb023203912ea454da7fd209c4"},{url:"api/enhance/page.html",revision:"f5f9625afbbbcade7b101368a7179e41"},{url:"api/file.html",revision:"40089c12811c3404e1e9c6aeb44b75d7"},{url:"assets/404.f6e2eb24.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.119a94b2.js",revision:null},{url:"assets/app.html.8df0a190.js",revision:null},{url:"assets/app.html.e6f4015f.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.4764e4ab.js",revision:null},{url:"assets/component.html.5061e18e.js",revision:null},{url:"assets/config.html.68809b77.js",revision:null},{url:"assets/config.html.d2b5d03d.js",revision:null},{url:"assets/emitter.html.33c7111a.js",revision:null},{url:"assets/emitter.html.5b19e459.js",revision:null},{url:"assets/enhance.html.0408d7c3.js",revision:null},{url:"assets/enhance.html.b32b48c0.js",revision:null},{url:"assets/file.html.06ae6bbd.js",revision:null},{url:"assets/file.html.9184d1c4.js",revision:null},{url:"assets/file.html.d099fbac.js",revision:null},{url:"assets/file.html.d35f582e.js",revision:null},{url:"assets/get-started.html.9f867dba.js",revision:null},{url:"assets/get-started.html.e0ce64cb.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.40673984.js",revision:null},{url:"assets/index.html.83aa848c.js",revision:null},{url:"assets/index.html.a02ab71b.js",revision:null},{url:"assets/Layout.65e7451f.js",revision:null},{url:"assets/page.html.2847ca8e.js",revision:null},{url:"assets/page.html.a776888c.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.4d3c8010.css",revision:null},{url:"guide/enhance.html",revision:"edbc39b2d783fb39588ca764f0a2f25a"},{url:"guide/file.html",revision:"6730e01e06686b489c899afcfa85253c"},{url:"guide/get-started.html",revision:"8947932ee9a96608e548656972d5eea0"},{url:"index.html",revision:"e9dfcb5d36a6bdc57683e9b1bdf835cd"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
