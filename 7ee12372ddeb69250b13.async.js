webpackJsonp([9],{2566:function(s,t,e){s.exports=e(2582)},2582:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(2583),r=e(0),_=r(null,a.a,!1,null,null,null);t.default=_.exports},2583:function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("h1",[s._v("定制主题")]),s._v(" "),e("p",[s._v("vue-antd-ui的组件结构及样式和Antd React完全一致，你可以参考Antd React的定制方式进行配置。")]),s._v(" "),e("p",[s._v("Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"样式变量"}},[s._v("样式变量 "),e("a",{staticClass:"anchor",attrs:{href:"#样式变量","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),e("p",[s._v("antd 的样式使用了 "),e("a",{attrs:{href:"http://lesscss.org/"}},[s._v("Less")]),s._v(" 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vueComponent/ant-design/blob/master/components/style/themes/default.less"}},[s._v("默认样式变量")])])]),s._v(" "),e("p",[s._v("如果以上变量不能满足你的定制需求，可以给我们提 issue。")]),s._v(" "),e("h2",{attrs:{id:"定制方式"}},[s._v("定制方式 "),e("a",{staticClass:"anchor",attrs:{href:"#定制方式","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),e("p",[s._v("我们使用 "),e("a",{attrs:{href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"}},[s._v("modifyVars")]),s._v(" 的方式来覆盖变量。"),e("br"),s._v("\n在具体工程实践中，有 "),e("code",{pre:!0},[s._v("package.theme")]),s._v(" 和 "),e("code",{pre:!0},[s._v("less")]),s._v(" 两种方案，选择一种即可。"),e("br")]),s._v(" "),e("h3",{attrs:{id:"1)-theme-属性（推荐）"}},[s._v("1) theme 属性（推荐） "),e("a",{staticClass:"anchor",attrs:{href:"#1)-theme-属性（推荐）","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),e("p",[s._v("配置在 "),e("code",{pre:!0},[s._v("package.json")]),s._v(" 或 "),e("code",{pre:!0},[s._v(".webpackrc")]),s._v(" 下的 "),e("code",{pre:!0},[s._v("theme")]),s._v(" 字段。theme 可以配置为一个对象或文件路径。")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-js"}},[e("span",{attrs:{class:"hljs-string"}},[s._v('"theme"')]),s._v(": {\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v('"primary-color"')]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v('"#1DA57A"')]),s._v(",\n},\n")])]),s._v(" "),e("h3",{attrs:{id:"2)-less"}},[s._v("2) less "),e("a",{staticClass:"anchor",attrs:{href:"#2)-less","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),e("p",[s._v("用 less 文件进行变量覆盖。")]),s._v(" "),e("p",[s._v("建立一个单独的 "),e("code",{pre:!0},[s._v("less")]),s._v(" 文件如下，再引入这个文件。")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-css"}},[s._v("__"),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("at__import")]),s._v(' "~'),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("vue-antd-ui")]),s._v("/"),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("dist")]),s._v("/"),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("antd")]),e("span",{attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   // 引入官方提供的 '),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("less")]),s._v(" 样式入口文件\n__"),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("at__import")]),s._v(' "'),e("span",{attrs:{class:"hljs-selector-tag"}},[s._v("your-theme-file")]),e("span",{attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   // 用于覆盖上面定义的变量\n')])]),s._v(" "),e("p",[s._v("注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 "),e("code",{pre:!0},[s._v("babel-plugin-import")]),s._v(" 的 "),e("code",{pre:!0},[s._v("style")]),s._v(" 属性一起使用。")]),s._v(" "),e("h2",{attrs:{id:"社区教程-for-Antd-React"}},[s._v("社区教程 for Antd React "),e("a",{staticClass:"anchor",attrs:{href:"#社区教程-for-Antd-React","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"}},[s._v("How to Customize Ant Design with React & Webpack… the Missing Guide")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"}},[s._v("Theming Ant Design with Sass and Webpack")])])])])}],_={render:a,staticRenderFns:r};t.a=_}});