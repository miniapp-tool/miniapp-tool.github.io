if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"896d6d154c611304b90044e914472930"},{url:"api/enhance/app.html",revision:"ab7e0567a35c56914f7e2461beec188e"},{url:"api/enhance/component.html",revision:"60053636a68c0c9b4c9f5246639add3c"},{url:"api/enhance/config.html",revision:"8b24541564808225e52ced983df06af0"},{url:"api/enhance/emitter.html",revision:"ae5a8e72aaf5901daefdc079293e69e1"},{url:"api/enhance/index.html",revision:"ab4e4d4d92b6fb837ab74ce75664512e"},{url:"api/enhance/page.html",revision:"5b0e5ee4c9b9a8afcd9817d22b2b4968"},{url:"api/file.html",revision:"f00077b89c00122cce2314a6b1fb1580"},{url:"assets/404.f68bd68d.js",revision:null},{url:"assets/404.html.c2b95d43.js",revision:null},{url:"assets/404.html.fcef0397.js",revision:null},{url:"assets/app.5e620583.js",revision:null},{url:"assets/app.html.434ba103.js",revision:null},{url:"assets/app.html.8481cdfd.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.7b85b4c4.js",revision:null},{url:"assets/component.html.d82850a3.js",revision:null},{url:"assets/config.html.69851e58.js",revision:null},{url:"assets/config.html.f68597f4.js",revision:null},{url:"assets/emitter.html.785ceefe.js",revision:null},{url:"assets/emitter.html.d7b4baf7.js",revision:null},{url:"assets/enhance.html.87d38707.js",revision:null},{url:"assets/enhance.html.baa133c9.js",revision:null},{url:"assets/file.html.7e538e53.js",revision:null},{url:"assets/file.html.a0e8bca9.js",revision:null},{url:"assets/file.html.dea5709f.js",revision:null},{url:"assets/file.html.e37e2c44.js",revision:null},{url:"assets/get-started.html.a8c5c5e5.js",revision:null},{url:"assets/get-started.html.b08fc179.js",revision:null},{url:"assets/index.71cda615.js",revision:null},{url:"assets/index.html.0473016e.js",revision:null},{url:"assets/index.html.6bbc6c5e.js",revision:null},{url:"assets/index.html.74f217b5.js",revision:null},{url:"assets/index.html.95c17dea.js",revision:null},{url:"assets/Layout.5cf26431.js",revision:null},{url:"assets/page.html.7c2deadb.js",revision:null},{url:"assets/page.html.e604cbb6.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.4d3c8010.css",revision:null},{url:"guide/enhance.html",revision:"2309e3ca451f811b76e99fb971624b73"},{url:"guide/file.html",revision:"db50bc53d1f34eb342bc4d2a820c52ad"},{url:"guide/get-started.html",revision:"0e5b3485f1104f4a4d0604480447c747"},{url:"index.html",revision:"40584f5c6045467458eab508b595d9ec"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"}],{})}));
