(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"isemail-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isemail-方法"}},[t._v("#")]),t._v(" isEmail 方法")]),t._v(" "),a("blockquote",[a("p",[t._v("接口 "),a("code",[t._v("function isEmail(email: string, domains: string[]): boolean;")])])]),t._v(" "),a("blockquote",[a("p",[t._v("版本 "),a("code",[t._v("1.0.0")])])]),t._v(" "),a("h3",{attrs:{id:"作用：判断邮箱是否正确，可以自定义邮箱后缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用：判断邮箱是否正确，可以自定义邮箱后缀"}},[t._v("#")]),t._v(" 作用：判断邮箱是否正确，可以自定义邮箱后缀")]),t._v(" "),a("h3",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isEmail "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@cpage/utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单独引入")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" isEmail "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@cpage/utils/build/is/isEmail'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必须")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("邮箱")])]),t._v(" "),a("tr",[a("td",[t._v("domains")]),t._v(" "),a("td",[t._v("array[string]")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v('域名 ["163.com"]')])])])]),t._v(" "),a("blockquote",[a("p",[t._v('默认支持的邮箱：[\n"qq.com",\n"163.com",\n"126.com",\n"vip.126.com",\n"yeah.net",\n"vip.163.com",\n"188.com",\n"sohu.com",\n"sina.cn",\n"sina.com",\n"gmail.com",\n"hotmail.com",\n"outlook.com"\n]')])]),t._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("是否有返回值")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("是")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("匹配为true，否则false")])])])]),t._v(" "),a("h3",{attrs:{id:"小例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小例子"}},[t._v("#")]),t._v(" 小例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://xx.sina.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'163.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);