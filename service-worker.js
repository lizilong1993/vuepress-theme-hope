if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.7e8cb7ea.css",revision:"432dc32645c604531a8092234852ecdd"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/132.55c67ae9.js",revision:"b712c1f8062d19ba92718649b46a2877"},{url:"assets/js/133.12f27cf2.js",revision:"fe187711ce20afeb1e4e107fb15420d9"},{url:"assets/js/134.f13d6873.js",revision:"0465adc0ea38a4c1175fe3a8c9ac0910"},{url:"assets/js/135.c5d2a858.js",revision:"8b43bba4d20f35491156dd4e76ec5dcd"},{url:"assets/js/136.03f90ae6.js",revision:"9973f25f13e9e90ef4d287aef133da35"},{url:"assets/js/app.47d94fd5.js",revision:"512536c11079289a56436b0abb5bc5df"},{url:"assets/js/layout-Blog.185c3ce4.js",revision:"9932e9f291d4ad18cd2d9c55b6ffc05d"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.5692bdad.js",revision:"27c750e692d46f238fd800348c9112bb"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.526a24fc.js",revision:"908b5eabc49e3e06461fced7f6f551bf"},{url:"assets/js/layout-Layout.6aa95dc7.js",revision:"7aed4542718c61d99a042fab473a62fc"},{url:"assets/js/layout-NotFound.6c56f9b5.js",revision:"8af51dca6c641da1e68faee1328f24d7"},{url:"assets/js/layout-Slide.b33f35f1.js",revision:"f9ee85a6e26cb9147b38c70a12fcf62a"},{url:"assets/js/page-AboutVuePress--4a71114e.829519ca.js",revision:"cdac13ba28758899dd7cb301bd98ceab"},{url:"assets/js/page-Basic--770cb96b.56d07cea.js",revision:"2d4d1613e935bcbb4522c1241ee2450b"},{url:"assets/js/page-Bloghomepage--64265752.479260dc.js",revision:"76c1e0ad929ec88c831c2f82e7dad6f5"},{url:"assets/js/page-Blogrelated--17c260a2.ee844886.js",revision:"4d17428ad6d80408d7399f86ba3304fc"},{url:"assets/js/page-CodeDemo--a44bde9c.195c3b17.js",revision:"7ebf7e6d0860c6bc2d6c981ad502413d"},{url:"assets/js/page-CommentFunction--5bb6671c.e6473b0a.js",revision:"ced6074b4ae57810290dab5c6b833f23"},{url:"assets/js/page-Commonproblems--2b571e9b.6866e58b.js",revision:"0eb49a3cae42d44f7076f67b12f88dd8"},{url:"assets/js/page-Config--35a0a7d9.d4c2c295.js",revision:"d82b2ff015398f7ed61c2d84f73afb0e"},{url:"assets/js/page-Customalignment--4f21aa5c.18b00527.js",revision:"f4205c7789bfac919c70172bc2c49257"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.a795b35d.js",revision:"3eea8dfa52b1b8a12149f9da492d6bff"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.501650a5.js",revision:"f1498990af88431a9dad7bdc9aa17a83"},{url:"assets/js/page-Demos--f328658e.b17c0ae3.js",revision:"8b7115ea555d6dbede187e7d9fd8bea9"},{url:"assets/js/page-EmojiList--41bb29b9.6fa284e0.js",revision:"eb35ae91ba52b368ed39c7d1937905c2"},{url:"assets/js/page-Emoji列表--404e6737.3ab28d8d.js",revision:"50f88cbe7d8c1e4863c1c69c64e61667"},{url:"assets/js/page-Encryptionfunction--181bdc9c.22b19fdb.js",revision:"d23265b540ea1b38b40880b83dd643af"},{url:"assets/js/page-FileStructure--665a4f1c.026cf4f0.js",revision:"4c64f979345b73130b1447c161692b37"},{url:"assets/js/page-Flowchart--7ce6d974.7ce11fd4.js",revision:"e2feef6ac4f77ed908af89a316e911a4"},{url:"assets/js/page-Footnote--0c733e52.b6d277a9.js",revision:"1286d3bf1889e89217a8dff836a650d2"},{url:"assets/js/page-HomePage--5834599c.9a090bb9.js",revision:"5a5ad7394aafc41d79210bb6559e6a3f"},{url:"assets/js/page-Iconsupport--a6a93218.50856566.js",revision:"dfcfcc50221032311abd72fcebbad9ea"},{url:"assets/js/page-InstallUsage--0ab466d2.a6b64a8b.js",revision:"2083aa104ecc8ca3ebb650c121ee8bfd"},{url:"assets/js/page-Introduction--d4910962.cdb17cea.js",revision:"49ed7da7336044ae037934ce30e24c1c"},{url:"assets/js/page-Layout--12bd4f0e.63d18e55.js",revision:"9b37ca5c0f55dc58ff55215a99224b49"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.60935192.js",revision:"dcbf183e170166bb4c50401895bc286a"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.96104d90.js",revision:"7ed443a1bc9da1ff89364fc0e502926b"},{url:"assets/js/page-MarkdownIntroduction--270989ce.a4c4f049.js",revision:"64dd216e2fefbc46a72d0cd697e94737"},{url:"assets/js/page-Markdown介绍--0e6891b6.cde3f829.js",revision:"aee10572ea9f95f6770f3d1268d2dae8"},{url:"assets/js/page-Markdown增强--6162938f.8c9cdcb3.js",revision:"d1123349f9245161da9e402ea6841746"},{url:"assets/js/page-Markdown示例--5479fe88.fbddc444.js",revision:"098e2eda4d4cd6362bd784c784921826"},{url:"assets/js/page-Markup--6b1f341c.e536ed39.js",revision:"d950521b28d093c18bd9abd485621ba5"},{url:"assets/js/page-Nature--749fb09c.975e886b.js",revision:"e3cdbbfa569d69826f62a4ad67d0b107"},{url:"assets/js/page-NavBar--c7bf87dc.1933d5bb.js",revision:"0f8ea66572a72d7c7faba13ffdbdc310"},{url:"assets/js/page-NewComponent--1d138c72.036861fa.js",revision:"efc055f216702c1a28f3ce917d1ed1a5"},{url:"assets/js/page-Newfeature--5136c541.5fa44b5b.js",revision:"1e47998371349b506a71d701d9a16402"},{url:"assets/js/page-Object--16031ab2.f5798a6a.js",revision:"9230413ed77c0db7d4cd9a69c13de02d"},{url:"assets/js/page-Page--af17b59c.38ab4588.js",revision:"472e7c5c6bfaeca6ddd9df69c04b77e0"},{url:"assets/js/page-PageConfiguration--0aacc152.fa08c09b.js",revision:"25bcf83934e64ff8af1e234e3129c2cc"},{url:"assets/js/page-PageEnhance--03665ac8.6350cf32.js",revision:"f4c408ede536543bbfd0262a8e85a2e0"},{url:"assets/js/page-Pageinformation--71efd5d2.d50b1ea6.js",revision:"3d7df99e1c6ec811ca61bbdea446c807"},{url:"assets/js/page-People--2182769c.13655259.js",revision:"979d5a02f71fe9acd023fc927e0299b9"},{url:"assets/js/page-Place--951cdc00.39aa9407.js",revision:"1d20ffd68777769f1a98d17b3f73560a"},{url:"assets/js/page-PluginDescription--137c6c07.1bef0cd7.js",revision:"f48826a335c29ca06a9e39649470e9eb"},{url:"assets/js/page-Plugins--adbf415c.0b7cb8a4.js",revision:"3b022f20811311bb6951ea1d5116d4c6"},{url:"assets/js/page-Presentationsupport--8f8e54dc.9f931803.js",revision:"45ddea957b100f13cc9e3c33cc9b95ad"},{url:"assets/js/page-PWA--01089712.aff99f0f.js",revision:"557cc53fc608bfca829920ca77643672"},{url:"assets/js/page-PWA--243ef2b8.65043df6.js",revision:"37035832a038aa82f5231ad878ba1dc0"},{url:"assets/js/page-SEOandSitemap--ccd3659c.89b0ade6.js",revision:"6ea4c285ad8f0eb5235e034b2bd7ee3a"},{url:"assets/js/page-SEO和Sitemap--2853f164.30273e78.js",revision:"b62dac7db8579689409bdf46f8c07845"},{url:"assets/js/page-Sidebar--2fa1ea2c.fd46d54d.js",revision:"616792e54e329f8f9d6edeac8039d1ac"},{url:"assets/js/page-Slide--269ae052.2696b37a.js",revision:"be67a1b0d9c7a51b5d83847a2dbe1120"},{url:"assets/js/page-stylusconfiguration--6796cdf2.a15d68a4.js",revision:"bf8d4683496472eae4bbbd96e9cf3cff"},{url:"assets/js/page-stylus配置--0ce19a82.a5aad5a9.js",revision:"dddbf56a8e84b7234a3a44d1c1b44fb2"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.ccd64a80.js",revision:"c257283fc4f137e480d7bbcb82b173a7"},{url:"assets/js/page-Symbol--a9259c5c.88a48c0d.js",revision:"8b318abeec55ca96408a6db3d77b45b0"},{url:"assets/js/page-TexSupport--64cb5e50.9359c461.js",revision:"e944a6b6c7d73bac710249fc05fe55e8"},{url:"assets/js/page-Tex语法支持--1e02b152.c3f3aa6c.js",revision:"a3a6df49449cac3eba55a8500428b025"},{url:"assets/js/page-ThemeConfig--1120a0ce.0286f9c3.js",revision:"71601b201e72a12305c7a7e3f5f9540d"},{url:"assets/js/page-ThemeConfig--1726e14e.9e630db2.js",revision:"f68689ba5f62016d3188848c793a4a45"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.f7dd9efd.js",revision:"2b1d1b88fea5b6004e7a576f77a0d546"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.5699ea13.js",revision:"16427a8279d149ece2ccefd77bfd4767"},{url:"assets/js/page-ThemePluginConfig--958196dc.aff7ad45.js",revision:"d492c2d4da05d89c5085955cf2170924"},{url:"assets/js/page-TSsupport--09728ac8.ad3d543b.js",revision:"6e7150ba675ada0f78647906f94becc6"},{url:"assets/js/page-TS支持--4625f812.489de90b.js",revision:"54af3cc623269a447e51cc04ed68a94a"},{url:"assets/js/page-VuePress--b7060eee.f4e1e208.js",revision:"c98c5a6350e233710974558ecd572212"},{url:"assets/js/page-vuepress-plugin-container--31498112.e6a91579.js",revision:"86fbcc945d5160a755a2a26faec5c51a"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.b136a140.js",revision:"44d919a7af8a5cec71b18213ad515809"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.4ebd3ec2.js",revision:"a3022f5398449edbd0a36f07caca321a"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.8a90aff9.js",revision:"40b971bd0820f4e23862ac5dcd940339"},{url:"assets/js/page-vuepress-theme-hope--354da24e.6f1b7cd1.js",revision:"45e7a08d8973a80e87aacfa7a84b1b15"},{url:"assets/js/page-vuepress-theme-hope--776d8369.b6738543.js",revision:"9f13ade829b058086dec20bb5a9657a2"},{url:"assets/js/page-VuePressCases--082972f2.07f45c21.js",revision:"41316bb921f045e9ce700169e6649b67"},{url:"assets/js/page-VuePresscommands--9f3f316c.0147827a.js",revision:"05ce40cf4bc6bcf1e693b782b51e6f49"},{url:"assets/js/page-VuePress案例--531d5f3e.22ca859d.js",revision:"0082f2c549737cf7806058d97f7f580c"},{url:"assets/js/page-上下角标--8efed9dc.28068554.js",revision:"01c071f6d02714c865bb80983130e513"},{url:"assets/js/page-主题功能配置--5bb71452.f32a47fd.js",revision:"859d416ce34df55a9d00d6ebe45038e9"},{url:"assets/js/page-主题布局配置--7db7eff2.2e388881.js",revision:"850843b1b984e892c755121dfcfdfe6b"},{url:"assets/js/page-主题插件配置--1b0c3e98.4ae3160e.js",revision:"cc76fbf681acbf756ff69a483f06d9ed"},{url:"assets/js/page-主题配置--21dc088d.fa585ae9.js",revision:"f74ee6017fee48d4ddb7cc61dca77821"},{url:"assets/js/page-主题配置--2c572572.165ad6ed.js",revision:"677df18cfe8b785fdadeb7b2cbcd16f9"},{url:"assets/js/page-人物--b4fc27dc.55321fd6.js",revision:"0d1db422ba3a95ae9cb2e08f6ea35f96"},{url:"assets/js/page-介绍--2e99d139.fd16c221.js",revision:"1616c7f2fe14b2f852aa84245d3ac809"},{url:"assets/js/page-代码演示--0dad4f52.086763ca.js",revision:"703a5bd003e313be8f69e942fddb594c"},{url:"assets/js/page-侧边栏--43054cb2.1d60a38f.js",revision:"7111928dcb06f91a584ef8c3e3046151"},{url:"assets/js/page-加密功能--2361b7e4.12e4ffee.js",revision:"3697fcb26267c3d420ff319f3fd88b17"},{url:"assets/js/page-博客相关--6a3fd4f2.e5100d35.js",revision:"e076e59dd69c236067d1c64852df21a4"},{url:"assets/js/page-博客首页--1eb2b298.1ef1a80a.js",revision:"9999e10d75e6b4f885c5b518b71b5421"},{url:"assets/js/page-图标支持--a2671ddc.9d99096c.js",revision:"b83bb795afa1474065b162036e21563c"},{url:"assets/js/page-地点--6710785c.a8a10ed3.js",revision:"895497d8c30ce71cb046d527542527f8"},{url:"assets/js/page-基础知识--4d466a79.14049e22.js",revision:"4c9525ec43bb44910e0acb17a885ed7b"},{url:"assets/js/page-安装使用--76e0e5b0.8d77db00.js",revision:"9ade0741c6e3ef034269a93e9403445f"},{url:"assets/js/page-对象--e150da9c.15ae1b0f.js",revision:"c23696c6fa054d140965001358986c03"},{url:"assets/js/page-导航栏--183844fc.a6ab6f87.js",revision:"af56c5637dc4a21a99203f8e5a807f88"},{url:"assets/js/page-布局--fa93e36a.3beab206.js",revision:"0753a56e1c82816a73be442e624e072b"},{url:"assets/js/page-常见问题--10ab790e.94d4424f.js",revision:"fc1d0d54fda100869f9c7960be669d82"},{url:"assets/js/page-幻灯片--818cb750.113c0199.js",revision:"780f65ed33acafe1f3a13354a92a9499"},{url:"assets/js/page-幻灯片支持--5808e664.e690c7ba.js",revision:"00acb99a325154b58c19127327525f4f"},{url:"assets/js/page-插件--32355f10.6cbe9164.js",revision:"58090dd001904dfaaa52090a32fca202"},{url:"assets/js/page-插件说明--cbca1c8e.622f0460.js",revision:"3635ff8790a2da5b23a9af7b02d4c649"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.716ab260.js",revision:"5b7715be4d455e14289a80d486eda9b1"},{url:"assets/js/page-新增特性--30c6c799.5b3d8395.js",revision:"49b654ddb925d641dda466bc6d8510fd"},{url:"assets/js/page-新增组件--0979095e.22d721e0.js",revision:"3451b6237b6a949dcbed2e234d7c4836"},{url:"assets/js/page-标记--0ac52704.d26da2db.js",revision:"4a8da372d70b5cb1b30609ce197dd046"},{url:"assets/js/page-流程图支持--582eff1c.963625e7.js",revision:"323aa23f8755950f1c0992b168442213"},{url:"assets/js/page-深色模式与主题色--01662674.f9fda436.js",revision:"57b2966557b5cae4f86d9d4b2426e829"},{url:"assets/js/page-符号--2db8fb80.dd689e3d.js",revision:"4c291c407c05a264403db2cbafee3aa0"},{url:"assets/js/page-脚注--17d88350.24af06ba.js",revision:"e94f62da45e33fa355cf78128063917c"},{url:"assets/js/page-自定义对齐--048d31dc.02503768.js",revision:"5edd226ae2485fe1b323b2768cb6ddd3"},{url:"assets/js/page-自然--7ec33be2.3f3f462c.js",revision:"12a5688b38758d627655916d855a3aba"},{url:"assets/js/page-评论功能--350aff9a.f0dd2cea.js",revision:"cd17170114ab8c01d16d43ee42de8ddd"},{url:"assets/js/page-配置--d315f8fe.1c443c7f.js",revision:"c5e97e69e027a345e44568d7836e4fa3"},{url:"assets/js/page-页面--78423bfe.b093cc6d.js",revision:"7ac3b7c0cf746859d84ff7d7c347a197"},{url:"assets/js/page-页面信息--455b9800.e6f579d2.js",revision:"27ccc688aef7f8c30bb618894cce67a0"},{url:"assets/js/page-页面增强--2e4cf75c.ff5cb4c6.js",revision:"2d010ca29545a0d9284d89e0cb9326d5"},{url:"assets/js/page-页面配置--02399408.849aae3f.js",revision:"1e10799bb9bcff77ded9a5220d658df6"},{url:"assets/js/page-项目指令--2f3d7c1c.170926b0.js",revision:"d5213398ee16f726c4e9a0026ce8f2d7"},{url:"assets/js/page-项目案例--1f3d6482.ecc5abf9.js",revision:"d080028f01098685ae7df831d03cda64"},{url:"assets/js/page-首页--79a22944.841e8fb1.js",revision:"849d0f4723fc47bbd1a8f789e2aebb1f"},{url:"assets/js/page-默认主题配置--0d5b7f32.f3bbd902.js",revision:"1cecdf63be2ecf2d859993fce0d4cc88"},{url:"assets/js/vendors~docsearch.bd1cc060.js",revision:"26d557373b99360a9111667a4f2bb8b2"},{url:"assets/js/vendors~flowchart.4fb6f885.js",revision:"f1751ce9679797477fb857e364f002ce"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4e6d5953.js",revision:"12b4f08eb7a37ec44f0bd3e4c766b8ed"},{url:"assets/js/vendors~photo-swipe.8c9c8f73.js",revision:"a4bbad8cea903604fd0bcf0a20255443"},{url:"assets/js/vendors~reveal.472d7ef9.js",revision:"4bc357238e9c01a8f6c12b6dacbf3929"},{url:"assets/js/vendors~valine.82e38145.js",revision:"97859e74c3b5d5cca14d86694e3d1a7a"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"88d9eca2c0b912de7197cb89406857d0"},{url:"article/index.html",revision:"415dd2422ca826f84ebaf0c654663d72"},{url:"basic/index.html",revision:"64501b1bbf0a1f0fac079ae053ac3c4a"},{url:"basic/markdown/demo/index.html",revision:"d3fd15b27594a01590b007457b864c97"},{url:"basic/markdown/emoji/index.html",revision:"cb166f5ed9803e7a5252d8ce4430abfa"},{url:"basic/markdown/emoji/nature/index.html",revision:"6f37f8b3d41fb507d269201ca8d5e433"},{url:"basic/markdown/emoji/object/index.html",revision:"306353b4a8efe80ebc0dc6e26e04279a"},{url:"basic/markdown/emoji/people/index.html",revision:"7c91c13d31e2e98dd90f2ead346d14bc"},{url:"basic/markdown/emoji/place/index.html",revision:"60e146e61b9bac0e5edbb808c296b074"},{url:"basic/markdown/emoji/symbol/index.html",revision:"1578e01f18539b8f4e23a20e3a69f20d"},{url:"basic/markdown/index.html",revision:"1e7da60cd85c85631d6ba77ec89d43ae"},{url:"basic/vuepress/case/index.html",revision:"a2abc132df22beef5d25b795b9476914"},{url:"basic/vuepress/command/index.html",revision:"6f70357fd8419f0d304a810fdd18792d"},{url:"basic/vuepress/file/index.html",revision:"2150814e01b077b0863195327cb0fbf2"},{url:"basic/vuepress/index.html",revision:"f885df7eb2372465c3579bbf8fb4ec42"},{url:"basic/vuepress/plugin/index.html",revision:"1e5f26f8e3f2a8ac2110f993c955fac2"},{url:"basic/vuepress/theme/index.html",revision:"41841b855cc886408716a960f812e644"},{url:"category/basic/index.html",revision:"2405fe0e980cebe08983a067db8ac2d8"},{url:"category/basic/page/2/index.html",revision:"addf0c37a66762915d6deed7e7a97e43"},{url:"category/basic/page/3/index.html",revision:"fea21fb0a5e499f6a9c8b064df738c9f"},{url:"category/config/index.html",revision:"fbfb8946c47883478279cc78fae375ab"},{url:"category/config/page/2/index.html",revision:"a529e3e19f2708ddae215e926645c496"},{url:"category/config/page/3/index.html",revision:"c9b6ad591059db59444c140fac927b37"},{url:"category/demo/index.html",revision:"3fc62f290b8ddae2391e5a08b506c018"},{url:"category/FAQ/index.html",revision:"28b376c5092f8c948de9df98e452244a"},{url:"category/feature/index.html",revision:"577810a9cd8e25f957f5930b3aa71a75"},{url:"category/feature/page/2/index.html",revision:"b2198a6cab7e3112f4e5c9baa3c5b042"},{url:"category/feature/page/3/index.html",revision:"3120af58de5eae949e88810af4af4cab"},{url:"category/index.html",revision:"5d0b24bddf9119b170aa298a55f6c1d5"},{url:"category/instruction/index.html",revision:"4efa61bbac47ee076c43c6f226bc573d"},{url:"category/layout/index.html",revision:"f3af47234a4f08aeb66c26f8d22d12e5"},{url:"category/layout/page/2/index.html",revision:"95c16531c4f610118f0ef64e658d8848"},{url:"category/markdown/index.html",revision:"76baf71fc489b2c17a7dad8bbd145c8d"},{url:"config/index.html",revision:"938b1eb218965d69c8e2747f2864728a"},{url:"config/page/index.html",revision:"0479e06f9471727e544de223b5927459"},{url:"config/plugin/container/index.html",revision:"516a632963d76dc8ca50248a97a44c21"},{url:"config/plugin/copyright/index.html",revision:"8b4286fea6fd47f3502e06e1ea270542"},{url:"config/plugin/index.html",revision:"f0d8f75760177ebb87596224782cdf87"},{url:"config/stylus/index.html",revision:"5aeaa4109c6ce313f3f85c7f3817d26c"},{url:"config/theme/apperance/index.html",revision:"7e2f3c7e3e52df52154fbceb5cbc96b4"},{url:"config/theme/default/index.html",revision:"6e53d03b329f703be82e026995d77513"},{url:"config/theme/feature/index.html",revision:"7f449f0dfd55d6fbaaa071a900b59013"},{url:"config/theme/index.html",revision:"97728cbabc9b0fcefca614f8ad211c64"},{url:"config/theme/plugin/index.html",revision:"ac82577e0b35c95f85a840b0b0971e18"},{url:"demo/index.html",revision:"3c5777ec5c29f3736a98ccaaf38fed64"},{url:"encrypt/index.html",revision:"0cd142c2ec1e191210c52182376a5fcb"},{url:"FAQ/index.html",revision:"e1caeefccb15b6551c491cdc4f907546"},{url:"guide/feature/blog/index.html",revision:"ce944057e0416b8a4349411571c8e7f8"},{url:"guide/feature/comment/index.html",revision:"23ce32cbfbddf08b2891266e505fd55f"},{url:"guide/feature/component/index.html",revision:"1058177ea165457360ab38f5d50dbdc3"},{url:"guide/feature/encrypt/index.html",revision:"7582a4fa407888100e7c792e2ff5e1ca"},{url:"guide/feature/icon/index.html",revision:"5af7fbd73f948022b3ccf167deecf57c"},{url:"guide/feature/index.html",revision:"6ab078304d5ca8d893648c0f536b0e49"},{url:"guide/feature/markdown/align/index.html",revision:"6604b801c6a46c1861a288ad75f92233"},{url:"guide/feature/markdown/demo/index.html",revision:"b72e1cf7225f564c0f21ae5bc57a7590"},{url:"guide/feature/markdown/flowchart/index.html",revision:"8cbc294a2a9b590341bf6467836d07fc"},{url:"guide/feature/markdown/footnote/index.html",revision:"aa5033d7c94f62bd4b66ec3ff2ab8544"},{url:"guide/feature/markdown/index.html",revision:"1e4a55743e1850bce76b34c6f854a404"},{url:"guide/feature/markdown/mark/index.html",revision:"fd90ad4f0c7577a1f3a3f413f47ea8e8"},{url:"guide/feature/markdown/presentation/index.html",revision:"9975baf771b4fed85d648c11c951e71f"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"f0c69a00726dcc9941e372cb5989cff6"},{url:"guide/feature/markdown/tex/index.html",revision:"0952932d87c31a76f597b1c665a9a77b"},{url:"guide/feature/page-info/index.html",revision:"f94538effe9241d13faee623563e7918"},{url:"guide/feature/page/index.html",revision:"c9bb462a311a5efceee721082cfa11f3"},{url:"guide/feature/pwa/index.html",revision:"b96892efcfdb9d7a3a7f86a31e09e2dd"},{url:"guide/feature/seo-sitemap/index.html",revision:"4ce1069406cd296f401a8f86464ccc92"},{url:"guide/feature/theme/index.html",revision:"135e7aa08ae67d2d90aa09c6e1a6456d"},{url:"guide/feature/typescript/index.html",revision:"b12b6112fd9f54e12d248b0b4a6e7f5e"},{url:"guide/index.html",revision:"0dd30664f751444713d865d9e958fb2f"},{url:"guide/install/index.html",revision:"2d22cdd5169a5ee690c3d9bc5d437cae"},{url:"guide/layout/blog/index.html",revision:"5561be2a37e5bd05adbfb762f24af875"},{url:"guide/layout/home/index.html",revision:"288c8ed8ebbf3dd2236a800b55bb8c87"},{url:"guide/layout/index.html",revision:"eb6a4b8fdb4ebceaa6a52ccfb7daa342"},{url:"guide/layout/navbar/index.html",revision:"bdb5437f07b058e881612709143241c0"},{url:"guide/layout/page/index.html",revision:"4489682c2c47f153b3b23cdfcfeef8d8"},{url:"guide/layout/sidebar/index.html",revision:"0791e5286d7f78ec73afe3d6d22ef7c4"},{url:"guide/layout/slides/index.html",revision:"1baf40c88bbd8c8b067679cd1a7dbd9d"},{url:"index.html",revision:"58ea4385cbcf97f9d023945739913c87"},{url:"slide/index.html",revision:"f662ad4b5fb9bf3b80c3593284487050"},{url:"tag/blog/index.html",revision:"98931665d68a11392e861850b4564291"},{url:"tag/comment/index.html",revision:"4f8503982dccbb560e75e94637eaf004"},{url:"tag/components/index.html",revision:"8e73c7bd954f302c1b0fa227a6a173c4"},{url:"tag/config/index.html",revision:"ff0c4508150d74bb8e79bd54e07fcbdd"},{url:"tag/config/page/2/index.html",revision:"d97679b1a97ff4762de1a7c51f7b4329"},{url:"tag/config/page/3/index.html",revision:"a0a2530ae8fe36ef96eae33c19137e09"},{url:"tag/emoji/index.html",revision:"32ba885ffdcf8c49acda31b5f8694bd6"},{url:"tag/emoji/page/2/index.html",revision:"e8a55c4ff86eb21433d1fc18da4265ee"},{url:"tag/encrypt/index.html",revision:"92096fe86a4a62bc29b880062c6022d2"},{url:"tag/feature/index.html",revision:"f9106b467c2b330df592e892b9af46eb"},{url:"tag/feature/page/2/index.html",revision:"e84c4ef3e4cb684928299ffe7744908b"},{url:"tag/feature/page/3/index.html",revision:"388f588daeedbf95898480c405dd83c7"},{url:"tag/feature/page/4/index.html",revision:"9d467a0f88aba9c4a2ecd78372250cd4"},{url:"tag/feature/page/5/index.html",revision:"7d5dfe5ba463b02be676176a8cd6f462"},{url:"tag/frontmatter/index.html",revision:"05a4c474f8df1da440f957580c1f3855"},{url:"tag/home/index.html",revision:"f62baf4a57c1410633f7ee4dc1a9fef1"},{url:"tag/icon/index.html",revision:"8aed1cc69680f1189444241b14dd2a28"},{url:"tag/index.html",revision:"0ec831b29be4237172884631b745d467"},{url:"tag/intro/index.html",revision:"c12b5ba9b86bc82ed32ec7f25801e7ca"},{url:"tag/layout/index.html",revision:"f845358558619d5a99463baa6756ce7a"},{url:"tag/layout/page/2/index.html",revision:"774e3fbf8d7cb74efb5d877f4c45b6db"},{url:"tag/markdown/index.html",revision:"329f9b8c73a87cda07948d82385f6176"},{url:"tag/markdown/page/2/index.html",revision:"6921b0bd3ac0c32f5aa3570034f1de14"},{url:"tag/markdown/page/3/index.html",revision:"31d4662de8493c94669981b0e1b942a2"},{url:"tag/markdown/page/4/index.html",revision:"34fe62c2739c96bcbeb7e53138bdf473"},{url:"tag/navbar/index.html",revision:"574a67d0d4952b98bc1dbf5791371432"},{url:"tag/page-info/index.html",revision:"f2e6d913829f5b924dfa157f1c61e71b"},{url:"tag/page/index.html",revision:"0d1443ffd801c7914cefdbf1f0555b19"},{url:"tag/plugin/index.html",revision:"157691b9ffc7aec84b4aba25958aac05"},{url:"tag/pwa/index.html",revision:"847e63ade44ca9a9184d5ca56b9f09bb"},{url:"tag/seo/index.html",revision:"12a79fd5c8f8342ae4ba2d0ba24f62e5"},{url:"tag/sidebar/index.html",revision:"167f4e50600709abc36d1dc44a0053bf"},{url:"tag/sitemap/index.html",revision:"acfcdfbfa3a3fcb6624bad702ecffffb"},{url:"tag/slides/index.html",revision:"2f255b46f85d6c69b0b6f0393bf0f37a"},{url:"tag/style/index.html",revision:"15e0228892bb6c45933fc62a3ae7fb9a"},{url:"tag/themeConfig/index.html",revision:"39976c123c1d922666a0006be2f6de58"},{url:"tag/typescript/index.html",revision:"5e2be5124a1d4f291e2384db824d8f1b"},{url:"tag/vuepress/index.html",revision:"10f77bbd3058006f4e81a96c21a4e175"},{url:"tag/vuepress/page/2/index.html",revision:"58967a15d94be12a20dcee8a5576462e"},{url:"timeline/index.html",revision:"b626a32f8f5bb0d0b52ca0b749d4c435"},{url:"zh/basic/index.html",revision:"ebc96b3e72d82f29095a6b02dcdc7eca"},{url:"zh/basic/markdown/demo/index.html",revision:"d3661ea6ab0712caff531c8947905883"},{url:"zh/basic/markdown/emoji/index.html",revision:"7cf7ebc449c3a4de0fc56a3386af80a2"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"23d1e95be2ca436078fd9a725e767b45"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"aab389c9adaf5279f2bb03a782718562"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"86cdb019c0aa7a7e0df4ab46c25226a7"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"e2ef2fcf2db14a7b8a773f1ee049e24d"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"782116eabd23a12103d33770cf9c9ccb"},{url:"zh/basic/markdown/index.html",revision:"700ec6a356d30561cb19d8fbea2ad5dc"},{url:"zh/basic/vuepress/case/index.html",revision:"58420885c2cba4547d70cee64d3613ee"},{url:"zh/basic/vuepress/command/index.html",revision:"b961ae124d031623ad13817f3b9d85eb"},{url:"zh/basic/vuepress/file/index.html",revision:"08df1c1258d6ed4e180553dc8b0a5537"},{url:"zh/basic/vuepress/index.html",revision:"19d252296df82764bde515b66901da0c"},{url:"zh/basic/vuepress/plugin/index.html",revision:"a354ea7f74c673756742f263b7349cba"},{url:"zh/basic/vuepress/theme/index.html",revision:"4f34ced28111e0456bfd192f0443b85b"},{url:"zh/config/index.html",revision:"d0f934e9671e5d051b775a24da4d91f0"},{url:"zh/config/page/index.html",revision:"b85d9bddf72f15ab36a1cc0409877fba"},{url:"zh/config/plugin/container/index.html",revision:"b1ac1d2571e61f7988956f785315d85e"},{url:"zh/config/plugin/copyright/index.html",revision:"154e5b680c0919811a1eb9824b88de93"},{url:"zh/config/plugin/index.html",revision:"843831e0a3843f9de19ab663547db526"},{url:"zh/config/stylus/index.html",revision:"873a8ae3b28382861ecc1b379b1fc73f"},{url:"zh/config/theme/apperance/index.html",revision:"afc61de8cf8b2ff171fa074ecb1b8b69"},{url:"zh/config/theme/default/index.html",revision:"935c28be0bc77946228d882140481b37"},{url:"zh/config/theme/feature/index.html",revision:"17ee6a2d72281b90a60f9313750bf976"},{url:"zh/config/theme/index.html",revision:"12ee2514b2a5e4bdddf94a812029fc09"},{url:"zh/config/theme/plugin/index.html",revision:"daeed10be1df9fb5dd3cdbe7eb10f4d9"},{url:"zh/demo/index.html",revision:"b73b5be0caedc46b15718af7000d8093"},{url:"zh/FAQ/index.html",revision:"bf61131da6bc294af91e65ff2aeadd7c"},{url:"zh/guide/feature/blog/index.html",revision:"b6a1ca3225af00432f1314b4aee41378"},{url:"zh/guide/feature/comment/index.html",revision:"2666674fcee3a0383577d0a732316fc8"},{url:"zh/guide/feature/component/index.html",revision:"fb595688a5dd72612f879f6a7686187e"},{url:"zh/guide/feature/encrypt/index.html",revision:"4ab03e748ef1b93bf09914c0f79384e4"},{url:"zh/guide/feature/icon/index.html",revision:"f28e87d30ed94ded2070bfb5f91caa34"},{url:"zh/guide/feature/index.html",revision:"a2499c59fca7a9986c041551d2cbd020"},{url:"zh/guide/feature/markdown/align/index.html",revision:"f79f897795615ab53b811ba26bef3150"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"d271bd9caac809ad1b96ed4455f89860"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"3476893040296239a75e932d5ab28b02"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"37785e03cc386b05e7f7b7d947417e27"},{url:"zh/guide/feature/markdown/index.html",revision:"b16fa304b4eda97b92f1802997389929"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"cf154e7a75ad163e2d97fa7edec04bb3"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"2537c146512232188e4e43aef54b652d"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"5b8fb90c8c2cfde7b0c9c45907ea6a80"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"4a7083481cfa15a0d833f48598d8d167"},{url:"zh/guide/feature/page-info/index.html",revision:"1a8df7817e781fd236db2f03b635ae40"},{url:"zh/guide/feature/page/index.html",revision:"4a67b9499c11c1e55012643cc7838ff8"},{url:"zh/guide/feature/pwa/index.html",revision:"ba9aa9fd449bea0508034fb594d99f8c"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"40d4ca7a6edeb87379374035d86ccd66"},{url:"zh/guide/feature/theme/index.html",revision:"ffae39694c8c93009ec32becbd9363d7"},{url:"zh/guide/feature/typescript/index.html",revision:"fc3a39b20a6a2fe1a5a09956c2925649"},{url:"zh/guide/index.html",revision:"4653a1cea06a0ec813364fb13013aee9"},{url:"zh/guide/install/index.html",revision:"0d00ff6c4843b41a6a4c1426aa690469"},{url:"zh/guide/layout/blog/index.html",revision:"e33310c45faaf44f3456ce34ff5f6ca4"},{url:"zh/guide/layout/home/index.html",revision:"79382c70ff8d1729862040ef1324b6ba"},{url:"zh/guide/layout/index.html",revision:"ba6040ce39dab00faa344c94058481cc"},{url:"zh/guide/layout/navbar/index.html",revision:"31c8646f9cc9a119c0957843270323c8"},{url:"zh/guide/layout/page/index.html",revision:"6d9ff13cf15359fb1f5a3afeede99680"},{url:"zh/guide/layout/sidebar/index.html",revision:"436b5d1adbbab442085ede429fa42600"},{url:"zh/guide/layout/slides/index.html",revision:"2f9031da97461c16c438eaf7e00c9a0f"},{url:"zh/index.html",revision:"551913ddd9178658b4e41ce3972c2da5"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
