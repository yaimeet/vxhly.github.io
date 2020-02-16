(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{419:function(v,_,t){"use strict";t.r(_);var r=t(2),d=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("前言")]),v._v(" "),t("p",[v._v("接触了 Liunx 也有一段时间了, 也算对 Liunx 有一定的了解, 在这里将陆续的推出 Liunx 的学习笔记系列, 做个记录, 方便以后忘记有处可循。Liunx 是以文件系统为主的, 所以 Liunx 下的每一个目录都有其各自的作用, 则本篇将介绍 Liunx 的各个目录结构及其说明")])]),v._v(" "),t("h2",{attrs:{id:"目录结构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构图"}},[v._v("#")]),v._v(" 目录结构图")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-directory-structure.png",alt:"目录结构图"}})]),v._v(" "),t("h2",{attrs:{id:"目录结构说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构说明"}},[v._v("#")]),v._v(" 目录结构说明")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("目录")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[v._v("/")])]),v._v(" "),t("td",[v._v("根目录。在 "),t("code",[v._v("Windows")]),v._v(" , "),t("code",[v._v("DOS")]),v._v(" 或者其他类似的操作系统里面, 每个分区都会有一个相应的根目录。但是 "),t("code",[v._v("Linux")]),v._v(" 和其他 "),t("code",[v._v("UNIX")]),v._v(" 系统则把所有的文件都放在一个目录树里面, "),t("code",[v._v("/")]),v._v(" 就是唯一的根目录。一般来讲, 根目录下面很少保存什么文件, 或者只有一个内核映像在这里。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/boot")])]),v._v(" "),t("td",[v._v("很多 "),t("code",[v._v("Linux")]),v._v(" 系统把内核映像和其他一些和启动有关的文件都放在这里。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/tmp")])]),v._v(" "),t("td",[v._v("一般只有启动时产生的临时文件才会放在这个地方。我们自己的临时文件都放在 "),t("code",[v._v("/var/tmp")]),v._v(" 。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/mnt")])]),v._v(" "),t("td",[v._v("这个目录下面放着一些用来安装其他设备的子目录, 比如说 "),t("code",[v._v("/mnt/cdrom")]),v._v(" 或者 "),t("code",[v._v("/mnt/floppy")]),v._v(" 。在有些 "),t("code",[v._v("Linux")]),v._v(" 中这个目录被 "),t("code",[v._v("/mount")]),v._v(" 代替。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/lib")])]),v._v(" "),t("td",[v._v("启动的时候所要用到的库文件都放在这个目录下。那些非启动用的库文件都会放在 "),t("code",[v._v("/usr/lib")]),v._v(" 下。内核模块是放在 "),t("code",[v._v("/lib/modules/")]),v._v(" （内核版本）下的。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/proc")])]),v._v(" "),t("td",[v._v("这个目录在磁盘上其实是不存在的。里面的文件都是关于当前系统的状态, 包括正在运行的进程、硬件状态、内存使用的多少等。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/dev")])]),v._v(" "),t("td",[v._v("这个目录下保存着所有的设备文件。里面有一些是由 "),t("code",[v._v("Linux")]),v._v(" 内核创建的用来控制硬件设备的特殊文件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/var")])]),v._v(" "),t("td",[v._v("这里有一些被系统改变过的数据。比如说 "),t("code",[v._v("/var/tmp")]),v._v(" , 就是用来储存临时文件的。还有很多其他的进程和模块把它们的记录文件也放在这个地方, 包括如下一些重要的子目录")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/var/log")])]),v._v(" "),t("td",[v._v("这里放着绝大部分的记录文件。随着时间的增长, 这个目录会变得很庞大, 所以要定期清理。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/var/run")])]),v._v(" "),t("td",[v._v("包括了各种运行时的信息。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/var/lib")])]),v._v(" "),t("td",[v._v("包括了一些系统运行时需要的文件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/var/spool")])]),v._v(" "),t("td",[v._v("邮件, 新闻, 打印序列的所在地。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/root")])]),v._v(" "),t("td",[t("code",[v._v("root")]),v._v(" 用户的主目录。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/home")])]),v._v(" "),t("td",[v._v("一般用户的主目录都会放在这个目录下。在 "),t("code",[v._v("Linux")]),v._v(" 下, 可以通过 "),t("code",[v._v("#cd ~")]),v._v(" 来进入自己的主目录。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/etc")])]),v._v(" "),t("td",[v._v("这里保存着绝大部分的系统配置文件。相对来讲, 单个用户的系统配置文件会保存在这个用户自己的主目录里面。下面列举其中一些重要的子目录。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/etc/X11")])]),v._v(" "),t("td",[v._v("这里放着 X 窗口系统（ "),t("code",[v._v("Linux")]),v._v(" 中的图形用户界面系统）所需要的配置文件。 "),t("code",[v._v("XF86Config")]),v._v(" 就是把配置储存到这个地方的。 "),t("code",[v._v("/etc/X11/fonts")]),v._v(" 里面放着一些服务器需要的字体, 还存放一些窗口管理器存放的配置文件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/etc/init.d")])]),v._v(" "),t("td",[v._v("这个目录保存着启动描述文件, 包括各种模块和服务的加载描述。所以如果不清楚的话, 千万不要随便删除其中的文件, 这里存放的文件都是系统自动进行配置的, 不需要用户配置。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/etc/rcS.d")])]),v._v(" "),t("td",[v._v("这里放着一些连接到 "),t("code",[v._v("/etc/init.d")]),v._v(" 的文件, 根据 "),t("code",[v._v("runlevel")]),v._v(" 的不同而执行相应的描述。这里的文件名都是由 "),t("code",[v._v("S")]),v._v(" 来开头的, 然后是一个两位的数字----表示各种服务启动的顺序。比如, "),t("code",[v._v("S24foo")]),v._v(" 就是在 "),t("code",[v._v("S42bar")]),v._v(" 前面执行的。接着就是相应的连接到 "),t("code",[v._v("/etc/init.d")]),v._v(" 下面的文件名字了。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/etc/rc0.d - /etc/rc6.d")])]),v._v(" "),t("td",[v._v("这里面也是一些连接文件, 和 "),t("code",[v._v("/etc/rcS.d")]),v._v(" 差不多。不同的是, 这些只会在指定的 "),t("code",[v._v("runlevel")]),v._v(" 下运行相应的描述。 "),t("code",[v._v("0")]),v._v(" 表示关机, "),t("code",[v._v("6")]),v._v(" 表示重启。所有以 "),t("code",[v._v("K")]),v._v(" 开头的文件表示关闭, 所有以 "),t("code",[v._v("S")]),v._v(" 开头的文件表示重启。目前来讲, 文件的命名方式和 "),t("code",[v._v("/etc/rcS.d")]),v._v(" 是一样的。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/bin, /sbin")])]),v._v(" "),t("td",[v._v("这里分别放着启动时所需要的普通程序和系统程序。很多程序在启动以后也很有用, 它们放在这个目录下是因为它们经常要被其他程序调用。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr")])]),v._v(" "),t("td",[v._v("这是一个很复杂、庞大的目录。除了上述目录之外, 几乎所有的文件都存放在这下面。下面列举其中一些重要的子目录。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/X11R6, /usr/X11, /usr/Xfree86")])]),v._v(" "),t("td",[v._v("这里保存着 X 窗口系统所需要的文件, 它的目录结构和 "),t("code",[v._v("/usr")]),v._v(" 是一样的。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/bin")])]),v._v(" "),t("td",[v._v("二进制可执行文件存放的目录, 这里放着绝大部分的应用程序。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/sbin")])]),v._v(" "),t("td",[v._v("这里放着绝大部分的系统程序。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/games")])]),v._v(" "),t("td",[v._v("游戏程序和相应的数据会放在这里。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/include")])]),v._v(" "),t("td",[v._v("这个目录保存着 "),t("code",[v._v("C")]),v._v(" 和 "),t("code",[v._v("C++")]),v._v(" 的头文件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/lib")])]),v._v(" "),t("td",[v._v("启动时用不到的库文件都会放在这里。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/info")])]),v._v(" "),t("td",[v._v("这里保存着 "),t("code",[v._v("GNU Info")]),v._v(" 程序所需要的数据。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/man")])]),v._v(" "),t("td",[v._v("这里保存着 "),t("code",[v._v("man")]),v._v(" 程序所需要的数据。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/src")])]),v._v(" "),t("td",[v._v("这里保存着源代码文件。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/doc")])]),v._v(" "),t("td",[v._v("这里保存着各种文档文件。这些文件可以帮助你了解 "),t("code",[v._v("Linux")]),v._v(" , 解决问题和提供一些技巧。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/local")])]),v._v(" "),t("td",[v._v("这里保存着本地计算机所需要的文件。在用户进行远程访问的时候特别有意义。这个目录在有些 "),t("code",[v._v("Linux")]),v._v(" 系统下就是一个单独的分区, 存放一些这台机子所属的那个用户的文件。里面的结构和 "),t("code",[v._v("/usr")]),v._v(" 是一样的。")])]),v._v(" "),t("tr",[t("td",[t("strong",[v._v("/usr/shared, /usr/share")])]),v._v(" "),t("td",[v._v("这里保存着各种共享文件。")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);