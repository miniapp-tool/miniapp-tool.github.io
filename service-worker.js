if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(d.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-5b794e77"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.c1cea5e4.js",revision:"257a1a4b1383009e7d9c53b81b71c152"},{url:"assets/404.html.1d55c70a.js",revision:"d64b20567ce888f90e08ec9acbdd81f9"},{url:"assets/404.html.95191d76.js",revision:"97365aefdd18d65e0580faadef420a46"},{url:"assets/app.90ce6ae5.js",revision:"1c76d0d1d9a3312943b5f6884c571149"},{url:"assets/app.html.ea1396c2.js",revision:"307d77b89eb016d47b258689b8e46f9a"},{url:"assets/app.html.eb5627fd.js",revision:"27fb12269d9c894e558d4233f88216eb"},{url:"assets/component.html.828e3504.js",revision:"3b3f7d86c130fc35f5830a2c26d06038"},{url:"assets/component.html.e32b274d.js",revision:"784ed61e41bce2c31cc85df47f59981b"},{url:"assets/config.html.31c46408.js",revision:"f034fee787bca0251702c60795f41fa9"},{url:"assets/config.html.7a35881d.js",revision:"bd56d2c24a3190d4b7f9731cc0f91709"},{url:"assets/emitter.html.04120c73.js",revision:"56a4485fcf70504a8e8a98eb56fc2ce6"},{url:"assets/emitter.html.aa56c3a1.js",revision:"82dacc34d391bc226cd8797a7e26eefd"},{url:"assets/enhance.html.2cb52ce5.js",revision:"0ec03492efbbdcc7ad16d95da9fbd94d"},{url:"assets/enhance.html.7ad42d59.js",revision:"a2cff44918f497a207139af764a944bc"},{url:"assets/file.html.12ae4fce.js",revision:"543e2913d498483b502b35deff72d35c"},{url:"assets/file.html.7e022fd7.js",revision:"81f6cce3c1ae004f40411834eb18412c"},{url:"assets/file.html.9700bb1d.js",revision:"291598fd744ff0c9ee4b56e6a4f1d322"},{url:"assets/file.html.b53e5db7.js",revision:"dc39af9ec3f7942d77a6e378e6058132"},{url:"assets/index.html.368d59f2.js",revision:"d1332d3cd572636a36b7543108a35099"},{url:"assets/index.html.4c66c058.js",revision:"1f8825000a50b4146852b45f5123836d"},{url:"assets/index.html.829bb5b4.js",revision:"da93b4d2791da89761c3644c91ef1d14"},{url:"assets/index.html.8eb0e85f.js",revision:"4de901608bccc3254837a222a3a85207"},{url:"assets/index.html.b3b35f27.js",revision:"de1f23860dc85dd1a1d9a623d630f1aa"},{url:"assets/index.html.b59b0d5d.js",revision:"0215b501fc7cf82c1a44f30dc293eb4a"},{url:"assets/index.html.c6984e63.js",revision:"0876a38cb18544c90f74c6d18db08d52"},{url:"assets/index.html.eeb266b1.js",revision:"4fd18d1b4cd8023649ca41ea18253aaf"},{url:"assets/Layout.03a59f72.js",revision:"9a76a26a411d893fc1651481be89ebc9"},{url:"assets/page.html.12275187.js",revision:"1e13759f13dce851a593261487b5e285"},{url:"assets/page.html.6fd6824f.js",revision:"2498cc7b7dca37674f65007c350eda41"},{url:"assets/photoswipe.esm.5b6cac2a.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.014f9771.js",revision:"efcaba8c28cbab45150e6a1f0374e4e7"},{url:"assets/storage.html.15274121.js",revision:"06b564195ec15a95087e2db47192f58d"},{url:"assets/storage.html.7df41ae7.js",revision:"d56ba70778476b9825b37d341c84664c"},{url:"assets/style.9efaf5ad.css",revision:"f4afe03efd843af157cdcaa1eaa11c3c"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"828f897e3db5b12eca3ed69d0897db3c"},{url:"404.html",revision:"619aaa2b53c50861987dba10e23e3572"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
