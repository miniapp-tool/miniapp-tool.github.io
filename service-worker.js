if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,r,i)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=i(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c523a9d46628531215ba44bcb48d764c"},{url:"api/enhance.html",revision:"23fe5994dbd0b211c2b2db46a704b24e"},{url:"assets/404.03cc555a.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.0d22f816.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/enhance.html.36435fa2.js",revision:null},{url:"assets/enhance.html.9e6058ff.js",revision:null},{url:"assets/enhance.html.b68fe940.js",revision:null},{url:"assets/enhance.html.b7dcb6e9.js",revision:null},{url:"assets/file.html.4762c366.js",revision:null},{url:"assets/file.html.5bb22d22.js",revision:null},{url:"assets/get-started.html.044f7b9b.js",revision:null},{url:"assets/get-started.html.5dd957ee.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.a199c4fe.js",revision:null},{url:"assets/Layout.e814f342.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.d5f042d4.css",revision:null},{url:"guide/enhance.html",revision:"5021fca625103bf2b3fbc8ebd95b4c91"},{url:"guide/file.html",revision:"986e42d88a1f52e39eb6717ba2ce8af0"},{url:"guide/get-started.html",revision:"8a30e0392ed5475a6668eb03f877d0e8"},{url:"index.html",revision:"507ebcbefa42c22ee75c651c076d988f"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
