if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,d,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-32927a2a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.79604a86.css",revision:"b669985a89936d18021db5716bc0e0b8"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/128.5fb09138.js",revision:"662a4c5d08d4d11c47f57a74f7989674"},{url:"assets/js/129.0b71b25a.js",revision:"ad321c693a45362eb01a7c7d2217db60"},{url:"assets/js/130.a5c6074c.js",revision:"c92f2efb1219d0687f1d16469c8c99fd"},{url:"assets/js/131.7b45d51e.js",revision:"2bb6e24c369d68f82d47afd572b48bfb"},{url:"assets/js/app.012ef344.js",revision:"3f7074a20db6ebbabf3f3c0f1ce8eafd"},{url:"assets/js/layout-Blog.fa2d0daa.js",revision:"a7b34018605fd4e0be767fafa646bc8e"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a750ffd2.js",revision:"80b0151c9c62f5e7c5a44d38771045f4"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.498eb40c.js",revision:"3a52679d64aff4bde60c34d817dfb41d"},{url:"assets/js/layout-Layout.18205dc0.js",revision:"768b51ae17b8034ff7f6e751203f3dcc"},{url:"assets/js/layout-NotFound.6dd4477e.js",revision:"9bfdd3e4c71bd4d033c6a4525d8d2415"},{url:"assets/js/layout-Slide.2c7de2ff.js",revision:"500e14d2eb0e11379dbc1df1a7a4e6a8"},{url:"assets/js/page-AboutVuePress--4a71114e.3608d797.js",revision:"53ad25f3327acdb19ad386a9568780ee"},{url:"assets/js/page-Basic--770cb96b.f9af5042.js",revision:"2e627601c07bfd3989f4a15bb9ceaa8f"},{url:"assets/js/page-Bloghomepage--64265752.66d7fdc7.js",revision:"711cfd87da73f8188a54321d4754391b"},{url:"assets/js/page-Blogrelated--17c260a2.bafd20c0.js",revision:"111bee8a309e48d44ed006fd6f501f94"},{url:"assets/js/page-CommentFunction--5bb6671c.6e2ae053.js",revision:"a5ba2b702b91eb96c43443147062665a"},{url:"assets/js/page-Commonproblems--2b571e9b.6e6b719e.js",revision:"38686515a70164ba91041921c645ca7a"},{url:"assets/js/page-Config--35a0a7d9.65e9a555.js",revision:"14c4d08cb3d4d1d71daf595e5b19dc0a"},{url:"assets/js/page-Customalignment--4f21aa5c.cd5108ba.js",revision:"8f8ade78e93c2425e57a67cb2bf210bf"},{url:"assets/js/page-DarkmodeandThemecolor--e23e731c.7693087d.js",revision:"7bfdecdd340b8e6a27067b9f85b71008"},{url:"assets/js/page-DefaultThemeConfig--3cbef5e2.aedab39b.js",revision:"bdd7f6d8a68821b7b8adf9d2e9e13073"},{url:"assets/js/page-Demos--f328658e.70469ff6.js",revision:"d2dcf8d673fdfce88412d55f70767951"},{url:"assets/js/page-EmojiList--41bb29b9.c2a45266.js",revision:"76277923113868760fb3c1b30541e16c"},{url:"assets/js/page-Emoji列表--404e6737.3cb6be9c.js",revision:"085b0ede2706298e1137532c00e845a6"},{url:"assets/js/page-Encryptionfunction--181bdc9c.a89c2690.js",revision:"c65c9c8ec73ad93fef8223004c0e19bc"},{url:"assets/js/page-FileStructure--665a4f1c.47d13f5a.js",revision:"00dbbbb86b58a0cae4731edbcb62ee7b"},{url:"assets/js/page-Flowchart--7ce6d974.605d0ef9.js",revision:"d1056e87c8cdc9fe1c054315d72ded9a"},{url:"assets/js/page-Footnote--0c733e52.9d2a2a36.js",revision:"009a8610edab31df2d1a5e8bf6f2d3e5"},{url:"assets/js/page-HomePage--5834599c.75020228.js",revision:"721f98e701a03aab2b4d8a31fb145f1d"},{url:"assets/js/page-InstallUsage--0ab466d2.af1c2f01.js",revision:"48816ee5925fc1cc92b8dc16e4751852"},{url:"assets/js/page-Introduction--d4910962.0fa5e7c6.js",revision:"7e916204eac5e541047ff8fb9ae7e702"},{url:"assets/js/page-Layout--12bd4f0e.5223f2ac.js",revision:"7ea152b895bf7030d58738673155a8a8"},{url:"assets/js/page-MarkdownDEMO--c3e1bfdc.f796edd3.js",revision:"614d144c5d225f7370c7b6b66fc89a3d"},{url:"assets/js/page-MarkdownEnhance--ad9dba8e.29a948e6.js",revision:"87079cc421b3423a8bd108dcf461d52d"},{url:"assets/js/page-MarkdownIntroduction--270989ce.c2845e4f.js",revision:"9ac2d6f293efc8998b02337626a8e7b0"},{url:"assets/js/page-Markdown介绍--0e6891b6.4c3cfd76.js",revision:"9aa40f4b2a1985613b6376b6cc6cba28"},{url:"assets/js/page-Markdown增强--6162938f.fcd31052.js",revision:"e25807838d1a37eb29722019dac772a8"},{url:"assets/js/page-Markdown示例--5479fe88.f7708dd0.js",revision:"0d3bbdbb88ccf922b208ae0de90c3e45"},{url:"assets/js/page-Markup--6b1f341c.9e02226a.js",revision:"08e929a4811ce7f3b2767308ce79a427"},{url:"assets/js/page-Nature--749fb09c.fdb50b64.js",revision:"c9d957bf3dd6d151d08dd01a6475f919"},{url:"assets/js/page-NavBar--c7bf87dc.0c73ba3e.js",revision:"981257799df5596d49a0fdbed1b12709"},{url:"assets/js/page-NewComponent--1d138c72.250528ab.js",revision:"e053286bd13df150e856bf9bc437b44f"},{url:"assets/js/page-Newfeature--5136c541.02566c89.js",revision:"cbce7a76ab5d7bf8c7c56ee2883c4050"},{url:"assets/js/page-Object--16031ab2.64660faa.js",revision:"9542722cc55b17b3c3a7049b29cc0004"},{url:"assets/js/page-Page--af17b59c.cd95876f.js",revision:"0645eb46ef9024263c50bee71a7b67fe"},{url:"assets/js/page-PageConfiguration--0aacc152.3b203e77.js",revision:"5046726749fc29ca6e66fbc1a812cc8b"},{url:"assets/js/page-PageEnhance--03665ac8.50981579.js",revision:"b3bd70df3235ccbe8f3490f5061248f6"},{url:"assets/js/page-Pageinformation--71efd5d2.a3cea825.js",revision:"f6a2991e812087501a2b4ad109d49672"},{url:"assets/js/page-People--2182769c.21d305df.js",revision:"c3ce7e93e9d793afbd440520ee02bf2b"},{url:"assets/js/page-Place--951cdc00.ecef07ce.js",revision:"b0128c74a3cddb38019f99119a578c47"},{url:"assets/js/page-PluginDescription--137c6c07.5fb4ec6c.js",revision:"8ac183f7b2bd0744bdb2e6ae0623f3eb"},{url:"assets/js/page-Plugins--adbf415c.9fd56483.js",revision:"ecb147ee0b01b936c452fdf82775b1dd"},{url:"assets/js/page-Presentationsupport--8f8e54dc.f28ffa35.js",revision:"156f0dc3ba561ebebd99a2f96ff0785f"},{url:"assets/js/page-PWA--01089712.400cadc2.js",revision:"768e072dd0367c6499d8a54a3eb024b6"},{url:"assets/js/page-PWA--243ef2b8.0758c785.js",revision:"73a950e7fb21209a35859b09d47ee0a8"},{url:"assets/js/page-SEOandSitemap--ccd3659c.bcd8c344.js",revision:"b32f5d84bb88cecd5df95af9c7757867"},{url:"assets/js/page-SEO和Sitemap--2853f164.60b382a7.js",revision:"e2ff039846766cc1f9cfd23ccf30cc0c"},{url:"assets/js/page-Sidebar--2fa1ea2c.f79924c4.js",revision:"48eb58d67e312eb40f4ded4e0054f6e2"},{url:"assets/js/page-Slide--269ae052.c17d27bb.js",revision:"335d1fe7adc92734345c5dae47147a69"},{url:"assets/js/page-stylusconfiguration--6796cdf2.10c2142b.js",revision:"895094ca8bd1afa7c8853f9617a74a63"},{url:"assets/js/page-stylus配置--0ce19a82.61419ae1.js",revision:"5da43a7028c22b50a17e7d82df85f9cc"},{url:"assets/js/page-SuperscriptandSubscript--895c91b8.df1eb27e.js",revision:"d0745d2d698a83583194e5acecd4cc56"},{url:"assets/js/page-Symbol--a9259c5c.c08bc0d3.js",revision:"b3ae03d6c8df481d12bde4b72cfe0b9e"},{url:"assets/js/page-TexSupport--64cb5e50.cf1713ba.js",revision:"01292fcb1d63616135dd153a81646680"},{url:"assets/js/page-Tex语法支持--1e02b152.1dd54cce.js",revision:"f786d76a6c1fda2afa58f562dd3013c3"},{url:"assets/js/page-ThemeConfig--1120a0ce.1091f86f.js",revision:"b6ca11186b481e969fda64bb714d4948"},{url:"assets/js/page-ThemeConfig--1726e14e.a566bf0b.js",revision:"d04562a4f2aa1ecf6b1bff2d568ac6ed"},{url:"assets/js/page-ThemeFeatureConfig--2ccd2db8.3e49f1c8.js",revision:"e99ae0734c526adb6a845349bb7a9cc0"},{url:"assets/js/page-ThemeLayoutConfig--733513aa.f2382267.js",revision:"3f17c0d39f777f84b279a57b75980caf"},{url:"assets/js/page-ThemePluginConfig--958196dc.e2c62708.js",revision:"0f4c2e7f954e8a017afacd52ab303c99"},{url:"assets/js/page-TSsupport--09728ac8.c5029d0a.js",revision:"78927556952b4a7b1de35a6b004a5679"},{url:"assets/js/page-TS支持--4625f812.5340a580.js",revision:"9f3b0738097beb8ae307f7e78be5d7c4"},{url:"assets/js/page-VuePress--b7060eee.19d93c23.js",revision:"a223a48f4f573ed266fcc7517de5682c"},{url:"assets/js/page-vuepress-plugin-container--31498112.1036e4ea.js",revision:"7115420bf49b924e2388458de93e61c5"},{url:"assets/js/page-vuepress-plugin-container--606dbc5c.d7972e6b.js",revision:"02fd8d0ccf1e53e2f5603951ff61ec45"},{url:"assets/js/page-vuepress-plugin-copyright--5242f65c.b3819597.js",revision:"d0a28e795da84ed8f4a82d2b61f11b8d"},{url:"assets/js/page-vuepress-plugin-copyright--6d3913d0.bfc0d3a0.js",revision:"f8e8492cac1261d5de565ac8356fbb98"},{url:"assets/js/page-vuepress-theme-hope--354da24e.96b10021.js",revision:"58a5d516cbc6fce14e64f62534b4ee35"},{url:"assets/js/page-vuepress-theme-hope--776d8369.c997dcc5.js",revision:"4ff595138fe518d4e7cf69dccf387462"},{url:"assets/js/page-VuePressCases--082972f2.b252c229.js",revision:"55c493413ca53e8dd78e007c69c85d9e"},{url:"assets/js/page-VuePresscommands--9f3f316c.e93a6299.js",revision:"e6c435d7b306f123fdb68954796a979b"},{url:"assets/js/page-VuePress案例--531d5f3e.4141091a.js",revision:"d043844fbd4c63a64d13e96af0787ea2"},{url:"assets/js/page-上下角标--8efed9dc.d25eae96.js",revision:"3e270c982f8677f087b8c7beeed45bf7"},{url:"assets/js/page-主题功能配置--5bb71452.4550dec9.js",revision:"9e74fe683725ec43b883bc1349f67aea"},{url:"assets/js/page-主题布局配置--7db7eff2.715c3868.js",revision:"a7b2386459fdd984ac1b291ff2d0ad4e"},{url:"assets/js/page-主题插件配置--1b0c3e98.c237fd18.js",revision:"5b25b7808b08f10290746f79f0af3895"},{url:"assets/js/page-主题配置--21dc088d.3c97f1c8.js",revision:"9d779cbc321ddb0348dd9057c7086f47"},{url:"assets/js/page-主题配置--2c572572.967ec166.js",revision:"c97e5c04f01cf06c9da1bda270de8445"},{url:"assets/js/page-人物--b4fc27dc.63227915.js",revision:"bc46c34cb2662e1080e0486ba5182ea5"},{url:"assets/js/page-介绍--2e99d139.cda58e65.js",revision:"6b27a5f864d13fd4292f63584df982e3"},{url:"assets/js/page-侧边栏--43054cb2.f997cb9c.js",revision:"d093e370643f830b3a7b8c8bb5340bc1"},{url:"assets/js/page-加密功能--2361b7e4.86290223.js",revision:"95c3b5bca8b51fcbede33383ac51eaa9"},{url:"assets/js/page-博客相关--6a3fd4f2.bcde915a.js",revision:"fd011d954387ad02d517444c43f01a04"},{url:"assets/js/page-博客首页--1eb2b298.62a4578f.js",revision:"402fc960723d638f7b8f01f9c45d8f4d"},{url:"assets/js/page-地点--6710785c.5ce7212a.js",revision:"20cbaf7474fb2343d617f489a3e3e02c"},{url:"assets/js/page-基础知识--4d466a79.15c129a0.js",revision:"87b86237df1024fe1a202dea000d4436"},{url:"assets/js/page-安装使用--76e0e5b0.867fe3da.js",revision:"35a5f60b2dd74d33c02dd1a21ef6b93b"},{url:"assets/js/page-对象--e150da9c.4fde40d9.js",revision:"3158e46851d1aa2b5c532dfa8b406d7f"},{url:"assets/js/page-导航栏--183844fc.e3c48050.js",revision:"9535402ef01b188367d8026527bb069b"},{url:"assets/js/page-布局--fa93e36a.5b39e2d3.js",revision:"37d24d3dc335603039819eea6d9663b5"},{url:"assets/js/page-常见问题--10ab790e.817bf558.js",revision:"fa84f224523125cc75220797e2ba8d58"},{url:"assets/js/page-幻灯片--818cb750.a545e87c.js",revision:"27b4227c04f46b5f310ff994bdf79441"},{url:"assets/js/page-幻灯片支持--5808e664.17faf5c0.js",revision:"16a6d90406ef68f72893dfe6bd6a8ca3"},{url:"assets/js/page-插件--32355f10.9bfc40a1.js",revision:"45f64b5518728bb7fab0b82f4ea47454"},{url:"assets/js/page-插件说明--cbca1c8e.7d784087.js",revision:"6539245fee9b60636ed4392d9ba52b8e"},{url:"assets/js/page-文件结构介绍--ed6a9eb4.032c72ad.js",revision:"a6d7121dfa807b666d184308e329581b"},{url:"assets/js/page-新增特性--30c6c799.8b8e75b7.js",revision:"f5090b599bed46a662c7ed227247277d"},{url:"assets/js/page-新增组件--0979095e.8154d90a.js",revision:"4d94c6563ee9782e3be0a6d4a92e912e"},{url:"assets/js/page-标记--0ac52704.b8e6cdb9.js",revision:"d3597799be181a4a3bfc72fcbcefe2dd"},{url:"assets/js/page-流程图支持--582eff1c.8b6a7ed7.js",revision:"9862445890d7efbe4983dedd3f0135c9"},{url:"assets/js/page-深色模式与主题色--01662674.d0d223e7.js",revision:"4230c7e391b620c24b51b99795097c81"},{url:"assets/js/page-符号--2db8fb80.f6707b59.js",revision:"f091d6e5f3914058dea4a5d73cf5fb19"},{url:"assets/js/page-脚注--17d88350.8c47b1cf.js",revision:"095e9f26f7bffe8c0b867d4d0eb81296"},{url:"assets/js/page-自定义对齐--048d31dc.9370130e.js",revision:"e07f69348851e270ed91eca2f2a233ab"},{url:"assets/js/page-自然--7ec33be2.3853d46c.js",revision:"fc8b6dd9fd56c6af331f07f9ac95da1a"},{url:"assets/js/page-评论功能--350aff9a.39d9c0f0.js",revision:"3b2dbd4b397f9febc7705fbc7de86edd"},{url:"assets/js/page-配置--d315f8fe.b2a5807d.js",revision:"c197508b3a802fe3458ff77d626605fb"},{url:"assets/js/page-页面--78423bfe.5518b5f8.js",revision:"703838e493b0f645e40f42c66d948e99"},{url:"assets/js/page-页面信息--455b9800.78dd430d.js",revision:"c4dd358446481dd9346324d70f299576"},{url:"assets/js/page-页面增强--2e4cf75c.fec615d0.js",revision:"7f2eeb955e6b920588ef5a4f48e05809"},{url:"assets/js/page-页面配置--02399408.95e6e60f.js",revision:"20dd3b8e6fbfb39bd81b266575fb7a84"},{url:"assets/js/page-项目指令--2f3d7c1c.7cbbb194.js",revision:"30b6e8fbe6b539cd4c86327ac9b2b370"},{url:"assets/js/page-项目案例--1f3d6482.3e6c1607.js",revision:"4549964087b79587acb9b05c59451e47"},{url:"assets/js/page-首页--79a22944.4a01483a.js",revision:"433a5806e23d89c0ae32fa96f03401e0"},{url:"assets/js/page-默认主题配置--0d5b7f32.09332d34.js",revision:"b88952701d782a021cf6b3fa428517d1"},{url:"assets/js/vendors~docsearch.e35b9587.js",revision:"c84e83c944a7aa853c187c675360656b"},{url:"assets/js/vendors~flowchart.4a110868.js",revision:"3cae5074e3d7966868ac4d53e1003a99"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.e08dca2c.js",revision:"9d3d84860ad5de4470c6224ec106af0e"},{url:"assets/js/vendors~photo-swipe.9bcb7c3d.js",revision:"e9c0b4f746b8787562fba34ea5a0177e"},{url:"assets/js/vendors~valine.f412b196.js",revision:"2e4a39dab4ff9cf3ca3aae1590113446"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"2d382bb41177ead16148efbecc7b16f9"},{url:"article/index.html",revision:"167654cc184d0332525100e4396cde72"},{url:"basic/index.html",revision:"e5e136adede74d6de49ba5854534186d"},{url:"basic/markdown/demo/index.html",revision:"185dd6e5940702556d9b1de2c790d734"},{url:"basic/markdown/emoji/index.html",revision:"bbe95e15bfd30c95bcb3fe34b62d9a0e"},{url:"basic/markdown/emoji/nature/index.html",revision:"02fcedc998c58f1626bb522171e59ea9"},{url:"basic/markdown/emoji/object/index.html",revision:"1499708bfda3d6eeea96c7a8c87e6638"},{url:"basic/markdown/emoji/people/index.html",revision:"67b70c553faf76b9ab876aca4dae2daf"},{url:"basic/markdown/emoji/place/index.html",revision:"2361b5f6b3c943477de50ee05a2adedb"},{url:"basic/markdown/emoji/symbol/index.html",revision:"6eb95873e7d599632c7ed6a59c8db700"},{url:"basic/markdown/index.html",revision:"0727f5b101b441826d4518927a71e79e"},{url:"basic/vuepress/case/index.html",revision:"f997c35b0dba165d60a4d8446f2c66c8"},{url:"basic/vuepress/command/index.html",revision:"b7f137abbe317ae95bdab313709155e5"},{url:"basic/vuepress/file/index.html",revision:"c13c3fb86af6eb1e1152a68360bc1da0"},{url:"basic/vuepress/index.html",revision:"672af90aa883d09896804061a6a8dc84"},{url:"basic/vuepress/plugin/index.html",revision:"0ac886da4e71e51c8d38bbb1f110e76d"},{url:"basic/vuepress/theme/index.html",revision:"63b020afdf2eabfa29f33516db75a7d5"},{url:"category/basic/index.html",revision:"f55af2c53b1b2aa5cc480b16493fb3d5"},{url:"category/basic/page/2/index.html",revision:"02e8cc871a2a0f2d98133c7f635ac205"},{url:"category/basic/page/3/index.html",revision:"b1fee5f257950f3b8888fad444f86617"},{url:"category/config/index.html",revision:"4aab19f3586522265c5659babf9a6ead"},{url:"category/config/page/2/index.html",revision:"e91a817b46055f4bb1642ba3d83ce007"},{url:"category/config/page/3/index.html",revision:"12f9cf5cc9c744ac905b39a93aca1433"},{url:"category/demo/index.html",revision:"73b8b62ff07692408598f742f4aa1015"},{url:"category/FAQ/index.html",revision:"0eb1763cf6324c710149a7b348385df7"},{url:"category/feature/index.html",revision:"2683878764fd6be87eab0f4b8750f08f"},{url:"category/feature/page/2/index.html",revision:"a6855ec750abdfcfb6efe8e161368f2b"},{url:"category/feature/page/3/index.html",revision:"8bf0004ea71e9b4b6509442bacf174b0"},{url:"category/index.html",revision:"564d5cfb35ec83e4076eadd931db38bb"},{url:"category/instruction/index.html",revision:"031d9cd2f5564276c2db20c5e973063b"},{url:"category/layout/index.html",revision:"228878ba21deac3190567b486383bd33"},{url:"category/layout/page/2/index.html",revision:"4292f52f5ff65551d53795061fdef40b"},{url:"category/markdown/index.html",revision:"3ee012f1b7c29290376e2402458fe415"},{url:"config/index.html",revision:"e30aa8104fa7963a794166d27ebca414"},{url:"config/page/index.html",revision:"e0aefa5a077a7f8c67c3a07592d8c30c"},{url:"config/plugin/container/index.html",revision:"c54f6a427bcad165362f851aa58510a8"},{url:"config/plugin/copyright/index.html",revision:"d247b08d0a68fa336da7b54422528121"},{url:"config/plugin/index.html",revision:"090bbc903d861c65887354b764b8baec"},{url:"config/stylus/index.html",revision:"7bc2de3a19aa275d905f8fe16bc5f324"},{url:"config/theme/apperance/index.html",revision:"6cafcf461ce21a235d6f54163c340464"},{url:"config/theme/default/index.html",revision:"dba8e52834d0b9520420e0197618d205"},{url:"config/theme/feature/index.html",revision:"0ebc357daac4a218da36531de1f267b1"},{url:"config/theme/index.html",revision:"fefdce614cafb51fabe8d9427b6ea368"},{url:"config/theme/plugin/index.html",revision:"1818b17962a5a6b599c2ca0ceeac961e"},{url:"demo/index.html",revision:"af03892d2c15d16af1f9393d22bd4403"},{url:"encrypt/index.html",revision:"bf2a95f1fcb7d7884cdac6ebc22d2112"},{url:"FAQ/index.html",revision:"21685ae1b7758fd95214872ae030957f"},{url:"guide/feature/blog/index.html",revision:"a3d5748e347e486774be2a5a2375d3c8"},{url:"guide/feature/comment/index.html",revision:"34d6a6338030222c8cc1bee70d67083c"},{url:"guide/feature/component/index.html",revision:"db026dc49a44b2ab995a4af46a595493"},{url:"guide/feature/encrypt/index.html",revision:"32843becafbc20d571b79579949c52d5"},{url:"guide/feature/index.html",revision:"89884861cfc4a4b0890e0469abd3c084"},{url:"guide/feature/markdown/align/index.html",revision:"44d1188bc9f82ef8705f1ad210ed22f5"},{url:"guide/feature/markdown/flowchart/index.html",revision:"4b050d27245b5f869bbddc72ed98d227"},{url:"guide/feature/markdown/footnote/index.html",revision:"add8adb2fc0cf77c91069ba5026bb420"},{url:"guide/feature/markdown/index.html",revision:"db1967531d058d8e42f63996ab39dc1b"},{url:"guide/feature/markdown/mark/index.html",revision:"5a6d7ff95ec495f97630b663de3507b0"},{url:"guide/feature/markdown/presentation/index.html",revision:"56e4bf96d3a0fa2f4469a2c2b3082f5e"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"9a6aa03293033d32cbdbf9549c4d1187"},{url:"guide/feature/markdown/tex/index.html",revision:"89324bca004622e56f3564615f424458"},{url:"guide/feature/page-info/index.html",revision:"77c4d441d61b9e2e58bcddf72c950f6c"},{url:"guide/feature/page/index.html",revision:"34c1fe255db4c31df27ea4fe9fe79c30"},{url:"guide/feature/pwa/index.html",revision:"41450afe8be0f90799fce45577fc674a"},{url:"guide/feature/seo-sitemap/index.html",revision:"4aab6b243a6aaa055141d4abb498172b"},{url:"guide/feature/theme/index.html",revision:"48f13214f4de050413eedcd931366956"},{url:"guide/feature/typescript/index.html",revision:"3ef140f390d909fca371b733cedecfe8"},{url:"guide/index.html",revision:"44ab0d3e869614f435b136d462ffaa81"},{url:"guide/install/index.html",revision:"1ef78cf2dc0b62eb6a849b0934d2cdca"},{url:"guide/layout/blog/index.html",revision:"1a6f41db91948b0b3ab777fd089c7fab"},{url:"guide/layout/home/index.html",revision:"31fb38bfdb0ffbaeb91f7fca74cbc70d"},{url:"guide/layout/index.html",revision:"ae66c8c9d69d0d3ac9ddc1038b23e396"},{url:"guide/layout/navbar/index.html",revision:"db4354f74237636db0f5c2978ad654fe"},{url:"guide/layout/page/index.html",revision:"f5043dd1c6860b76a5d8691381afa799"},{url:"guide/layout/sidebar/index.html",revision:"767fa72ee3a4b357e2054a79351950cd"},{url:"guide/layout/slides/index.html",revision:"e45b67d7736f474d9e5b23dd4f63632c"},{url:"index.html",revision:"b1fa1188d29689ce93dd54888c61bb71"},{url:"slide/index.html",revision:"35c42bfaf0c87b41a53fc6b5ca0edd76"},{url:"tag/blog/index.html",revision:"ed213ea0f8157bd946ed014a2f6695e0"},{url:"tag/comment/index.html",revision:"103ec92b765665811244a124a151aa52"},{url:"tag/components/index.html",revision:"9b947168da4e8643d13d905eab2f79e4"},{url:"tag/config/index.html",revision:"234d918da649183c4719198f03d36346"},{url:"tag/config/page/2/index.html",revision:"325c355af9da2aa99ccc2bc7b6bf3e97"},{url:"tag/config/page/3/index.html",revision:"112c982e8bd41e855c671fb0577ecb26"},{url:"tag/emoji/index.html",revision:"8affbe9caae3bc25ffc56969cf7cd60b"},{url:"tag/emoji/page/2/index.html",revision:"7e86bd1b34c5e2aa9fc3c2e4b3f669e7"},{url:"tag/encrypt/index.html",revision:"bde1d4fbe49971ca667769661dbf20b1"},{url:"tag/feature/index.html",revision:"0a3ec18b910645269a5fef2e2fd6c086"},{url:"tag/feature/page/2/index.html",revision:"d8cb158109693deab7150b1bdaecd974"},{url:"tag/feature/page/3/index.html",revision:"2105e38422786a733db0e215616ff409"},{url:"tag/feature/page/4/index.html",revision:"9321d08412405f6f238945842b05d5c8"},{url:"tag/frontmatter/index.html",revision:"eee5163498cc7e84410a2ca14af6ac92"},{url:"tag/home/index.html",revision:"dd8258d8c78e3dbcc7b87b5be5d8e28e"},{url:"tag/index.html",revision:"02636802c79143bb9a0a0009c7f7b6bc"},{url:"tag/intro/index.html",revision:"17964c13d64d75aef321608d2d109792"},{url:"tag/layout/index.html",revision:"84c322eec74becaefbbebf294eefad26"},{url:"tag/layout/page/2/index.html",revision:"633c0d5909285e43c4d668b233c78744"},{url:"tag/markdown/index.html",revision:"3202b56e068f589f9f25d812d4366fa7"},{url:"tag/markdown/page/2/index.html",revision:"1accb2e98bf91660167399ac12fd3fbc"},{url:"tag/markdown/page/3/index.html",revision:"bd3b8b47ea7414b9042b6169c4309a0f"},{url:"tag/navbar/index.html",revision:"72f904b46f120ee46b4d08c780fa9b2e"},{url:"tag/page-info/index.html",revision:"be6a50fce62e996de67db36a75616752"},{url:"tag/page/index.html",revision:"e16c826acbd07a02780ead41eef74c14"},{url:"tag/plugin/index.html",revision:"103cdecc5dcd170cf4883b5b9b2a4ca4"},{url:"tag/pwa/index.html",revision:"62660ee18d28199d0d635e43893da7c5"},{url:"tag/seo/index.html",revision:"018ea5cb6ff468f08e6dad877aa0fc0b"},{url:"tag/sidebar/index.html",revision:"38213a776b9ab280205040a0967e1758"},{url:"tag/sitemap/index.html",revision:"3c4fe5c7624acaa87e743fb4f11bf74c"},{url:"tag/slides/index.html",revision:"d05a1c67d65f0d0ae5d63c5c321bc036"},{url:"tag/style/index.html",revision:"93e20bb3586d409b1e26e47398bca1f8"},{url:"tag/themeConfig/index.html",revision:"c4217541a8d31b94b8f1bf0fba6a109c"},{url:"tag/typescript/index.html",revision:"196f967ddfcc2a762e959aa2bad38ab8"},{url:"tag/vuepress/index.html",revision:"bbeb6d8a979bf21bbef8d880863335f8"},{url:"tag/vuepress/page/2/index.html",revision:"a9f61991529bd4fda2a08c30534f0ca2"},{url:"timeline/index.html",revision:"80d4fa33a0b09978b587ef0b8bd511bb"},{url:"zh/basic/index.html",revision:"ee8c3ee69a7e64ccc83d7e6bc12249a3"},{url:"zh/basic/markdown/demo/index.html",revision:"5b807554b05bb364a466f3126a0967fc"},{url:"zh/basic/markdown/emoji/index.html",revision:"67c65fffb8714ce822efb9ab58eaf542"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"9b854e764f5e7c53b078b63a489f3b24"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"6cda53a6acc8ff60d40061a7ae5fb855"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"1d9fcb597f8313706f15b52190d4559e"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"da8e2104ee8a97347d2ea7f1047afb9b"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"a3d7bf4c9aeb95616d91781af198d519"},{url:"zh/basic/markdown/index.html",revision:"28099deff989125e2043422f39b619f7"},{url:"zh/basic/vuepress/case/index.html",revision:"c349122269e5328a6f61ac72e0da128b"},{url:"zh/basic/vuepress/command/index.html",revision:"0d4c0f7c3434696597aaa563337f63fe"},{url:"zh/basic/vuepress/file/index.html",revision:"a0b08befdfe67f817815ff4e13902f5a"},{url:"zh/basic/vuepress/index.html",revision:"d2b8bb332c72eaeed334cb65381efa9f"},{url:"zh/basic/vuepress/plugin/index.html",revision:"9263aad7d67d80584d4fc8856b1e3ff6"},{url:"zh/basic/vuepress/theme/index.html",revision:"0d8ba33f11eec7c83e452a385bb04b00"},{url:"zh/config/index.html",revision:"c02fda4da7f3dfd9a9d3b60772268719"},{url:"zh/config/page/index.html",revision:"3656e2ac4809c56aca8dd10e1e946d5d"},{url:"zh/config/plugin/container/index.html",revision:"da67db5c0aef3be396cac62fdffcf776"},{url:"zh/config/plugin/copyright/index.html",revision:"b1df98594e235a2f82da7be654e3e903"},{url:"zh/config/plugin/index.html",revision:"d7cdbd9e7ec6b2dead90f4b38bb5a645"},{url:"zh/config/stylus/index.html",revision:"856cc6b24147e5823d61695b0026833a"},{url:"zh/config/theme/apperance/index.html",revision:"3168a5375df630b7037a718110e38e5a"},{url:"zh/config/theme/default/index.html",revision:"56fc478ae5bb970e6504bd9cec42efcc"},{url:"zh/config/theme/feature/index.html",revision:"227e93071061b5f9f3fef6f09fb7fd0e"},{url:"zh/config/theme/index.html",revision:"d1d4ae97edfa04b0eb862ae7ca3d13aa"},{url:"zh/config/theme/plugin/index.html",revision:"3fdc38742a0d29531728ffc5009c4056"},{url:"zh/demo/index.html",revision:"514c3912f7d3156d837e5bdddb96ca25"},{url:"zh/FAQ/index.html",revision:"e719b4ce1cc1a7dccd1fcab297542818"},{url:"zh/guide/feature/blog/index.html",revision:"22f047d2208cf478bd78ea5c27c0abcd"},{url:"zh/guide/feature/comment/index.html",revision:"879da55f6a8782c872257e49e80dba21"},{url:"zh/guide/feature/component/index.html",revision:"2515394cb8f31a5d5b1e09a3aea94089"},{url:"zh/guide/feature/encrypt/index.html",revision:"aa008b34d5ecd3661fe5236603561902"},{url:"zh/guide/feature/index.html",revision:"44cd08ecc36ebfe846cc046387258af3"},{url:"zh/guide/feature/markdown/align/index.html",revision:"0606f9b41b594b1056c6d779d20b245a"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"ab5fb82d1eaf449c2005f66efe642488"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"7093523d0903ec7c2bf4f6cd7b5d3f42"},{url:"zh/guide/feature/markdown/index.html",revision:"5c00f6fd52ff439a6286231284ddd7d4"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"1bc530be4cc89dbf50d51f4ef06d4d94"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"1c5531ae7e1933fbff3ed0302ad13e2f"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"66dcc895b0daeeb3e71e78558a5ac3ae"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"461142e834967a9228020b86b335bc58"},{url:"zh/guide/feature/page-info/index.html",revision:"ed8fee476ccc491fe7eb533db819cba1"},{url:"zh/guide/feature/page/index.html",revision:"1f88ce098d90a8dbcf045b1b271f19ab"},{url:"zh/guide/feature/pwa/index.html",revision:"c49e2c97f497b2a55364fb2be101c16d"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"4601e4bc6c3f93f5c91a9b693952351a"},{url:"zh/guide/feature/theme/index.html",revision:"2d44830e6d311b7c83c84ff849fa9ca8"},{url:"zh/guide/feature/typescript/index.html",revision:"898ee529ac71767238b643c792f40ac2"},{url:"zh/guide/index.html",revision:"ed3c82fb1913eb2870292560fcc86c53"},{url:"zh/guide/install/index.html",revision:"26d11032f3a146ec91b0524dca410694"},{url:"zh/guide/layout/blog/index.html",revision:"eb42526f89d1916b205593aad476d527"},{url:"zh/guide/layout/home/index.html",revision:"5ca6ccfdd3eaf0c61e8ce420986f4276"},{url:"zh/guide/layout/index.html",revision:"ad398bde6db467d63b5166d97c582464"},{url:"zh/guide/layout/navbar/index.html",revision:"68f01a6b461245f124f449ff459fc0f2"},{url:"zh/guide/layout/page/index.html",revision:"4e5c883198d3aa9a0d5455b40feeaf65"},{url:"zh/guide/layout/sidebar/index.html",revision:"9e6ff6b8a642c4da2f4cd125c8d3f23b"},{url:"zh/guide/layout/slides/index.html",revision:"f4c2619528c70a278e0e88622d209435"},{url:"zh/index.html",revision:"3529f571042122feee5112bcd07ee675"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.02cce400.png",revision:"02cce400a63e98252eefb9437bd10fac"},{url:"assets/img/darkmode.067c07c8.png",revision:"067c07c843f68e66c6ff31374d6344ac"},{url:"assets/img/darkmode.baaa33ce.png",revision:"baaa33ced9083586bc60fa6e9a5cd013"},{url:"assets/img/home.3e7cd8a1.png",revision:"3e7cd8a1727edc0a8592d15ce87dab5d"},{url:"assets/img/home.f9d474ce.png",revision:"f9d474ce8ff32e58f5c5a8aec5b93540"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/slides.859646fb.png",revision:"859646fbfd7beb9a132d8bd66ca9f807"},{url:"assets/img/slides.eb1e5fe7.png",revision:"eb1e5fe780594ad95ce1a96c2eaac0e8"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
