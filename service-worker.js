if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e41d3ef5.css",revision:"518cd0c113c909dfde3744317b265185"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/132.d31268b0.js",revision:"097e15561b9938d3c0934dae53e5bbf6"},{url:"assets/js/133.d9e1cece.js",revision:"2d7796887d1f373d882d2bb867b02001"},{url:"assets/js/134.04b8adb5.js",revision:"c6ff63fb292a04dd302be109b81d0b4b"},{url:"assets/js/135.0a34c2a4.js",revision:"e61a0ff129c2fdf8f966ea12f2096ab1"},{url:"assets/js/136.73431675.js",revision:"704e89cc21afd0bac8b7463004d56548"},{url:"assets/js/app.5ba24151.js",revision:"5e8bf6b6f0dadbbc4b62f56f25277ab3"},{url:"assets/js/layout-Blog.23872857.js",revision:"3473eb1e2bfe8b6c650491f085bb33ab"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.374b7188.js",revision:"24ad88a940e32b98fc7a1d37e6522457"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.c1f17362.js",revision:"5937afaec0b25a2b91b925379f705bb0"},{url:"assets/js/layout-Layout.215313b3.js",revision:"93f70709f0cf95ed2fb6a993c29538ed"},{url:"assets/js/layout-NotFound.874e0572.js",revision:"6623a3020123ea1602180b09caae9344"},{url:"assets/js/layout-Slide.9b24cadb.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress--4a71114e.389740f5.js",revision:"4ce2ee8db8e1e690c017f779a3bcb477"},{url:"assets/js/page-Basic--770cb96b.01209d17.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage--64265752.0ee625b8.js",revision:"bc41ebf24df517aa43aec0bb9302cb55"},{url:"assets/js/page-Blogrelated--17c260a2.58a3f873.js",revision:"5ad015091889f9c882fbf48415659283"},{url:"assets/js/page-CodeDemo--a44bde9c.49b2fe44.js",revision:"4c5c4d06ca89ac831e7d6fbbd7784119"},{url:"assets/js/page-CommentFunction--5bb6671c.e0ead78f.js",revision:"d0b3faab63c6c7d02d2e3ab9e25ef867"},{url:"assets/js/page-Commonproblems--2b571e9b.1331d539.js",revision:"5abfcd13a95f0ecb1493e860d930f83a"},{url:"assets/js/page-Config--35a0a7d9.cdb26e6c.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment--4f21aa5c.f8ea975a.js",revision:"9600cf3c6bac7770f862fb15ddf6f54c"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.2d4f0783.js",revision:"86ab81dd639e917e5e1ac61d0d095dd7"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.18f989d5.js",revision:"527291078cb7d87b6f6b969694c563b6"},{url:"assets/js/page-Demos--f328658e.3e62466f.js",revision:"16372df9027beffd0dc81645a78687e9"},{url:"assets/js/page-EmojiList--41bb29b9.2502859b.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表--404e6737.b0a4e370.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction--181bdc9c.452b5cae.js",revision:"497b6ec1ab90c71ff5cc2322b75fadda"},{url:"assets/js/page-FileStructure--665a4f1c.f1c8df00.js",revision:"e147b321ab6bbb4a8e01cbd6ddbacf82"},{url:"assets/js/page-Flowchart--7ce6d974.89c8289c.js",revision:"842a441ed302680ab4db592a654f22ab"},{url:"assets/js/page-Footnote--0c733e52.424607e9.js",revision:"6c13e259b28268805a346601c09373f7"},{url:"assets/js/page-HomePage--5834599c.f2dd1bb7.js",revision:"14a7a6462c2d99c63fe9a6c233027497"},{url:"assets/js/page-Iconsupport--a6a93218.bf35ae16.js",revision:"e5d8d2f19990c120b1deb8c935dfaf88"},{url:"assets/js/page-InstallUsage--0ab466d2.e3f36517.js",revision:"6ac206476dd54dabdd1dd7bae4a9dc48"},{url:"assets/js/page-Introduction--d4910962.3dd6c587.js",revision:"7beec298f29aa31d261281f27b622c6d"},{url:"assets/js/page-Layout--12bd4f0e.9843b67c.js",revision:"19d9312bd02528c0345ca334d3e36af1"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.93596fb1.js",revision:"e68f19e171887e00d394430ce0f2b1f3"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.07630d4d.js",revision:"724eacdac53b3c7f27abbb036534a70d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.858c15af.js",revision:"b44dcb0264ae444f190c48bdc7b95dfb"},{url:"assets/js/page-Markdown介绍--0e6891b6.6dda2a88.js",revision:"9a689909c79d0fd6312dddb306768bd8"},{url:"assets/js/page-Markdown增强--6162938f.10c77a92.js",revision:"e3d736faf7439c92633bcfff9b815e5f"},{url:"assets/js/page-Markdown示例--5479fe88.9788c018.js",revision:"868e89c0b7f914b4b84161e4e3791337"},{url:"assets/js/page-Markup--6b1f341c.67eca47f.js",revision:"d29e3a21945324455e10a9e83ab1e513"},{url:"assets/js/page-Nature--749fb09c.c498fa21.js",revision:"8a85973cb586c86618a88a6380d1ab13"},{url:"assets/js/page-NavBar--c7bf87dc.16ad4dd7.js",revision:"149d06c61f7a1b1cb378c1af9a611554"},{url:"assets/js/page-NewComponent--1d138c72.a3c77919.js",revision:"0826f4146aec7eb30579f6b08fc55795"},{url:"assets/js/page-Newfeature--5136c541.be5ef064.js",revision:"96b64308d9cbe1a2d3a6a2c2563e863a"},{url:"assets/js/page-Object--16031ab2.27b1cb2c.js",revision:"0a0e71b243eb0270d089c4a9c8cde92a"},{url:"assets/js/page-Page--af17b59c.16f59807.js",revision:"d5d8d158a593f4e949d3a9cfffb65093"},{url:"assets/js/page-PageConfiguration--0aacc152.42f2f0ee.js",revision:"1ffd16e2454da3f03193132ce07c56d4"},{url:"assets/js/page-PageEnhance--03665ac8.4982f029.js",revision:"668539f7b7dc4f0a6b3110458597aef3"},{url:"assets/js/page-Pageinformation--71efd5d2.2abc188b.js",revision:"87aafb0c4e58e875352040879fe56f84"},{url:"assets/js/page-People--2182769c.9ec16677.js",revision:"739486be142132d3923130045088b79c"},{url:"assets/js/page-Place--951cdc00.188eb5fb.js",revision:"cff5e51e4a7724298fc0cf64ce4990fc"},{url:"assets/js/page-PluginDescription--137c6c07.3807610c.js",revision:"60f16d21a940a2daba0bd64f6441c121"},{url:"assets/js/page-Plugins--adbf415c.5e88ff0f.js",revision:"3f6fc85c17c9dd57758779e46c0b62ad"},{url:"assets/js/page-Presentationsupport--8f8e54dc.7511a9b7.js",revision:"32e1496171189004c8ae12102944c7e2"},{url:"assets/js/page-PWA--01089712.286587bc.js",revision:"a96262b65198140dad79bea8befd7aff"},{url:"assets/js/page-PWA--243ef2b8.b1fb7f96.js",revision:"15942d2209276604d86a3b432504d11d"},{url:"assets/js/page-SEOandSitemap--ccd3659c.9d775400.js",revision:"799b99693e06807e42a330163055551a"},{url:"assets/js/page-SEO和Sitemap--2853f164.becc2cfa.js",revision:"63ed782f253e5c4e5283a15d14aa0cf7"},{url:"assets/js/page-Sidebar--2fa1ea2c.c0565ac3.js",revision:"2ca460cff794162408ae116c382adc89"},{url:"assets/js/page-Slide--269ae052.c0859e0f.js",revision:"73201f3bcd9f849d9e9c4a383dc78f87"},{url:"assets/js/page-stylusconfiguration--6796cdf2.520b1667.js",revision:"6078accd3e7ee3cb1f21eba091db906f"},{url:"assets/js/page-stylus配置--0ce19a82.06f52e2e.js",revision:"1794c376d03dd8cc3f14a5af990d0aba"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.8e26b909.js",revision:"b5fcd7f8b1f7d26b319465c999f001b6"},{url:"assets/js/page-Symbol--a9259c5c.46d7dd4e.js",revision:"9055b2f99784214b1ac9d15d25443d7c"},{url:"assets/js/page-TexSupport--64cb5e50.46bf49a6.js",revision:"c1b194f2ca83ccf8a8017ef67c86e4b0"},{url:"assets/js/page-Tex语法支持--1e02b152.9f8492b4.js",revision:"1d2b469850e79113cdac847f01afe9e1"},{url:"assets/js/page-ThemeConfig--1120a0ce.40397c64.js",revision:"0bc07dd0c26b9cb9066e0e5681643df4"},{url:"assets/js/page-ThemeConfig--1726e14e.08647fe6.js",revision:"68bf28d756cad80ffcc5974cc60c29d9"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.8f547437.js",revision:"e66c85e8a60f2fcce75e08caf4229bb2"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.8f0e1a3d.js",revision:"a79cf6f3a2342756b93b5e6af0c1d088"},{url:"assets/js/page-ThemePluginConfig--958196dc.9c77a304.js",revision:"338518a66d3337f706bdddaaafb492e5"},{url:"assets/js/page-TSsupport--09728ac8.2931dae8.js",revision:"c2114038c40a4aca10c4ba33f4f99685"},{url:"assets/js/page-TS支持--4625f812.0e683d12.js",revision:"cef9f4a513d8c235ff69f6c5a97cf787"},{url:"assets/js/page-VuePress--b7060eee.2082ac08.js",revision:"29f37891f1408143cd877540ff2f94cf"},{url:"assets/js/page-vuepress-plugin-container--31498112.a45b926e.js",revision:"1d2a0a20871952267ba7238739564106"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.08d8c98b.js",revision:"91cbcbf95635cb71898bb3bb84c540f2"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.986bc5a2.js",revision:"b236f000a8582dc4e8f2d941e78dc6e0"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.cbbdd4c4.js",revision:"b80e1066be273bc166342ff6730e3f2d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.b5d938cb.js",revision:"a6d3406434b7bc026bbbe828a0a4f7a4"},{url:"assets/js/page-vuepress-theme-hope--776d8369.266845f0.js",revision:"781421ce173a5ec9a9850dc95cd9b677"},{url:"assets/js/page-VuePressCases--082972f2.c0e236a4.js",revision:"60e3abbb39296ff3173e0b586d83b28f"},{url:"assets/js/page-VuePresscommands--9f3f316c.6c3c5f90.js",revision:"c80c3c9f1e5d51b1adaf2aadedb37140"},{url:"assets/js/page-VuePress案例--531d5f3e.46a94d53.js",revision:"19f9756d1f3f2073a82ffabd028919fa"},{url:"assets/js/page-上下角标--8efed9dc.5d4a76df.js",revision:"0aee0d1e383359dcbb1523bc1f8a5f1e"},{url:"assets/js/page-主题功能配置--5bb71452.3815b285.js",revision:"5480a50ae44a492eb257b89a92511549"},{url:"assets/js/page-主题布局配置--7db7eff2.c5ce8865.js",revision:"fbae136821e03c07ad4eb5df879c3178"},{url:"assets/js/page-主题插件配置--1b0c3e98.e6c069c5.js",revision:"5836ea9b2cda6b089709b5a3a0299b35"},{url:"assets/js/page-主题配置--21dc088d.ca028ff4.js",revision:"9c7fe52d390edbad69a5dfffd37c9bb8"},{url:"assets/js/page-主题配置--2c572572.f385175d.js",revision:"9c013e36abc697c8698df13e86699df6"},{url:"assets/js/page-人物--b4fc27dc.eff1eb39.js",revision:"9968cedbb1c355421107bd1f21e54dd9"},{url:"assets/js/page-介绍--2e99d139.27299aa6.js",revision:"c38963e846a6997c7c825164066f572c"},{url:"assets/js/page-代码演示--0dad4f52.647204ac.js",revision:"552dcf16a97fa94edec9aae90b46fde6"},{url:"assets/js/page-侧边栏--43054cb2.6f2566cc.js",revision:"6991d139fba970e79ac8cdbf2d8b8b81"},{url:"assets/js/page-加密功能--2361b7e4.04f00d5e.js",revision:"91739fb47d49bb5ab4fd9e577c03cf7f"},{url:"assets/js/page-博客相关--6a3fd4f2.947bb060.js",revision:"781a89f27698d2b5dcfdbea934f07bed"},{url:"assets/js/page-博客首页--1eb2b298.8fbcfc22.js",revision:"a550dd8705b1187fb1a2b96a5db65ec6"},{url:"assets/js/page-图标支持--a2671ddc.7522d24c.js",revision:"ce523bbaa43e459433bb5671f3146dbc"},{url:"assets/js/page-地点--6710785c.079a4f47.js",revision:"0e92ba46dd28b4e7b5c0002f16084fea"},{url:"assets/js/page-基础知识--4d466a79.d414691f.js",revision:"a7fc4b2492932a63919212f05d4f4e46"},{url:"assets/js/page-安装使用--76e0e5b0.ed772768.js",revision:"94009c1dfa0ab326db2cb6d498ebeef2"},{url:"assets/js/page-对象--e150da9c.9747f92f.js",revision:"9aa0b178c8179031152049be6e38079f"},{url:"assets/js/page-导航栏--183844fc.3af6fb68.js",revision:"ab7ba1e79e9e146313c76912bc79e049"},{url:"assets/js/page-布局--fa93e36a.9b6120ea.js",revision:"287417d6200c4fe35fbc240063aed106"},{url:"assets/js/page-常见问题--10ab790e.8ada692c.js",revision:"3f5a467ee876b092c528b25a83bd9408"},{url:"assets/js/page-幻灯片--818cb750.117028ae.js",revision:"7d7a43bfa041424120252f1f0c05a66d"},{url:"assets/js/page-幻灯片支持--5808e664.d1671ed4.js",revision:"82504f4e9ae6eed3f7bff2fb4f4e58b0"},{url:"assets/js/page-插件--32355f10.b0a332fe.js",revision:"ac815ccb6dcfde3b35eebe4baf13266a"},{url:"assets/js/page-插件说明--cbca1c8e.b5b26f3c.js",revision:"28660d6a2a75a63b5ec1a75651d7f51d"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.516f67e2.js",revision:"c735ef9fa2ecb4c61ccd9c67e4cace16"},{url:"assets/js/page-新增特性--30c6c799.8a03a6a5.js",revision:"00c456a69c40985567d8a34286954146"},{url:"assets/js/page-新增组件--0979095e.80bd56fb.js",revision:"4eb87257ba02fec2b82076dd8eebacfa"},{url:"assets/js/page-标记--0ac52704.42d22eca.js",revision:"64135f2ae319987268749ba9ef88329b"},{url:"assets/js/page-流程图支持--582eff1c.3f170ec8.js",revision:"12c96f6577bb759b1c90c90e8d52b319"},{url:"assets/js/page-深色模式与主题色--01662674.449b9ca2.js",revision:"f6c106e6ca82ff1bd93be89906f39e53"},{url:"assets/js/page-符号--2db8fb80.9cbdfbed.js",revision:"85fc6b1686abc2daf46b43d21c81fd5c"},{url:"assets/js/page-脚注--17d88350.30f00640.js",revision:"f7b7a2dcdb22f5de9f7f1d4d6c6ee723"},{url:"assets/js/page-自定义对齐--048d31dc.a39ee0d4.js",revision:"c1dcb60101f9442d7c281afe59d6e383"},{url:"assets/js/page-自然--7ec33be2.c9bfecb0.js",revision:"79f85912ce121209bab3f65a4b102c02"},{url:"assets/js/page-评论功能--350aff9a.44140c25.js",revision:"011218e4370b519e23535a2dbac18af2"},{url:"assets/js/page-配置--d315f8fe.f075d434.js",revision:"30be11c2ef2bb09693d73b375659a0f3"},{url:"assets/js/page-页面--78423bfe.dd386f0d.js",revision:"f69453907859ed8fa32fcfa8381a0229"},{url:"assets/js/page-页面信息--455b9800.f2c09959.js",revision:"b11f522856d77462e68a6f726bb4590c"},{url:"assets/js/page-页面增强--2e4cf75c.6d0cadfc.js",revision:"20c634f02b102ac3decadaad56eab58c"},{url:"assets/js/page-页面配置--02399408.1123b5a9.js",revision:"86a9b25be15c1a1923989b74dc27229f"},{url:"assets/js/page-项目指令--2f3d7c1c.7f1c37b0.js",revision:"831e5d2325a43ede5bca709668d4fe74"},{url:"assets/js/page-项目案例--1f3d6482.3f23fe9d.js",revision:"839912996c0eb30d2479ab2c4082c458"},{url:"assets/js/page-首页--79a22944.626a14d2.js",revision:"fb686121e431ddc041b6b16a0edb5d3e"},{url:"assets/js/page-默认主题配置--0d5b7f32.f36ce656.js",revision:"7ec5dba6396c18a74557bc81845baaf2"},{url:"assets/js/vendors~docsearch.c05c5713.js",revision:"09172d843dddf9b5fff4d6023468626a"},{url:"assets/js/vendors~flowchart.fcc19cf4.js",revision:"913e709520c743c5e7e2a5666756cd6b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.86dec24f.js",revision:"d9a69e637240e3d7943251a90b3e238c"},{url:"assets/js/vendors~photo-swipe.80b35463.js",revision:"c2c5be201d082085d39de0a1d32c31ef"},{url:"assets/js/vendors~reveal.5b2c535b.js",revision:"ac1fe9b7a32264aac78e6238750a251e"},{url:"assets/js/vendors~valine.2638fe86.js",revision:"b2385adbbfe6adb9b8241621365bc97d"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"8010a31dbc28f7b3636f8014c7f9da07"},{url:"article/index.html",revision:"5008f5ac304a08a0745600f85be12193"},{url:"basic/index.html",revision:"055876eebdb3435d75bbbbf1b3b57d93"},{url:"basic/markdown/demo/index.html",revision:"f65884ea870033bde209f16b92b67a79"},{url:"basic/markdown/emoji/index.html",revision:"b631b981db9c278b06d6a229aaf400e0"},{url:"basic/markdown/emoji/nature/index.html",revision:"e52fa6f88203d82616f7dd15c1aa96bc"},{url:"basic/markdown/emoji/object/index.html",revision:"f9b38fb7f868f2f0c166c8f3f97aaf79"},{url:"basic/markdown/emoji/people/index.html",revision:"284bd0d3ee8c89614603e45194c3ca0a"},{url:"basic/markdown/emoji/place/index.html",revision:"25321b4a112fad5757beffb0cc7c2a3c"},{url:"basic/markdown/emoji/symbol/index.html",revision:"59fd5c5dbc2b2de8118e1bd82be5ef1e"},{url:"basic/markdown/index.html",revision:"aeb7967e89db4d32e4bd9c1527b184f1"},{url:"basic/vuepress/case/index.html",revision:"44968a5b0fe583d820a3dbd174635562"},{url:"basic/vuepress/command/index.html",revision:"b80894fae55fb1c1ced45094790a8464"},{url:"basic/vuepress/file/index.html",revision:"c5ef93e0983d4564d6a04c8546db6eb3"},{url:"basic/vuepress/index.html",revision:"5ae568cab470f7d44ecb710330eff812"},{url:"basic/vuepress/plugin/index.html",revision:"de60c04fb538d1f2d908757edf27db85"},{url:"basic/vuepress/theme/index.html",revision:"1f87bcc3fea28ff46b0690a605bc8e44"},{url:"category/basic/index.html",revision:"d74e1b996daca330b446764bf780ccd0"},{url:"category/basic/page/2/index.html",revision:"a82e4ddf1a52272eb85cd1e322b6663d"},{url:"category/basic/page/3/index.html",revision:"09082a12ba0099da17a91cc64a4cc790"},{url:"category/config/index.html",revision:"464938a3a87dfb9d358478eeb1ef01cd"},{url:"category/config/page/2/index.html",revision:"fa1794c718cf0925304dbf5d94138ce4"},{url:"category/config/page/3/index.html",revision:"f74223964e6a65c7218f79e0ae02f6d3"},{url:"category/demo/index.html",revision:"f391913c2e3dd1cfc8d577fcf9b78e58"},{url:"category/FAQ/index.html",revision:"63bd4e0ef3b9f1c7fded2a040c860269"},{url:"category/feature/index.html",revision:"bdeb9c88b9096c20dafc58fdd2483c4a"},{url:"category/feature/page/2/index.html",revision:"2d0d680b4d36838b988b77fbdef3b901"},{url:"category/feature/page/3/index.html",revision:"bcce9caa68c1322c1c3568b12414d68a"},{url:"category/index.html",revision:"03344ba21c492de5034d420fa744846d"},{url:"category/instruction/index.html",revision:"e931b873d9b2593a9f8505201f40385a"},{url:"category/layout/index.html",revision:"38a1dd3c778cd3b78d780855676c9106"},{url:"category/layout/page/2/index.html",revision:"19885012d1f159a31060b914df419f5b"},{url:"category/markdown/index.html",revision:"ea4a2d4105303dbcbd1e9dddd5fa6fa9"},{url:"config/index.html",revision:"0fa39b024eb10bec50b9556b4e7d2ef5"},{url:"config/page/index.html",revision:"a8e4ad96aa2413d1cfbf77ff8c835def"},{url:"config/plugin/container/index.html",revision:"fb802210cc0b982f029d14cdadc71a38"},{url:"config/plugin/copyright/index.html",revision:"4c5c182ef13d5b46b9aece5d1a442a8f"},{url:"config/plugin/index.html",revision:"50831cf350f63833822881f9a5af9d3f"},{url:"config/stylus/index.html",revision:"c2870e4524a7ccbe95cbed79be10f343"},{url:"config/theme/apperance/index.html",revision:"b82c66be226f48c2bb149d40010ff69e"},{url:"config/theme/default/index.html",revision:"e0b9c40d3e9b2f23dd71f0b717a79433"},{url:"config/theme/feature/index.html",revision:"2e75c623c70d83a181024d0147c298c4"},{url:"config/theme/index.html",revision:"5050bc46fedb2edca5b02777ddaf2a50"},{url:"config/theme/plugin/index.html",revision:"e9fbf3ce13de2cd40b6139c88d209739"},{url:"demo/index.html",revision:"6baaaf3624d4434e6342459db4d839c4"},{url:"encrypt/index.html",revision:"45ed6c1e955d701f09695126b735d21a"},{url:"FAQ/index.html",revision:"187a64a88d418b3579f82b5873824a14"},{url:"guide/feature/blog/index.html",revision:"4ff24d9b9de3a78e3d6728608df029ef"},{url:"guide/feature/comment/index.html",revision:"d808dce79f4692716e75ca806843485b"},{url:"guide/feature/component/index.html",revision:"8548877452eb4eb0c69211b4e41bef16"},{url:"guide/feature/encrypt/index.html",revision:"0815fadca7871c6f1cbee311253b0c09"},{url:"guide/feature/icon/index.html",revision:"8dd65ce043d9a0700686d5f70bba5576"},{url:"guide/feature/index.html",revision:"0d897a1c37181e5ae1638f16ed917055"},{url:"guide/feature/markdown/align/index.html",revision:"0d36e2baa9b70d6cfa0c5eed63b7ad5a"},{url:"guide/feature/markdown/demo/index.html",revision:"bd47c37e79b864d46907a48e791f84f5"},{url:"guide/feature/markdown/flowchart/index.html",revision:"b02eaaf710306e087469a0f84fb761d2"},{url:"guide/feature/markdown/footnote/index.html",revision:"c37fe67340db4708be259b1af1d6fe44"},{url:"guide/feature/markdown/index.html",revision:"dbfd6ea66d9bec9057c57c203d9af4ab"},{url:"guide/feature/markdown/mark/index.html",revision:"dd24d7b867c6ac74ff0b75e04506a20d"},{url:"guide/feature/markdown/presentation/index.html",revision:"03f02b554adc16e73e8419b97a9a4320"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"b8021a0ebebf56e1c4245b600264b419"},{url:"guide/feature/markdown/tex/index.html",revision:"6924ca4db2b0de438300b1f3138a836e"},{url:"guide/feature/page-info/index.html",revision:"a31d906d53cfa0cd1848bbe26757177b"},{url:"guide/feature/page/index.html",revision:"0433468a3342dab2448af35d0d67dc1a"},{url:"guide/feature/pwa/index.html",revision:"2df8278f69d162949fa78d9266c9d5b7"},{url:"guide/feature/seo-sitemap/index.html",revision:"566e91eededc57c9b9bc029cceeed30e"},{url:"guide/feature/theme/index.html",revision:"fa4467206cd38ed8a3489c66d3c97019"},{url:"guide/feature/typescript/index.html",revision:"cecc7a14fb776a3c998bd53e4adb293f"},{url:"guide/index.html",revision:"536f3af03571ff9c78c3c133b97c9ce1"},{url:"guide/install/index.html",revision:"40e639cbfacc2b2ad5d806a7d4b02209"},{url:"guide/layout/blog/index.html",revision:"a2831abf2ced6e36c744a51c7ce83fc9"},{url:"guide/layout/home/index.html",revision:"cfd39356d13b27b33a18a9ed80996620"},{url:"guide/layout/index.html",revision:"99616bbdb258c901da7435adfb56e314"},{url:"guide/layout/navbar/index.html",revision:"bba4b93d29635a7ff86d1aec8f630ead"},{url:"guide/layout/page/index.html",revision:"2a662719df5f0b4474b754ebd6d99d30"},{url:"guide/layout/sidebar/index.html",revision:"82b78d33026fef46b821f58c7d91ec80"},{url:"guide/layout/slides/index.html",revision:"22ccf2a7b77450351fcf6a53834e1970"},{url:"index.html",revision:"cbc61a8cd343863516f7abfe3256d3d2"},{url:"slide/index.html",revision:"ce29c48fd0d0d29f22d7a7aae71b0a3f"},{url:"tag/blog/index.html",revision:"5286e425fb30f8c50a42d17a83f3da95"},{url:"tag/comment/index.html",revision:"f9e44232ea5ffb298da37f362c340d45"},{url:"tag/components/index.html",revision:"0b76c961beaabc46f7a04873c287ad13"},{url:"tag/config/index.html",revision:"70ba9c5b81c52d13e2117d7045cac1f4"},{url:"tag/config/page/2/index.html",revision:"278aae8ad65691bc70c7a0d5d158d589"},{url:"tag/config/page/3/index.html",revision:"e0ad096af14d4c702e7b4418a57bb6cf"},{url:"tag/emoji/index.html",revision:"2211a63136578e282af5d4071afa1c3f"},{url:"tag/emoji/page/2/index.html",revision:"fe5383d2e95af0a7a241c9d94e602d04"},{url:"tag/encrypt/index.html",revision:"ebf5210e2da33dbbae30856f72421694"},{url:"tag/feature/index.html",revision:"6da85fcf6669576b5fb57a414ab6564e"},{url:"tag/feature/page/2/index.html",revision:"f44398b8cac1783cf74544c7fd552e30"},{url:"tag/feature/page/3/index.html",revision:"c5f46772597a28f053699e2378b851d4"},{url:"tag/feature/page/4/index.html",revision:"69b3da688f51e0a08b3bcda0a3b3f980"},{url:"tag/feature/page/5/index.html",revision:"0cb4428323c880a0b5e453ef4f0c8134"},{url:"tag/frontmatter/index.html",revision:"2f10e4799e2aa3d4e5856e097794d0ea"},{url:"tag/home/index.html",revision:"737cc06744a6e219a134b931d79c6da0"},{url:"tag/icon/index.html",revision:"55dab9ff5a6a3e779b574e1d03a70389"},{url:"tag/index.html",revision:"1815b33282e9c234d18a0648066bb75d"},{url:"tag/intro/index.html",revision:"09bc26c28daa2fe6b3699be9459ac90c"},{url:"tag/layout/index.html",revision:"f8eccfbe9d652e8f2139353e98384bd5"},{url:"tag/layout/page/2/index.html",revision:"d7d14440966feb5fcb27215983596e3c"},{url:"tag/markdown/index.html",revision:"5b63f64424e61fe99f2f38ac70c96cef"},{url:"tag/markdown/page/2/index.html",revision:"b059ec76a43935c73521d1653eab1967"},{url:"tag/markdown/page/3/index.html",revision:"8ac1ac070f1d4e279cf2eddec0f314d9"},{url:"tag/markdown/page/4/index.html",revision:"04ff940b5714c06040bafbb7675048b2"},{url:"tag/navbar/index.html",revision:"f52817c69dbf28218050c773ce32e754"},{url:"tag/page-info/index.html",revision:"a79bcab70694f589c616dbcb5f384136"},{url:"tag/page/index.html",revision:"4cad5431b5e7f08bf7e14492692ec1a1"},{url:"tag/plugin/index.html",revision:"9ebcb73fd23cacc2a4c4c1925dd0260f"},{url:"tag/pwa/index.html",revision:"351613842e6f8dca26ef616ed38ddefb"},{url:"tag/seo/index.html",revision:"f6a11c90559fecfe6d10a30e9388ff48"},{url:"tag/sidebar/index.html",revision:"fdc27204e9c153901873d617e08efeb2"},{url:"tag/sitemap/index.html",revision:"7fe8f05feb106e94a68a80c7d6256ab0"},{url:"tag/slides/index.html",revision:"776b15576eac69a01cb3067c915e44e2"},{url:"tag/style/index.html",revision:"6c1e799bc6d3322f04e07e6a26d13a43"},{url:"tag/themeConfig/index.html",revision:"651679af548705602e6cf894da5b7c69"},{url:"tag/typescript/index.html",revision:"b062dc782bfd76794b0e0b3d5edcadbf"},{url:"tag/vuepress/index.html",revision:"a0b90613dd0a4aed291a9bb5fb13590d"},{url:"tag/vuepress/page/2/index.html",revision:"bff1c2c24dc6ec86a1298bc279551bc2"},{url:"timeline/index.html",revision:"a41c9a76ddd34f0b26369a655ca6f630"},{url:"zh/basic/index.html",revision:"ed232ff80a538669801e4be2503a3427"},{url:"zh/basic/markdown/demo/index.html",revision:"d65f94e1fac012cefb1d7eb45f81321a"},{url:"zh/basic/markdown/emoji/index.html",revision:"8dc5cff917e266691807a768a2a6638e"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"702038df225cc990edc9301c2901e1d4"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"141823501ab90a9426974979bc7d9aa4"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"4d22e1dd04661b926743f771ebef0478"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"31c377d94618994ef49ef2ef9b05a389"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"bf11a887ed07b01e1dd77dff4432e93e"},{url:"zh/basic/markdown/index.html",revision:"273bc8a44e74a9ecb442e95986c45345"},{url:"zh/basic/vuepress/case/index.html",revision:"2d34b7b8d74e7dcc3cfb7f9a6f61a5a7"},{url:"zh/basic/vuepress/command/index.html",revision:"9cba05f58b46a3e540aa94fc5ba91dac"},{url:"zh/basic/vuepress/file/index.html",revision:"45f1a75bd51b468203f15e56e83f1eca"},{url:"zh/basic/vuepress/index.html",revision:"c56fcf21b96b957f69f05a820eddce24"},{url:"zh/basic/vuepress/plugin/index.html",revision:"5c73e6d0621568cc90692fae1c8150ec"},{url:"zh/basic/vuepress/theme/index.html",revision:"f63f4cec31effcbd3a62445b97616b3a"},{url:"zh/config/index.html",revision:"247582737a95d8afe1acc1cce8665a90"},{url:"zh/config/page/index.html",revision:"6e16d2ba0393d13375fa14c91137db08"},{url:"zh/config/plugin/container/index.html",revision:"657834df2b473a73817ce430a69acf3e"},{url:"zh/config/plugin/copyright/index.html",revision:"981148bd1dd3b5bee470b9a107769e1e"},{url:"zh/config/plugin/index.html",revision:"60cdeec5bcfd26f5d3b9b20ca0d0476e"},{url:"zh/config/stylus/index.html",revision:"3212cc7396a0e9cc3a1f903d3f7d7e6e"},{url:"zh/config/theme/apperance/index.html",revision:"3e96c6470f517b36f718347fd14da750"},{url:"zh/config/theme/default/index.html",revision:"08ec7a7b238ece122dd1357625cc10b4"},{url:"zh/config/theme/feature/index.html",revision:"1e83f296c987d3b9758668dec7a4f6cc"},{url:"zh/config/theme/index.html",revision:"25d974bc896273bdf3fba2f97afe2872"},{url:"zh/config/theme/plugin/index.html",revision:"4149e3da6f4302262afcdc3e44e33164"},{url:"zh/demo/index.html",revision:"fe6175d6253ed78c52612848ed35c295"},{url:"zh/FAQ/index.html",revision:"0e83ddd5aee384f8ab442a5f963875bf"},{url:"zh/guide/feature/blog/index.html",revision:"8d8e536f0148f26735cebc7645989e4f"},{url:"zh/guide/feature/comment/index.html",revision:"55ea556cb59b3c01352893ee2aa8821d"},{url:"zh/guide/feature/component/index.html",revision:"543fdb205f62fe045cc26c9813ba2872"},{url:"zh/guide/feature/encrypt/index.html",revision:"8e27fa402835c71cd6e9260d0ddc581a"},{url:"zh/guide/feature/icon/index.html",revision:"4bd01772b067358adbea79dc9760f670"},{url:"zh/guide/feature/index.html",revision:"9477a919b62f9c7e89cbb6c9fa57108b"},{url:"zh/guide/feature/markdown/align/index.html",revision:"3a70a877722b8a03bbde63deedb2b70c"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"ddf253bac3accdb6b4ff34169b7b8b3f"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"0d7c18279d42cad203b6023628817ca1"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"8301bf0ec01e9839951647dbb13d3fb3"},{url:"zh/guide/feature/markdown/index.html",revision:"868a96b941092fbb59ca3567ff3d8a6d"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"98baf9065472c816d216a506ce1a3d91"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"0d51266685daea82dcb3068a5505d7f8"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"c5e206e957f44d83ec444c399a9df58b"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"0fc4991d69ac9564e23cc5e2d52098d8"},{url:"zh/guide/feature/page-info/index.html",revision:"428277a6d009f84fd2ae8a841694241f"},{url:"zh/guide/feature/page/index.html",revision:"7fd8b6a5c9d9a53216c73884287890e4"},{url:"zh/guide/feature/pwa/index.html",revision:"fe89177c15de3bc7813ba674c270db65"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"b18078a74524b89073c3e3e6192a865f"},{url:"zh/guide/feature/theme/index.html",revision:"6783686d1562014f924787e1e7057b62"},{url:"zh/guide/feature/typescript/index.html",revision:"f21db1f2ec002aa6a1cceeed2c69e5e2"},{url:"zh/guide/index.html",revision:"04a41631fed1679647cc548ae31cbab5"},{url:"zh/guide/install/index.html",revision:"2d60c40ef90838066fa3682584ea0b22"},{url:"zh/guide/layout/blog/index.html",revision:"fe0049e3fc0566613cc82e0c28441344"},{url:"zh/guide/layout/home/index.html",revision:"1126eede1f113765cf749d0d60eada34"},{url:"zh/guide/layout/index.html",revision:"5f5a58f8b589976dec31a19ef0e73103"},{url:"zh/guide/layout/navbar/index.html",revision:"e86cc913c11fa297ecaed87d57f412af"},{url:"zh/guide/layout/page/index.html",revision:"f6dc5af856b6641063fb447fed196793"},{url:"zh/guide/layout/sidebar/index.html",revision:"4200a7022433b76b4250f28b026756d7"},{url:"zh/guide/layout/slides/index.html",revision:"8250e2fb9e9138db3c8ac2808f28352b"},{url:"zh/index.html",revision:"1f9ae1135e7d8aa35a4ba1ac608b00e0"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
