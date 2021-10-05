#### Node.js是什么

- Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

  - Node.js不是一门语言
  - Node.js不是库、不是框架
  - Node.js是一个JavaScript运行时环境
  - 简单点来说就是Node.js可以解析和执行JavaScript代码
  - 以前只有浏览器可以解析执行JavaScript代码
  - 也就是说现在的JavaScript可以完全脱离浏览器来运行，一切都归功于：Node.js

- 浏览器中的JavaScript

  - EcmaScript
    - 基本的语法
    - if
    - var
    - function
    - Object
    - Array
  - BOM
  - DOM

- Node.js中的JavaScript

  - 没有BOM、DOM
  - EcmaScript
  - 在Node.js这个JavaScript执行环境中为JavaScript提供了一些服务器级别的操作API
    - 例如文件读写
    - 网络服务的构建
    - 网络通信
    - http服务器
    - 等处理……

- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

  - event-driven事件驱动
  - non-blocking I/O model非阻塞IO模型(异步)
  - ightweight and efficient轻量和高效
  - 随着课程的学习会慢慢明白什么是事件驱动、非阻塞IO模型

- Node.js' package ecosystem, [npm](https://link.jianshu.com/?t=https://www.npmjs.com/), is the largest ecosystem of open source libraries in the world.

  - npm是世界上最大的开源库生态系统

  - 绝大多数JavaScript相关的包都存放在了npm上，这样做的目的是为了让开发人员更方便地去下载使用

    ```
    npm install jquery
    ```

#### 预备知识

- HTML

- CSS

- JavaScript

- 简单的命令行操作

  - cd
  - dir
  - ls
  - mkdir
  - rm

- 具有服务端开发经验更佳

  #### 一些资源

- 《深入浅出Node.js》
  - 作者：朴灵
  - 偏理论，几乎没有任何实战内容
  - 结合课程的学习去看(不推荐现在自己去看)
- 《Node.js权威指南》
  - API讲解
  - 也没有业务，没有实战
- 《JavaScript标准参考教程》http://javascript.ruanyifeng.com/
- Node入门：http://www.nodebeginner.org/index-zh-cn.html
- 官方 API文档：https://nodejs.org/dist/latest-v16.x/docs/api/
- 中文文档(版本比较旧，凑合看)：http://www.nodeclass.com/api/node.html
- CNODE社区：http://cnodejs.org
- CNODE-新手入门：http://cnodejs.org/getstart

#### 这门课程  能学到啥

- B/S编程模型

  - Browser-Server
  - back-end
  - 任何服务端技术这种B/S编程模型都是一样，和语言无关
  - Node只是作为我们学习编程模型的一个工具而已

- 模块化编程

  - RequireJS

  - SeaJS

  - ```
    @import('文件路径')
    ```

  - 以前认知的JavaScript只能通过`script`标签来加载
  - 在Node中可以像`@import`一样来加载JavaScript脚本文件

- Node常用API

- 异步编程

  - 回调函数
  - Promise
  - async
  - generator

- Express开发框架

- Ecmascript 6

- ……

#### REPL

- read(读取文件)
- eval(执行输入的代码)
- print(输出)
- loop(循环)

在终端中输入`node`命令直接敲回车

退出时按两次Ctrl+C (Ctrl+C Ctrl+C退出node)

这个环境的作用只是用来帮助我们做一些辅助测试，例如在里面可以直接使用node中的核心模块而不需要require加载

#### Hello World

1.创建编写JavaScript脚本文件

2.打开终端，定位到脚本文件所属目录

3.输入`node文件名`执行对应的文件

注意：文件名不要使用`node.js`来命名，也就是说除了`node`这个名字之外都可以随便起，而且最好也不要使用中文

- 解析执行JavaScript
- 读写文件
- http



#### 3.Node中的JavaScript

- Ecmascript
  - 没有DOM、BOM
- 核心模块
- 第三方模块
- 用户自定义模块

##### 3.1Ecmascript

##### 3.2核心模块

Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。例如文件操作的`fs`核心模块，http服务构建的`http`模块，`path`路径操作模块、`os`操作系统信息模块。



以后只要说这个模块是一个核心模块，就要马上想到如果想要使用它，就必须先使用`require`方法加载才能使用：

```javascript
var fs = require('fs');
var http = require('http');
```

##### 3.3用户自定义模块

- require
- exports

##### 3.4第三方模块

#### 4.Web服务器开发

##### 	IP地址和端口号

- IP地址用来定位计算机
- 端口号用来定位具体的应用程序
- 所有需要联网通信的应用程序都会占用一个端口号
- 端口号的范围从0-65536
- 在计算机中有一些默认端口号，最好不要去使用
  - 例如http服务的80
- 我们在开发过程中使用一些简单好记的就可以了
- 可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以
- 说白了，在一台计算机中，同一个端口号同一时间只能被一个程序占用

#### 5.Node中的模块系统

使用Node编写应用程序主要就是在使用：

- Ecmascript语言
  - 和浏览器不一样，在Node中没有BOM、DOM
