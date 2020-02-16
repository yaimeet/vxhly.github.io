(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{439:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("Git 是一个开源的分布式版本控制系统, 可以有效、高速的处理从很小到非常大的项目版本管理")])]),s._v(" "),t("h2",{attrs:{id:"安装-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[s._v("#")]),s._v(" 安装 Git")]),s._v(" "),t("p",[s._v("如果你的系统还没有 Git, 请通过以下命令安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"创建帐号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建帐号"}},[s._v("#")]),s._v(" 创建帐号")]),s._v(" "),t("p",[s._v("创建你的 GitHub 帐号, 或者 Git@OSC 帐号")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),t("OutboundLink")],1),s._v(" 链接"),t("br"),s._v(" "),t("a",{attrs:{href:"http://git.oschina.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git@OSC"),t("OutboundLink")],1),s._v(" 链接")]),s._v(" "),t("h2",{attrs:{id:"liunx-创建-ssh-密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liunx-创建-ssh-密钥"}},[s._v("#")]),s._v(" liunx 创建 SSH 密钥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@xxxxx.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"添加-public-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-public-key"}},[s._v("#")]),s._v(" 添加 public key")]),s._v(" "),t("p",[s._v("查看你的 public key, 并把它添加到您的账户中")]),s._v(" "),t("p",[s._v("如 "),t("a",{attrs:{href:"http://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub key"),t("OutboundLink")],1),s._v(" 如 "),t("a",{attrs:{href:"http://git.oschina.net/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git@OSC key"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用以下命令查看")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /home/youname/.ssh/id_rsa.pub\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"测试验证是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试验证是否成功"}},[s._v("#")]),s._v(" 测试验证是否成功")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@github.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@git.oschina.net\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("返回你在 "),t("code",[s._v("GitHub")]),s._v(" 或 "),t("code",[s._v("Git@OSC")]),s._v(" 上注册的用户名代表成功。")]),s._v(" "),t("h2",{attrs:{id:"github-或-git-osc-上创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-或-git-osc-上创建项目"}},[s._v("#")]),s._v(" GitHub 或 Git@OSC 上创建项目")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),t("OutboundLink")],1),s._v(" 链接"),t("br"),s._v(" "),t("a",{attrs:{href:"http://git.oschina.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git@OSC"),t("OutboundLink")],1),s._v(" 链接")]),s._v(" "),t("h2",{attrs:{id:"本地配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地配置"}},[s._v("#")]),s._v(" 本地配置")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("尽量保持你的名字和你的邮箱和 GitHub 或 Git@OSC 的注册一致。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your name"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your email"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"配置大小写敏感"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置大小写敏感"}},[s._v("#")]),s._v(" 配置大小写敏感")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("在 Git 中默认是不区分大小的, 因此当你修改了文件名的大小写后, git并不会认为你有修改哦, 使用下面的配置可开启大小写敏感")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config core.ignorecase "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" --global\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"本地多个-ssh-key-的配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地多个-ssh-key-的配置"}},[s._v("#")]),s._v(" 本地多个 ssh-key 的配置")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v(".ssh")]),s._v(" 目录下面创建名为 "),t("code",[s._v("config")]),s._v(" 的配置文件, 配置文件内容如下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Host me.github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相当于 DNS 的作用")]),s._v("\n    HostName github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析的地址")]),s._v("\n    PreferredAuthentications publickey \n    IdentityFile ~/.ssh/me_rsa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是您生成密钥的文件名,注意是私钥的文件名")]),s._v("\n\nHost work.github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 相当于 DNS 的作用")]),s._v("\n    HostName github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解析的地址")]),s._v("\n    Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你改变了 ssh 的端口号")]),s._v("\n    PreferredAuthentications publickey\n    IdentityFile ~/.ssh/work_rsa "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是您生成密钥的文件名,注意是私钥的文件名")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v("测试连接")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@me.github.com  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => 将会自动解析成 git@github.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@work.github.com "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# => 将会自动解析成 git@github.com")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("h3",{attrs:{id:"进入项目目录-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入项目目录-初始化"}},[s._v("#")]),s._v(" 进入项目目录, 初始化")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"添加项目至本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加项目至本地仓库"}},[s._v("#")]),s._v(" 添加项目至本地仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"提交并备注"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交并备注"}},[s._v("#")]),s._v(" 提交并备注")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("youName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("appName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"解决冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突"}},[s._v("#")]),s._v(" 解决冲突")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"强制覆盖本地代码（更新本地源）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制覆盖本地代码（更新本地源）"}},[s._v("#")]),s._v(" 强制覆盖本地代码（更新本地源）")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch --all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建一个新的标签并提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的标签并提交"}},[s._v("#")]),s._v(" 创建一个新的标签并提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.0.0 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test@1.0.0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"查看本地标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地标签"}},[s._v("#")]),s._v(" 查看本地标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除远程-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程-tag"}},[s._v("#")]),s._v(" 删除远程 tag")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地 tag")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"获取远程-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程-tag"}},[s._v("#")]),s._v(" 获取远程 tag")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"修改-remote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-remote"}},[s._v("#")]),s._v(" 修改 remote")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote set-url origin git@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("URL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("projectName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("URL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("projectName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"查看远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程分支"}},[s._v("#")]),s._v(" 查看远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本地分支"}},[s._v("#")]),s._v(" 查看本地分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建本地分支"}},[s._v("#")]),s._v(" 创建本地分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建一个空分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个空分支"}},[s._v("#")]),s._v(" 创建一个空分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --orphan "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建无历史提交的分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地代码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"删除远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[s._v("#")]),s._v(" 删除远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"本地分支推送到远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地分支推送到远程分支"}},[s._v("#")]),s._v(" 本地分支推送到远程分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如果分支合并时出现了冲突, 那么只能强上了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m master old-master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branchName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"submodule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submodule"}},[s._v("#")]),s._v(" submodule")]),s._v(" "),t("p",[s._v("当项目越来越庞大之后, 不可避免的要拆分成多个子模块, 我们希望各个子模块有独立的版本管理, 并且由专门的人去维护, 这时候我们就要用到 git 的 submodule 功能。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repository"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --recursive 递归的方式克隆整个项目\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("repository"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 添加子模块\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule init 初始化子模块\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update 更新子模块\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule foreach "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull 拉取所有子模块\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("删除子模块")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逆初始化模块, 其中{MOD_NAME}为模块目录, 执行后可发现模块目录被清空")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule deinit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MOD_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除.gitmodules中记录的模块信息（--cached选项清除.git/modules中的缓存）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MOD_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交更改到代码库, 可观察到'.gitmodules'内容发生变更")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Remove a submodule."')]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("修改模块的 URL")]),s._v(" "),t("ol",[t("li",[s._v("修改'.gitmodules'文件中对应模块的”url“属性;")]),s._v(" "),t("li",[s._v("使用 "),t("code",[s._v("git submodule sync")]),s._v(" 命令, 将新的URL更新到文件 "),t("code",[s._v(".git/config")]),s._v(" # git 中配置 autocrlf")])]),s._v(" "),t("h2",{attrs:{id:"换行符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换行符"}},[s._v("#")]),s._v(" 换行符")]),s._v(" "),t("h3",{attrs:{id:"源文件中是换行符是-lf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源文件中是换行符是-lf"}},[s._v("#")]),s._v(" 源文件中是换行符是 LF")]),s._v(" "),t("p",[s._v("如果你的源文件中是换行符是 LF, 而 "),t("code",[s._v("autocrlf=true")]),s._v(" , 此时 "),t("code",[s._v("Git add .")]),s._v(" 就会遇到 "),t("code",[s._v("fatal: LF would be replaced by CRLF")]),s._v(" 的错误。有两个解决办法:")]),s._v(" "),t("ol",[t("li",[s._v("将你的源文件中的 LF 转为 CRLF 即可【推荐】")]),s._v(" "),t("li",[s._v("将 autocrlf 设置为 false")])]),s._v(" "),t("h3",{attrs:{id:"源文件中是换行符是-crlf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源文件中是换行符是-crlf"}},[s._v("#")]),s._v(" 源文件中是换行符是 CRLF")]),s._v(" "),t("p",[s._v("如果你的源文件中是换行符是 CRLF, 而 "),t("code",[s._v("autocrlf=input")]),s._v(" , 此时 "),t("code",[s._v("Git add .")]),s._v(" 也会遇到 "),t("code",[s._v("fatal: CRLF would be replaced by LF")]),s._v(" 的错误。有两个解决办法:")]),s._v(" "),t("ol",[t("li",[s._v("将你源文件中的 CRLF 转为 LF【推荐】")]),s._v(" "),t("li",[s._v("将 autocrlf 设置为 true 或者 false")])]),s._v(" "),t("h2",{attrs:{id:"core-autocrlf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-autocrlf"}},[s._v("#")]),s._v(" core.autocrlf")]),s._v(" "),t("p",[s._v("Git 可以在你提交时自动地把行结束符 CRLF 转换成 LF, 而在签出代码时把 LF 转换成 CRLF。用 core.autocrlf 来打开此项功能, 如果是在 Windows 系统上, 把它设置成 true, 这样当签出代码时, LF 会被转换成 CRLF:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Linux 或 Mac 系统使用 LF 作为行结束符, 因此你不想 Git 在签出文件时进行自动的转换；当一个以 CRLF 为行结束符的文件不小心被引入时你肯定想进行修正, 把 core.autocrlf 设置成 input 来告诉 Git 在提交时把 CRLF 转换成 LF, 签出时不转换:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf input\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样会在 Windows 系统上的签出文件中保留 CRLF, 会在 Mac 和 Linux 系统上, 包括仓库中保留 LF。")]),s._v(" "),t("p",[s._v("如果你是 Windows 程序员, 且正在开发仅运行在 Windows 上的项目, 可以设置 false 取消此功能, 把回车符记录在库中:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建议"}},[s._v("#")]),s._v(" 建议")]),s._v(" "),t("p",[s._v("在 Mac/Liunx 上设置 "),t("code",[s._v("autocrlf = input")]),s._v(" , 在 Windows 上设置 autocrlf = true（默认值）。")]),s._v(" "),t("p",[s._v("Windows: （true） 提交时, 将 CRLF 转成 LF 再提交；切出时, 自动将 LF 转为 CRLF;")]),s._v(" "),t("p",[s._v("MAC/Linux: (input) 提交时, 将 CRLF 转成 LF 再提交；切出时, 保持 LF 即可")]),s._v(" "),t("p",[s._v("这样即可保证仓库中永远都是 LF. 而且在 Windows 工作空间都是 CRLF, 在 Mac/linux 工作空间都是 LF")])])}),[],!1,null,null,null);a.default=e.exports}}]);