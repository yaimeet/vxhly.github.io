(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{451:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("主要介绍 npm 中的各个选项的作用以及其区别。npm 依赖于 Node.js, 童鞋们要注意你的系统是否有 Node.js 环境")])]),s._v(" "),t("h2",{attrs:{id:"npm-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-是什么"}},[s._v("#")]),s._v(" npm 是什么")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("简介")]),s._v(" "),t("p",[s._v("NPM 的全称是 Node Package Manager, 是随同 Node.js 一起安装的包管理和分发工具, 它很方便让 JavaScript 开发者下载、安装、上传以及管理已经安装的包。")])]),s._v(" "),t("h2",{attrs:{id:"npm-install-安装模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-install-安装模块"}},[s._v("#")]),s._v(" npm install 安装模块")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("安装包, 默认会安装最新的版本, 最后所有的依赖会存放在 "),t("code",[s._v("node_modules")]),s._v(" 目录下的, 如:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("只需加上 "),t("code",[s._v("-g")]),s._v(" 或者 "),t("code",[s._v("--global")]),s._v(" 参数, 就可以实现全局安装, 如:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装指定版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本"}},[s._v("#")]),s._v(" 安装指定版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp@3.9.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"s-save"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s-save"}},[s._v("#")]),s._v(" -S, --save")]),s._v(" "),t("h2",{attrs:{id:"添加模块命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加模块命令"}},[s._v("#")]),s._v(" 添加模块命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -S\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("作用")]),s._v(" "),t("p",[s._v("自动把模块和版本号添加至 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("dependencies")]),s._v(" （生产阶段的依赖）部分, 避免了手动添加。")])]),s._v(" "),t("p",[t("code",[s._v("package.json")]),s._v(" 文件的 "),t("code",[s._v("dependencies")]),s._v(" 字段:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[module-name]"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[version]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"d-save-dev"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d-save-dev"}},[s._v("#")]),s._v(" -D, --save-dev")]),s._v(" "),t("h3",{attrs:{id:"添加模块命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加模块命令-2"}},[s._v("#")]),s._v(" 添加模块命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save-dev\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"作用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用-2"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("作用")]),s._v(" "),t("p",[s._v("自动把模块和版本号添加至 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("devDependencies")]),s._v(" （开发阶段的依赖）部分, 避免了手动添加。")])]),s._v(" "),t("p",[t("code",[s._v("package.json")]),s._v(" 文件的 "),t("code",[s._v("devDependencies")]),s._v(" 字段:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[module-name]"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[version]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"o-save-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#o-save-optional"}},[s._v("#")]),s._v(" -O, --save-optional")]),s._v(" "),t("h3",{attrs:{id:"添加模块命令-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加模块命令-3"}},[s._v("#")]),s._v(" 添加模块命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save-optional\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -O\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"作用-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用-3"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("作用")]),s._v(" "),t("p",[s._v("自动把模块和版本号添加至 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("optionalDependencies")]),s._v(" （可选阶段的依赖）部分, 避免了手动添加。")])]),s._v(" "),t("p",[t("code",[s._v("package.json")]),s._v(" 文件的 "),t("code",[s._v("optionalDependencies")]),s._v(" 字段:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"optionalDependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[module-name]"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^[version]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"e-save-exact"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e-save-exact"}},[s._v("#")]),s._v(" -E, --save-exact")]),s._v(" "),t("h3",{attrs:{id:"添加模块命令-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加模块命令-4"}},[s._v("#")]),s._v(" 添加模块命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save-exact\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -E\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"作用-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用-4"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("作用")]),s._v(" "),t("p",[s._v("自动把模块和版本号添加至 "),t("code",[s._v("package.json")]),s._v(" 的 "),t("code",[s._v("dependencies")]),s._v(" （精确安装指定模块版本）部分, 避免了手动添加。需要注意的是: "),t("code",[s._v("package.json")]),s._v(" 文件的 "),t("code",[s._v("dependencies")]),s._v(" 字段, 版本号中的 "),t("code",[s._v("^")]),s._v(" 消失了")])]),s._v(" "),t("p",[t("code",[s._v("package.json")]),s._v(" 文件的 "),t("code",[s._v("dependencies")]),s._v(" 字段")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"[module-name]"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[version]"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"npm-其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-其他命令"}},[s._v("#")]),s._v(" npm 其他命令")]),s._v(" "),t("h2",{attrs:{id:"创建-package-json-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-package-json-文件"}},[s._v("#")]),s._v(" 创建 package.json 文件")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("安装包的信息可保持到项目的 "),t("code",[s._v("package.json")]),s._v(" 文件中, 以便后续的其它的项目开发或者他人合作使用, 也说 "),t("code",[s._v("package.json")]),s._v(" 在项目中是必不可少的。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装模块"}},[s._v("#")]),s._v(" 安装模块")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("模块的依赖都被写入了 "),t("code",[s._v("package.json")]),s._v(" 文件后, 他人打开项目的根目录（项目开源、内部团队合作）, 时, 只需一条命令就可以安装 "),t("code",[s._v("package.json")]),s._v(" 中的依赖。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("加上 "),t("code",[s._v("--save")]),s._v(" 会安装 "),t("code",[s._v("package.json")]),s._v(" 中 "),t("code",[s._v("dependencies")]),s._v(" 里的所有模块。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"卸载模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载模块"}},[s._v("#")]),s._v(" 卸载模块")]),s._v(" "),t("p",[s._v("想要卸载模块也很简单。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("以上写法并不会改变 "),t("code",[s._v("package.json")]),s._v(" 文件, 使用 "),t("code",[s._v("-S | --save | -D | --save-dev | -O | --save-optional")]),s._v(" 选项即可删除 "),t("code",[s._v("package.json")]),s._v(" 文件中的依赖。"),t("br"),s._v("\n如使用 "),t("code",[s._v("--save")]),s._v(" 选项, 将会删除 "),t("code",[s._v("package.json")]),s._v(" 文件 "),t("code",[s._v("dependencies")]),s._v(" 中的该模块名和版本号。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"更新模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新模块"}},[s._v("#")]),s._v(" 更新模块")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("从服务器下载最新版本的模块。需要注意的是, 最新版本的模块并不是最稳定的, 模块还是选择相对稳定的版本较好。支持 "),t("code",[s._v("-g")]),s._v(" 选项。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("module-name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"检查模块是否已经过时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查模块是否已经过时"}},[s._v("#")]),s._v(" 检查模块是否已经过时")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("此命令会列出所有已经过时的包, 可以及时进行包的更新.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" outdated\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动模块"}},[s._v("#")]),s._v(" 启动模块")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-- "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("该命令写在 "),t("code",[s._v("package.json")]),s._v(" 文件 "),t("code",[s._v("scripts")]),s._v(" 的 "),t("code",[s._v("start")]),s._v(" 字段中, 可以自定义命令来配置一个服务器环境和安装一系列的必要程序, 如:")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gulp -s"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("如果 "),t("code",[s._v("package.json")]),s._v(" 文件没有设置 "),t("code",[s._v("start")]),s._v(" , 则将直接启动 "),t("code",[s._v("node server.js")])])]),s._v(" "),t("h3",{attrs:{id:"停止模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止模块"}},[s._v("#")]),s._v(" 停止模块")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-- "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"重新启动模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新启动模块"}},[s._v("#")]),s._v(" 重新启动模块")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" restart "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-- "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"更新模块-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新模块-2"}},[s._v("#")]),s._v(" 更新模块")]),s._v(" "),t("p",[s._v("可以安装全局插件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g npm-check-updates\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看最新的版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("npm-check-updates\nncu "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为上一条指令的缩写")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("升级至最新版本")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ncu -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在使用下载最新的安装包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当然, 如果所有包都是最新版本, 执行 ncu 后会提示:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("All dependencies match the latest package versions "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看包的安装路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看包的安装路径"}},[s._v("#")]),s._v(" 查看包的安装路径")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("输出 node_modules 的路径, 支持 "),t("code",[s._v("-g")]),s._v(" 选项。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"管理-npm-的配置路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理-npm-的配置路径"}},[s._v("#")]),s._v(" 管理 npm 的配置路径")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("对于 config 这块用得最多应该是设置代理, 解决 npm 安装一些模块失败的问题")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"查看命令的帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看命令的帮助"}},[s._v("#")]),s._v(" 查看命令的帮助")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[s._v("#")]),s._v(" 区别")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("--save-dev")]),s._v(" 是你开发时候依赖的东西； "),t("code",[s._v("--save")]),s._v(" 是你发布之后还依赖的东西。")]),s._v(" "),t("li",[t("code",[s._v("--save-optional")]),s._v(" 是可选依赖, 非必下； "),t("code",[s._v("--save-exact")]),s._v(" 可以指定精确的版本号, 也就是说当发布了新版本, 系统不会系在最新版本的模块, 只会下载该版本的模块。")]),s._v(" "),t("li",[t("code",[s._v("npm install")]),s._v(" 下载依赖时会安装 "),t("code",[s._v("package.json")]),s._v(" 中 "),t("code",[s._v("dependencies")]),s._v(" 和 "),t("code",[s._v("devDependencies")]),s._v(" 里的所有模块。")]),s._v(" "),t("li",[t("code",[s._v("npm install --save")]),s._v(" 下载依赖时只会安装 "),t("code",[s._v("package.json")]),s._v(" 中 "),t("code",[s._v("dependencies")]),s._v(" 里的所有模块。")]),s._v(" "),t("li",[s._v("比如, 你写 "),t("code",[s._v("ES6")]),s._v(" 代码, 如果你想编译成 "),t("code",[s._v("ES5")]),s._v(" 发布那么 "),t("code",[s._v("babel")]),s._v(" 就是 "),t("code",[s._v("devDependencies")]),s._v(" 。")]),s._v(" "),t("li",[s._v("如果你用了 "),t("code",[s._v("jQuery")]),s._v(" , 由于发布之后还是依赖 "),t("code",[s._v("jQuery")]),s._v(" , 所以是 "),t("code",[s._v("dependencies")]),s._v(" 。")]),s._v(" "),t("li",[s._v("最常用的还是 "),t("code",[s._v("npm")]),s._v(" 中的 "),t("code",[s._v("--save")]),s._v(" 和 "),t("code",[s._v("--save-dev")]),s._v(" 选项。 "),t("code",[s._v("--save")]),s._v(" 和 "),t("code",[s._v("--save-dev")]),s._v(" 选项。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);