- 核心模块
  - 文件操作的fs
  - http服务的http
  - url路径操作模块
  - path路径处理模块
  - os操作系统信息
- 第三方模块
  - art-template
  - 必须通过npm下载才可以使用
- 自己写的模块
  - 自己创建的文件

##### 5.1 什么是模块化

- 文件作用域
- 通信规则
  - 加载require
  - 导出

##### 5.2 CommonJS模块规范

在Node中的JavaScript还有一个很重要的概念：模块系统

- 模块作用域
- 使用require方法用来加载模块
- 使用exports接口对象用来导出模块中的成员

###### 5.2.1加载require

语法：

`var 自定义变量名称 = require('模块')`

两个作用“

- 执行被加载模块中的代码
- 得到被加载模块中的`exports`导出接口对象

###### 5.2.2 导出`exports`

- Node中是模块作用域，默认文件中所有的成员只在当前文件模块有效
- 对于希望可以被其他模块访问的成员，我们就需要把这些公开的成员挂载到`exports`接口对象中就可以了

导出多个成员(必须在对象中)

```javascript
eaports.a = 123;
exports.b = 'hello';
exports.c = function () {
    console.log('ccc');
}
exports.d = {
    foo:'bar';
}
```

导出单个成员(拿到的就是：函数、字符串)：

```javascript
module.exports = 'hello'
```

以下情况会覆盖：

```javascript
module.exports = 'hello';

//以这个为准，后者会覆盖前者
module.exports = function (x, y) {
  return x + y;
};
```

也可以这样来导出多个成员：

```javascript
module.exports = {
    add:function () {
        return x + y;
    },
    str:'hello',
}
```

###### 5.2.3 原理解析

exports和`module.exports`的一个引用(地址指向同一个)：

```javascript
console.log(exports === module.exports) //=>true

exports.foo = 'bar';

//等价于
module.exports.foo = 'bar';
```

###### 5.2.4 require方法加载规则

- 核心模块
  - 模块名
- 第三方模块
  - 模块名
- 用户自己写的
  - 路径



- 优先从缓存加载
- 判断模标识
  - 核心模块
  - 第三方模块
  - 自己写的模块

##### 5.3 npm

- node package manager

###### 5.3.1 npm网站

[npmjs.com]()

###### 5.3.2 npm命令行工具

npm的第二层含义就是一个命令行工具，只要我们安装了node就已经安装了npm。

npm也有版本这个概念。

可以通过在命令行中输

```javascript
npm --version
```

升级npm(自己升级自己)：

```javascript
npm install --global npm
```

###### 5.3.3. 常用命令

- npm init
  - npm init -y 可以跳过向导，快速生成
- npm install
  - 一次性把dependencies选项中的依赖项全部安装
- npm install 包名
  - 只下载
  - npm i 包名
- npm install --save 包名
  - 下载并且保存依赖项(package.json文件中的dependencies选项)
  - npm i -S 包名
- npm uninstall  包名
  - 只删除，如果有依赖项会依然保存
  - npm un 包名
- npm uninstall --save 包名
  - 删除的同时也会把依赖项信息去除
  - npm un -S 包名
- npm help
  - 查看使用帮助
- npm 命令 --help
  - 查看指定命令的使用帮助
  - 例如：我们忘记了uninstall命令的简写了，这个时候，可以输入`npm uninstall --help`来查看帮助

###### 5.3.4 解决npm被墙问题

npm存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题。

[https://npm.taobao.org](https://npm.taobao.org/)淘宝的开发团队把npm在国内做了一个备份。

安装淘宝的cnpm：

```javascript
//在任意目录执行都可以
//--global 标识安装到全局，而非当前目录
//--global不能省略，否则不管用
npm install --global cnpm
```

接下来我们安装包的时候把之前的npm替换成cnpm。

举个例子：

```javascript
//这里还是走国外的npm服务器，速度比较慢
npm install jquery

//使用cnpm就会通过淘宝的服务器来下载jquery
cnpm install jquery
```

如果不想安装`cnpm`又想使用淘宝的服务器来下载：

```javascript
npm install jquery --registry=https://registry.npm.taobao.org
```

但是每一次手动这样加参数很麻烦，所以我们可以把这个选项加入配置文件中：

```javascript
npm config set registry https://registry.npm.taobao.org

//查看npm配置信息
npm config list
```

只要经过了上面命令的配置，则我们以后所有的`npm install`都会默认通过淘宝的服务器来下载

##### 5.4 package.json

我们建议每一个项目都要有一个`package.json`文件(包含描述文件，就像产品的说明书一样)，给人踏实的感觉。

这个文件可以通过`npm init`的方式来自动初始化出来。

对于咱们目前来讲，最有用的是`dependencies`选项，可以用来帮我们保存第三方包的依赖信息。

如果你的`node_modules`删除了也不用担心，我们只需要：`npm install`就会自动吧`package.json`中的`dependencies`中所有的依赖项都下载回来。

- 建议每个项目的根目录下都有一个`package.json`文件
- 建议执行`npm install`包名的时候都加上--save这个选项，目的是用来保存依赖信息。

#### 6. Express

