if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),t={module:{uri:c},exports:f,require:r};s[c]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-c2f86a11"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-a50da90a.js",revision:"f81ffb879b6a61d3c0b5e1bbd16a4cd4"},{url:"assets/404.html-b5e014c4.js",revision:"5f5da5da94df1652e10018b1c4bffe0b"},{url:"assets/app-b7ea4409.js",revision:"1a2977aa7e9a981cabe54c82ccf95729"},{url:"assets/app.html-cdbe8959.js",revision:"38ae790c2f7f00fc960f5bb511d76ae1"},{url:"assets/app.html-d832a30f.js",revision:"92a737a670a8fee232a997fb1c362aa4"},{url:"assets/Catalog-512622e4.js",revision:"df79d815bd924947bd3d36de27900ec0"},{url:"assets/component.html-454a375a.js",revision:"dfad0634f1e34fcc7066ed469a65be37"},{url:"assets/component.html-d9e7cbbc.js",revision:"4b5d33245f0ae9e37c4ddc4af4734742"},{url:"assets/config.html-4a441744.js",revision:"5f1f30079d5b14957f70606cda00cbf4"},{url:"assets/config.html-4b0336df.js",revision:"088b21723957e535c1e4c1a3cc4829dc"},{url:"assets/emitter.html-4de65dc9.js",revision:"2c7a2c57a94debc7d2f352940c06242a"},{url:"assets/emitter.html-7db7e41f.js",revision:"cf3f4a18a090ac4ab7589ca09595622b"},{url:"assets/enhance.html-93586377.js",revision:"2e82087b1e7a38b4f7300d0da2817cd9"},{url:"assets/enhance.html-d36c7efd.js",revision:"3fffc044aa90e2ec3595d67e2df1bda8"},{url:"assets/file.html-050d7624.js",revision:"06a16457ddc0d37033557b03291b612d"},{url:"assets/file.html-4888d473.js",revision:"eb4f246e8f3f553ffc33490588c7c951"},{url:"assets/file.html-68bdd3c2.js",revision:"702f89a28085b36640bb03bcb2a2b223"},{url:"assets/file.html-f3ce9f40.js",revision:"001f3a85e28c32a38df8433bc10f6715"},{url:"assets/framework-e7b8d244.js",revision:"7d88d34188cf4085af2b1a99a4d50165"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-0545292b.js",revision:"d2f7240c0db85b9a7e7698fd23648d29"},{url:"assets/index.html-0e5fb5b1.js",revision:"aad1921d527537671f076d2488c2ebea"},{url:"assets/index.html-2b3267bd.js",revision:"2c10ff586a43b70f93b77ad33a0039fd"},{url:"assets/index.html-6d6748b2.js",revision:"0c85e42182bf026a884059862049b953"},{url:"assets/index.html-963f6cb2.js",revision:"8ea9d5c1a5a6e9cdc712c2b12b576b71"},{url:"assets/index.html-bcf31a74.js",revision:"3909194146ad1379167eea1106e8c918"},{url:"assets/index.html-cd38b6a8.js",revision:"d15e9ca12462ac538ed4a1a0fe169e39"},{url:"assets/index.html-e0e696e4.js",revision:"fd784d773719d146475b4401079cf690"},{url:"assets/index.html-ec98b955.js",revision:"1ca5abcbc0fee85220f48fb49a4cc405"},{url:"assets/index.html-f6cfb631.js",revision:"c031df4a34d08efb1a070b5f34b7137a"},{url:"assets/page.html-2947b58e.js",revision:"6e614ac64a5576a05dec472e42637e6c"},{url:"assets/page.html-e3a4d281.js",revision:"29867a69da6344e914a56f2e6d2ccccd"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-2260e20a.js",revision:"135d78ab0f3c5f2e654734fb895d29f7"},{url:"assets/storage.html-19de0c6e.js",revision:"b4dee5b2ac80915abd58f33b36d97c3b"},{url:"assets/storage.html-263a5b8f.js",revision:"43a2f5f9526c0b754963ed18b520fbc7"},{url:"assets/style-3aa90094.css",revision:"04c7fe2fb2927ed1d3b70534530a6737"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"baec01e126bda463370ca3536d1f8665"},{url:"404.html",revision:"150da9a5d80625b61369da985b08ec8b"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
