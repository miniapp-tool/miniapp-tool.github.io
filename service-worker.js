if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a138c20f792a7728b244aa3ccadab249"},{url:"api/enhance/app.html",revision:"7959f3a0c2c97ddc237fa0ccb8406058"},{url:"api/enhance/component.html",revision:"5aeed10d23c53090a98b58421ffd5cb6"},{url:"api/enhance/config.html",revision:"e0839bed1e7a592e6fd3897408969c67"},{url:"api/enhance/emitter.html",revision:"47f356a2d21efcce7d852b6bd83c9349"},{url:"api/enhance/index.html",revision:"7d175e236187e46f68dccdb4383560be"},{url:"api/enhance/page.html",revision:"9f59bb4e7e38b644795eab9af0da2daf"},{url:"api/file/file.html",revision:"f87151d926c58e7fa157cad02bf6385f"},{url:"api/file/index.html",revision:"6dd895d24db77353375d9a6087289b12"},{url:"api/file/storage.html",revision:"665ad52d289d782bb8e0c2b09c19367a"},{url:"assets/404.3cb4f144.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.fb79a2fd.js",revision:null},{url:"assets/app.html.12a064e1.js",revision:null},{url:"assets/app.html.c7637628.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.8c25c3c3.js",revision:null},{url:"assets/component.html.b14b61bd.js",revision:null},{url:"assets/config.html.328f43e8.js",revision:null},{url:"assets/config.html.f8ecbb8c.js",revision:null},{url:"assets/emitter.html.bb8cdcb2.js",revision:null},{url:"assets/emitter.html.f5865bcd.js",revision:null},{url:"assets/enhance.html.56b63c3d.js",revision:null},{url:"assets/enhance.html.be572775.js",revision:null},{url:"assets/file.html.354ed968.js",revision:null},{url:"assets/file.html.3b0106e5.js",revision:null},{url:"assets/file.html.76974876.js",revision:null},{url:"assets/file.html.b9ff720f.js",revision:null},{url:"assets/get-started.html.b6515747.js",revision:null},{url:"assets/get-started.html.c00bd147.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0273c064.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.6a7ac14a.js",revision:null},{url:"assets/index.html.a05390eb.js",revision:null},{url:"assets/index.html.b7e76f40.js",revision:null},{url:"assets/index.html.d6c0ef81.js",revision:null},{url:"assets/Layout.199c3af1.js",revision:null},{url:"assets/page.html.9cfa6a1a.js",revision:null},{url:"assets/page.html.c189ac3b.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/storage.html.caa18051.js",revision:null},{url:"assets/storage.html.ea8737df.js",revision:null},{url:"assets/style.0db1126b.css",revision:null},{url:"guide/enhance.html",revision:"1180db4d73c7b6ef315a4d6d8f2fd442"},{url:"guide/file.html",revision:"3839c9d9f630307a2edee0c5507ec846"},{url:"guide/get-started.html",revision:"9c286b84ead501215d73b6d9c762817d"},{url:"index.html",revision:"c629068deef0a31c0873f74cb7dd82ea"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
