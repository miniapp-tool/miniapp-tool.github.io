if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const r=e=>a(e,i),t={module:{uri:i},exports:f,require:r};s[i]=Promise.all(c.map((e=>t[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-5b794e77"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.8a557464.js",revision:"8671d9fe7feb069ebc762f7083a8dcd3"},{url:"assets/404.html.95191d76.js",revision:"97365aefdd18d65e0580faadef420a46"},{url:"assets/404.html.c4c21aca.js",revision:"4953449c83cd2e289d2c434874e9390b"},{url:"assets/app.6905c304.js",revision:"14c9759cc8500f935c20d7e794311439"},{url:"assets/app.html.5b4ce2a8.js",revision:"1f5e65b2fe6526b8de24106e65548d5f"},{url:"assets/app.html.8a0e9c50.js",revision:"8cf3b49cac908ff7f2ddf96f9a2fbfd9"},{url:"assets/component.html.05379c1e.js",revision:"adbed8708df88e625c138bd687e5eaca"},{url:"assets/component.html.23eb601c.js",revision:"6c589658d4d3db9652b9cb9ceb1e0314"},{url:"assets/config.html.1e52ebc8.js",revision:"d7c6e4ccbca018a8653df47b35a002ed"},{url:"assets/config.html.6a0c8be5.js",revision:"752aec0e80c3c61551bfeee94f843d40"},{url:"assets/emitter.html.9c56214b.js",revision:"befddc7733c69d45cadb5ef9426f4ebc"},{url:"assets/emitter.html.ac835a0e.js",revision:"48b9b85a7ba9aebc953c81d971ab0715"},{url:"assets/enhance.html.34f347df.js",revision:"16b9b99302fb604591c39f65eb766f7e"},{url:"assets/enhance.html.4c4d8972.js",revision:"98fe65fc167f1995ca429413ec9ef115"},{url:"assets/file.html.7399454b.js",revision:"6bc7df010f9398ac95818ff6c970f0b2"},{url:"assets/file.html.7bc20e29.js",revision:"b8ca4844e7cfb827165f40f8dc7baf3e"},{url:"assets/file.html.e1aba9b6.js",revision:"5948de1fb8251804d44062593c76ded9"},{url:"assets/file.html.ef55259c.js",revision:"498920a5499e1fb05a14c07ce7785fca"},{url:"assets/index.html.1d14037b.js",revision:"3bb20e53bd5ff931944a6b5c37add305"},{url:"assets/index.html.4d74c935.js",revision:"cb3d8d3c825141fb27c9013a92e6d845"},{url:"assets/index.html.79de5227.js",revision:"c9fc57a3afdb8a22469b957b585423cd"},{url:"assets/index.html.831121e0.js",revision:"17e833d60e2415cad6160a7ae904e78e"},{url:"assets/index.html.b830a599.js",revision:"db034a2a63a8389c7ca313cbde91d5a8"},{url:"assets/index.html.d946373f.js",revision:"c316a8e47da81a9773040d161942e509"},{url:"assets/index.html.ddc20203.js",revision:"ad7057de6b5050a1caa941fe59a4ff5d"},{url:"assets/index.html.e6f802cd.js",revision:"72d738a13a0ac2e302294a872ff1b3aa"},{url:"assets/Layout.93af669f.js",revision:"157187da26a715c5058026752ecff906"},{url:"assets/page.html.9f791b3c.js",revision:"26dc1a08b5d2607c72574978dcf6949c"},{url:"assets/page.html.ada0f96a.js",revision:"df62ee2067abe6f33b14f815cd82fbbc"},{url:"assets/photoswipe.esm.5b6cac2a.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.c28d0cd0.js",revision:"bcf554b8d00f36c0423f1bdfd590b48d"},{url:"assets/storage.html.975a04d3.js",revision:"57a4694639419462ea60d2644401bfa5"},{url:"assets/storage.html.baa8e325.js",revision:"45fe1855da46839739a1c279b8f98207"},{url:"assets/style.ccb159f0.css",revision:"91464228bdc3fd60e12d275ce3d4bd66"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"c40daaa9bac485ab58a4bc336907bdda"},{url:"404.html",revision:"3bb34408f6afd4633cbd7055dd9f6fce"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
