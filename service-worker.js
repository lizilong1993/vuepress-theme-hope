if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+a.slice(1)};return Promise.all(i.map((a=>{switch(a){case"exports":return s;case"module":return f;default:return e(a)}}))).then((e=>{const a=d(...e);return s.default||(s.default=a),s}))})))}}define("./service-worker.js",["./workbox-29a1ad50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.eed2e003.css",revision:"58e666f5ad29b2e9c4f8fbb9ef0a727e"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/126.eca650fa.js",revision:"a8f65340be58d23ff5e2a3cfbaaaefe4"},{url:"assets/js/127.fe727bf2.js",revision:"0ef631d4cc9d6d97130ec4d9241ba0f5"},{url:"assets/js/128.6e4d7f5d.js",revision:"fa39c26b012f4b5ac291dde375c462bc"},{url:"assets/js/129.ed73c627.js",revision:"b6a2e2e5e5ba4c61c4b668f9117e5738"},{url:"assets/js/130.8f9200ee.js",revision:"285234a6016046317b3b3f5acb380466"},{url:"assets/js/app.4cb11817.js",revision:"8108955a6f55e803cff02e1c2f480583"},{url:"assets/js/layout-Blog.454b3017.js",revision:"cf2c1d03a8e98d0f5f2642b699952493"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound.a94ddce8.js",revision:"2f90c382f1d59d843d3f154d3415f021"},{url:"assets/js/layout-Blog~layout-Layout~layout-NotFound~layout-Slide.34f78afc.js",revision:"2fba5af2760b7e8f98bfc4b1adb64a7d"},{url:"assets/js/layout-Layout.e05e18e4.js",revision:"e852dc0c63f415c41437907d9d49d658"},{url:"assets/js/layout-NotFound.97fd43ff.js",revision:"8e90f9daf666b2a5176492df80a14d1c"},{url:"assets/js/layout-Slide.f8b4725a.js",revision:"17a3a28fdbce71aaa699e240be02b754"},{url:"assets/js/page-AboutVuePress.0c14d9eb.js",revision:"1fde1d78f2819d319fe1455e86456d15"},{url:"assets/js/page-Basic.90ede17f.js",revision:"55e1753974c7b49fbc93ffcb9338ada0"},{url:"assets/js/page-Bloghomepage.385ada23.js",revision:"9ed8d60d35291b1c9ec0d503eff5944d"},{url:"assets/js/page-Blogrelated.ea77013f.js",revision:"7f853ed3f7605097238df2bcd74858be"},{url:"assets/js/page-CodeDemo.f59abd22.js",revision:"e5c6f10ea05d43a31c26c8abc793d792"},{url:"assets/js/page-CommentFunction.54c2a2b4.js",revision:"369972b6fcc1f1aca05f07e5ae3cac13"},{url:"assets/js/page-Commonproblems.ee1e3e79.js",revision:"23bfc7d180be9ba17f2029540abd4ee1"},{url:"assets/js/page-Config.32850160.js",revision:"02aaa6a7ca21f9e90430b6f5b3ee4298"},{url:"assets/js/page-Customalignment.65b6869b.js",revision:"84e46039fa83fe2ba0309d212e7302cb"},{url:"assets/js/page-DarkmodeandThemecolor.5e4cc41b.js",revision:"017aa99989bab814546dcabdc01a82b3"},{url:"assets/js/page-DefaultThemeConfig.90cd1b2b.js",revision:"8d25fe71a0ed9c9527f93acd288c2c2b"},{url:"assets/js/page-Demos.e2b7d633.js",revision:"871566d6663b0008ebf348dcfbfd1744"},{url:"assets/js/page-EmojiList.dc36ed0c.js",revision:"35b210ea59fbb67d1b0b4cddcc61ff31"},{url:"assets/js/page-Emoji列表.2952d58e.js",revision:"ee86b985e091bf26694dd87353f309f9"},{url:"assets/js/page-Encryptionfunction.d6ae705c.js",revision:"c1ff09d425fdf4b9501f3f93eb537301"},{url:"assets/js/page-FileStructure.2646c5cb.js",revision:"b6699ac4cbe8c623dc7fd8964e463e70"},{url:"assets/js/page-Flowchart.dd63e521.js",revision:"fc568f9d4de82d279d735abac2c5255b"},{url:"assets/js/page-Footnote.2773d2bc.js",revision:"1e58d671ea68e06210afbfb7e28ac395"},{url:"assets/js/page-HomePage.09d30681.js",revision:"9bb8bedc2b72370d6e2bd0c50213a297"},{url:"assets/js/page-Iconsupport.c69812c9.js",revision:"6bb86cee0028431fc21efd901fff4da5"},{url:"assets/js/page-InstallUsage.cd653fad.js",revision:"27ab8a6207817bdd3895dae8401bf217"},{url:"assets/js/page-Introduction.d036ca94.js",revision:"e6b6db315f17955b88984c08480241c9"},{url:"assets/js/page-Layout.5c756fdc.js",revision:"488dc15f55264fb8b4c6857bfcde9d2a"},{url:"assets/js/page-MarkdownDEMO.0648905b.js",revision:"6476bb1efb281b2a1c2034d883299c57"},{url:"assets/js/page-MarkdownEnhance.100429cd.js",revision:"86a110175cc0fbbe5bf3dc82cfb8c5de"},{url:"assets/js/page-MarkdownIntroduction.fd473281.js",revision:"74ea0b728ffb46ddb0236108a5514b13"},{url:"assets/js/page-Markdown介绍.9b0e6395.js",revision:"21b78053bf61af1470bfdd0c0708f7a5"},{url:"assets/js/page-Markdown增强.21a5fc2f.js",revision:"27ef3e11e9c2ac099a7bccfa9774d46e"},{url:"assets/js/page-Markdown示例.2ba76f27.js",revision:"216ce3eee1675b6d86cfe69343f578b7"},{url:"assets/js/page-Markup.a2963334.js",revision:"dc82264f6e356a20eea3a72aa4a17de5"},{url:"assets/js/page-Nature.9e516c40.js",revision:"edcf949405754f3e4c5cad566690ae29"},{url:"assets/js/page-NavBar.aee124a9.js",revision:"96e7a8f019d734c13ad99e9b5e34724e"},{url:"assets/js/page-NewComponent.d9b2f091.js",revision:"198854b0fa2bf290e1ebef11c47b9817"},{url:"assets/js/page-Newfeature.c7829d03.js",revision:"9be4fc1bebf6022b76b84f59a687671e"},{url:"assets/js/page-Object.79c540cc.js",revision:"9a4bde7383ab13fed5d9fd1187d5170b"},{url:"assets/js/page-Page.f754b167.js",revision:"bd61ec29135112265526f44603f98e14"},{url:"assets/js/page-PageConfiguration.2f05232d.js",revision:"264c9cf9b49d56ea44d71f0fce2edf50"},{url:"assets/js/page-PageEnhance.2329393d.js",revision:"ed7de9cbd81804fe97b8e178bfb3929e"},{url:"assets/js/page-Pageinformation.b368f9e7.js",revision:"73cf3622de501389620fe9195c207b8c"},{url:"assets/js/page-People.7765ce3a.js",revision:"ee12287543f22c07d1dee6b05581010a"},{url:"assets/js/page-Place.f01ec452.js",revision:"c881512c20d847f0975ae7f7332e9134"},{url:"assets/js/page-PluginDescription.ee3053c5.js",revision:"53287be570fbe498e55eb2479efdfefc"},{url:"assets/js/page-Plugins.ab3b6643.js",revision:"e4756e5a566cf2d1801f1d0a6a159b29"},{url:"assets/js/page-Presentationsupport.b51cd5f6.js",revision:"44155eeda74f5400a5f9c27213a2a83b"},{url:"assets/js/page-PWA.c62a3769.js",revision:"0f0ab0124636a851dbf444d29f25358e"},{url:"assets/js/page-SEOandSitemap.b8972519.js",revision:"079b33e32fc7a39c26fcae4d5d2bdacf"},{url:"assets/js/page-SEO和Sitemap.47025528.js",revision:"db2e040508676359ba9b6684b3d95f9f"},{url:"assets/js/page-Sidebar.e8266701.js",revision:"c7578f3a0dad6eb9943e3fcb0a931e29"},{url:"assets/js/page-Slide.4761af53.js",revision:"9138d1d4d8574e4cf18ab0518aa91527"},{url:"assets/js/page-stylusconfiguration.88c731e7.js",revision:"e470bd5f8aeae9d8e9211a07aa972e3b"},{url:"assets/js/page-stylus配置.14de96bf.js",revision:"8a3e55bef1aabd09a1d3c046305370d5"},{url:"assets/js/page-SuperscriptandSubscript.1605d14b.js",revision:"7ec261a117dafe46966434fcee5235a6"},{url:"assets/js/page-Symbol.ef953279.js",revision:"3a5e0bd15af2c055452ed9ba287aee64"},{url:"assets/js/page-TexSupport.f7b987d3.js",revision:"b6b642a271f1b3e737c8369cf1022493"},{url:"assets/js/page-Tex语法支持.8ea88c16.js",revision:"e3d40bf0748ba5309c42920993bde021"},{url:"assets/js/page-ThemeConfig.4a3dffdd.js",revision:"3dd06fac8b1c510640ae879664d0810a"},{url:"assets/js/page-ThemeFeatureConfig.c71882d1.js",revision:"73e25f86bf2f76b0dd404146c586c779"},{url:"assets/js/page-ThemeLayoutConfig.5e2ae0fd.js",revision:"b46ec49380baeed8037f9185b4d2df32"},{url:"assets/js/page-ThemePluginConfig.d2b12199.js",revision:"65edc8bca9880617da9360e8db02d381"},{url:"assets/js/page-TSsupport.60c85815.js",revision:"daaf00159e288c9b5fcbe2fd2606fb7a"},{url:"assets/js/page-TS支持.15d80b8c.js",revision:"5a84a3a810331dbefad6da25ebda12ec"},{url:"assets/js/page-vuepress-plugin-container.8f660582.js",revision:"70d5c92c8d2a2ef8b4edcbb9369db42e"},{url:"assets/js/page-vuepress-plugin-copyright.e1006acf.js",revision:"c9bc5ecff3d6970f4a9269994304b641"},{url:"assets/js/page-vuepress-theme-hope.a6fcd35c.js",revision:"08eab81779191f71e1b28cc782e5e03d"},{url:"assets/js/page-VuePress.712dd3e9.js",revision:"df5d479c063ff6ceefc2837d15b70f62"},{url:"assets/js/page-VuePressCases.ff7068fc.js",revision:"648da106d3840342ab68e5c92aadc2c1"},{url:"assets/js/page-VuePresscommands.eda4cb72.js",revision:"fb9765bbfc5579783ade56ebefb11e93"},{url:"assets/js/page-VuePress案例.ae4619a2.js",revision:"7803edba95bbfc80bf86eb5fa8101137"},{url:"assets/js/page-上下角标.abc22dd5.js",revision:"4367b4eb4d564d9c326aee059e558229"},{url:"assets/js/page-主题功能配置.6a59090b.js",revision:"cd8af919c54dc427f8808bd4c56e6059"},{url:"assets/js/page-主题布局配置.8b52dbc2.js",revision:"64ca11401706c22adb611700c486d41b"},{url:"assets/js/page-主题插件配置.622a420a.js",revision:"b089c7189ebf78297151ac92d97c40fc"},{url:"assets/js/page-主题配置.2a515e84.js",revision:"046246d326e27584ec0b2122f2a46ebf"},{url:"assets/js/page-人物.3d017e9c.js",revision:"94fae084a7aace7f1acf432607e4badc"},{url:"assets/js/page-介绍.da9b3fb3.js",revision:"07504ccb8468fedd989712290da4058a"},{url:"assets/js/page-代码演示.1cc62ea5.js",revision:"83b95f7e9fa6b8ecd12dc3e8204244d0"},{url:"assets/js/page-侧边栏.4923aa22.js",revision:"c9eb5f8cfe0c7180ce44bda9923e0fa4"},{url:"assets/js/page-加密功能.ff3b2556.js",revision:"d2bcab71d7c3d2400a630c9f8d3695b4"},{url:"assets/js/page-博客相关.b9e72283.js",revision:"f50cafa9360ab126b2d8da9db09834cd"},{url:"assets/js/page-博客首页.325211f6.js",revision:"23dbc375e0b74d06f8058df0611b6bbe"},{url:"assets/js/page-图标支持.77bb7d34.js",revision:"6ad37f30c105e7af04e46bad86656793"},{url:"assets/js/page-地点.1177393d.js",revision:"5ab3d5f8165fd0858115bae725cfe67c"},{url:"assets/js/page-基础知识.9d923b1a.js",revision:"78f0e5a1ae538392d05ae8b300b07161"},{url:"assets/js/page-安装使用.6a3ac8f7.js",revision:"32989e32b7b1e6208c0daf62d527e0cd"},{url:"assets/js/page-对象.fff515ac.js",revision:"240982f8e5f69f1d5f6e71dd8aec3eff"},{url:"assets/js/page-导航栏.355396f5.js",revision:"91209d7eb0f332d14916db4fcf11407e"},{url:"assets/js/page-布局.d68842b5.js",revision:"b98610db92e39fae8b94d18572689c39"},{url:"assets/js/page-常见问题.b3831e37.js",revision:"5ca5ba0892076b248b4bc7a951495c95"},{url:"assets/js/page-幻灯片.6a617c7b.js",revision:"c89ad3f94ef3e126083c72c8bf499d48"},{url:"assets/js/page-幻灯片支持.6e5fe479.js",revision:"024ac6f0c66f877aa92b0addf63635e4"},{url:"assets/js/page-插件.53515fa8.js",revision:"c35482b0e3444b90829e8dffe702955d"},{url:"assets/js/page-插件说明.df91b580.js",revision:"6633c5b94d815caa7ac13c5eff93452e"},{url:"assets/js/page-文件结构介绍.d115afc4.js",revision:"8bbfb5544ec6018fabce1ef7f6d70af7"},{url:"assets/js/page-新增特性.857cf5fd.js",revision:"eebbe638c7a0ea91af995c4e8c26ee10"},{url:"assets/js/page-新增组件.f6ddb414.js",revision:"38e1195247f6a09fd09753aacb63b862"},{url:"assets/js/page-标记.d037e05b.js",revision:"3eb55e35d61d29254cdfe4bc3fbd7134"},{url:"assets/js/page-流程图支持.5756360f.js",revision:"7a33ae7699ef131d93727370fa265296"},{url:"assets/js/page-深色模式与主题色.9e0824c7.js",revision:"a366d1a1e2c81e112d3c6d61b0b2cd06"},{url:"assets/js/page-符号.9efd02ad.js",revision:"2f045251588a2232254d5c34aae9213a"},{url:"assets/js/page-脚注.509c53a2.js",revision:"8e1758be994bd3ea79556360ee8a3546"},{url:"assets/js/page-自定义对齐.ec02b43a.js",revision:"5277693288c03b89829a39ce3ec562e1"},{url:"assets/js/page-自然.3106205a.js",revision:"66a2f1b84078dc085c872e4651a2eab3"},{url:"assets/js/page-评论功能.e01da339.js",revision:"acf6bfe1d04dcfcb91162a78e6af47f5"},{url:"assets/js/page-配置.f56b8dad.js",revision:"0d30b9e9a732d68e859f5310da77ca5a"},{url:"assets/js/page-页面.755501a1.js",revision:"1a0a35b6b172d1cd1754b9bc36693aa9"},{url:"assets/js/page-页面信息.8697c0fc.js",revision:"0590d4060b336fc3b48c45db33e073b7"},{url:"assets/js/page-页面增强.cf380659.js",revision:"19cec44d6b331788878f85e6cdcb1aa9"},{url:"assets/js/page-页面配置.e618d4e2.js",revision:"d7ca44bccf82e1bc9d53688ede7bc4c1"},{url:"assets/js/page-项目指令.04fdbcdf.js",revision:"9b8528eff44cbf60c8d8bc4b25aa89e0"},{url:"assets/js/page-项目案例.44f04a4e.js",revision:"6e1b264bddd9a0cba0a1e557e479b043"},{url:"assets/js/page-首页.8c8c2988.js",revision:"8a644d56ae766c4c11a509f0bb09b5d2"},{url:"assets/js/page-默认主题配置.db3002da.js",revision:"a06ed6d1e3d3123588a832ef817163c8"},{url:"assets/js/vendors~docsearch.8cf43e48.js",revision:"b4f21d9e7a2e0203e6784ae3bb91aefc"},{url:"assets/js/vendors~flowchart.12b131bb.js",revision:"a368dc55b4b746d5741af7c666b44d91"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.4cb64c3b.js",revision:"fc26a4fa5bf952049c0438fbad9766c5"},{url:"assets/js/vendors~photo-swipe.2cfff023.js",revision:"212927744ce71f6ad45de357ea8edc07"},{url:"assets/js/vendors~reveal.51648988.js",revision:"fa7a58a57df522582b947525ff033c25"},{url:"assets/js/vendors~valine.f3ebe391.js",revision:"d2dba28ba55e3de47261ef3a1c6e9958"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"c5b535acba65246025c163091bfa4f0b"},{url:"article/index.html",revision:"2016a0c097e728634407eb94d8b1ce9c"},{url:"basic/index.html",revision:"6200c1777a1cae7916c299454da43b5a"},{url:"basic/markdown/demo/index.html",revision:"573a514c44476ebb3f1f42392638d974"},{url:"basic/markdown/emoji/index.html",revision:"5fa6e07402ed8f06e9e0b2b297f7f7d5"},{url:"basic/markdown/emoji/nature/index.html",revision:"bd115febb4ca2375ca101e336530f610"},{url:"basic/markdown/emoji/object/index.html",revision:"edae6e4e05ea3bfe854c2049e97454f1"},{url:"basic/markdown/emoji/people/index.html",revision:"a6b9bbd13933b5dc70a815e43b6171ee"},{url:"basic/markdown/emoji/place/index.html",revision:"ea89b34870c61cf6c19043e74d250d22"},{url:"basic/markdown/emoji/symbol/index.html",revision:"fce97badae9faaad8d0fee98a231351a"},{url:"basic/markdown/index.html",revision:"d06d13ed4f1ac959e036d7a479aeaf6d"},{url:"basic/vuepress/case/index.html",revision:"e6ada8ecfed22eb61ded32939e5b8537"},{url:"basic/vuepress/command/index.html",revision:"c1c5a581daf7d1f65a09b74d46b25358"},{url:"basic/vuepress/file/index.html",revision:"e71b5900ff221b6b55c5e78e09dea0c9"},{url:"basic/vuepress/index.html",revision:"7a645c22bb8ffa0be75b5b762a3d93e1"},{url:"basic/vuepress/plugin/index.html",revision:"1b00b56eead44b570df06e2f2ee65331"},{url:"basic/vuepress/theme/index.html",revision:"bd910107ce3858c1991445ab4cbfc308"},{url:"category/basic/index.html",revision:"5f232e0acff9338e160127a5c35f8cd3"},{url:"category/basic/page/2/index.html",revision:"c8c31b72abf67b003fcae96e343799d9"},{url:"category/basic/page/3/index.html",revision:"f93097380f8820a33925e108b4d31122"},{url:"category/config/index.html",revision:"d2ed8b1bdab4b4a2dafd1da540f9b734"},{url:"category/config/page/2/index.html",revision:"d81d0cb94ff7d70a740ba79bba365255"},{url:"category/config/page/3/index.html",revision:"b0031c22753f14618818790b2a32faf5"},{url:"category/demo/index.html",revision:"d2c43979bea10c48013ba89c04df2106"},{url:"category/FAQ/index.html",revision:"8c25657394b7198d6f2b9092ca687593"},{url:"category/feature/index.html",revision:"c99de02f4d570c857adf8611db0447a9"},{url:"category/feature/page/2/index.html",revision:"1331a14eb1221c6a20d4e86772ef6a4b"},{url:"category/feature/page/3/index.html",revision:"a2bf898a152270425a5b86308a6ae875"},{url:"category/index.html",revision:"e7e6e02f40ef37477c282337cc7bd2c0"},{url:"category/instruction/index.html",revision:"8bad60dfdc10223a3c3f690cb633fb06"},{url:"category/layout/index.html",revision:"9036f20bb455eebb205f7e035351dee1"},{url:"category/layout/page/2/index.html",revision:"bf47f00bf2d186ece6151bfd49027020"},{url:"category/markdown/index.html",revision:"f4ed8e9b8219cabdbcd1f6fe922c65a5"},{url:"config/index.html",revision:"4fb330ec2ff4f24810dbe7a1a5acbe9b"},{url:"config/page/index.html",revision:"8b796d588b574322892bd226dcc255de"},{url:"config/plugin/container/index.html",revision:"c905327278c207c6d07c890296c02e9e"},{url:"config/plugin/copyright/index.html",revision:"5d7e43fa9b9ba67f7cce0584e9838e27"},{url:"config/plugin/index.html",revision:"a59af3cb20a4b079a212740de57a5a2c"},{url:"config/stylus/index.html",revision:"05162d456da157a4511087df44167304"},{url:"config/theme/apperance/index.html",revision:"1cad33736c4842a658f8266b40cdd6f9"},{url:"config/theme/default/index.html",revision:"2d9e3864d9b5da091bb0e1ca0299068f"},{url:"config/theme/feature/index.html",revision:"fe08e82f76db29ca8ffe610b62818482"},{url:"config/theme/index.html",revision:"7dc1e82c6addfcdf48b978a40f0b9db5"},{url:"config/theme/plugin/index.html",revision:"5164b5b7cd94cd6bac06b76090d0e0cc"},{url:"demo/index.html",revision:"a919a29779e9d6f9e5f01dfe9d39c981"},{url:"encrypt/index.html",revision:"7a791853fd0617e9eace49fec9948214"},{url:"FAQ/index.html",revision:"170580d97698f364bf7191d8c812ee9a"},{url:"guide/feature/blog/index.html",revision:"15366eba430ce21bc4efde3bf3c64b81"},{url:"guide/feature/comment/index.html",revision:"947502e2b758275e3f43bfb7798f333c"},{url:"guide/feature/component/index.html",revision:"7add6a66f89ba79fb860494b02a4ee42"},{url:"guide/feature/encrypt/index.html",revision:"46b98bb3b4fc5b30fdb7f07f2aea6cf9"},{url:"guide/feature/icon/index.html",revision:"2c12f6ac51c3e7b99840570cb7d9df8e"},{url:"guide/feature/index.html",revision:"e0b6e4c211c09a022b95e4c13a2bbb63"},{url:"guide/feature/markdown/align/index.html",revision:"17b0557c7c165b33a22c3a6f7526bfda"},{url:"guide/feature/markdown/demo/index.html",revision:"d6a6e9227911cc59d5f6b405c8f89f71"},{url:"guide/feature/markdown/flowchart/index.html",revision:"094f6f17c2f18e1d7b6258c627028c6e"},{url:"guide/feature/markdown/footnote/index.html",revision:"42d0cde494b7f0c412fafedeac8fb75d"},{url:"guide/feature/markdown/index.html",revision:"d2e7c3475b98363bb3992964ea73d9c8"},{url:"guide/feature/markdown/mark/index.html",revision:"cf416545484100025cad1fd1267562dc"},{url:"guide/feature/markdown/presentation/index.html",revision:"cbf68f2c50f2debc93df0005c2dab049"},{url:"guide/feature/markdown/sup-sub/index.html",revision:"f2e08473b17c90a5550456589f41c7c0"},{url:"guide/feature/markdown/tex/index.html",revision:"fa8c3e825b8618fbb301dd212173fc37"},{url:"guide/feature/page-info/index.html",revision:"7c439f2bc84101921ec8c2d33fcda009"},{url:"guide/feature/page/index.html",revision:"b677a1539429494370a7ef124eb69fa8"},{url:"guide/feature/pwa/index.html",revision:"42b1c8ff94fb4b4a93e706200c4e28a9"},{url:"guide/feature/seo-sitemap/index.html",revision:"77e0bfc14064fea6bb4891d31274e2a5"},{url:"guide/feature/theme/index.html",revision:"00d4a3c36fdbac4da6feb9a42c04b1d6"},{url:"guide/feature/typescript/index.html",revision:"baf1285a3ae1ca217c6f5fe04da02ea9"},{url:"guide/index.html",revision:"4681e489103a0b9ec86e4306bb4be3cd"},{url:"guide/install/index.html",revision:"0712dcede18dec839da33bdfdf0e05dd"},{url:"guide/layout/blog/index.html",revision:"30b46cdefb8f6d517d317c0289ac0602"},{url:"guide/layout/home/index.html",revision:"09b7e318862cbca8145cb8af95448112"},{url:"guide/layout/index.html",revision:"e7be68e5b1aebedeb00eb9a3862b371c"},{url:"guide/layout/navbar/index.html",revision:"fc0233468325d2b909d6f75807a69c6d"},{url:"guide/layout/page/index.html",revision:"9e1f264f60eb2141e46b95611d92583d"},{url:"guide/layout/sidebar/index.html",revision:"5ecae88a2d9be546f86ce3ac7c15754d"},{url:"guide/layout/slides/index.html",revision:"889e15ac5b7266f45680b542cebdc407"},{url:"index.html",revision:"1928be269235fd8cf39d13558e432a62"},{url:"slide/index.html",revision:"673c897e640648b9698b927c015661b9"},{url:"tag/blog/index.html",revision:"6da6291a6ae53cb18c52200b1cd6292e"},{url:"tag/comment/index.html",revision:"c38ffd30b46078e41321649c6b71ea68"},{url:"tag/components/index.html",revision:"5c5ee62ee7e4b2a37d2fd1ef24d27c37"},{url:"tag/config/index.html",revision:"14d0ac39050c973cbbf59bdee229394a"},{url:"tag/config/page/2/index.html",revision:"1b14764ed4f4dc822ae07edb1129f30a"},{url:"tag/config/page/3/index.html",revision:"eeae8415d586a1cb3eb74950dbc1c2f6"},{url:"tag/emoji/index.html",revision:"cdc67b1a96dafcff2053ecc9363dfd14"},{url:"tag/emoji/page/2/index.html",revision:"6b0c3875981c6788ab7a7fda528add21"},{url:"tag/encrypt/index.html",revision:"9c188d52b5f3008055c486b80f25b26c"},{url:"tag/feature/index.html",revision:"d9df701caa69e84b6fedd554af4c68dc"},{url:"tag/feature/page/2/index.html",revision:"9bac3adb2b2845f88f49d7a299bcead8"},{url:"tag/feature/page/3/index.html",revision:"c2828a8e05f3fa1d88e67ab6a04a0555"},{url:"tag/feature/page/4/index.html",revision:"ecd116597a78efe2acbd94909ed33868"},{url:"tag/feature/page/5/index.html",revision:"4207cb7b369b51dcc522fc7e5d9744ae"},{url:"tag/frontmatter/index.html",revision:"ba37c4453767a70366e4f79937cc888b"},{url:"tag/home/index.html",revision:"24131b683073713553ea91ffc9319d2c"},{url:"tag/icon/index.html",revision:"fdb9d9be99a748412c0f1aac72ea251e"},{url:"tag/index.html",revision:"01a2882c723c422fc798223d935d97e8"},{url:"tag/intro/index.html",revision:"5b17183edec4eb03c886347923129963"},{url:"tag/layout/index.html",revision:"09b1a10606c57e2b5c0d0db528a48a6b"},{url:"tag/layout/page/2/index.html",revision:"ae749648e7f39bf1ff14d57ca6ff6228"},{url:"tag/markdown/index.html",revision:"fa5f3e3ff84bcea233796fee9b3871f9"},{url:"tag/markdown/page/2/index.html",revision:"db40abee5c5265c87b7aaabe706add3b"},{url:"tag/markdown/page/3/index.html",revision:"93a0065620dc600b1fe5ff9b4fef076d"},{url:"tag/markdown/page/4/index.html",revision:"66af5a7af7f9ded9fe650f14b27712f1"},{url:"tag/navbar/index.html",revision:"90c389024352e3ae1408058d67680313"},{url:"tag/page-info/index.html",revision:"f17b74ac790a3fdc1566456ba78cdf7f"},{url:"tag/page/index.html",revision:"815422c052dd8f2ac30498453bebc5ec"},{url:"tag/plugin/index.html",revision:"d8f4fbac75ff9a4614da642311a30390"},{url:"tag/pwa/index.html",revision:"0d715192d7a9d463e4137db7becc5c77"},{url:"tag/seo/index.html",revision:"51d4abab70cf6b63b78fb63798139261"},{url:"tag/sidebar/index.html",revision:"8588c5eceb0f1420f2f38f24c9a796a3"},{url:"tag/sitemap/index.html",revision:"aaaae52661e1aa7037a58e531913cf2f"},{url:"tag/slides/index.html",revision:"1edcb5ae2f8b8dc1be1698bd83e3d729"},{url:"tag/style/index.html",revision:"9aec20a70b65a81ca06f768bc1b05e2c"},{url:"tag/themeConfig/index.html",revision:"0ee7f3ed4bbb560fde3a8ceb7ed0c09e"},{url:"tag/typescript/index.html",revision:"e228a9430caf6620bc41512ba74a5a8c"},{url:"tag/vuepress/index.html",revision:"f41b89f18ac42ec32426242ef54c5808"},{url:"tag/vuepress/page/2/index.html",revision:"0161dbfc0351a1e1b8f4a1cf251f7a28"},{url:"timeline/index.html",revision:"9e3766cb684d4c471f4089498e67e908"},{url:"zh/basic/index.html",revision:"f8cd2fe4faeb722737b9343d9c516cb9"},{url:"zh/basic/markdown/demo/index.html",revision:"5e9f56c9f2e8c6cb1051d4452efd8787"},{url:"zh/basic/markdown/emoji/index.html",revision:"926c55960b03b2fb301fd73e7c34e6a2"},{url:"zh/basic/markdown/emoji/nature/index.html",revision:"0e91a014feaeeabc13777d48fd732dab"},{url:"zh/basic/markdown/emoji/object/index.html",revision:"c8be0bc85847ff91b1fd13a296be0e89"},{url:"zh/basic/markdown/emoji/people/index.html",revision:"15978a34296c70eef8e0d6a86c19d48f"},{url:"zh/basic/markdown/emoji/place/index.html",revision:"8faab65d05613bee9c139cf4bee05821"},{url:"zh/basic/markdown/emoji/symbol/index.html",revision:"03ba41a26fc22da521f974668ea48467"},{url:"zh/basic/markdown/index.html",revision:"15d66a88c895fbc35a4a2753333c52d7"},{url:"zh/basic/vuepress/case/index.html",revision:"bff12170711393dc7fd2794aa0adad88"},{url:"zh/basic/vuepress/command/index.html",revision:"a1923c9cc7b85de6ec8ba95ea091a4cc"},{url:"zh/basic/vuepress/file/index.html",revision:"8e22bc331e818e84b2b0e0cbdf6d505d"},{url:"zh/basic/vuepress/index.html",revision:"f6f12039a63bd4109f523dbe9161f240"},{url:"zh/basic/vuepress/plugin/index.html",revision:"0dcacca0b61d883ac021ea6f42a83e82"},{url:"zh/basic/vuepress/theme/index.html",revision:"516164086c2b5f6d979cca6995a4fe13"},{url:"zh/config/index.html",revision:"857560bbb78cc5ee6f3ea268d57d7875"},{url:"zh/config/page/index.html",revision:"e0ccf83338460f2e6935b378113c72df"},{url:"zh/config/plugin/container/index.html",revision:"fa7ab7e77d435e6d693298549a8bd5f5"},{url:"zh/config/plugin/copyright/index.html",revision:"e25521119e2fcf2edfd3c034f2fcea5f"},{url:"zh/config/plugin/index.html",revision:"5bdfe6c1d98baba4ea296864b170e2cc"},{url:"zh/config/stylus/index.html",revision:"b53100e1c443cb53d64548760396d79a"},{url:"zh/config/theme/apperance/index.html",revision:"b25f77657e3e47c85f235cb8ea049271"},{url:"zh/config/theme/default/index.html",revision:"1165d732349e160be1bf58b4fbc5b0ca"},{url:"zh/config/theme/feature/index.html",revision:"d403444e8364cc865bbbf275808c51ca"},{url:"zh/config/theme/index.html",revision:"81c07d7b05dcb08916a760051725ff79"},{url:"zh/config/theme/plugin/index.html",revision:"f538f612a096f4d34f29139f61f8899a"},{url:"zh/demo/index.html",revision:"b6db29258352c435ecfe05a2f1574d46"},{url:"zh/FAQ/index.html",revision:"51632e31e7772106a667bc24051ef549"},{url:"zh/guide/feature/blog/index.html",revision:"d8e0a75c0ccaa6820a8b143dc1862690"},{url:"zh/guide/feature/comment/index.html",revision:"832daf99bfe5e614884daa1f0dd0d74d"},{url:"zh/guide/feature/component/index.html",revision:"9325d783d1a9f76d6681842788fca077"},{url:"zh/guide/feature/encrypt/index.html",revision:"cc38b9a8243f10078ac279361f671ec3"},{url:"zh/guide/feature/icon/index.html",revision:"c2c31fa0b79fc75033ccdfff5d73cfe9"},{url:"zh/guide/feature/index.html",revision:"31ddccfd9c64e594fa441c34226fed79"},{url:"zh/guide/feature/markdown/align/index.html",revision:"73ceb061a1491a2deb92672ff88f1aab"},{url:"zh/guide/feature/markdown/demo/index.html",revision:"09f0deb10e953fd24a176c748695c61c"},{url:"zh/guide/feature/markdown/flowchart/index.html",revision:"6f1152f774926dd80dc53a233a5182e9"},{url:"zh/guide/feature/markdown/footnote/index.html",revision:"c7e42125f7ec287effd3d8ae42d71e41"},{url:"zh/guide/feature/markdown/index.html",revision:"2178e97772039eae9458e2901f876e3b"},{url:"zh/guide/feature/markdown/mark/index.html",revision:"c5fad00e0d56569f2492514a98420e5a"},{url:"zh/guide/feature/markdown/presentation/index.html",revision:"5d2826eab794306e26a4aa1660e4ba00"},{url:"zh/guide/feature/markdown/sup-sub/index.html",revision:"e39b1a6151cdb3454c77466668106f4f"},{url:"zh/guide/feature/markdown/tex/index.html",revision:"5b03fd07617608d5d765d7dcdc806089"},{url:"zh/guide/feature/page-info/index.html",revision:"7f58dfb2714f5fc09a2b64c3d91d2865"},{url:"zh/guide/feature/page/index.html",revision:"9a49b0c60f0eadc30f4850c038205bac"},{url:"zh/guide/feature/pwa/index.html",revision:"1f3601fce841d2d30e6063d376089f47"},{url:"zh/guide/feature/seo-sitemap/index.html",revision:"5397dab81559ea0617498788bbefb9f8"},{url:"zh/guide/feature/theme/index.html",revision:"48fd26279141a0d03b19292246b04871"},{url:"zh/guide/feature/typescript/index.html",revision:"d961e102d47395f5a9668c1aa086cb38"},{url:"zh/guide/index.html",revision:"06b41cf16a82e6ad884c142ea733dde6"},{url:"zh/guide/install/index.html",revision:"a95c1310dbb5d2f7dfe9f02ada03ae11"},{url:"zh/guide/layout/blog/index.html",revision:"499657af408b51e196e9aea6bca80f39"},{url:"zh/guide/layout/home/index.html",revision:"8dfe88faeba2b727dbfd5fb6561a2fad"},{url:"zh/guide/layout/index.html",revision:"28ea5b9f3c1cf88770f30c4521a4da69"},{url:"zh/guide/layout/navbar/index.html",revision:"47d9915a7d08b7d156902a383235704f"},{url:"zh/guide/layout/page/index.html",revision:"2b1e6dc0b16ac456f2d7af83023f1915"},{url:"zh/guide/layout/sidebar/index.html",revision:"cda72970583ce246fa90ddc9d3fc1ca7"},{url:"zh/guide/layout/slides/index.html",revision:"33dc394efd3178fa20ab0997818a55a8"},{url:"zh/index.html",revision:"70ef11bb18d42f7b19c8d132c3cc610f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/basic-maskable.png",revision:"f8d551d8ef147c1646f1e2c58fe2505a"},{url:"assets/icon/basic-monochrome.png",revision:"87fc5134cac865cffd6b509007f232a0"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/config-maskable.png",revision:"ce366917fddedd9a219002bc85e30f7e"},{url:"assets/icon/config-monochrome.png",revision:"e1cfbcd831e4b4d09daab55617268e10"},{url:"assets/icon/guide-maskable.png",revision:"58005fdee0b6a97ce98c290895823947"},{url:"assets/icon/guide-monochrome.png",revision:"7e7eb82d5ef0a4f21d939eab32acd1c4"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/category.f21437ff.png",revision:"f21437ffbc4b13ab6a451dde8d9dda84"},{url:"assets/img/darkmode.18bf8eef.png",revision:"18bf8eef74622db9ab125f182d0755ed"},{url:"assets/img/darkmode.5a75246b.png",revision:"5a75246b475e9adf13d7aba1ba70b28c"},{url:"assets/img/home.0bba1141.png",revision:"0bba11416a42fe9f9599c96a7adc4dc4"},{url:"assets/img/home.0e77001c.png",revision:"0e77001cd0a6e3ab329791d9331e9f15"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/iconfont-edit.ae032366.png",revision:"ae0323666d64aad8158bc08c9c32f8e5"},{url:"assets/img/iconfont-edit.f701530b.png",revision:"f701530b552bbaacefa45ddaba8aebdd"},{url:"assets/img/iconfont-new.11943023.png",revision:"11943023008a21f03d8899fdbeae4191"},{url:"assets/img/iconfont-new.d38bbd1f.png",revision:"d38bbd1ff33f7eec493ce626552658e2"},{url:"assets/img/slides.30e00024.png",revision:"30e00024078ddaa677a427ffceb322ce"},{url:"assets/img/slides.917fe32d.png",revision:"917fe32d70720a5957c350395234bb54"},{url:"logo.png",revision:"a4106d3bbae58733d609f32044a86a39"}],{}),e.cleanupOutdatedCaches()}));
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
