if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f68a4c01b2043cc25353f2ad777ed799"},{url:"api/enhance/app.html",revision:"e418e400da0f53cb1d39e3f144c74640"},{url:"api/enhance/component.html",revision:"2f3b551c7096de83300e5c41f894f99f"},{url:"api/enhance/config.html",revision:"78332862341c684816129054643daf60"},{url:"api/enhance/emitter.html",revision:"86da8db126438732d9cbbd7efff779df"},{url:"api/enhance/index.html",revision:"d6b8acfb1265c03a5e319526005b357a"},{url:"api/enhance/page.html",revision:"44dbda70ec568ea7a3e35e2bb76e1789"},{url:"api/file.html",revision:"9ee2ae87a205be7c0383f01974638da6"},{url:"assets/404.da632511.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.e5c62610.js",revision:null},{url:"assets/app.html.26097bd3.js",revision:null},{url:"assets/app.html.e483273e.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.5d9ac845.js",revision:null},{url:"assets/component.html.aa1cf69e.js",revision:null},{url:"assets/config.html.7815e99f.js",revision:null},{url:"assets/config.html.a335dc9f.js",revision:null},{url:"assets/emitter.html.e803e5d0.js",revision:null},{url:"assets/emitter.html.f41b2ee5.js",revision:null},{url:"assets/enhance.html.7161fea3.js",revision:null},{url:"assets/enhance.html.85877161.js",revision:null},{url:"assets/file.html.3d28a289.js",revision:null},{url:"assets/file.html.b9d3bd01.js",revision:null},{url:"assets/file.html.cf80f505.js",revision:null},{url:"assets/file.html.da430382.js",revision:null},{url:"assets/get-started.html.13f8b0c1.js",revision:null},{url:"assets/get-started.html.d1949030.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.8cb200c8.js",revision:null},{url:"assets/index.html.a79b7713.js",revision:null},{url:"assets/index.html.e0027cca.js",revision:null},{url:"assets/Layout.7bf3c52a.js",revision:null},{url:"assets/page.html.97f34947.js",revision:null},{url:"assets/page.html.b5fd376d.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.4d3c8010.css",revision:null},{url:"guide/enhance.html",revision:"c9140d6833140c55533012e3e68f83ca"},{url:"guide/file.html",revision:"cd6097ab89e3dc496123cd91f1a13fa4"},{url:"guide/get-started.html",revision:"47897cdb9c5b9ecdeaf1dccb05fa5d0a"},{url:"index.html",revision:"acf703c31dabfff7033dfcda6cc77565"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
