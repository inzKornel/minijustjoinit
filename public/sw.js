if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,c)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=c(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1qKYGujSLtAlg0FWDzrBf/_buildManifest.js",revision:"aefee9e6877a8c1ed2503c302343aa53"},{url:"/_next/static/1qKYGujSLtAlg0FWDzrBf/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/2c796e83.2297c16c06f5aeecc60f.js",revision:"36e26bcb2b50ea086999c785200db9a3"},{url:"/_next/static/chunks/7.278c22884cc0dbcf000d.js",revision:"9427a4b54676d43bdeb7d7b3ddf53112"},{url:"/_next/static/chunks/854c806b0d01c6cd6ad874ce1cc3a30d122eca5a.f1f057c7afd7e81abcf1.js",revision:"c829fd7cda6818dd0b0592fcb4631212"},{url:"/_next/static/chunks/8bb5247b660938eb69790c603fe71213a437b6b6.666f40fa60541e854416.js",revision:"493842dab60b44200193ea53819a445f"},{url:"/_next/static/chunks/ce4023b6118dfd50457289735526a6fd600f8991.92d755018985fe07297a.js",revision:"f9afa6ffe5710b1396b59752d150bf10"},{url:"/_next/static/chunks/commons.99dcea11b3273a42cf18.js",revision:"26d286e970e00a48d11983eb296af8ff"},{url:"/_next/static/chunks/framework.e988a8bfdc176c5e4cb8.js",revision:"84b32afca23e8225e455a1f61cf4d66d"},{url:"/_next/static/chunks/main-5872da5b3f1516a3b30c.js",revision:"eb30c444ee383b9f369bef758504d2ee"},{url:"/_next/static/chunks/pages/_app-536dbe24751fa6e10280.js",revision:"15532d362c4d630f987bc87fd0ed32fe"},{url:"/_next/static/chunks/pages/_error-dd9f6bde3136207c7ead.js",revision:"02a789f8cfb2dea310889e4c9035e588"},{url:"/_next/static/chunks/pages/all/%5Bid%5D-d5918a9ec7246c6cab02.js",revision:"5fe768de230f392960a6fb147a397ae1"},{url:"/_next/static/chunks/pages/index-2764d79779a09e63ae68.js",revision:"ebfe172d549068138cf70605553549f1"},{url:"/_next/static/chunks/pages/offers/%5Bid%5D-560cc376a06ac98ee575.js",revision:"3a7ecd56fe1550acefd5bcfeeb869477"},{url:"/_next/static/chunks/polyfills-555defa4e62ba07d4446.js",revision:"d66b7bb9a3de4c8a45e3a28c2a9c2859"},{url:"/_next/static/chunks/webpack-58fc4ae313509d122c72.js",revision:"3bae7b771a26e104ea55bbcfafa4ba86"},{url:"/_next/static/css/2c7d646864930b25d69e.css",revision:"086823482bf1c7851c7daa7671484974"},{url:"/_next/static/css/6474e979961440696f46.css",revision:"f035ece67c42e92e13f6f343d928721b"},{url:"/_next/static/media/roboto-all-400-italic.63782d1445ad031af14dd9291835ed3d.woff",revision:"c762d850e2e8d0e29047608715196736"},{url:"/_next/static/media/roboto-all-400-normal.b5a0a0df312d3423493b163e9675488c.woff",revision:"a91ad097d24828af724d4fee36a063ed"},{url:"/_next/static/media/roboto-cyrillic-400-italic.7270d0dbb41cca30909b7f1b23be78de.woff2",revision:"8266321ab43353bcd147ad67600d165c"},{url:"/_next/static/media/roboto-cyrillic-400-normal.3605d18d8a4ce5bd39c3d32119574854.woff2",revision:"8bb64952764a884d67019b3486296ab9"},{url:"/_next/static/media/roboto-cyrillic-ext-400-italic.c30985e07ee67f55f3e88654eced96ad.woff2",revision:"b3e580d221a4722c959155878ab94210"},{url:"/_next/static/media/roboto-cyrillic-ext-400-normal.dd55ea0a2e90d5d86e15444a623c385a.woff2",revision:"4743c758a952f2bd4a35d4e42afc002b"},{url:"/_next/static/media/roboto-greek-400-italic.aeaac920d76d2f3697cad159686728df.woff2",revision:"469a78405c3ae073ba769321fa0584f3"},{url:"/_next/static/media/roboto-greek-400-normal.352cc77aaed5208ce13c79cf9c89892f.woff2",revision:"c1e9793c84cb26c44ef2a2cf8b6f49ce"},{url:"/_next/static/media/roboto-greek-ext-400-italic.26c1478a1bb6b2c2c6b09bccb2b5b9c6.woff2",revision:"801b64f75ae26dab9c36f00629ebdad0"},{url:"/_next/static/media/roboto-greek-ext-400-normal.bc7ace6e50c7d9d4d95923b61b1de59c.woff2",revision:"182ee6a4872ca8fa78048951b1561a5c"},{url:"/_next/static/media/roboto-latin-400-italic.d022bc70dc1bf7b3425da9cdaa9841b6.woff2",revision:"51521a2a8da71e50d871ac6fd2187e87"},{url:"/_next/static/media/roboto-latin-400-normal.176f8f5bd5f02b3abfcf894955d7e919.woff2",revision:"479970ffb74f2117317f9d24d9e317fe"},{url:"/_next/static/media/roboto-latin-ext-400-italic.5ed4cf182892091e3b758ae0c7c98c63.woff2",revision:"dc3871f486e189164db4b98968330bc4"},{url:"/_next/static/media/roboto-latin-ext-400-normal.dcc07bcfcd475f34f20b2c1265bd1265.woff2",revision:"455200cb007fe1212c668721d827c691"},{url:"/_next/static/media/roboto-vietnamese-400-italic.d8e5b781ee65ffb7d167fe02faef8679.woff2",revision:"9780bde87bceec579eaf16bddad47615"},{url:"/_next/static/media/roboto-vietnamese-400-normal.52cebac009baf5592e7d0ee53d8e45ed.woff2",revision:"a8be5b46d06bb541b0968196ee5e6bb8"},{url:"/assets/android-original.svg",revision:"0cfaad50e21b262d9074b6662915de3a"},{url:"/assets/angularjs-original.svg",revision:"db12f97bda8cd0682f2c1daa1396daa3"},{url:"/assets/blockchain.svg",revision:"0292ec4ebac41c7e4107e34474814eaa"},{url:"/assets/c-original.svg",revision:"96173bb4ad30a47e19b557de4f1dce8a"},{url:"/assets/csharp-original.svg",revision:"f68f2cc5eb76ea1f7aca6c3a9deaf75a"},{url:"/assets/db.svg",revision:"52783a2f8043e237279093badadc9cf1"},{url:"/assets/devops.svg",revision:"8ba16e944b2ded1df7d2c447a5c1f3a4"},{url:"/assets/dot-net-original.svg",revision:"01af77e16f2040c3443eecc84a91a85c"},{url:"/assets/git.svg",revision:"c02b7da93fea7f472b89583e23f12759"},{url:"/assets/go-original.svg",revision:"c67771ce235102da73376e61305b10cd"},{url:"/assets/html5-original.svg",revision:"7997c4244e7a8cf2b160803e1c741502"},{url:"/assets/java-original.svg",revision:"66517ded2b3a6bef72a9c7fc9a1fc931"},{url:"/assets/javascript-original.svg",revision:"de79c8f14c2b0d692ae215d7e6eccd54"},{url:"/assets/php-original.svg",revision:"7be7348ea07780291787cb3825fbf59f"},{url:"/assets/pin.svg",revision:"401c8560293273286e9e1a3a5a24b0b0"},{url:"/assets/pm.svg",revision:"bd4a3d9256994fb686702e51ebec4816"},{url:"/assets/python-original.svg",revision:"3b84eb4026f0c704e7e3d16972bb0e3d"},{url:"/assets/ruby-original.svg",revision:"a3fdc39e66bd292b0300b392e7dbe4f8"},{url:"/assets/sap.svg",revision:"7b0b128602429c4bca602fa929db0cd7"},{url:"/assets/scala-original.svg",revision:"024fed2534625b524a3f62701f777426"},{url:"/assets/sketch-original.svg",revision:"9be5eb4a1357dff3f5f77bebf389fbef"},{url:"/assets/support.svg",revision:"f2779d40f6f80060d355807ac885e91b"},{url:"/assets/test.svg",revision:"75db59a97f36be54ae36399a2f64becf"},{url:"/assets/windows8-original.svg",revision:"69aab94726675641ce2112507418491c"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/manifest.json",revision:"a6260597a771ab55d0c12653d7b8d55b"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
