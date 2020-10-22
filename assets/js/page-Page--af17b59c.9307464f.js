(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{550:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),a("h2",{attrs:{id:"icon-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icon-support"}},[t._v("#")]),t._v(" Icon support")]),t._v(" "),a("p",[t._v("You can configure the icon field in the "),a("code",[t._v("Front Matter")]),t._v(" of the page, and fill in the FontClass of the corresponding icon to bind the icon to the page.")]),t._v(" "),a("p",[t._v("This icon is used in "),a("strong",[t._v("Path Navigation")]),t._v(" and "),a("strong",[t._v("Sidebar")]),t._v(".")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Example")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("icon: Home\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"breadcrumb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb"}},[t._v("#")]),t._v(" Breadcrumb "),a("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),a("p",[t._v("The theme adds a new Breadcrumb support, you can config it using "),a("code",[t._v("breadcrumb")]),t._v(" in Frontmatter and themeConfig.")]),t._v(" "),a("p",[t._v("Without any configuration, a Breadcrumb that matches the theme color is displayed at the top of the page content to help the reader understand the document structure.")]),t._v(" "),a("p",[t._v("You can also control the icon display of the path navigation "),a("MyBadge",{attrs:{text:"Support page config"}}),t._v(", the configuration item is "),a("code",[t._v("breadcrumbIcon")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("To ensure Breadcrumb working well, the "),a("code",[t._v("readme.md")]),t._v(" file should be included in each folder.")]),t._v(" "),a("p",[t._v("Otherwise, the path navigation will automatically ignore that level because the component can not generate titles and links from the corresponding level folder.")])]),t._v(" "),a("h2",{attrs:{id:"page-info-display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-info-display"}},[t._v("#")]),t._v(" Page Info Display")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/guide/feature/page-info.html"}},[t._v("Page Info Section")])],1),t._v(" "),a("h2",{attrs:{id:"last-updated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-updated"}},[t._v("#")]),t._v(" Last Updated")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("themeConfig.lastUpdated")]),t._v(" option allows you to get the UNIX timestamp(ms) of each file’s last "),a("code",[t._v("git")]),t._v(" commit, and it will also display at the bottom of each page in an appropriate format:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lastUpdated"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last Updated"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string | boolean")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Note that it’s "),a("code",[t._v("on")]),t._v(" by default. If given a "),a("code",[t._v("string")]),t._v(", it will be displayed as a prefix.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Since "),a("code",[t._v("lastUpdated")]),t._v(" is based on "),a("code",[t._v("git")]),t._v(", you can only use it in a "),a("code",[t._v("git")]),t._v(" repository. Also, since the timestamp used comes from the git commit, it will display only after a first commit for a given page, and update only on ensuing commits of that page.")])]),t._v(" "),a("h2",{attrs:{id:"prev-next-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prev-next-links"}},[t._v("#")]),t._v(" Prev / Next Links")]),t._v(" "),a("p",[t._v("Prev and next links are automatically inferred based on the sidebar order of the active page. You can also explicitly overwrite or disable them globally with theme config or on specific pages using "),a("code",[t._v("Front matter")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("other"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("page\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"comment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comment"}},[t._v("#")]),t._v(" Comment")]),t._v(" "),a("p",[t._v("See the "),a("RouterLink",{attrs:{to:"/guide/feature/comment.html"}},[t._v("Comment section")]),t._v(" for details.")],1),t._v(" "),a("h2",{attrs:{id:"footer-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer-support"}},[t._v("#")]),t._v(" Footer Support "),a("MyBadge",{attrs:{text:"Support page config"}})],1),t._v(" "),a("p",[t._v("To display the footer on every page, you need to set "),a("code",[t._v("themeConfig.footer.display")]),t._v(" to "),a("code",[t._v("true")]),t._v(". At the same time, you can also use "),a("code",[t._v("themeConfig.footer.copyright")]),t._v(" and "),a("code",[t._v("themeConfig.content")]),t._v(" to set the default copyright information and footer content.")]),t._v(" "),a("p",[t._v("You can also configure the "),a("code",[t._v("footer")]),t._v(", "),a("code",[t._v("copyrightText")]),t._v(" and "),a("code",[t._v("medialink")]),t._v(" fields in the "),a("code",[t._v("Front Matter")]),t._v(" page.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The "),a("code",[t._v("footer")]),t._v(" field can be filled with a string or Boolean value.")]),t._v(" "),a("p",[t._v("Setting "),a("code",[t._v("footer")]),t._v(" to "),a("code",[t._v("true")]),t._v(" will display the default footer content. Setting "),a("code",[t._v("footer")]),t._v(" to"),a("code",[t._v("false")]),t._v(" will disable the page footer.")]),t._v(" "),a("p",[t._v("If you fill in a string, it will be inserted into footer by "),a("code",[t._v("v-html")]),t._v(", so you can fill in HTMLString.")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("copyrightText")]),t._v(" field can be filled with copyright information on this page,(also support HTMLString), which is useful when you quote articles from other places while they are using a specific license. You can also fill in "),a("code",[t._v("false")]),t._v(" to hide the copyright information in a specific page.")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("medialink")]),t._v(" field is the same as "),a("code",[t._v("themeConfig.blog.links")]),t._v(" ("),a("RouterLink",{attrs:{to:"/guide/layout/blog.html#configurable-items"}},[t._v("specific configuration see here")]),t._v("), you can configure it in a specific page to display different social media links. You can also set it to "),a("code",[t._v("false")]),t._v(" to hide it.")],1)])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Example")]),t._v(" "),a("p",[t._v("Enable the default footer text:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("footer: true\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Customize footer text without displaying copyright information and media links:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\nfooter: This website is served by Github Pages\ncopyrightText: false\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("medialink: false\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Custom footer content and copyright information and media links:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\nfooter: "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://github.com/Mister-Hope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" Mr.Hope "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\ncopyrightText: MIT LICENSE\nmedialink:\n  "),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("Zhihu: https://zhihu.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("When you set "),a("code",[t._v("footer.display")]),t._v(" to true in the theme, you can also disable it locally:")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("footer: false\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("To remove the default footer content while keeping social media and copyright information displayed, please use an empty string.")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v('footer: ""\n'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"custom-layout-for-specific-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-layout-for-specific-pages"}},[t._v("#")]),t._v(" Custom Layout for Specific Pages")]),t._v(" "),a("p",[t._v("By default the content of each "),a("code",[t._v("*.md")]),t._v(" file is rendered in a "),a("code",[t._v('<div class="page">')]),t._v(" container, along with the sidebar, auto-generated edit links and prev/next links. To use a fully custom component in place of the page, you can again specify the component to use using "),a("code",[t._v("YAML front matter")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SpecialLayout\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("This will render "),a("code",[t._v(".vuepress/components/SpecialLayout.vue")]),t._v(" for the given page.")])])}),[],!1,null,null,null);e.default=n.exports}}]);