(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{456:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"blockmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blockmanager"}},[t._v("#")]),t._v(" BlockManager")]),t._v(" "),a("p",[t._v("You can customize the initial state of the module from the editor initialization, by passing the following "),a("a",{attrs:{href:"https://github.com/artf/grapesjs/blob/master/src/block_manager/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n blockManager"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blockManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BlockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getall"}},[t._v("getAll")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getallvisible"}},[t._v("getAllVisible")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#remove"}},[t._v("remove")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getconfig"}},[t._v("getConfig")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getcategories"}},[t._v("getCategories")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#getcontainer"}},[t._v("getContainer")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#render"}},[t._v("render")])])]),t._v(" "),a("h2",{attrs:{id:"getconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getconfig"}},[t._v("#")]),t._v(" getConfig")]),t._v(" "),a("p",[t._v("Get configuration object")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"onload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onload"}},[t._v("#")]),t._v(" onLoad")]),t._v(" "),a("p",[t._v("Load default blocks if the collection is empty")]),t._v(" "),a("h2",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),a("p",[t._v("Add new block to the collection.")]),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Block id")]),t._v(" "),a("li",[a("code",[t._v("opts")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Options\n"),a("ul",[a("li",[a("code",[t._v("opts.label")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Name of the block")]),t._v(" "),a("li",[a("code",[t._v("opts.content")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" HTML content")]),t._v(" "),a("li",[a("code",[t._v("opts.category")]),t._v(" "),a("strong",[t._v("("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v(")")]),t._v(" Group the block inside a catgegory.\nYou should pass objects with id property, eg:\n{id: 'some-uid', label: 'My category'}\nThe string will be converted in:\n'someid' => {id: 'someid', label: 'someid'}")]),t._v(" "),a("li",[a("code",[t._v("opts.attributes")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Block attributes (optional, default "),a("code",[t._v("{}")]),t._v(")")])])])]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("blockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1-block'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Heading'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Put your title here</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  category"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Basic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Insert h1 block'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[t._v("Block")]),t._v(" Added block")]),t._v(" "),a("h2",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),a("p",[t._v("Return the block by id")]),t._v(" "),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Block id")])]),t._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" block "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1-block'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {label: 'Heading', content: '<h1>Put your ...', ...}")]),t._v("\n")])])]),a("h2",{attrs:{id:"getall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getall"}},[t._v("#")]),t._v(" getAll")]),t._v(" "),a("p",[t._v("Return all blocks")]),t._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blocks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [{label: 'Heading', content: '<h1>Put your ...'}, ...]")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[t._v("Collection")])]),t._v(" "),a("h2",{attrs:{id:"getallvisible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallvisible"}},[t._v("#")]),t._v(" getAllVisible")]),t._v(" "),a("p",[t._v("Return the visible collection, which containes blocks actually rendered")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[t._v("Collection")])]),t._v(" "),a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" remove")]),t._v(" "),a("p",[t._v("Remove a block by id")]),t._v(" "),a("h3",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("id")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Block id")])]),t._v(" "),a("p",[t._v("Returns "),a("strong",[t._v("Block")]),t._v(" Removed block")]),t._v(" "),a("h2",{attrs:{id:"getcategories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcategories"}},[t._v("#")]),t._v(" getCategories")]),t._v(" "),a("p",[t._v("Get all available categories.\nIt's possible to add categories only within blocks via 'add()' method")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[t._v("("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v(" | Collection)")])]),t._v(" "),a("h2",{attrs:{id:"getcontainer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getcontainer"}},[t._v("#")]),t._v(" getContainer")]),t._v(" "),a("p",[t._v("Return the Blocks container element")]),t._v(" "),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render")]),t._v(" "),a("p",[t._v("Render blocks")]),t._v(" "),a("h3",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("blocks")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1)]),t._v(" Blocks to render, without the argument will render all global blocks")]),t._v(" "),a("li",[a("code",[t._v("opts")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Options (optional, default "),a("code",[t._v("{}")]),t._v(")\n"),a("ul",[a("li",[a("code",[t._v("opts.external")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1),t._v("?")]),t._v(" Render blocks in a new container (HTMLElement will be returned)")]),t._v(" "),a("li",[a("code",[t._v("opts.ignoreCategories")]),t._v(" "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1),t._v("?")]),t._v(" Render blocks without categories")])])])]),t._v(" "),a("h3",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Render all blocks (inside the global collection)")]),t._v("\nblockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Render new set of blocks")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blocks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filtered "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("block")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sections'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nblockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filtered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or a new set from an array")]),t._v("\nblockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Label text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>Content</div>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Back to blocks from the global collection")]),t._v("\nblockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can also render your blocks outside of the main block container")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newBlocksEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" blockManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filtered"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" external"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some-id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newBlocksEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),a("OutboundLink")],1)]),t._v(" Rendered element")])])}),[],!1,null,null,null);e.default=n.exports}}]);