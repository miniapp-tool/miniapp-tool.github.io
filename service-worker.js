if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),t={module:{uri:i},exports:c,require:r};s[i]=Promise.all(d.map((e=>t[e]||r(e)))).then((e=>(f(...e),c)))}}define(["./workbox-5b794e77"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.46202e29.js",revision:"ed1c9f73ff7e91abae5b66d5c4d5dbe6"},{url:"assets/404.html.95191d76.js",revision:"97365aefdd18d65e0580faadef420a46"},{url:"assets/404.html.b7a15d46.js",revision:"b91e53ba4cc48f3a2f944da61f6b81c7"},{url:"assets/app.16e14592.js",revision:"ebae8e90143c5068e8605e84aeedbe4c"},{url:"assets/app.html.1a93b3fe.js",revision:"b2f168d06dc490a4062aa6525f10d549"},{url:"assets/app.html.3bad3ade.js",revision:"dcb19703fb0fee5a3f4b432862a36583"},{url:"assets/component.html.02ea4fcf.js",revision:"8fbbfe6610d8b79665073758b8299ede"},{url:"assets/component.html.529325c0.js",revision:"d58c566bed037edddf63f3d2820e9c2e"},{url:"assets/config.html.578661d1.js",revision:"e63c48b828e727386df99d50d9c74819"},{url:"assets/config.html.c79541d8.js",revision:"3d5e9cbc7b00811dd16c66560eb3df9a"},{url:"assets/emitter.html.601d90f2.js",revision:"6f363195fb1783c9e97169f5ae4953ef"},{url:"assets/emitter.html.f6976d6f.js",revision:"d1bf25ec33fd8ac9cd47a222033ac75f"},{url:"assets/enhance.html.0881499f.js",revision:"8376a73256e824ce6037cde61fff46c3"},{url:"assets/enhance.html.2567055c.js",revision:"5abd130f78cd853032a05c86f1e81c09"},{url:"assets/file.html.15147c62.js",revision:"5ec5a65d88b67a7698ede736dfc53c37"},{url:"assets/file.html.c724c22a.js",revision:"872c659179464131abb331ca6ff7a875"},{url:"assets/file.html.cab59684.js",revision:"ed2cae569bae0a8dbcacdfd6a42b93c1"},{url:"assets/file.html.e4d64306.js",revision:"1c62f13390fd2d70ac70a4b33f90fc8b"},{url:"assets/index.html.213ec7bc.js",revision:"396d1dd89780b084f36a2659ec82d8df"},{url:"assets/index.html.480dea4d.js",revision:"a93926abff7fb33fa4ca717f2dd95adf"},{url:"assets/index.html.5bb95a44.js",revision:"7dd7f5efbd80d67126604566dfceefcd"},{url:"assets/index.html.8bb2d586.js",revision:"cb71cf786ffde2a07b69b84b3f92cc94"},{url:"assets/index.html.9edcd8e3.js",revision:"65b211e7d5eb91bedcc46a3297019fe2"},{url:"assets/index.html.c976dba2.js",revision:"ffec18dc64e21e8f19da4d0ada0adc19"},{url:"assets/index.html.d87c73a9.js",revision:"fd471d677f4b6f107b67d6b5e483dde3"},{url:"assets/index.html.fb9023ea.js",revision:"d3fdb77822863a3a135f9145e5b73b5d"},{url:"assets/Layout.fb993f60.js",revision:"3ec6f08382b0b69653434f913dcb0f8c"},{url:"assets/page.html.e5758ab6.js",revision:"a470af0ea1a21c39fdc71283cb6935a2"},{url:"assets/page.html.e5947813.js",revision:"967537b6d22fdb02fe61ca64bf82afa6"},{url:"assets/photoswipe.esm.5b6cac2a.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.9b98b68f.js",revision:"e8d0b9e52ad1c72242a02eb594bca96e"},{url:"assets/storage.html.540b7366.js",revision:"815988de7830eaaf041e8059eb8e661e"},{url:"assets/storage.html.ee624908.js",revision:"f8fe0aace1684faef5a41e6b749b1fef"},{url:"assets/style.ccb159f0.css",revision:"91464228bdc3fd60e12d275ce3d4bd66"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"2f9e944d0e0f2be6e3d279aa9f21d5b2"},{url:"404.html",revision:"8679b5cf4b3c9da3a8be606d56a6f43f"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
