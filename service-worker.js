if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"bc36aac9622a44811b2efe830bb29e64"},{url:"article/index.html",revision:"48dfcca197b6f92405b2401facdbfbfb"},{url:"assets/css/0.styles.f3266cdd.css",revision:"5021fad43d54f559f4c89be0308ff13e"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/118.4c032feb.js",revision:"f63690fa47714c151d0994b5cc6ef49a"},{url:"assets/js/app.196ea8b5.js",revision:"5ed908d10b283393c6d63eb1c738ecb3"},{url:"assets/js/layout-Blog.f3ed5a98.js",revision:"a01c9b58648379b09485f5e729b12e89"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.11a52672.js",revision:"62abcae17a4ea3bc2a37c3172467724f"},{url:"assets/js/layout-Layout.a8f2a9f2.js",revision:"d6e2d91665d7e47c78c6ff4dd26e9c6a"},{url:"assets/js/layout-NotFound.59cb869c.js",revision:"cd3347c0b197153a848a9e07c4626c7b"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.f8d75d5a.js",revision:"02428d5e7e3edb6084e554c3f9c9c934"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.5497b05d.js",revision:"94be80d6f8819cebb5441c413c2f95d5"},{url:"assets/js/page-AboutVuepress--4a71114e.c21c5754.js",revision:"2bcdc3b83c586fbf07b77844369bbcc6"},{url:"assets/js/page-Basic--770cb96b.13515ad4.js",revision:"0eeef58662f31c03068467a99ba20d22"},{url:"assets/js/page-Bloghomepage--64265752.e547d296.js",revision:"a4e39f7f8e1d65e23bc428c6e53f75da"},{url:"assets/js/page-Blogrelated--17c260a2.7d0b35cb.js",revision:"180e71e15555051ab59476c56c2bb37e"},{url:"assets/js/page-CommentFunction--5bb6671c.bb6e81c0.js",revision:"6270f26d4d67d761ab11d44f68dc0010"},{url:"assets/js/page-Commonproblems--2b571e9b.e9270c7d.js",revision:"c1bf6ef9e25a646ad1cf053bdab2ad13"},{url:"assets/js/page-Config--35a0a7d9.9ecab195.js",revision:"37f6ed53cf5e50a5d208f8a0a41b4d00"},{url:"assets/js/page-Customalignment--4f21aa5c.173fb178.js",revision:"3725c24d485efc276ee8358750465a7e"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.fa4c9ff2.js",revision:"6025a56f603893f140a0a50060c947ec"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.e4a2c6c3.js",revision:"a4676279f7795e2efebb58c18ca85c0e"},{url:"assets/js/page-Demos--f328658e.9365cd3b.js",revision:"9fc35d28a8d664dee983d3be17d1d007"},{url:"assets/js/page-EmojiList--41bb29b9.399a765f.js",revision:"9219193a25c35bfabf2fc0fb1b592ab3"},{url:"assets/js/page-Emoji列表--404e6737.6db3f554.js",revision:"967e3112dc71e1d2b64db7f310713d03"},{url:"assets/js/page-Encryptionfunction--181bdc9c.86dc5ed3.js",revision:"b7e2821516fe970bfbf839c6b3e5d507"},{url:"assets/js/page-FileStructure--665a4f1c.9013a0e0.js",revision:"672c55847a0a0602febc011472df96bc"},{url:"assets/js/page-Flowchart--7ce6d974.fd1a2587.js",revision:"7362af17e009f87d60504463bf4b9d47"},{url:"assets/js/page-Footnote--0c733e52.9a759eff.js",revision:"91ccf443c4a847a4ee3c80af428ae4a2"},{url:"assets/js/page-HomePage--5834599c.84846fd2.js",revision:"e4e97ff7bf65ff0cadfd0d845068bbfc"},{url:"assets/js/page-InstallUsage--0ab466d2.4e5cad10.js",revision:"94402b0bdea5aeeeea89ca6181b7123e"},{url:"assets/js/page-Introduction--d4910962.178284b5.js",revision:"e7304fd3eb60f7221c5659c946927c64"},{url:"assets/js/page-Layout--12bd4f0e.0c0e37cc.js",revision:"847b811d258bbb2adfd2ba350882437b"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.6a3fd2c1.js",revision:"2a3fe88f7b4285ea18c514a13d551cd5"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.d006e5c6.js",revision:"ffa189d468b2b290ca84f310824c1048"},{url:"assets/js/page-MarkdownIntroduction--270989ce.2a0224cf.js",revision:"8fe38c194a0c1f2bf581e6d9a82ed37f"},{url:"assets/js/page-Markdown介绍--0e6891b6.891bff05.js",revision:"851620f4d1124dfd095b5dd6f9bd1961"},{url:"assets/js/page-Markdown增强--6162938f.b94b5649.js",revision:"216b036788d15a80e3e6b8d44bfb7b76"},{url:"assets/js/page-Markdown示例--5479fe88.6f21cf83.js",revision:"f6bd48a2bc667e4a16497311587b137c"},{url:"assets/js/page-Markup--6b1f341c.6ec65133.js",revision:"03d82af3f5f2cebf62811f7a09700b6d"},{url:"assets/js/page-Nature--749fb09c.533252da.js",revision:"46b91bbc2963c8792ff7fee24e90dba2"},{url:"assets/js/page-NavBar--c7bf87dc.71407803.js",revision:"8bb92c858d3194da948242fcaa2e864a"},{url:"assets/js/page-NewComponent--1d138c72.b1fff085.js",revision:"3b01f9fb4fe89875f02aca2e30ca4b00"},{url:"assets/js/page-Newfeature--5136c541.3040b54a.js",revision:"6609f2d17b812300c0bb5c3c094e7aa2"},{url:"assets/js/page-Object--16031ab2.f8e7fc89.js",revision:"a33fd95ca18d8d275ae705de0e7103b0"},{url:"assets/js/page-Page--af17b59c.9a9369c3.js",revision:"eccabbd8d7906317e9955dcd8246f2f6"},{url:"assets/js/page-PageConfiguration--0aacc152.9cfdb392.js",revision:"c759a5462ebbc91b8a2445763fd1293c"},{url:"assets/js/page-Pageinformation--71efd5d2.dca1ac53.js",revision:"c4c0fd66f113cdc1bf9ac8d1c09cf67a"},{url:"assets/js/page-People--2182769c.07f0ebad.js",revision:"dd860a34b3cc3f8839474177eea99e86"},{url:"assets/js/page-Place--951cdc00.30bd23dc.js",revision:"a834cd6934a96de4f758eff60346bdde"},{url:"assets/js/page-PluginDescription--137c6c07.4189fd17.js",revision:"b52369582436ba41bec296a65be74091"},{url:"assets/js/page-Plugins--adbf415c.4beb84ed.js",revision:"7bc3b9f582b7aa2524057911d47cec5e"},{url:"assets/js/page-SEOandSitemap--5934b3b2.b04c2cb1.js",revision:"c51bcc4c4f9e722440983bc828d83aa4"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.d4a21e64.js",revision:"35c25bf7b0044d98c0cea7a6224658da"},{url:"assets/js/page-Sidebar--2fa1ea2c.5cb88375.js",revision:"a1ebb94c2526f93579db24087b2137ee"},{url:"assets/js/page-stylusconfiguration--6796cdf2.72a513ae.js",revision:"3f421ac5d2726965ed1aecbd37460106"},{url:"assets/js/page-stylus配置--0ce19a82.44e038e2.js",revision:"7a198c6a9c1f8eed7cd0376cb5aedc1f"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.cd8a01e3.js",revision:"95819f8782122b23cede71c3de5a3077"},{url:"assets/js/page-Symbol--a9259c5c.97a0e6c0.js",revision:"517ea19a7df2395e14820398ac0b4ae9"},{url:"assets/js/page-TexSupport--64cb5e50.5ae85bea.js",revision:"8239b09f85c31b8e60fe64f87dcd2628"},{url:"assets/js/page-Tex语法支持--1e02b152.28c97141.js",revision:"af5e04de76961d36cbd00698517945d0"},{url:"assets/js/page-ThemeConfig--1120a0ce.9648a8ec.js",revision:"83724bca3848e2fcdd5236f33b7daa79"},{url:"assets/js/page-ThemeConfig--1726e14e.7188df5c.js",revision:"33cf253897ecfc552b15a1db0cbbc529"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.9299863e.js",revision:"420f479f32f885bce1e6a13b29314edd"},{url:"assets/js/page-ThemeLayoutConfig--a3ab449c.16818a27.js",revision:"1b82f8b0090db1c0aedd680750522f13"},{url:"assets/js/page-ThemePluginConfig--958196dc.76a9e494.js",revision:"3505ec5ddda57fc809e19afd44eb7a4a"},{url:"assets/js/page-TSsupport--09728ac8.a82bfcad.js",revision:"1456876f4837b5d0803fc7638c337fa3"},{url:"assets/js/page-TS支持--4625f812.c248de71.js",revision:"d5cbca4ac1a10effefcd7fd600e81671"},{url:"assets/js/page-Vuepress--b7060eee.3da4bd02.js",revision:"7b785593f57148d34a95793737cbbe71"},{url:"assets/js/page-vuepress-plugin-container--31498112.3fde5589.js",revision:"3d545db9720f374b5d17bbbf23853752"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.4f3dda9c.js",revision:"2445de9e136e9b9d1ccbe64d7a2bca01"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.b8f81b66.js",revision:"2b23fec31b44a389a2cc0ccca0ae93ce"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.8e66210a.js",revision:"a765497f31d0473b389f5df727c2d89d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.bc11e54d.js",revision:"89ed20b298d53ffecfc02ddcaf880db8"},{url:"assets/js/page-vuepress-theme-hope--776d8369.904761f8.js",revision:"0a74540d17182c5969f93c433907836a"},{url:"assets/js/page-VuepressCases--082972f2.f694aab2.js",revision:"cb789c25dba0058a0d802ea737be980a"},{url:"assets/js/page-Vuepresscommands--9f3f316c.b742efd8.js",revision:"4c9c5c8b8d610f1e5a73e38ac0fd67ba"},{url:"assets/js/page-Vuepress案例--531d5f3e.38cf5b3c.js",revision:"b8d579ff4c687697c0d9eb51cfb69db7"},{url:"assets/js/page-上下角标--8efed9dc.3fcd69b2.js",revision:"62e85bd6bf83f8bbeac8b6b798719a44"},{url:"assets/js/page-主题功能配置--5bb71452.119b7220.js",revision:"f810377f94426de5d6f8b1575aa21000"},{url:"assets/js/page-主题布局配置--0ac082da.44969023.js",revision:"c67df899f8fcc9991cfb722350d08b01"},{url:"assets/js/page-主题插件配置--1b0c3e98.986611f3.js",revision:"730561c6b32e863a84bb26a8d2612480"},{url:"assets/js/page-主题配置--21dc088d.f061188d.js",revision:"8e82dc95155da645b4dc3dd3f9de6f3d"},{url:"assets/js/page-主题配置--2c572572.26857075.js",revision:"7aaed358b0e4c65c9f68d51d6e4c8deb"},{url:"assets/js/page-人物--b4fc27dc.a8759b1c.js",revision:"ed8326accde652ba32eacad7827025fe"},{url:"assets/js/page-介绍--2e99d139.e6dfcf7f.js",revision:"7db094aa2d2310c47d8f0704ae3a55d0"},{url:"assets/js/page-侧边栏--43054cb2.3bab4e9a.js",revision:"b850b91e87178b85f1afc75df0c55c1f"},{url:"assets/js/page-加密功能--2361b7e4.7fd569d5.js",revision:"ac00e8f0ffdb981b45d90e24989a142b"},{url:"assets/js/page-博客相关--6a3fd4f2.c8d6b45f.js",revision:"ce45c445d7a80212888a6a6b7420f781"},{url:"assets/js/page-博客首页--1eb2b298.1dd665d1.js",revision:"721c2483596d39329142a811c873a702"},{url:"assets/js/page-地点--6710785c.cb5f47ef.js",revision:"dd60f0ddc9777712545e4bbc1fc4a905"},{url:"assets/js/page-基础知识--4d466a79.b98ccca1.js",revision:"2db2428439af73a30da206129c62703a"},{url:"assets/js/page-安装使用--76e0e5b0.33a513aa.js",revision:"e351b5ddebbd959ceec75cb5afb5bf59"},{url:"assets/js/page-对象--e150da9c.da493ef9.js",revision:"17477dd1c776f3230f0e7100e1915c0d"},{url:"assets/js/page-导航栏--183844fc.33ae174f.js",revision:"e556d4ad9cf1c2fe3450089e1ba03091"},{url:"assets/js/page-布局--fa93e36a.407e6b1e.js",revision:"4390a00426fadd231b02ee927371c473"},{url:"assets/js/page-常见问题--10ab790e.4f1ec0e6.js",revision:"e5d48fe6eeed097db90e06961dd128e7"},{url:"assets/js/page-插件--32355f10.1f3c77cc.js",revision:"f7fd5e0094162b192fd9010e84ac0807"},{url:"assets/js/page-插件说明--cbca1c8e.e61b417a.js",revision:"56c6b615f9425a75b7da31a52b8292cb"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.d76d3770.js",revision:"dfd7a4673e745a1aaf26607992d67981"},{url:"assets/js/page-新增特性--30c6c799.8d7eeefe.js",revision:"42b75037f02ba43db6ea1dd50cd2c66a"},{url:"assets/js/page-新增组件--0979095e.b637a3f4.js",revision:"6967f923187ac2cd5546ce6abb3006ac"},{url:"assets/js/page-标记--0ac52704.4fa587ec.js",revision:"796de793a1af206fc5872abc05cb9940"},{url:"assets/js/page-流程图支持--582eff1c.a5b5ea99.js",revision:"076d6a8049f67bd4069db3373430f924"},{url:"assets/js/page-深色模式与主题色--01662674.5e6baad1.js",revision:"33a64b5b3afae1bfa59ca3b6d70fed15"},{url:"assets/js/page-符号--2db8fb80.de028017.js",revision:"e66032eda764a96bc15188c1e4a22990"},{url:"assets/js/page-脚注--17d88350.25cf5607.js",revision:"c875876c7dc92b4a334c6f095f6220be"},{url:"assets/js/page-自定义对齐--048d31dc.da5c6064.js",revision:"f451b54263029d1db3bf3885ad051419"},{url:"assets/js/page-自然--7ec33be2.a5cc91fb.js",revision:"bea67a2eab0d573124fb95ed37f4970c"},{url:"assets/js/page-评论功能--350aff9a.91d41212.js",revision:"c517b862d167cd1ed4c4290305d841e1"},{url:"assets/js/page-配置--d315f8fe.4d47767b.js",revision:"568cb14f0b9ac3c482dc6517d9f5d43a"},{url:"assets/js/page-页面--78423bfe.24a0466b.js",revision:"82b9c547addb1d5420c9b70fcdcf3ec0"},{url:"assets/js/page-页面信息--455b9800.56a1ce7c.js",revision:"b94677a74b7599baa8429a72ad8f88eb"},{url:"assets/js/page-页面配置--02399408.b88f8224.js",revision:"88179bb9cb0c7a66da50a20268138085"},{url:"assets/js/page-项目指令--2f3d7c1c.a41b19d5.js",revision:"1805e75c466936707d430c600ca20926"},{url:"assets/js/page-项目案例--1f3d6482.fb37cdf8.js",revision:"2072fe23d3d147f0e93d1fa9b239b80a"},{url:"assets/js/page-首页--79a22944.f5195f72.js",revision:"a4c17f60668f86b3f0d0a7de656a711d"},{url:"assets/js/page-默认主题配置--0d5b7f32.6cb42db9.js",revision:"d04a254834084f14e84d3d08accdf403"},{url:"assets/js/vendors~docsearch.3a86a372.js",revision:"e8ebdb7e7051a4c08486a058eb49a2dc"},{url:"assets/js/vendors~flowchart.a1ed6ede.js",revision:"fd46f549c3b521ddc96f0ed8f46dea21"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f40f9fbc.js",revision:"b69d87aec1bbeaee065563be5a3ac4bc"},{url:"assets/js/vendors~layout-Layout.5c00ed3c.js",revision:"b3040d50d8df646858a9cd8edbfea924"},{url:"basic/index.html",revision:"d99db6c7d5a9719a52c56981835900e5"},{url:"basic/markdown/demo/index.html",revision:"cf919beb074b79849a37e7e02c671f74"},{url:"basic/markdown/emoji/index.html",revision:"69a3e1e1727e6512a3efcc7d99a529d5"},{url:"basic/markdown/emoji/nature/index.html",revision:"b21d5d6d8760c4a81b0009fe2f11fae3"},{url:"basic/markdown/emoji/object/index.html",revision:"097814951015db50cd49d8a38b896490"},{url:"basic/markdown/emoji/people/index.html",revision:"fb07d9755d4698ae7bae692f55fcd031"},{url:"basic/markdown/emoji/place/index.html",revision:"66bbed1563df552de7087aea47a90258"},{url:"basic/markdown/emoji/symbol/index.html",revision:"aa7ded3487dd946c8c2b69265cf68e80"},{url:"basic/markdown/index.html",revision:"e993a53f76f29c6cc553a9a656d6b0aa"},{url:"basic/vuepress/case/index.html",revision:"b37cf9493c1891801d629402df9895eb"},{url:"basic/vuepress/command/index.html",revision:"f47a32f451123978e25d2cecdeaf4366"},{url:"basic/vuepress/file/index.html",revision:"889d9c88d5278f1a1e9a69ec6abf1e15"},{url:"basic/vuepress/index.html",revision:"fbd4ef9cbb3fa8fa5efab885eff91c12"},{url:"basic/vuepress/plugin/index.html",revision:"f1b4b5f60f632034368310870e1213f7"},{url:"basic/vuepress/theme/index.html",revision:"71597b368cdfa948e3d498eab2ed2cc1"},{url:"category/basic/index.html",revision:"ca9743960837e30884c3c643880cd4d8"},{url:"category/basic/page/2/index.html",revision:"5842ee367e538504dcb32f4fee21dde2"},{url:"category/basic/page/3/index.html",revision:"0a582022affc281f58a3e706c71870b3"},{url:"category/config/index.html",revision:"c425c27d0523031bb4441c7aa47c989b"},{url:"category/config/page/2/index.html",revision:"06dc9fb31f6c56c58849f6743de75d4b"},{url:"category/config/page/3/index.html",revision:"cbe7fc0afce14a938697d279525743b7"},{url:"category/demo/index.html",revision:"fbdc85b6e4a53e9c7ea5c5a1394015ff"},{url:"category/FAQ/index.html",revision:"5ef09fc2e3fe27ce07d0b817881a608c"},{url:"category/feature/index.html",revision:"75094d8e720588ef750f3c06fbba4370"},{url:"category/feature/page/2/index.html",revision:"124d563bc2cbd013303dc6fe01f0ed5f"},{url:"category/index.html",revision:"327eecfaa0327a2a6b000732b9839136"},{url:"category/instruction/index.html",revision:"439c171fc503c81c6a366ea9fc50e4f0"},{url:"category/layout/index.html",revision:"fbc475d8f0226458796c51ea78fb6c86"},{url:"category/layout/page/2/index.html",revision:"c9c1acf5397f9238def235d23c109561"},{url:"category/markdown/index.html",revision:"4f6f0e8697e1d4bed37914725d78a7c2"},{url:"config/index.html",revision:"c9e044604a6afea675be01dfdf57a230"},{url:"config/page/index.html",revision:"8a0d33ace642ba0a70d42326d276ffbf"},{url:"config/plugin/container/index.html",revision:"56a8b000609009d6ca945b7809da4e26"},{url:"config/plugin/copyright/index.html",revision:"5bb731f4c77605bd2e4cdbf8f462b2cb"},{url:"config/plugin/index.html",revision:"3dfad394a99a190a67fb4c213accf1a1"},{url:"config/plugin/pwa/index.html",revision:"d4e6efddce04d38e7450f891662efdbd"},{url:"config/stylus/index.html",revision:"c59455d236717a53f0ff3830210809c0"},{url:"config/theme/appearence/index.html",revision:"46ca096ba9692bb117cd680a0b0563b9"},{url:"config/theme/default/index.html",revision:"808336d2cc68fcf77220d5bdbb3ef405"},{url:"config/theme/feature/index.html",revision:"c960e42d689838aa08a0fd3fdc04199d"},{url:"config/theme/index.html",revision:"c1ad614d2c1412d1c6c9a90ae136e57a"},{url:"config/theme/plugin/index.html",revision:"d85d3377eb7ac11b755c4b31ccc11d34"},{url:"demo/index.html",revision:"628910de5b4ad8404ca7021bf1c0d00f"},{url:"FAQ/index.html",revision:"b5e2a8c29fa9548a424c14d08c269ea9"},{url:"guide/feature/blog/index.html",revision:"50def94c50cd93d0f575d04083e7da11"},{url:"guide/feature/comment/index.html",revision:"c125c406058d05e3c4b0693d72dbe9b7"},{url:"guide/feature/component/index.html",revision:"828f59acfbbf408f011ea20e5e08c051"},{url:"guide/feature/encrypt/index.html",revision:"bbdf754e2809c6ded5e65a93ebc35a68"},{url:"guide/feature/index.html",revision:"a6955afc0ab56ce22151373c31e6b71b"},{url:"guide/feature/markdown/align/index.html",revision:"2d83593242c4d883233711f0ae6a15b3"},{url:"guide/feature/markdown/flowchart/index.html",revision:"434510e20ec1b34d2053c50c2b331167"},{url:"guide/feature/markdown/footnote/index.html",revision:"d0f3de034c3b6603cff4ef8f2ced7aac"},{url:"guide/feature/markdown/index.html",revision:"d00230368300af690b6b4f48b2d03e41"},{url:"guide/feature/markdown/mark/index.html",revision:"671380f8523fcde4e4a2516228955068"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"ad05455485d92c4e44e8ecf57a2714b5"},{url:"guide/feature/markdown/tex/index.html",revision:"a97009a146e20618aad7271f3af86f5a"},{url:"guide/feature/page-info/index.html",revision:"76b85b79f19068457731637e65e6da49"},{url:"guide/feature/seoAndSitemap/index.html",revision:"50cedc790219b5a68b2e6bf5109238ce"},{url:"guide/feature/theme/index.html",revision:"b3ca2cffb2b9f4ce746b3a674c63fa3e"},{url:"guide/feature/typescript/index.html",revision:"45bdae381b95264baf260b13278fbbdc"},{url:"guide/index.html",revision:"f587d2c7f9acbddc1c56712d66e7a406"},{url:"guide/install/index.html",revision:"353c35cae29c4b2e53867b57fa4580fd"},{url:"guide/layout/blog/index.html",revision:"44e338ddd721dcd26b8cc6f7881a5898"},{url:"guide/layout/home/index.html",revision:"0e6134b765d83c797e07a95b2fb3bc56"},{url:"guide/layout/index.html",revision:"5839826a0fe9839e1ab6ce01b6803b0e"},{url:"guide/layout/navbar/index.html",revision:"19290a70ab26a60c26c0194d4db0da38"},{url:"guide/layout/page/index.html",revision:"d5cd40640ab17bd3a85914a8c3603283"},{url:"guide/layout/sidebar/index.html",revision:"6a73d982aca7dfad45f4cea5984a53ca"},{url:"index.html",revision:"108f485bfc08a76a7abbed6e4860d4d7"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"9d6fd758c2427c0b283ef24b8ee073bf"},{url:"tag/comment/index.html",revision:"96643721b7072e51f7d6d21a637f3262"},{url:"tag/components/index.html",revision:"8f15b7357462e38a743a260b79e98503"},{url:"tag/config/index.html",revision:"bbe66fa34c69b06cecf5aabca930fbb7"},{url:"tag/config/page/2/index.html",revision:"c26504435c17df0a65dee4e2746e2d3f"},{url:"tag/config/page/3/index.html",revision:"a98e27ee7ba3acc134f458a2803aa2a6"},{url:"tag/emoji/index.html",revision:"1ab42557705411e8bbc2c0836f479c48"},{url:"tag/emoji/page/2/index.html",revision:"09e5b7959aedc6afee2abd2e500b9ab2"},{url:"tag/encrypt/index.html",revision:"affe23018cb659d12636e894a5d01be0"},{url:"tag/feature/index.html",revision:"cc22cf0285c53f50c6cec383370932cd"},{url:"tag/feature/page/2/index.html",revision:"cb6b34dc9bc1684a8b65926b35c1b0a7"},{url:"tag/frontmatter/index.html",revision:"bfb1427f498e07f554be4889de4abd47"},{url:"tag/function/index.html",revision:"c6054479c10ea996d78713d7478ee1d6"},{url:"tag/function/page/2/index.html",revision:"66a7ce643c2856bdd9dd3def875b59b7"},{url:"tag/home/index.html",revision:"6e488b8557493cba713e77ff0b7930b8"},{url:"tag/index.html",revision:"88db5d2476c4f9570d65ea4722c7b30f"},{url:"tag/intro/index.html",revision:"69325ce6eef998b7705fc033fdc7c39f"},{url:"tag/layout/index.html",revision:"0a62d0fbdb68fd764958f859b59cebb2"},{url:"tag/layout/page/2/index.html",revision:"100b0d125f4733c9ac58119c3eec421f"},{url:"tag/markdown/index.html",revision:"cc258cadf4c54888f84e0d1cb18515e3"},{url:"tag/markdown/page/2/index.html",revision:"9240f762e4fdad68d9cd43c24772e95d"},{url:"tag/markdown/page/3/index.html",revision:"342a5ce38a032741bcbc0676cc4d4684"},{url:"tag/navbar/index.html",revision:"2acb042f7cd0821293e38fbecb8acdbe"},{url:"tag/page-info/index.html",revision:"482e179e331dda5a4df5f5170f31e83b"},{url:"tag/plugin/index.html",revision:"0a803bcaa991adbabe88bf6132d80056"},{url:"tag/seo/index.html",revision:"d4dcd8591beb8793cb7403702f2d1d46"},{url:"tag/sidebar/index.html",revision:"c814c7d57cfb5ea815c39706ba3c42bd"},{url:"tag/sitemap/index.html",revision:"86724484d9b27d0c54a216620bfab2bf"},{url:"tag/style/index.html",revision:"2719b9f7bce239eecd7efbd19f5443be"},{url:"tag/themeConfig/index.html",revision:"75243d48e22d865d5df1235a67aa0c21"},{url:"tag/typescript/index.html",revision:"720c03e3535aa4aa3be5ebd8769a774e"},{url:"tag/vuepress/index.html",revision:"17a9866366a50b0da9852744f6231af9"},{url:"tag/vuepress/page/2/index.html",revision:"23de1aaf1766c6eefd25978a1b57c5c5"},{url:"timeline/index.html",revision:"273e8939644739d21b8e21191fb1d229"},{url:"zh/basic/index.html",revision:"6c3ff2e55cd42b086c428cf1897fa780"},{url:"zh/basic/markdown/demo/index.html",revision:"2818c5b7551ffd44fec8bfc559b9e166"},{url:"zh/basic/markdown/emoji/index.html",revision:"3c84c933853a86710c5c749e54ea6983"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"c817460a75c4b07dc067c3a69f52c12b"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"bd6547b6179f87b9ad7289cb3f8d47de"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"1619f674c6edbb596211bc076e466dae"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"0bdfbad7341edf3f400ef96ce5b3a4a4"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"de0b7ed9b0f8dc1eaf0eda0bef23f436"},{url:"zh/basic/markdown/index.html",revision:"d0eadd90b08927e7f55a868412c86872"},{url:"zh/basic/vuepress/case/index.html",revision:"2ffa36503ae28d6e39f0acc986377646"},{url:"zh/basic/vuepress/command/index.html",revision:"58a346a84e20a9917e6f0c73140eec19"},{url:"zh/basic/vuepress/file/index.html",revision:"cc49a556788cb1045539a4f5d42c4f68"},{url:"zh/basic/vuepress/index.html",revision:"9e362fa32c9f6168fc4503bee62a888d"},{url:"zh/basic/vuepress/plugin/index.html",revision:"a1cd601835d9d91c7b43f0cdbecd78a0"},{url:"zh/basic/vuepress/theme/index.html",revision:"56a76ff4dc987c23585c1209e2f2ecd4"},{url:"zh/config/index.html",revision:"1be044761bb5b1b3287c4e579c2e8c3b"},{url:"zh/config/page/index.html",revision:"b2c59611904da6a0b190910e66aa112f"},{url:"zh/config/plugin/container/index.html",revision:"92dcb6e71441ee5978dce79bb64a5c2b"},{url:"zh/config/plugin/copyright/index.html",revision:"42f243c813d087d654fb6cb29f369583"},{url:"zh/config/plugin/index.html",revision:"8830c168a88e2b5dd47315d6cb9f87c4"},{url:"zh/config/plugin/pwa/index.html",revision:"efd46af188be4a1af00a151a36e9408f"},{url:"zh/config/stylus/index.html",revision:"c61ef44131a96584edd754fce6abc264"},{url:"zh/config/theme/appearence/index.html",revision:"65dd357f04d9cc215459ec07dfb2966d"},{url:"zh/config/theme/default/index.html",revision:"019deca9a83480a4ad53fb83ac657636"},{url:"zh/config/theme/feature/index.html",revision:"073940973a553ea884dcec0bcdca3836"},{url:"zh/config/theme/index.html",revision:"db42ef54a89413f4f78144e8f1d6f98f"},{url:"zh/config/theme/plugin/index.html",revision:"304d3083f780c379649def07e9f51395"},{url:"zh/demo/index.html",revision:"18ddc3d453ad95b60e8566af67c1f100"},{url:"zh/FAQ/index.html",revision:"b98672ce50c328f714f40661b96c34ea"},{url:"zh/guide/feature/blog/index.html",revision:"ddbd70be670a28cb3fea744cf52a79e3"},{url:"zh/guide/feature/comment/index.html",revision:"7b378326d8d722cb8542c429f2b9a967"},{url:"zh/guide/feature/component/index.html",revision:"f733cfe277db0a5473d8ade6ac561525"},{url:"zh/guide/feature/encrypt/index.html",revision:"9c7aa1da797065b1b5c391197d2ba6c4"},{url:"zh/guide/feature/index.html",revision:"e1f6e9a71b30ba9277498fa1f3d3ee98"},{url:"zh/guide/feature/markdown/align/index.html",revision:"392ac7dfa54072f1d4cc0094d2180abc"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"cb7c2a69557b1d18f6a8a7421654c64d"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"463b8cac0d9d8b2e4de877e443e98917"},{url:"zh/guide/feature/markdown/index.html",revision:"36403357d24b82a5f21f5aa3c5a6d34f"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"e93d3b11e296416fbb224ad2396c9b57"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"90bfb8a30a9fd88d2a8b2499bc1a6250"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"b2aea614c722e9c1d43be517e26bba4d"},{url:"zh/guide/feature/page-info/index.html",revision:"9572536d7d5be59b80fdfc904675dee4"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"906f4859a45e9775d7ed50d8b0f620a1"},{url:"zh/guide/feature/theme/index.html",revision:"86704f19d1e37072318b355a38bb0f4a"},{url:"zh/guide/feature/typescript/index.html",revision:"1c3408895ebe372806910c3833ab0845"},{url:"zh/guide/index.html",revision:"7c1241eaaf95c633699bbd52691b3956"},{url:"zh/guide/install/index.html",revision:"bcec28bff63345f585c6399b23213898"},{url:"zh/guide/layout/blog/index.html",revision:"d5973351d10c8e6d1ff74ec65c7acd63"},{url:"zh/guide/layout/home/index.html",revision:"4be66b6076569c79431291f450f607a8"},{url:"zh/guide/layout/index.html",revision:"0695a9673ec8ffcd8d1911b5f6feb8ee"},{url:"zh/guide/layout/navbar/index.html",revision:"64c8f4ee5aedb682c1bb5fdd8468e5f2"},{url:"zh/guide/layout/page/index.html",revision:"10d85f1cf5654fd8acf30fcaf360ac82"},{url:"zh/guide/layout/sidebar/index.html",revision:"503d2a908fce25db3c5502a0433f6fba"},{url:"zh/index.html",revision:"5b38cdeeb6e7280ba6c775ab4acd33a3"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
