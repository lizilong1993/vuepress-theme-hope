if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.e41d3ef5.css",revision:"518cd0c113c909dfde3744317b265185"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/132.d31268b0.js",revision:"097e15561b9938d3c0934dae53e5bbf6"},{url:"assets/js/133.d9e1cece.js",revision:"2d7796887d1f373d882d2bb867b02001"},{url:"assets/js/134.04b8adb5.js",revision:"c6ff63fb292a04dd302be109b81d0b4b"},{url:"assets/js/135.0a34c2a4.js",revision:"e61a0ff129c2fdf8f966ea12f2096ab1"},{url:"assets/js/136.73431675.js",revision:"704e89cc21afd0bac8b7463004d56548"},{url:"assets/js/app.c93b5d9c.js",revision:"b1568e7cea5163c09e887707afb76503"},{url:"assets/js/layout-Blog.6fa0cb35.js",revision:"efd3d49d2f62f5e1aa2fd628a26356e3"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.374b7188.js",revision:"24ad88a940e32b98fc7a1d37e6522457"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.16566bbd.js",revision:"b55406f1f015770846aa7796be414bd0"},{url:"assets/js/layout-Layout.0758ccc7.js",revision:"21192de5da29248d928e6844a3fd3110"},{url:"assets/js/layout-NotFound.874e0572.js",revision:"6623a3020123ea1602180b09caae9344"},{url:"assets/js/layout-Slide.9b24cadb.js",revision:"0cb1ca3422f9d5602dfc1a5217a38513"},{url:"assets/js/page-AboutVuePress--4a71114e.389740f5.js",revision:"4ce2ee8db8e1e690c017f779a3bcb477"},{url:"assets/js/page-Basic--770cb96b.01209d17.js",revision:"e3ef1bfc9b09085d00bab16dbc646437"},{url:"assets/js/page-Bloghomepage--64265752.0ee625b8.js",revision:"bc41ebf24df517aa43aec0bb9302cb55"},{url:"assets/js/page-Blogrelated--17c260a2.58a3f873.js",revision:"5ad015091889f9c882fbf48415659283"},{url:"assets/js/page-CodeDemo--a44bde9c.49b2fe44.js",revision:"4c5c4d06ca89ac831e7d6fbbd7784119"},{url:"assets/js/page-CommentFunction--5bb6671c.e0ead78f.js",revision:"d0b3faab63c6c7d02d2e3ab9e25ef867"},{url:"assets/js/page-Commonproblems--2b571e9b.1331d539.js",revision:"5abfcd13a95f0ecb1493e860d930f83a"},{url:"assets/js/page-Config--35a0a7d9.cdb26e6c.js",revision:"ffe65010115e780df2e340b3be3384be"},{url:"assets/js/page-Customalignment--4f21aa5c.f8ea975a.js",revision:"9600cf3c6bac7770f862fb15ddf6f54c"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.2d4f0783.js",revision:"86ab81dd639e917e5e1ac61d0d095dd7"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.18f989d5.js",revision:"527291078cb7d87b6f6b969694c563b6"},{url:"assets/js/page-Demos--f328658e.3e62466f.js",revision:"16372df9027beffd0dc81645a78687e9"},{url:"assets/js/page-EmojiList--41bb29b9.2502859b.js",revision:"5b8e488c32cb77bea47cb92d44d53d85"},{url:"assets/js/page-Emoji列表--404e6737.b0a4e370.js",revision:"2a9e00e0acf0b36849ccb050fc24d3f0"},{url:"assets/js/page-Encryptionfunction--181bdc9c.452b5cae.js",revision:"497b6ec1ab90c71ff5cc2322b75fadda"},{url:"assets/js/page-FileStructure--665a4f1c.f1c8df00.js",revision:"e147b321ab6bbb4a8e01cbd6ddbacf82"},{url:"assets/js/page-Flowchart--7ce6d974.89c8289c.js",revision:"842a441ed302680ab4db592a654f22ab"},{url:"assets/js/page-Footnote--0c733e52.424607e9.js",revision:"6c13e259b28268805a346601c09373f7"},{url:"assets/js/page-HomePage--5834599c.f2dd1bb7.js",revision:"14a7a6462c2d99c63fe9a6c233027497"},{url:"assets/js/page-Iconsupport--a6a93218.bf35ae16.js",revision:"e5d8d2f19990c120b1deb8c935dfaf88"},{url:"assets/js/page-InstallUsage--0ab466d2.e3f36517.js",revision:"6ac206476dd54dabdd1dd7bae4a9dc48"},{url:"assets/js/page-Introduction--d4910962.3dd6c587.js",revision:"7beec298f29aa31d261281f27b622c6d"},{url:"assets/js/page-Layout--12bd4f0e.9843b67c.js",revision:"19d9312bd02528c0345ca334d3e36af1"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.93596fb1.js",revision:"e68f19e171887e00d394430ce0f2b1f3"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.07630d4d.js",revision:"724eacdac53b3c7f27abbb036534a70d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.858c15af.js",revision:"b44dcb0264ae444f190c48bdc7b95dfb"},{url:"assets/js/page-Markdown介绍--0e6891b6.6dda2a88.js",revision:"9a689909c79d0fd6312dddb306768bd8"},{url:"assets/js/page-Markdown增强--6162938f.10c77a92.js",revision:"e3d736faf7439c92633bcfff9b815e5f"},{url:"assets/js/page-Markdown示例--5479fe88.9788c018.js",revision:"868e89c0b7f914b4b84161e4e3791337"},{url:"assets/js/page-Markup--6b1f341c.67eca47f.js",revision:"d29e3a21945324455e10a9e83ab1e513"},{url:"assets/js/page-Nature--749fb09c.c498fa21.js",revision:"8a85973cb586c86618a88a6380d1ab13"},{url:"assets/js/page-NavBar--c7bf87dc.16ad4dd7.js",revision:"149d06c61f7a1b1cb378c1af9a611554"},{url:"assets/js/page-NewComponent--1d138c72.a3c77919.js",revision:"0826f4146aec7eb30579f6b08fc55795"},{url:"assets/js/page-Newfeature--5136c541.be5ef064.js",revision:"96b64308d9cbe1a2d3a6a2c2563e863a"},{url:"assets/js/page-Object--16031ab2.27b1cb2c.js",revision:"0a0e71b243eb0270d089c4a9c8cde92a"},{url:"assets/js/page-Page--af17b59c.16f59807.js",revision:"d5d8d158a593f4e949d3a9cfffb65093"},{url:"assets/js/page-PageConfiguration--0aacc152.42f2f0ee.js",revision:"1ffd16e2454da3f03193132ce07c56d4"},{url:"assets/js/page-PageEnhance--03665ac8.4982f029.js",revision:"668539f7b7dc4f0a6b3110458597aef3"},{url:"assets/js/page-Pageinformation--71efd5d2.2abc188b.js",revision:"87aafb0c4e58e875352040879fe56f84"},{url:"assets/js/page-People--2182769c.9ec16677.js",revision:"739486be142132d3923130045088b79c"},{url:"assets/js/page-Place--951cdc00.188eb5fb.js",revision:"cff5e51e4a7724298fc0cf64ce4990fc"},{url:"assets/js/page-PluginDescription--137c6c07.3807610c.js",revision:"60f16d21a940a2daba0bd64f6441c121"},{url:"assets/js/page-Plugins--adbf415c.5e88ff0f.js",revision:"3f6fc85c17c9dd57758779e46c0b62ad"},{url:"assets/js/page-Presentationsupport--8f8e54dc.7511a9b7.js",revision:"32e1496171189004c8ae12102944c7e2"},{url:"assets/js/page-PWA--01089712.286587bc.js",revision:"a96262b65198140dad79bea8befd7aff"},{url:"assets/js/page-PWA--243ef2b8.b1fb7f96.js",revision:"15942d2209276604d86a3b432504d11d"},{url:"assets/js/page-SEOandSitemap--ccd3659c.9d775400.js",revision:"799b99693e06807e42a330163055551a"},{url:"assets/js/page-SEO和Sitemap--2853f164.becc2cfa.js",revision:"63ed782f253e5c4e5283a15d14aa0cf7"},{url:"assets/js/page-Sidebar--2fa1ea2c.c0565ac3.js",revision:"2ca460cff794162408ae116c382adc89"},{url:"assets/js/page-Slide--269ae052.c0859e0f.js",revision:"73201f3bcd9f849d9e9c4a383dc78f87"},{url:"assets/js/page-stylusconfiguration--6796cdf2.520b1667.js",revision:"6078accd3e7ee3cb1f21eba091db906f"},{url:"assets/js/page-stylus配置--0ce19a82.06f52e2e.js",revision:"1794c376d03dd8cc3f14a5af990d0aba"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.8e26b909.js",revision:"b5fcd7f8b1f7d26b319465c999f001b6"},{url:"assets/js/page-Symbol--a9259c5c.46d7dd4e.js",revision:"9055b2f99784214b1ac9d15d25443d7c"},{url:"assets/js/page-TexSupport--64cb5e50.46bf49a6.js",revision:"c1b194f2ca83ccf8a8017ef67c86e4b0"},{url:"assets/js/page-Tex语法支持--1e02b152.9f8492b4.js",revision:"1d2b469850e79113cdac847f01afe9e1"},{url:"assets/js/page-ThemeConfig--1120a0ce.40397c64.js",revision:"0bc07dd0c26b9cb9066e0e5681643df4"},{url:"assets/js/page-ThemeConfig--1726e14e.08647fe6.js",revision:"68bf28d756cad80ffcc5974cc60c29d9"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.8f547437.js",revision:"e66c85e8a60f2fcce75e08caf4229bb2"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.8f0e1a3d.js",revision:"a79cf6f3a2342756b93b5e6af0c1d088"},{url:"assets/js/page-ThemePluginConfig--958196dc.9c77a304.js",revision:"338518a66d3337f706bdddaaafb492e5"},{url:"assets/js/page-TSsupport--09728ac8.2931dae8.js",revision:"c2114038c40a4aca10c4ba33f4f99685"},{url:"assets/js/page-TS支持--4625f812.0e683d12.js",revision:"cef9f4a513d8c235ff69f6c5a97cf787"},{url:"assets/js/page-VuePress--b7060eee.2082ac08.js",revision:"29f37891f1408143cd877540ff2f94cf"},{url:"assets/js/page-vuepress-plugin-container--31498112.a45b926e.js",revision:"1d2a0a20871952267ba7238739564106"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.08d8c98b.js",revision:"91cbcbf95635cb71898bb3bb84c540f2"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.986bc5a2.js",revision:"b236f000a8582dc4e8f2d941e78dc6e0"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.cbbdd4c4.js",revision:"b80e1066be273bc166342ff6730e3f2d"},{url:"assets/js/page-vuepress-theme-hope--354da24e.b5d938cb.js",revision:"a6d3406434b7bc026bbbe828a0a4f7a4"},{url:"assets/js/page-vuepress-theme-hope--776d8369.266845f0.js",revision:"781421ce173a5ec9a9850dc95cd9b677"},{url:"assets/js/page-VuePressCases--082972f2.c0e236a4.js",revision:"60e3abbb39296ff3173e0b586d83b28f"},{url:"assets/js/page-VuePresscommands--9f3f316c.6c3c5f90.js",revision:"c80c3c9f1e5d51b1adaf2aadedb37140"},{url:"assets/js/page-VuePress案例--531d5f3e.46a94d53.js",revision:"19f9756d1f3f2073a82ffabd028919fa"},{url:"assets/js/page-上下角标--8efed9dc.5d4a76df.js",revision:"0aee0d1e383359dcbb1523bc1f8a5f1e"},{url:"assets/js/page-主题功能配置--5bb71452.3815b285.js",revision:"5480a50ae44a492eb257b89a92511549"},{url:"assets/js/page-主题布局配置--7db7eff2.c5ce8865.js",revision:"fbae136821e03c07ad4eb5df879c3178"},{url:"assets/js/page-主题插件配置--1b0c3e98.e6c069c5.js",revision:"5836ea9b2cda6b089709b5a3a0299b35"},{url:"assets/js/page-主题配置--21dc088d.ca028ff4.js",revision:"9c7fe52d390edbad69a5dfffd37c9bb8"},{url:"assets/js/page-主题配置--2c572572.f385175d.js",revision:"9c013e36abc697c8698df13e86699df6"},{url:"assets/js/page-人物--b4fc27dc.eff1eb39.js",revision:"9968cedbb1c355421107bd1f21e54dd9"},{url:"assets/js/page-介绍--2e99d139.27299aa6.js",revision:"c38963e846a6997c7c825164066f572c"},{url:"assets/js/page-代码演示--0dad4f52.647204ac.js",revision:"552dcf16a97fa94edec9aae90b46fde6"},{url:"assets/js/page-侧边栏--43054cb2.6f2566cc.js",revision:"6991d139fba970e79ac8cdbf2d8b8b81"},{url:"assets/js/page-加密功能--2361b7e4.04f00d5e.js",revision:"91739fb47d49bb5ab4fd9e577c03cf7f"},{url:"assets/js/page-博客相关--6a3fd4f2.947bb060.js",revision:"781a89f27698d2b5dcfdbea934f07bed"},{url:"assets/js/page-博客首页--1eb2b298.8fbcfc22.js",revision:"a550dd8705b1187fb1a2b96a5db65ec6"},{url:"assets/js/page-图标支持--a2671ddc.7522d24c.js",revision:"ce523bbaa43e459433bb5671f3146dbc"},{url:"assets/js/page-地点--6710785c.079a4f47.js",revision:"0e92ba46dd28b4e7b5c0002f16084fea"},{url:"assets/js/page-基础知识--4d466a79.d414691f.js",revision:"a7fc4b2492932a63919212f05d4f4e46"},{url:"assets/js/page-安装使用--76e0e5b0.ed772768.js",revision:"94009c1dfa0ab326db2cb6d498ebeef2"},{url:"assets/js/page-对象--e150da9c.9747f92f.js",revision:"9aa0b178c8179031152049be6e38079f"},{url:"assets/js/page-导航栏--183844fc.3af6fb68.js",revision:"ab7ba1e79e9e146313c76912bc79e049"},{url:"assets/js/page-布局--fa93e36a.9b6120ea.js",revision:"287417d6200c4fe35fbc240063aed106"},{url:"assets/js/page-常见问题--10ab790e.8ada692c.js",revision:"3f5a467ee876b092c528b25a83bd9408"},{url:"assets/js/page-幻灯片--818cb750.117028ae.js",revision:"7d7a43bfa041424120252f1f0c05a66d"},{url:"assets/js/page-幻灯片支持--5808e664.d1671ed4.js",revision:"82504f4e9ae6eed3f7bff2fb4f4e58b0"},{url:"assets/js/page-插件--32355f10.b0a332fe.js",revision:"ac815ccb6dcfde3b35eebe4baf13266a"},{url:"assets/js/page-插件说明--cbca1c8e.b5b26f3c.js",revision:"28660d6a2a75a63b5ec1a75651d7f51d"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.516f67e2.js",revision:"c735ef9fa2ecb4c61ccd9c67e4cace16"},{url:"assets/js/page-新增特性--30c6c799.8a03a6a5.js",revision:"00c456a69c40985567d8a34286954146"},{url:"assets/js/page-新增组件--0979095e.80bd56fb.js",revision:"4eb87257ba02fec2b82076dd8eebacfa"},{url:"assets/js/page-标记--0ac52704.42d22eca.js",revision:"64135f2ae319987268749ba9ef88329b"},{url:"assets/js/page-流程图支持--582eff1c.3f170ec8.js",revision:"12c96f6577bb759b1c90c90e8d52b319"},{url:"assets/js/page-深色模式与主题色--01662674.449b9ca2.js",revision:"f6c106e6ca82ff1bd93be89906f39e53"},{url:"assets/js/page-符号--2db8fb80.9cbdfbed.js",revision:"85fc6b1686abc2daf46b43d21c81fd5c"},{url:"assets/js/page-脚注--17d88350.30f00640.js",revision:"f7b7a2dcdb22f5de9f7f1d4d6c6ee723"},{url:"assets/js/page-自定义对齐--048d31dc.a39ee0d4.js",revision:"c1dcb60101f9442d7c281afe59d6e383"},{url:"assets/js/page-自然--7ec33be2.c9bfecb0.js",revision:"79f85912ce121209bab3f65a4b102c02"},{url:"assets/js/page-评论功能--350aff9a.44140c25.js",revision:"011218e4370b519e23535a2dbac18af2"},{url:"assets/js/page-配置--d315f8fe.f075d434.js",revision:"30be11c2ef2bb09693d73b375659a0f3"},{url:"assets/js/page-页面--78423bfe.dd386f0d.js",revision:"f69453907859ed8fa32fcfa8381a0229"},{url:"assets/js/page-页面信息--455b9800.f2c09959.js",revision:"b11f522856d77462e68a6f726bb4590c"},{url:"assets/js/page-页面增强--2e4cf75c.6d0cadfc.js",revision:"20c634f02b102ac3decadaad56eab58c"},{url:"assets/js/page-页面配置--02399408.1123b5a9.js",revision:"86a9b25be15c1a1923989b74dc27229f"},{url:"assets/js/page-项目指令--2f3d7c1c.7f1c37b0.js",revision:"831e5d2325a43ede5bca709668d4fe74"},{url:"assets/js/page-项目案例--1f3d6482.3f23fe9d.js",revision:"839912996c0eb30d2479ab2c4082c458"},{url:"assets/js/page-首页--79a22944.626a14d2.js",revision:"fb686121e431ddc041b6b16a0edb5d3e"},{url:"assets/js/page-默认主题配置--0d5b7f32.f36ce656.js",revision:"7ec5dba6396c18a74557bc81845baaf2"},{url:"assets/js/vendors~docsearch.c05c5713.js",revision:"09172d843dddf9b5fff4d6023468626a"},{url:"assets/js/vendors~flowchart.fcc19cf4.js",revision:"913e709520c743c5e7e2a5666756cd6b"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.86dec24f.js",revision:"d9a69e637240e3d7943251a90b3e238c"},{url:"assets/js/vendors~photo-swipe.80b35463.js",revision:"c2c5be201d082085d39de0a1d32c31ef"},{url:"assets/js/vendors~reveal.5b2c535b.js",revision:"ac1fe9b7a32264aac78e6238750a251e"},{url:"assets/js/vendors~valine.2638fe86.js",revision:"b2385adbbfe6adb9b8241621365bc97d"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"12083e44b83ec008ed20c2b6b590eab9"},{url:"article/index.html",revision:"bf906cf94f5249079b934a1ab720ad90"},{url:"basic/index.html",revision:"baf514c7dee9f93434f25d0ed2cf6317"},{url:"basic/markdown/demo/index.html",revision:"42dff1bca347f058e753f3ee1667a722"},{url:"basic/markdown/emoji/index.html",revision:"deb99bbdd02323126f2a54451bd3f471"},{url:"basic/markdown/emoji/nature/index.html",revision:"28d0fe5fb75df57ee7610aaa7b7359a3"},{url:"basic/markdown/emoji/object/index.html",revision:"0ef7d7be153b12fcce3dfdbd552edf3c"},{url:"basic/markdown/emoji/people/index.html",revision:"af87eeadb015335ee14310f90516d96f"},{url:"basic/markdown/emoji/place/index.html",revision:"3f640849e76adc3ee108c24f614716e8"},{url:"basic/markdown/emoji/symbol/index.html",revision:"17daa1bfab3c62da9287dacf4f9627dd"},{url:"basic/markdown/index.html",revision:"d6d2a156d12d91be0dc8f001eacf643b"},{url:"basic/vuepress/case/index.html",revision:"a9aa821baa07ec32f1eec000c92ca484"},{url:"basic/vuepress/command/index.html",revision:"6e4f65c091b65c11ac66de231a4c2f19"},{url:"basic/vuepress/file/index.html",revision:"40f8fa0440367854b2ac6f04122a6b54"},{url:"basic/vuepress/index.html",revision:"292cd986f786740044b3172e2437eff3"},{url:"basic/vuepress/plugin/index.html",revision:"a63019e4bd233b57e6bfd9107ed09bc9"},{url:"basic/vuepress/theme/index.html",revision:"c9e84934ffac3eb0e4b0793325b0c330"},{url:"category/basic/index.html",revision:"2b77582ce9021b982039aec562104250"},{url:"category/basic/page/2/index.html",revision:"546a89e55116fa3eb76af440e66b18f9"},{url:"category/basic/page/3/index.html",revision:"fb39c9256b12cd706578913ead763a3b"},{url:"category/config/index.html",revision:"2c9b4901b0c0c27e9b3700d00230acec"},{url:"category/config/page/2/index.html",revision:"eba061c8051f179a39a4bf7e80d348f9"},{url:"category/config/page/3/index.html",revision:"2b83e8c1e5a28c28b5724d8760bb44ef"},{url:"category/demo/index.html",revision:"4a2474d456c8e9a3c7316535cab5d983"},{url:"category/FAQ/index.html",revision:"3e9e265a2d00ec27d7fb34de3ada958f"},{url:"category/feature/index.html",revision:"70a0f4710091fe17142eeb347b35dcec"},{url:"category/feature/page/2/index.html",revision:"d0f4b71dedcc37a390c278d71b272b12"},{url:"category/feature/page/3/index.html",revision:"970f28f6fe24135af32cc42bec10a68a"},{url:"category/index.html",revision:"911c015e57eba50f9313e4412f036df8"},{url:"category/instruction/index.html",revision:"8d59e381734d563619da67182e85bf7c"},{url:"category/layout/index.html",revision:"0993bd48568b22474913c6ba2bf3cac9"},{url:"category/layout/page/2/index.html",revision:"52161cd806e61c90c7c3c5944c7af064"},{url:"category/markdown/index.html",revision:"dae64b8a3f8aef2295beffd79a02d19d"},{url:"config/index.html",revision:"d9e80324aa64e68d60b73221a6485edd"},{url:"config/page/index.html",revision:"3c73bd417b211b5f79d9571150826175"},{url:"config/plugin/container/index.html",revision:"bc41183605cbbd854b3adbeba2f93e5d"},{url:"config/plugin/copyright/index.html",revision:"7dfa924f2f616467f6d7488dd59f374b"},{url:"config/plugin/index.html",revision:"454f647c988737e1d98b5cb980d35829"},{url:"config/stylus/index.html",revision:"90f5fdad21f257c2967d798dccc170ea"},{url:"config/theme/apperance/index.html",revision:"d889074c4a94c7ce8e6cdb33d465f52b"},{url:"config/theme/default/index.html",revision:"6836a33e301829875f01fcaa44be45a2"},{url:"config/theme/feature/index.html",revision:"29d2a2554f0f846eb9e925e222662742"},{url:"config/theme/index.html",revision:"1364091452f5050daac9131fce812f94"},{url:"config/theme/plugin/index.html",revision:"e3ff96bd9c8085682687492b77b77625"},{url:"demo/index.html",revision:"a065109a6afe4f9aa24d2451607fd0f9"},{url:"encrypt/index.html",revision:"0ba78d841d033e863da78a9ca33f2140"},{url:"FAQ/index.html",revision:"5bf60a6ccd51f5bbc6b6a4eeb8424b46"},{url:"guide/feature/blog/index.html",revision:"e9a15048fb043f6fa66da017520a706f"},{url:"guide/feature/comment/index.html",revision:"b9c9a35768c7903e8014d85133035492"},{url:"guide/feature/component/index.html",revision:"f52ec51c72b8d69c4f98864810650851"},{url:"guide/feature/encrypt/index.html",revision:"0ac1088b37e376730fb4c421521a2479"},{url:"guide/feature/icon/index.html",revision:"8d38a49ef7707bd44f5898833ee5607b"},{url:"guide/feature/index.html",revision:"b5ac9f7967efd11340b597c6074ab3f8"},{url:"guide/feature/markdown/align/index.html",revision:"386c32f2a51df6e5794631c5b4ce13e3"},{url:"guide/feature/markdown/demo/index.html",revision:"95fb032c4e93fd516fa6a6fa2c4e124b"},{url:"guide/feature/markdown/flowchart/index.html",revision:"84574e6c4a3aa48a82e230d68f35a0c9"},{url:"guide/feature/markdown/footnote/index.html",revision:"14f5d3d76df1b0ab5657b0e804a83f10"},{url:"guide/feature/markdown/index.html",revision:"a860f94f3614d2620d8d8be61ba66859"},{url:"guide/feature/markdown/mark/index.html",revision:"a870b60596b8e06c526fdd969155a2d5"},{url:"guide/feature/markdown/presentation/index.html",revision:"114d0253fe8b1a93137b32c8e8a46f97"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"b80171b2811b75f49c8c39928503aa4f"},{url:"guide/feature/markdown/tex/index.html",revision:"bde18b36d09e9e9c4f24205162420228"},{url:"guide/feature/page-info/index.html",revision:"9f547c5d813efb2f8c0797a83719a435"},{url:"guide/feature/page/index.html",revision:"6b7ee7731dd39809bece0b2a242d690c"},{url:"guide/feature/pwa/index.html",revision:"378489ea7d3d30861ee952ccf0db3c8e"},{url:"guide/feature/seo-sitemap/index.html",revision:"6bb7cff4b526a2436f5c26598adbfb8a"},{url:"guide/feature/theme/index.html",revision:"4fa43a318c259afa96266eb9e927f4e9"},{url:"guide/feature/typescript/index.html",revision:"5404e5093a93d18995e282680aea62f6"},{url:"guide/index.html",revision:"698c9b6de22e5b55bbba014d4ee30d86"},{url:"guide/install/index.html",revision:"030b71031faacb06867f6a4b8b83c72d"},{url:"guide/layout/blog/index.html",revision:"46d5516e362a1ee09811c4e7d553900e"},{url:"guide/layout/home/index.html",revision:"a5ddadb2f8cdf7bc7bc9cf15f7a91863"},{url:"guide/layout/index.html",revision:"91539e9299a1b00d5daeced05d72deb0"},{url:"guide/layout/navbar/index.html",revision:"0b4caa691cef4249468de74ecbbf4cf1"},{url:"guide/layout/page/index.html",revision:"8d37b78fd405be78250b9113de217b17"},{url:"guide/layout/sidebar/index.html",revision:"72872800aeb34aac95f6c01d3963f326"},{url:"guide/layout/slides/index.html",revision:"56b01a579636a8e385f040c083e5bec2"},{url:"index.html",revision:"84d3e124ed29586236cdb994f7f61c78"},{url:"slide/index.html",revision:"73cdf535ed12ce12860c164db1a46985"},{url:"tag/blog/index.html",revision:"b98d09d476c1eccb552f5a9bcc505642"},{url:"tag/comment/index.html",revision:"82a64716e2d9a456f5bf3f6b0e9c6194"},{url:"tag/components/index.html",revision:"6ec2f5a2a524284387c720c3fd3cd22b"},{url:"tag/config/index.html",revision:"9884f47f5dddfabff23e761af1ac861b"},{url:"tag/config/page/2/index.html",revision:"21ae40733952ebb13d091c8f21ba81c1"},{url:"tag/config/page/3/index.html",revision:"62f2b9ba563b7dfe720e5b2142ef81bb"},{url:"tag/emoji/index.html",revision:"958ca083cb3b2020d25db3255973993a"},{url:"tag/emoji/page/2/index.html",revision:"2fb65064f9aa5d5b368bfd49df7686c9"},{url:"tag/encrypt/index.html",revision:"63bf9c1787cb2dda0d1ddb5c1afa423c"},{url:"tag/feature/index.html",revision:"91c6e68bc443c516a5041da8ab2021f0"},{url:"tag/feature/page/2/index.html",revision:"e3f15e696318c5abc896290ffb357b76"},{url:"tag/feature/page/3/index.html",revision:"302ba94ffe8038dd67ac1b36d8e7cdbb"},{url:"tag/feature/page/4/index.html",revision:"ab8e9906292726dfe87bcc1885bd2590"},{url:"tag/feature/page/5/index.html",revision:"d668a259591a148e5e62d7ae3c8d193a"},{url:"tag/frontmatter/index.html",revision:"158649138a008864fcb146f2335870a3"},{url:"tag/home/index.html",revision:"47e52e9183faed29aa22208d73951dae"},{url:"tag/icon/index.html",revision:"369cf4c7645d41b3ef510c1d58c7225d"},{url:"tag/index.html",revision:"3fac7912114418fe0d7081dbb2196a10"},{url:"tag/intro/index.html",revision:"14853a7bf612f44f32b353d8e53670e7"},{url:"tag/layout/index.html",revision:"6ad8f7be430df740c6672852178c969c"},{url:"tag/layout/page/2/index.html",revision:"f6cf3d10cf226bb9338368951e442839"},{url:"tag/markdown/index.html",revision:"c519c34c05b5b59495b084f1bef0717f"},{url:"tag/markdown/page/2/index.html",revision:"564bc51c184309398b45d851083d4c82"},{url:"tag/markdown/page/3/index.html",revision:"df91053d2fb65e15df824c166adc4a33"},{url:"tag/markdown/page/4/index.html",revision:"f65c6bb982018f2c2adf76fead502d3e"},{url:"tag/navbar/index.html",revision:"1c674067800e11fddb1139a097dce434"},{url:"tag/page-info/index.html",revision:"a46188c07c946a6198e2c5724836794b"},{url:"tag/page/index.html",revision:"6ca0c5395e0fec18cfdaac8748b878b0"},{url:"tag/plugin/index.html",revision:"4eba83aba347c820e7a85020bdb07f06"},{url:"tag/pwa/index.html",revision:"90158f317fefc1a31ab6ce36ba5d195f"},{url:"tag/seo/index.html",revision:"63554d836ff63ede51426e2bcb1e2210"},{url:"tag/sidebar/index.html",revision:"90fa5c003fd2bdffd765c225ef40ee6c"},{url:"tag/sitemap/index.html",revision:"bba98a6df25daf54ee9be1939df01b91"},{url:"tag/slides/index.html",revision:"0dfffff949a50ecbbd376978b54e706e"},{url:"tag/style/index.html",revision:"d04284b350864e64ec5c0a84bf14d083"},{url:"tag/themeConfig/index.html",revision:"f3be83198e688e3283f7ec758460a203"},{url:"tag/typescript/index.html",revision:"413e8452deceb453ae9f1aa5a98b280e"},{url:"tag/vuepress/index.html",revision:"b6abf73d7e48728a0fbb19578927c702"},{url:"tag/vuepress/page/2/index.html",revision:"d1ecc69848820e8e5b40e09a576c8fc4"},{url:"timeline/index.html",revision:"038848dd09b4a59f60554580d280bd2f"},{url:"zh/basic/index.html",revision:"d625fb2db93ccbc4a11800fc846aabf3"},{url:"zh/basic/markdown/demo/index.html",revision:"e7772b81358f558d152d110fea14cfc1"},{url:"zh/basic/markdown/emoji/index.html",revision:"a953c611ef325438dd8344b1d3db038a"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"bb4e9600b0cd82ded732733f602b4c03"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"e76b4a595592fa10422103dc5b58a54f"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"15e4e8d9c55b72b7bbcaecb58f94463a"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"653989fee51ae14a213b6c3045bcf375"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"dcb049f36165664d8eb86c9a8f2c6586"},{url:"zh/basic/markdown/index.html",revision:"d136b3f093b1519cd4c050df7bdec7be"},{url:"zh/basic/vuepress/case/index.html",revision:"7af6fdcefeb0bc85b495bada3d5508dc"},{url:"zh/basic/vuepress/command/index.html",revision:"bc782a44f5f7ba721cf1d58cf8b7d44a"},{url:"zh/basic/vuepress/file/index.html",revision:"d550736723a0c0e149d3fded8a690861"},{url:"zh/basic/vuepress/index.html",revision:"b972772b29a0ce0bfd598c433df413d7"},{url:"zh/basic/vuepress/plugin/index.html",revision:"d2cb605b6f9918fc21d9602f6ae1bf91"},{url:"zh/basic/vuepress/theme/index.html",revision:"96cf1cf8d72470ca3a9c749081cbddb1"},{url:"zh/config/index.html",revision:"8329b4a3051100ab5c9520347053f8e2"},{url:"zh/config/page/index.html",revision:"7ee591f95977c67435cc108bc32c5e31"},{url:"zh/config/plugin/container/index.html",revision:"491fc628797d12f65c8407aad0e7d8e8"},{url:"zh/config/plugin/copyright/index.html",revision:"4916ac582b3d645c01d8b49a809c46fa"},{url:"zh/config/plugin/index.html",revision:"d630c3e09d538eb39b4ec427cfcb1794"},{url:"zh/config/stylus/index.html",revision:"17fb85e7b349cc2dc7edd914940b3167"},{url:"zh/config/theme/apperance/index.html",revision:"0c56782f235b2f34ecec6f6a8e9e7c64"},{url:"zh/config/theme/default/index.html",revision:"ed1ab5ee6c7d3e9f5e39d9c0adf7a90b"},{url:"zh/config/theme/feature/index.html",revision:"4e4eed4758ba27bd928bb7f5c253c11e"},{url:"zh/config/theme/index.html",revision:"55f4e14ec8357ce2e9c1234612da8539"},{url:"zh/config/theme/plugin/index.html",revision:"5fddb61035a6761193c96dcf2419490d"},{url:"zh/demo/index.html",revision:"cd0d9ce3bc4f40a34db756b350022ac2"},{url:"zh/FAQ/index.html",revision:"cc85a961eded9a2b2beb68c27839264b"},{url:"zh/guide/feature/blog/index.html",revision:"4afc6b0144d4bf7c687991cb72bc32c0"},{url:"zh/guide/feature/comment/index.html",revision:"702952552ceb3468341f176d4b92dc4a"},{url:"zh/guide/feature/component/index.html",revision:"2183593ef552c8bf44fa6f7a7860bc30"},{url:"zh/guide/feature/encrypt/index.html",revision:"303831f38437e03eedec10ce523992fb"},{url:"zh/guide/feature/icon/index.html",revision:"9aad00953cc86c5a90b721366fb81e84"},{url:"zh/guide/feature/index.html",revision:"6ab99d3d95c3d19378268d010c1de603"},{url:"zh/guide/feature/markdown/align/index.html",revision:"08e751f78d84ec40b4a67dd4870b936e"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"93f1d1f15cd12a7a5740615eba5c3cbb"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"6bda1e8a79bfed65193a7eb3491efd81"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"ea8043e4e1b386ac968df61db56cd19e"},{url:"zh/guide/feature/markdown/index.html",revision:"e6d255828da2db289145e189e066812e"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"c62f1d26819e86853592d9d594c725f5"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"6718a61dbf2d28b0efc716dfd1ad4f2d"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"7af2320f6445e29aa09687982d16f235"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"0a7b3100c4379436151bcd2cb4417e79"},{url:"zh/guide/feature/page-info/index.html",revision:"59e186a36269a9a04a85d2ce759f57e1"},{url:"zh/guide/feature/page/index.html",revision:"44c10a563679d5a05b1c7c8a9c54d524"},{url:"zh/guide/feature/pwa/index.html",revision:"971622d09670ff7301543e9b52f0316b"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"10454fa9753a1990554399148bece70a"},{url:"zh/guide/feature/theme/index.html",revision:"af37e3d775c65573417b3d5efbc03f64"},{url:"zh/guide/feature/typescript/index.html",revision:"ee60891555dca55dc37949bbb94c3c0f"},{url:"zh/guide/index.html",revision:"6583ce6e9fad6f635bc596002d819a16"},{url:"zh/guide/install/index.html",revision:"5555ed16a1ec0b066ed0a1b4d32e9fec"},{url:"zh/guide/layout/blog/index.html",revision:"1638ee1319f4975e978c35c5edad111d"},{url:"zh/guide/layout/home/index.html",revision:"4c4052eb24d193c964345ea59091fd35"},{url:"zh/guide/layout/index.html",revision:"ac54c96ab6d1d8b23a9656d5ed769f84"},{url:"zh/guide/layout/navbar/index.html",revision:"8f33c54e945fd512601824d78547f7c3"},{url:"zh/guide/layout/page/index.html",revision:"fdbffb510289c7804c993fb5cb7042b8"},{url:"zh/guide/layout/sidebar/index.html",revision:"c99aaf9a82bc9fb898286a3818575b65"},{url:"zh/guide/layout/slides/index.html",revision:"8a20d14f711d8431972dbee8b91fd8cd"},{url:"zh/index.html",revision:"975ae06ad873167401052d7cf783ee24"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
