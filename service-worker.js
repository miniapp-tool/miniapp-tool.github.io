if(!self.define){let e,s={};const d=(d,a)=>(d=new URL(d+".js",a).href,s[d]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=s,document.head.appendChild(e)}else e=d,importScripts(d),s()})).then((()=>{let e=s[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const r=e=>d(e,i),t={module:{uri:i},exports:f,require:r};s[i]=Promise.all(a.map((e=>t[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-5b794e77"],(function(e){"use strict";e.setCacheNameDetails({prefix:"MP Tool"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.dfe6990a.js",revision:"8eaf6e203fa81b31088e2788d556ed2c"},{url:"assets/404.html.95191d76.js",revision:"97365aefdd18d65e0580faadef420a46"},{url:"assets/404.html.af55e53c.js",revision:"8d576756b7d3ddcfbce770e90371a5e3"},{url:"assets/app.e76cb615.js",revision:"067db0b82e9c6d3ddfefa336a5fe9977"},{url:"assets/app.html.56000cce.js",revision:"6617389b59d1148d800169fa313ee818"},{url:"assets/app.html.9cf1ad01.js",revision:"1d9f75ded2fdcdd106d8b496ea6ce6b7"},{url:"assets/component.html.0844789c.js",revision:"33c770ffac0485e4e72cc3ef4de45dcb"},{url:"assets/component.html.4b677096.js",revision:"e7b28a52a45efd9ed1afa5919c17cde8"},{url:"assets/config.html.148e8d1f.js",revision:"ec34c9d4c72a1c9ba2ef9533d9080424"},{url:"assets/config.html.2f8227de.js",revision:"b68ef939d4ad9bd03424f9e6255c446f"},{url:"assets/emitter.html.ab7da7dd.js",revision:"344e0a4f031a9d5fff29a445bda8a766"},{url:"assets/emitter.html.d830bdfc.js",revision:"828c97b3e3245891bb399f27a52c06be"},{url:"assets/enhance.html.e7124c5d.js",revision:"e948fd8410ab62081e22dc2408ae64d1"},{url:"assets/enhance.html.fd208840.js",revision:"037d5c61b06ceb124598b813de119683"},{url:"assets/file.html.035fbd8e.js",revision:"616958dec060a9db6984ce6c2c0244af"},{url:"assets/file.html.37dafeb5.js",revision:"ecb57932facfc986d33fd2bbacb0ef48"},{url:"assets/file.html.5fd5864f.js",revision:"56e713b98ad4dfd5e32a2a6cd344ab7a"},{url:"assets/file.html.db3cb4a6.js",revision:"a6eef24cd6db3b9182be273f5e46c5ec"},{url:"assets/index.html.096dfbf6.js",revision:"5a3b8457fd843128dfaec905d30f0c24"},{url:"assets/index.html.0985abe6.js",revision:"41d23deedf57d8f0249aad9a31ee13fd"},{url:"assets/index.html.31712936.js",revision:"757d96210bb6e3f12c82122990f8e499"},{url:"assets/index.html.33cb3d61.js",revision:"7c4a0d20f3ad45e4584333b395027dfa"},{url:"assets/index.html.764c5d7f.js",revision:"f59131983c1a61273b26335ca0f04734"},{url:"assets/index.html.83deb69d.js",revision:"c902fbce74b471f06cebed886cc06541"},{url:"assets/index.html.c50df988.js",revision:"854c95459608a8e0a245e4de503e8aee"},{url:"assets/index.html.cd580f8a.js",revision:"3cef7b0f02fdccbd534dde69ded81fab"},{url:"assets/Layout.e5c4fbcb.js",revision:"925f3e374f920a19cb45458edcf0d02f"},{url:"assets/page.html.06c2896d.js",revision:"c2d5daedcd043d0ab3eac34a86a5c67e"},{url:"assets/page.html.2744a04a.js",revision:"f293136d93a7e037cef36d4b7f4b427b"},{url:"assets/photoswipe.esm.5b6cac2a.js",revision:"442a3264b1db7eb84ffc880407e7565d"},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:"b29b145139fc88e89a46af507277557d"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SkipLink.c54c65b1.js",revision:"8edb8ec1aabf9c85a0ce54d0b07ec78b"},{url:"assets/storage.html.2123817b.js",revision:"d075a51d466c8fffccb8fd1085511bb9"},{url:"assets/storage.html.3d06efe7.js",revision:"2c9365c0274c5f0d84414cce615ccbe5"},{url:"assets/style.ccb159f0.css",revision:"91464228bdc3fd60e12d275ce3d4bd66"},{url:"logo.svg",revision:"2fe17ab370f9ed0a4c01c6b3543a7224"},{url:"index.html",revision:"56471955ac52d7345d23f95079957496"},{url:"404.html",revision:"63694a6c8b6b567ec436ff7c6a382400"},{url:"logo.png",revision:"49e4188d3d010883726c2969975f416b"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
