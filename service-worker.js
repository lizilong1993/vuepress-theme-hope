if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2328f127"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"816bcc8f5f68d10fa27e148b733ca7c5"},{url:"article/index.html",revision:"b0cb22fa5ed498a8aab3d4b3f64d5d07"},{url:"assets/css/0.styles.92787ace.css",revision:"50737e0d5dd6aa95ed56d47f2d5ee997"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"assets/icon/appleIcon152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/msIcon144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/blog.28e68cac.png",revision:"28e68cacce1e0d9b91b68324cb73cd8a"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/118.79ad13da.js",revision:"ae14e1ff104a140dbfc4aa44902e3bd3"},{url:"assets/js/app.9e48180b.js",revision:"19bb972ef2a59c41f12a65d50456834c"},{url:"assets/js/layout-Blog.9f7cdadc.js",revision:"dccb8cf6dddec798b906c1d978fab728"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.7a0d4651.js",revision:"d246773c6937262cf70e00876f3bf174"},{url:"assets/js/layout-Layout.80736b3c.js",revision:"d42ceda3dce6b76973c2eac4d61a0722"},{url:"assets/js/layout-NotFound.1e5def34.js",revision:"8d1fa4fccaca0362e50415a71e94c6b5"},{url:"assets/js/page-@mr-hopeplugin-pwa--051692f2.3832c863.js",revision:"9310f3904a5b30b17946f4e3d57d4b2c"},{url:"assets/js/page-@mr-hopepwa--afe3f12c.f39e21f9.js",revision:"42e4fb81d4e672d799656d21f671e536"},{url:"assets/js/page-AboutVuePress--4a71114e.81b731f4.js",revision:"33db1db547877828a4781de03971b3a0"},{url:"assets/js/page-Basic--770cb96b.302c1091.js",revision:"19be2e1f3c602e2e549b652cdf45a890"},{url:"assets/js/page-Bloghomepage--64265752.1f5757c4.js",revision:"4d5536cbc0c5930c4b9c73701d609b5c"},{url:"assets/js/page-Blogrelated--17c260a2.0f2f680e.js",revision:"ad9b34f5f4317763c87cd53de0c42a5e"},{url:"assets/js/page-CommentFunction--5bb6671c.d929ad6d.js",revision:"f3ee003f1a3a1afa82e4bd95a01d8da2"},{url:"assets/js/page-Commonproblems--2b571e9b.14028dce.js",revision:"669340ea1d772a05999bddda91ae7441"},{url:"assets/js/page-Config--35a0a7d9.1699f4d3.js",revision:"adcd51773dd8961d687b3e0e048363bf"},{url:"assets/js/page-Customalignment--4f21aa5c.74f1f848.js",revision:"b546192cb85af1d06ee1d180a0a1b3ee"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.d12bcc92.js",revision:"b3a37de8d581f96c728fbe46b6228cd5"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.965c7d75.js",revision:"7c79ceb966a6c48217c06436a475696b"},{url:"assets/js/page-Demos--f328658e.29261be9.js",revision:"f131039487c0192576d66659ee282a44"},{url:"assets/js/page-EmojiList--41bb29b9.40488b6d.js",revision:"ef9a8e67e02ea1cec18b14d961a5c26a"},{url:"assets/js/page-Emoji列表--404e6737.95b9241b.js",revision:"c5141b13ed2548305aad03e4d9dafae8"},{url:"assets/js/page-Encryptionfunction--181bdc9c.8e39e8fe.js",revision:"1c4a5590911d72159975ad2ec0451804"},{url:"assets/js/page-FileStructure--665a4f1c.44b597fa.js",revision:"956534c9e06d7303c40d4ecd00f00d15"},{url:"assets/js/page-Flowchart--7ce6d974.fefaf602.js",revision:"ac7a4ce6aefd202f78f1d4dffb3e0460"},{url:"assets/js/page-Footnote--0c733e52.de222a23.js",revision:"4845aaa61ea3f7b54e77a311bfa6ed51"},{url:"assets/js/page-HomePage--5834599c.03f9790d.js",revision:"014de684c85d2f21f8fd1baa4f9c4380"},{url:"assets/js/page-InstallUsage--0ab466d2.8f342feb.js",revision:"a587aa4ba80b6337750e5d82ec3bc341"},{url:"assets/js/page-Introduction--d4910962.a0448305.js",revision:"0bf195084c063e326c9b596696e277cf"},{url:"assets/js/page-Layout--12bd4f0e.8fc05385.js",revision:"cd57ff45adac52026c721926dad5f3ce"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.2ea5cf95.js",revision:"55adc60a593897c001b8e06d8fcb8634"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.7fcee5f2.js",revision:"6deac60f792f76672ef8dcba4b40da7f"},{url:"assets/js/page-MarkdownIntroduction--270989ce.46f610a6.js",revision:"697db9f58f1dc3083c11d6e3df19938c"},{url:"assets/js/page-Markdown介绍--0e6891b6.be36dffc.js",revision:"c0fb72c0f34ea24f23b6f321b915cb73"},{url:"assets/js/page-Markdown增强--6162938f.e3f759fc.js",revision:"4fb87b204fd64a61c9b6cbc37c772738"},{url:"assets/js/page-Markdown示例--5479fe88.3a3abce8.js",revision:"d426621953d16ad283c7634806182644"},{url:"assets/js/page-Markup--6b1f341c.1d8f0048.js",revision:"3e5ad540551bc859ee9ed7cafac98d03"},{url:"assets/js/page-Nature--749fb09c.04fe43fd.js",revision:"5458bf9fa797d3564d88698b8c192c65"},{url:"assets/js/page-NavBar--c7bf87dc.1f2dcff9.js",revision:"4496ee6801d5482a20dcfdcae25e9215"},{url:"assets/js/page-NewComponent--1d138c72.08de0480.js",revision:"b7d0f28a0c6179744cc01f27f33add19"},{url:"assets/js/page-Newfeature--5136c541.30f42161.js",revision:"7f912e15e745f4082573679fe5b9e795"},{url:"assets/js/page-Object--16031ab2.3f282c41.js",revision:"ea0a875c2ced0c12179feaccb8e81ab3"},{url:"assets/js/page-Page--af17b59c.28f1c231.js",revision:"2dc259cc517ebbb5f8d0c5f4cb06f39e"},{url:"assets/js/page-PageConfiguration--0aacc152.8e8c6d62.js",revision:"5373eccd4a98eacef8afab7568bc215a"},{url:"assets/js/page-Pageinformation--71efd5d2.daa44ab7.js",revision:"155ac6ead6dbeaf5886a13d22d5e21c8"},{url:"assets/js/page-People--2182769c.f504f0ef.js",revision:"b33efa2a8cd95f1dac271631aaabeaca"},{url:"assets/js/page-Place--951cdc00.beaa7b9a.js",revision:"af9fc08b939aabb801922091b3f94c2b"},{url:"assets/js/page-PluginDescription--137c6c07.d8afcb83.js",revision:"487c809b8f4ae39961276700b62850fd"},{url:"assets/js/page-Plugins--adbf415c.2510e7e0.js",revision:"7f24685d3fce8ee6bb46ca98ad120384"},{url:"assets/js/page-SEOandSitemap--5934b3b2.2bc86602.js",revision:"f57a575e3d8321122de386aac7dc4c5d"},{url:"assets/js/page-SEO和Sitemap--35ca8b22.a8f7081c.js",revision:"847a388c760bc6ce3e8e06179ce543d9"},{url:"assets/js/page-Sidebar--2fa1ea2c.3751603b.js",revision:"9dfdf90358bd117ecdc7de1191bad372"},{url:"assets/js/page-stylusconfiguration--6796cdf2.60b13ecf.js",revision:"a5756c7cb5fbe957e3652d148ab5cfff"},{url:"assets/js/page-stylus配置--0ce19a82.2e168fcf.js",revision:"b6c91975def005dd48bc90e0d34ad5bb"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.518115b4.js",revision:"36d52833c9bcc77b75dfd20e6107f907"},{url:"assets/js/page-Symbol--a9259c5c.73018ddd.js",revision:"8d2fb0e933cd9c68624134aad6dedd8c"},{url:"assets/js/page-TexSupport--64cb5e50.cbd16faf.js",revision:"f23d7b310c4ae27367df3cc4fa1105f9"},{url:"assets/js/page-Tex语法支持--1e02b152.c53b3ac5.js",revision:"ebcfe6f9d56cc05d484f0c2b3d7dff42"},{url:"assets/js/page-ThemeConfig--1120a0ce.bed49b89.js",revision:"34a6a18440705834c95b367c10b024eb"},{url:"assets/js/page-ThemeConfig--1726e14e.a3fe58b1.js",revision:"e4c3112aed1eab5307b5ca5d1ff9fd62"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.c49c96f5.js",revision:"a4970f0c0cb5534fb7417580dca317d9"},{url:"assets/js/page-ThemeLayoutConfig--a3ab449c.0af0f15e.js",revision:"9da8c1e7f037fa5397da45244640a9d0"},{url:"assets/js/page-ThemePluginConfig--958196dc.446bf8bb.js",revision:"4011b1f84bb5d44395849bf4f4c06b0f"},{url:"assets/js/page-TSsupport--09728ac8.cafdad8d.js",revision:"f9aaaa7d8dfa2504d1c528331637285f"},{url:"assets/js/page-TS支持--4625f812.f2b5ed12.js",revision:"ed34ac120491aa49debb3e25990d5670"},{url:"assets/js/page-VuePress--b7060eee.99f87726.js",revision:"cd92a8550209975834615b4288acbd38"},{url:"assets/js/page-vuepress-plugin-container--31498112.8dff4873.js",revision:"91430e3907be8ad2aada8c3fc2a3c03a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.7c43e436.js",revision:"70b6a954a174e63d56f0b5823d366334"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.49a79316.js",revision:"0f8cb81dc8b2cdb280e11f0cdd2a29a4"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.d0d70bc5.js",revision:"dc145cd4b3d6bca7a2e5c7ed1fedb489"},{url:"assets/js/page-vuepress-theme-hope--354da24e.f814069a.js",revision:"7f65fd341b074fd9be32cf6d547a083b"},{url:"assets/js/page-vuepress-theme-hope--776d8369.d65bb213.js",revision:"aaef586dc13cdf2a8a8078989ace1c11"},{url:"assets/js/page-VuePressCases--082972f2.a8123b42.js",revision:"414a3227be9591ae38045ef01e61a650"},{url:"assets/js/page-VuePresscommands--9f3f316c.93bfb647.js",revision:"5feeb46dfdc410e3d49a2f783defd889"},{url:"assets/js/page-VuePress案例--531d5f3e.04bc2e9b.js",revision:"302c0f383b54866aa66230411a6fa7d4"},{url:"assets/js/page-上下角标--8efed9dc.d7fe59ab.js",revision:"222adc6b8cfd637792b860b53bdca4ca"},{url:"assets/js/page-主题功能配置--5bb71452.eede5261.js",revision:"ab6a5e0ffd16fd750a20449d4c0ffbb3"},{url:"assets/js/page-主题布局配置--0ac082da.ecdfbe90.js",revision:"158f20ca5eac12f4d6c20afe4d96f307"},{url:"assets/js/page-主题插件配置--1b0c3e98.b1fb8fa7.js",revision:"0c6b0fa4de6324628da3d28b1985d6f6"},{url:"assets/js/page-主题配置--21dc088d.2353bfc6.js",revision:"f2b4d45ac94681fdc261bf1386af6c4c"},{url:"assets/js/page-主题配置--2c572572.3668d74c.js",revision:"13343440384b9ec56392df043eafdc5f"},{url:"assets/js/page-人物--b4fc27dc.6ff779ae.js",revision:"362bb3b518701cef65baf202a68d7a72"},{url:"assets/js/page-介绍--2e99d139.29f3fb49.js",revision:"7f5f7d465031b16c60f9e59a0a4aea10"},{url:"assets/js/page-侧边栏--43054cb2.a9e14fb6.js",revision:"3ebbe6bd888bc2d3dde2488ffbd86b77"},{url:"assets/js/page-加密功能--2361b7e4.a5380aba.js",revision:"a5e28c79240b095a21f0f95ac2d90d07"},{url:"assets/js/page-博客相关--6a3fd4f2.380849ca.js",revision:"af11e764d36e9c205313a256b90646ea"},{url:"assets/js/page-博客首页--1eb2b298.76c44add.js",revision:"e5a6a6d392dcecdcbca959b3d47dd706"},{url:"assets/js/page-地点--6710785c.65ab60be.js",revision:"0dbe5516182e2e29e8cbe374f27c013c"},{url:"assets/js/page-基础知识--4d466a79.a090ad30.js",revision:"635d51da3bfb0021a1ff6dc3419b9b5d"},{url:"assets/js/page-安装使用--76e0e5b0.d4eb43cc.js",revision:"e76c96908fbbe6185555e86fd40cb86a"},{url:"assets/js/page-对象--e150da9c.fc94cfc5.js",revision:"86f8df6e3c1e1a597ca0cba152f2dbca"},{url:"assets/js/page-导航栏--183844fc.705ac853.js",revision:"cfcf8cbe71a4c789934aa0638d27d8e4"},{url:"assets/js/page-布局--fa93e36a.a901370f.js",revision:"6d9d4473fed3945094c9c0b86d022fe1"},{url:"assets/js/page-常见问题--10ab790e.44a0b8fe.js",revision:"4b55623bf2006f48a749036b3717a48e"},{url:"assets/js/page-插件--32355f10.05ef42b8.js",revision:"a3f7e85c40e8883023e99757a0dae996"},{url:"assets/js/page-插件说明--cbca1c8e.fb72301c.js",revision:"8799f4a81a6d0877a2c2da8e01364243"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.39a1934b.js",revision:"b8277343668fece2431287fc3fbe1428"},{url:"assets/js/page-新增特性--30c6c799.c27aa6d4.js",revision:"5ca6cf640192d9de370dc4b74456e4f2"},{url:"assets/js/page-新增组件--0979095e.81fec444.js",revision:"dd7062c922d3e3a85e104a08c6d33951"},{url:"assets/js/page-标记--0ac52704.e2cf4eaa.js",revision:"1e7d1bbc5a343b0c1a92cdc125b57c65"},{url:"assets/js/page-流程图支持--582eff1c.d43be76d.js",revision:"522dd5db341c32d031df3fad844a9d97"},{url:"assets/js/page-深色模式与主题色--01662674.60814165.js",revision:"6137d60753fe1599f30c4f3c26ad3478"},{url:"assets/js/page-符号--2db8fb80.5a1589dd.js",revision:"319105b00510efe1ba2e9bda5f64829b"},{url:"assets/js/page-脚注--17d88350.734485c9.js",revision:"94934b7554172bfa52899904e2dd4fe6"},{url:"assets/js/page-自定义对齐--048d31dc.360c5d32.js",revision:"6908ad58c6aae2972e8e7c457c26baf2"},{url:"assets/js/page-自然--7ec33be2.b31cef42.js",revision:"8fb3fbf9fce848bacf898d2e179f51e9"},{url:"assets/js/page-评论功能--350aff9a.8988c263.js",revision:"033b7761b2cec86ae67fd09304f579a4"},{url:"assets/js/page-配置--d315f8fe.365f611e.js",revision:"ab9f5827566c3ae77174f5262c1c02f4"},{url:"assets/js/page-页面--78423bfe.8a6b25c9.js",revision:"5ca8d0b83c80dc1e3978402e098e4771"},{url:"assets/js/page-页面信息--455b9800.064c5561.js",revision:"d7ed4b921bc478871ab0a18bfd78c63e"},{url:"assets/js/page-页面配置--02399408.2584ca12.js",revision:"96718fa6078c24f1e86901f8f642c80e"},{url:"assets/js/page-项目指令--2f3d7c1c.479afd4b.js",revision:"9d3a34077617dd3d26e18fb83b3ac7b0"},{url:"assets/js/page-项目案例--1f3d6482.5e52c273.js",revision:"85b9d7b71a8592e2d7f550f2723cbea3"},{url:"assets/js/page-首页--79a22944.8bbf87d4.js",revision:"f879243d9161b747564392f38c5ec1be"},{url:"assets/js/page-默认主题配置--0d5b7f32.f116c04d.js",revision:"3ddf6f382f525940c0a478869b98d933"},{url:"assets/js/vendors~docsearch.5f4b507f.js",revision:"e91075b59f4303853dbf1734ed2251a7"},{url:"assets/js/vendors~flowchart.ab685766.js",revision:"253aa1c6f7756d9216e9a0f6643ada1e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.6df29fb1.js",revision:"9f3205d20ba7b34cb226ab3787de1b6e"},{url:"assets/js/vendors~layout-Layout.a3a2e7d9.js",revision:"a24d4efecaa0c571004543b20438d5c3"},{url:"basic/index.html",revision:"ee31788a0c53f56db5b5cb2e7d1a9d21"},{url:"basic/markdown/demo/index.html",revision:"306cd608a207003642d47203d5d446d4"},{url:"basic/markdown/emoji/index.html",revision:"ec4b4b8058a50b516d360085a3bc2d33"},{url:"basic/markdown/emoji/nature/index.html",revision:"a621ecbaa11c77f1cd568227bc9e7cec"},{url:"basic/markdown/emoji/object/index.html",revision:"7a565fc57d49eb7e732f12c272b0a575"},{url:"basic/markdown/emoji/people/index.html",revision:"b7145c609d60f1e625ee7b13d86cd182"},{url:"basic/markdown/emoji/place/index.html",revision:"c3cf35d775b33c36f4a7dfea79d0476a"},{url:"basic/markdown/emoji/symbol/index.html",revision:"b0f28b72db682cb7c354a4fbec3c2bbc"},{url:"basic/markdown/index.html",revision:"0a2319fc55b4e617511ac2af182eb908"},{url:"basic/vuepress/case/index.html",revision:"316d4138be7749531067ffa869cfb48f"},{url:"basic/vuepress/command/index.html",revision:"53742f47854f7572732912ef5cca2de8"},{url:"basic/vuepress/file/index.html",revision:"38f9318f12dff7b07a15f0b8afa24e09"},{url:"basic/vuepress/index.html",revision:"a3afd7af35a53c1fa7b96878828a0f5c"},{url:"basic/vuepress/plugin/index.html",revision:"b44f7a942c54dd70d942ff1505f38e64"},{url:"basic/vuepress/theme/index.html",revision:"49012e34dd5b1f73097a5b340785eb87"},{url:"category/basic/index.html",revision:"cc6b3b0a07e51947d668986766a9e43b"},{url:"category/basic/page/2/index.html",revision:"636b6fed85d11e059e29741c1d9d4f74"},{url:"category/basic/page/3/index.html",revision:"454a2c77658e8adbb20eaec2613d9138"},{url:"category/config/index.html",revision:"88c836e56c28f52cccd13d9a3a577efb"},{url:"category/config/page/2/index.html",revision:"1e6f7d146116cebb9778630190392a9b"},{url:"category/config/page/3/index.html",revision:"39c63a640469aab44ec80376a9da60d9"},{url:"category/demo/index.html",revision:"559eadef23935ce2c7b22e8ae1e77c5c"},{url:"category/FAQ/index.html",revision:"7d1c604a9cac126f70ae9c13c02fd01e"},{url:"category/feature/index.html",revision:"e3fe8e0685f4c756e5efaa698356fca0"},{url:"category/feature/page/2/index.html",revision:"ac072bbd3b1087bd6815d51e32c0b4ae"},{url:"category/index.html",revision:"bf4786f618c2459bc22bbbfcd6cdffd5"},{url:"category/instruction/index.html",revision:"a10d7ed7225bfd096a6eae0720a5f24b"},{url:"category/layout/index.html",revision:"27bcf6531e4556c038e2070d3fb3bdd9"},{url:"category/layout/page/2/index.html",revision:"499ac311a8dae74238af4aaddf7f9e14"},{url:"category/markdown/index.html",revision:"f47fe9750d1350369c727063cfe04fd5"},{url:"config/index.html",revision:"696c04243e8d70fa8d121635b677d667"},{url:"config/page/index.html",revision:"d8596bd054edd9a7272af9917e9f77cd"},{url:"config/plugin/container/index.html",revision:"e65b12bf15a8b221728dd0be8da498cc"},{url:"config/plugin/copyright/index.html",revision:"ed77cf5401fade985595915ed1d6d1f4"},{url:"config/plugin/index.html",revision:"297aded8aedd97863827e90b201fc70e"},{url:"config/plugin/pwa/index.html",revision:"c06519992f0feffcb64a11aa9e01ddbf"},{url:"config/stylus/index.html",revision:"6892dcd22b183418afc8989cb20dd84f"},{url:"config/theme/appearence/index.html",revision:"ef26daaf7a9f1afeb4d1ad7a030d3729"},{url:"config/theme/default/index.html",revision:"60132bdb3df8745272143f1a4d3fa343"},{url:"config/theme/feature/index.html",revision:"082f33011a1f3930d04537fbcba975e8"},{url:"config/theme/index.html",revision:"4497e9ba7459a76c3a2369f0642c3810"},{url:"config/theme/plugin/index.html",revision:"72bb439c775e6a49f1ec6caa57d444dd"},{url:"demo/index.html",revision:"f41a14a948fca08de5c772cb5145c388"},{url:"FAQ/index.html",revision:"38ba71f64b2975fa773f992ed7fe3c76"},{url:"guide/feature/blog/index.html",revision:"c7fb9531b990b7c5affcceffce6bde64"},{url:"guide/feature/comment/index.html",revision:"f9fd7d96bf86ea9f61e4932246840424"},{url:"guide/feature/component/index.html",revision:"f1fceaf7807083c5d7f226d2ce3a4b8e"},{url:"guide/feature/encrypt/index.html",revision:"adf31baa9dea9dcc3e0bed5836297638"},{url:"guide/feature/index.html",revision:"c098fd4a86fc0ebe9703944e18e55c26"},{url:"guide/feature/markdown/align/index.html",revision:"97443594651fe3ca305c0a96564350a1"},{url:"guide/feature/markdown/flowchart/index.html",revision:"66f1d4534646a363e292450cd7645f3f"},{url:"guide/feature/markdown/footnote/index.html",revision:"b0d629059b09a72697aa2452e8720848"},{url:"guide/feature/markdown/index.html",revision:"f5dd3750061a5b2f4ee5bc3d387cc897"},{url:"guide/feature/markdown/mark/index.html",revision:"53272ea35529df6a1e65a6af7add129a"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"bf9e9e0ae367b3504205cc3fa366f818"},{url:"guide/feature/markdown/tex/index.html",revision:"b8daf301b4a276c774a859e28121b05f"},{url:"guide/feature/page-info/index.html",revision:"8218fd7a7b2a168d5bb991d1f8ef711b"},{url:"guide/feature/seoAndSitemap/index.html",revision:"ee3098d247eecf190d56fd5722d066d6"},{url:"guide/feature/theme/index.html",revision:"58fc76ea257fc6210b55a6b8e85fa06d"},{url:"guide/feature/typescript/index.html",revision:"485ed183f88a3c19adc2f5bcec39cb16"},{url:"guide/index.html",revision:"2169102fb1c4152a7d5202357b0b5158"},{url:"guide/install/index.html",revision:"34a1dd4ccc664b31019c6fd0fa40be38"},{url:"guide/layout/blog/index.html",revision:"823acf92fb2d98d4ffc602c0a2d5dc7e"},{url:"guide/layout/home/index.html",revision:"c9c9d108666aac4d12479ea127a37f83"},{url:"guide/layout/index.html",revision:"c0aa4c5944e8cef53dd2f8276209ea5d"},{url:"guide/layout/navbar/index.html",revision:"5d1bbcce9ddc0aae4747a9810307f3b8"},{url:"guide/layout/page/index.html",revision:"886afa768c983eb0f714d6fb6991f30e"},{url:"guide/layout/sidebar/index.html",revision:"f00fe3f3c2582ce9a7914d5a23172e05"},{url:"index.html",revision:"0009b3f5d2b30329a32c9e9f6fb97d2a"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"tag/blog/index.html",revision:"1c4046a7370547a40b37aeca76afb804"},{url:"tag/comment/index.html",revision:"2527198cbd050029d3280d3973b6449f"},{url:"tag/components/index.html",revision:"2388947b7a1570e3c812ac890152e545"},{url:"tag/config/index.html",revision:"4910b88b6afd402ad3a44fa95f8b7098"},{url:"tag/config/page/2/index.html",revision:"6846c6eae37be56acb2ae20729083755"},{url:"tag/config/page/3/index.html",revision:"0021307059e1f789f3ca4bff2065255a"},{url:"tag/emoji/index.html",revision:"5d063de98e30e4fe9edebce2b84b9952"},{url:"tag/emoji/page/2/index.html",revision:"b08cfed41c8b00aeb7c6a16dc3413751"},{url:"tag/encrypt/index.html",revision:"c86c2268c0c0b7b5fa6058b9b174ce15"},{url:"tag/feature/index.html",revision:"726d4bc765a3c071a8ffbe88c33123fe"},{url:"tag/feature/page/2/index.html",revision:"a3e18c4c910e3baa6ddc716aba795bc6"},{url:"tag/frontmatter/index.html",revision:"6968c911e7601c334bc7f95225d05706"},{url:"tag/function/index.html",revision:"bc562c1bb34ef24835b2958a0fe1e631"},{url:"tag/function/page/2/index.html",revision:"d8645a4d144676d787ce0d4f1b27f0a7"},{url:"tag/home/index.html",revision:"c9c64b5cf25fcc910a6abf964eca9ea5"},{url:"tag/index.html",revision:"07dd399fd9ed5c7bc992a9cba626cbf5"},{url:"tag/intro/index.html",revision:"82e368b5fa2b61d9808672e4fca7a0b7"},{url:"tag/layout/index.html",revision:"27490a1a3598d9fb7a87193329db9977"},{url:"tag/layout/page/2/index.html",revision:"378e97fe30f93994660e56f22ecfdd3b"},{url:"tag/markdown/index.html",revision:"067e8edaef01122e0e108d7792ed8462"},{url:"tag/markdown/page/2/index.html",revision:"12192aa065f30674d5579af24d5b3f40"},{url:"tag/markdown/page/3/index.html",revision:"40822de56a89f99f78dc142076178fe7"},{url:"tag/navbar/index.html",revision:"1f8b6bcad19a303dd514d069958ec714"},{url:"tag/page-info/index.html",revision:"0d1326483cc2d9337aa8d4d88acd3a98"},{url:"tag/plugin/index.html",revision:"eeab744c0c89ded476389168a58d8b49"},{url:"tag/seo/index.html",revision:"7968b4c812a992b001464b857856528e"},{url:"tag/sidebar/index.html",revision:"8dc5f31754fa291271b63161a7690e7f"},{url:"tag/sitemap/index.html",revision:"7a86eeec4e8d93c5173184c4431ef09c"},{url:"tag/style/index.html",revision:"c1f976614582c9485d4a4b0e10f739be"},{url:"tag/themeConfig/index.html",revision:"c8c2e9fed86f58f7b377dd5af5f364b5"},{url:"tag/typescript/index.html",revision:"6e0e01661e9c11b18d98097a5afb88ec"},{url:"tag/vuepress/index.html",revision:"3f0c856f2ad7b4284d4ada5931e5dd0a"},{url:"tag/vuepress/page/2/index.html",revision:"701c3bc6ac204f035f84bca6a7f9a10b"},{url:"timeline/index.html",revision:"0d52307c9cc7f5f2ee3404ee285b4a72"},{url:"zh/basic/index.html",revision:"9b5a408390bb3ed2a89ca3ec7fb8af0e"},{url:"zh/basic/markdown/demo/index.html",revision:"e93b8ea060b8fc4bc8c3ee9395fe606e"},{url:"zh/basic/markdown/emoji/index.html",revision:"d39ebc515f84fbd984e97ead53aa4f5d"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"1d812196ebf3dd6d27005ae6c97f170a"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"12c31e4ce0403b32224496a03800df00"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"6ee4902edf4b0962323675e983d6544d"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"e0e5c879daa22e71f9dca4c9afeb29b8"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"162a433c9a6226e316d748b6e876f557"},{url:"zh/basic/markdown/index.html",revision:"5d70dc49e45ad9bd07f58f29a8ce39fd"},{url:"zh/basic/vuepress/case/index.html",revision:"f765da22bbb4a2feed329e94e6360e8d"},{url:"zh/basic/vuepress/command/index.html",revision:"049f9fbb414bbb9cd2248cf437772c8c"},{url:"zh/basic/vuepress/file/index.html",revision:"19f4828a7a55d9bf924c21816e95e285"},{url:"zh/basic/vuepress/index.html",revision:"4b02566167e68b3aebc822cb37780164"},{url:"zh/basic/vuepress/plugin/index.html",revision:"78afaefb1d1d7b6ce4e4c250e99c26c4"},{url:"zh/basic/vuepress/theme/index.html",revision:"084ae9c5b54febd06d81449e5946c774"},{url:"zh/config/index.html",revision:"14d289e386997690f477524c925db41e"},{url:"zh/config/page/index.html",revision:"d630a92289d6a76c96d472c57b7c8fcf"},{url:"zh/config/plugin/container/index.html",revision:"cf6b9203b3c1f701aaee9e204226e007"},{url:"zh/config/plugin/copyright/index.html",revision:"f6b4a7c2a6c371a27507c410e33950b7"},{url:"zh/config/plugin/index.html",revision:"ea3fb0d57f28cb89b6f6d9e477062af0"},{url:"zh/config/plugin/pwa/index.html",revision:"bf4bd0ad78810fce916111f0cf7fe2ad"},{url:"zh/config/stylus/index.html",revision:"373ddaf386b117173ed4da27a483c253"},{url:"zh/config/theme/appearence/index.html",revision:"e4ea49f8e5e0775750c05983b49ea6eb"},{url:"zh/config/theme/default/index.html",revision:"fe515e989d5dac4014eff0eb57648847"},{url:"zh/config/theme/feature/index.html",revision:"88d72f49fb699c4c4e627be994f5823b"},{url:"zh/config/theme/index.html",revision:"fd99a60073d4dca6e251cc818ef5c423"},{url:"zh/config/theme/plugin/index.html",revision:"923ad93feee40edcaa9599838ea8f336"},{url:"zh/demo/index.html",revision:"742aeca9ac515d9a4e576bfa6651437e"},{url:"zh/FAQ/index.html",revision:"e001e34e3841897458ae79db14b5ae69"},{url:"zh/guide/feature/blog/index.html",revision:"c5d092dfd94e9109b53f353e571fc973"},{url:"zh/guide/feature/comment/index.html",revision:"7b118730f8ee8b41a1e1d85dd663f98a"},{url:"zh/guide/feature/component/index.html",revision:"d31c98fe20efc9f488203201736ece4f"},{url:"zh/guide/feature/encrypt/index.html",revision:"b573c03c2c6cdedfdc766e0fc840f292"},{url:"zh/guide/feature/index.html",revision:"b7d57c7d1db64ab346862c8723017992"},{url:"zh/guide/feature/markdown/align/index.html",revision:"0e60e8e1b3687c6c60e33a0cc018a1d4"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"f8cdc0274633e0e7b6b91cdb3b98b56f"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"fc9ed63caca5b08305442b9fed2e256c"},{url:"zh/guide/feature/markdown/index.html",revision:"c2142c8f621f65df778441657fb9d243"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"59e4969d5a6a33741af25aae6426172b"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"fd0f27551458dd0661a2ebf2ef3c5f79"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"f62eeb7f342c41afe9dc88eed9ae2802"},{url:"zh/guide/feature/page-info/index.html",revision:"beac0d95881f10a16dca4062e5001884"},{url:"zh/guide/feature/seoAndSitemap/index.html",revision:"8e8a0034e081b5133bc911a7e9a4a31e"},{url:"zh/guide/feature/theme/index.html",revision:"3713d5d6f36a6e7217ca77d470a7d03b"},{url:"zh/guide/feature/typescript/index.html",revision:"162a19fdefaa2be38b79850eaa5d7574"},{url:"zh/guide/index.html",revision:"ddb5f8f38bd74e112abe12f5f6338f7b"},{url:"zh/guide/install/index.html",revision:"a0593f86cdc90821c33994d911c946ea"},{url:"zh/guide/layout/blog/index.html",revision:"cd437bf46bd8376294f6fad5b85118be"},{url:"zh/guide/layout/home/index.html",revision:"402a1c35d5f0cde83f2e996cc0389d75"},{url:"zh/guide/layout/index.html",revision:"49f6b5dce173beaf136f18961548f1ca"},{url:"zh/guide/layout/navbar/index.html",revision:"0a1492daefb46cf0107377f442c13a3f"},{url:"zh/guide/layout/page/index.html",revision:"6995a81c2e64fcc7fdbc2186a381a150"},{url:"zh/guide/layout/sidebar/index.html",revision:"2b5b93337d801eafbd4dd3bb264a8cac"},{url:"zh/index.html",revision:"841e2d83781cf167bb86f413b5e4513b"}],{})}));
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
