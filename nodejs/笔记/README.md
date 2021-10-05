# Node.js是什么

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

## 预备知识

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

  ## 一些资源

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

## 这门课程  能学到啥

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

## REPL

- read(读取文件)
- eval(执行输入的代码)
- print(输出)
- loop(循环)

在终端中输入`node`命令直接敲回车

退出时按两次Ctrl+C (Ctrl+C Ctrl+C退出node)

这个环境的作用只是用来帮助我们做一些辅助测试，例如在里面可以直接使用node中的核心模块而不需要require加载

## Hello World

1.创建编写JavaScript脚本文件

2.打开终端，定位到脚本文件所属目录

3.输入`node文件名`执行对应的文件

注意：文件名不要使用`node.js`来命名，也就是说除了`node`这个名字之外都可以随便起，而且最好也不要使用中文

- 解析执行JavaScript
- 读写文件
- http

3.Node中的JavaScript

- Ecmascript
  - 没有DOM、BOM
- 核心模块
- 第三方模块
- 用户自定义模块

## 3.1Ecmascript

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

###### 5.4.1 package.json和package-lock.json

npm 5 以前是不会有`package-lock.json`这个文件的

npm 5 以后才加入了这个文件。

- npm 5以后的版本安装包不需要加`--save`参数，它会自动保存依赖信息
- 当我们安装包的时候，会自动创建或者是更新`package-lock.json`这个文件
- `package-lock.json`这个文件会保存`node_modules`中所有包的信息（版本、下载地址）
  - 这样的话重新`npm install`的时候速度就可以提升
- 从文件来看，有一个`lock`称之为锁
  - 这个`lock`是用来锁定版本的
  - 如果项目依赖了`1.1.1`版本，而如果我们重新install其实会下载最新版本，而不是1.1.1.
  - 我们的目的就是希望可以锁住1.1.1这个版本，所以这个`package-lock.json`这个文件的另一个作用就是锁定版本号，防止自动升级新版。 

#### 6. path路径操作模块

参考文档:[Path | Node.js v14.17.6 Documentation (nodejs.org)](https://nodejs.org/dist/latest-v14.x/docs/api/path.html)

- path.basename
  - 获取一个路径的文件名(包含扩展名)
- path.dirname
  - 获取一个路径中的目录部分
- path.extname
  - 获取一个路径的扩展名部分
- path.parse
  - 把一个路径转为对象
    - root：根目录
    - dir：目录
    - base：包含后缀名的文件名
    - ext：后缀名
    - name：不包含后缀名的文件名
- path.join
  - 当你需要进行路径拼接的时候，推荐使用这个方法
- path.isAbsolute   判断一个路径是否是绝对路径

#### 7.Node中的其它成员

在每个模块中，除了`require`、`exports`等模块相关API之外，还有两个特殊的成员：

- `__dirname`  **动态获取** 可以用来获取当前文件模块所属目录的绝对路径
- `__filename`  **动态获取** 可以用来获取当前文件的绝对路径
- `__dirname`和`__filename`是不受执行node命令所属路径影响的

在文件操作中，使用相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对于执行node命令所处的路径（不是bug，人家这样设计是有使用场景的）。

所以为了解决这个问题，很简单，只需要把相对路径变为绝对路径就可以了。

那这里我们就可以使用`__dirname`或者`__filename`来帮我们解决这个问题了。

在拼接路径的过程中，为了避免手动拼接带来的一些低级错误，所以推荐多使用`path.join()`来辅助拼接。

所以为了尽量避免刚才所描述的这个问题，我们以后在文件操作中使用的相对路径都统一转换为**动态的绝对路径**。

> 补充：模块的路径标识和这里的路径没关系，不受影响（相对于文件模块）

#### 8. Express

原生的http在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度统一。

在Node中，有很多Web开发框架，我们这里以学习`express`为主。

- http://expressjs.com/

##### 8.1 起步

**安装**

```javascript
npm install --save express
```

**hello world**

```javascript
const express = require("express");
const app = express();

app.get("/",(req,res) => res.send("hello world!"));

app.listen(3000,() => console.log("EXample app listening on port 3000!"))
```

**基本路由**

路由器

- 请求方法
- 请求路径
- 请求处理函数

get：

```javascript
//当我们以GET方法请求 / 的时候，执行对应的处理函数
app.get("/",function(req,res){
    res.send("Hello world!")
})
```

post:

```javascript
//当我们以POST方法请求 / 的时候，指定对应的处理函数
app.post("/",function(req,res){
    res.send("Got a POST request")
})
```

**静态服务**

```javascript
// /public资源
app.use(express.static("public"));
//	/files资源
app.use(express.static("files"));

//	/public/xxx
app.use("/static",express.static("public"))

app.use("/static",express.static(path.join(_dirname,"public")))
```

##### 8.2 在Express中配置使用art-template模板引擎

- [art-template GitHub仓库](https://github.com/aui/art-template)
- [art-template官方文档](http://aui.github.io/art-template/)

安装：

```shell
npm install --save art-template
npm install --save express-art-template
```

配置：

```javascript
app.engine("art", require("express-art-template"));
```

使用：

```javascript
app.get("/", function (req, res) {
    
  res.render("index.html",{
      title:"hello world"
  });
});
```

如果希望修改默认的`views`视图渲染存储目录，可以：

```javascript
//注意：第一个参数views千万不要写错
app.set("views",目录路径)
```

##### 8.3 在Express获取表单POST请求体数据

Express内置了一个API，可以通过`req.query`来获取

```javascript
req.query
```



##### 8.4 在Express获取表单POST请求体数据

在Express中没有内置表单POST请求体的API，这里我们需要使用一个第三方包：`body-parser`。

安装：

```javascript
npm install --save body-parser
```

配置：

```javascript
var express = require('express')
//0.引包
var bodyParser = require('body-parser')

var app = express()

//配置body-parser
//只要加入这个配置，则在req请求对象上多出来一个属性：body
//也就是说我们就可以直接通过req.body来获取表单POST请求体数据了

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

使用：

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  //可以通过req.body来获取表单POST请求体数据
  res.end(JSON.stringify(req.body, null, 2))
})
```

##### 8.4.1 在Express配置使用`express-session`插件

> 参考文档：[express-session - npm (npmjs.com)](https://www.npmjs.com/package/express-session)

安装：

```javascript
npm install express-session
```

配置：

```javascript
//该插件会为req请求对象添加一个成员：req.session默认是一个对象
//这是最简单的配置方式，暂且先不关心里面参数的含义
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
```

使用：

```javascript
//添加Session数据
req.session.foo = "bar";
//获取Session数据
req.session.foo;
```

提示：默认Session数据是内存存储的，服务器一旦重启就会丢失，真正的环境会把Session进行持久化存储

##### 8.5 CRUD案例

##### 8.5.1. 模块化思想

模块如何划分：

- 模块职责要单一
- 包括Vue、angular、React全部都是
- 也非常有利于学习前端三大框架

##### 8.5.2. **起步**

- 初始化
- 安装依赖
- 模板处理

##### 8.5.3. **路由设计**

| 请求方法 | 请求路径          | get参数 | post参数                       | 备注             |
| -------- | ----------------- | ------- | ------------------------------ | ---------------- |
| GET      | /students         |         |                                | 渲染首页         |
| GET      | /students/new     |         |                                | 渲染添加学生页面 |
| POST     | /students/new     |         | name、age、gender、hobbies     | 处理添加学生请求 |
| GET      | /students /edit   | id      |                                | 渲染编辑页面     |
| POST     | /students /edit   |         | id、name、age、gender、hobbies | 处理编辑请求     |
| GET      | /students /delete | id      |                                | 处理删除请求     |



##### 8.5.4.**提取路由模块**

router.js:

```javascript
var fs = require("fs");
var Student = require("./student");

// Express提供了一种更好的方法
// 专门用来包装路由的
var express = require("express");

// 1.创建一个路由器
var router = express.Router();

// 2.把路由都挂载到router路由容器中
router.get("/students", function (req, res) {
  });
router.get("/students/new", function (req, res) {
  res.render("new.html");
});
router.post("/students/new", function (req, res) {
});
router.get("/students/edit", function (req, res) {
    
});
router.post("/students/edit", function (req, res) {
    
});
router.get("/students/delete", function (req, res) {
    
});
//   3.把router导出
module.exports = router;
```

app.js:

```javascript
var router = require("./router");

// 把路由容器挂载到app服务中
app.use(router);
```

**设计操作数据的API文件模块**

```javascript
/* 
students.js
数据操作文件模块
职责：操作文件中的数据，只处理数据，不关心业务
*/

/* 
获取所有学生列表
*/
exports.find = function () {
};

/* 
添加保存学生
*/
exports.save = function () {
};
/* 
更新学生
*/
exports.update = function () {
};
/* 
删除学生
*/
exports.delete = function () {
};

```



##### 8.6 设计操作数据的API文件模块

```javascript
/* 
students.js
数据操作文件模块
职责：操作文件中的数据，只处理数据，不关心业务
*/

/* 
获取所有学生列表
*/
exports.find=function(){
     
}
/* 
添加保存学生
*/
exports.save=function(){
    
}
/* 
更新学生
*/
exports.update=function(){
    
}
/* 
删除学生
*/
exports.delete=function(){
    
}
```

回调函数：获取异步操作的结果

##### 7.6.1 自己编写的步骤

- 处理模板
- 配置开放静态资源
- 配置模板引擎
- 简单路由：/students渲染静态页出来
- 路由设计
- 提取路由模块
- 由于接下来一些列的业务操作都需要处理文件数据，所以我们需要封装student.js
- 先写好student.js文件结构
  - 查询所有学生列表的API(find)
  - findById 查询一个
  - save 保存
  - updateById
  - deleteById
- 实现具体功能
  - 通过路由收到请求
  - 接受请求中的数据(get、post)
    - req.query
    - req.body
  - 调用数据操作API处理数据
  - 根据操作结果给客户端发送响应
- 业务功能顺序
  - 列表
  - 添加
  - 编辑
  - 删除
- es6 API
  - find
  - findIndex

执行过程中不会等待异步操作，哪怕异步操作定时器为0s

```javascript
function add(x,y){
    console.log(1);
    setTimeout(function(){
        console.log(2);
        var ret = x + y;
        return ret;
    },1000);
    console.log(3);
    //到这里执行就结束了，不会等到前面的定时器，所以直接就返回了默认值undefined
}
console.log(add(10,20));
//输出结果：1 3  undefined 2
```

#### 8.异步编程

##### 8.1. 回调函数

不成立的情况：

1.

```javascript
function add(x,y){
    console.log(1);
    setTimeout(function(){
        console.log(2);
        var ret = x + y;
        return ret;
    },1000);
    console.log(3);
    //到这里执行就结束了，不会等到前面的定时器，所以直接就返回了默认值undefined
}
console.log(add(10,20));//undefined
//输出结果：1 3  undefined 2
```

2.

```javascript
function add(x,y){
    var ret;
    console.log(1);
    setTimeout(function(){
        console.log(2);
        ret = x + y;
    },1000);
    console.log(3);
    return ret;
}
console.log(add(10,20));//undefined
//输出结果：1 3  undefined 2
```

一般情况下，把函数作为参数的目的就是获取函数内部的一步操作结果。

注意：凡是需要得到一个函数内部异步操作(setTimeout、readFile、writeFile、ajax)的结果，必须通过回调函数。

往往异步API都伴随有一个回调函数

回调函数：

```javascript
function add(x,y,callback){
    //callback就是回调函数
    /*
    相当于：
    var x = 10;
    var y = 20;
    var callback = function(ret){
    console.log(ret);
    }
    */
    console.log(1);
    setTimeout(function(){
        var ret = x + y;
        callback(ret);
    },1000);
}
add(10,20,function(ret){
    console.log(ret);
    //我们现在拿到这个结果可以做任何操作
})
```

如何熟练达到像定义一个变量一样来封装一个带有回调函数的方法。

主要原因在于写得少，这是JavaScript编程的一大特色：异步编程。

甚至很多具有服务端开发经验的都不太容易熟悉这种方式。



**基于原生XMLHttpRequest封装get方法**

```javascript
function get(url, callback) {
            var oReq = new XMLHttpRequest();
            // 当请求加载成功之后要调用指定的函数
            oReq.onload = function () {
                // 我们现在需要得到这里的oReq.responseText
                callback(oReq.responseText);
            }
            oReq.open("get", url, true);
            oReq.send();
        }

        get("data.json", function (data) {
            console.log(data);
        })
```

##### 8.2. Promise

callback hell：

无法保证顺序的代码：

```javascript
var fs = require("fs");

fs.readFile("./data/a.txt", "utf-8", function (err, data) {
  if (err) {
    // return console.log("读取失败");

    // 抛出异常 js语法
    //   1.阻止程序的执行
    //   2.把错误消息打印到控制台
    throw err;
  }
  console.log(data);
});

fs.readFile("./data/b.txt", "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});

fs.readFile("./data/c.txt", "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});

```

通过回调嵌套的方式来保证顺序：

```JavaScript
var fs = require("fs");

fs.readFile("./data/a.txt", "utf-8", function (err, data) {
  if (err) {
    // return console.log("读取失败");

    // 抛出异常 js语法
    //   1.阻止程序的执行
    //   2.把错误消息打印到控制台
    throw err;
  }
  console.log(data);

  fs.readFile("./data/b.txt", "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    console.log(data);

    fs.readFile("./data/c.txt", "utf-8", function (err, data) {
      if (err) {
        throw err;
      }
      console.log(data);
    });
  });
});

```

为了解决以上编码方式带来的问题(回调地狱嵌套)，所以在Ecmascript 6 中新增了一个API：`Promise`。

- Promise的英文就是承诺、保证的意思

Promise基本语法：

```javascript
var fs = require("fs");

// 在Ecmascript 6 中新增了一个API Promise
// Promise是一个构造函数

// 创建Promise容器
// 1.给别人一个承诺
console.log(1);

//   Promise容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  console.log(2);
  fs.readFile("./data/a.txt", "utf-8", function (err, data) {
    if (err) {
      // 失败了，承诺容器中的任务失败了
      //   console.log(err);
      // 把容器的Pending状态变为Rejected
      //   调用reject就相当于调用了then方法的第二个参数函数
      reject(err);
    } else {
      //   console.log(3);
      // 承诺容器中的任务成功了
      //   console.log(data);
      // 把容器的Pending状态改为成功Resolved
      //   也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data);
    }
  });
});
// console.log(4);

// p1就是那个承诺
// 当p1成功了，然后(then)做指定的操作
p1.then(
  function (data) {
    console.log(data);
  },
  function (err) {
    console.log("读取文件失败了", err);
  }
);

```

![1](C:\Users\lx\Desktop\1.png)

Promise本身不是异步，但是内部往往都是封装一个异步任务。

封装Promise版本的`readFile`：

```javascript
var fs = require("fs");

function pReadFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

pReadFile("./data/a.txt")
  .then(function (data) {
    console.log(data);
    return pReadFile("./data/b.txt");
  })
  .then(function (data) {
    console.log(data);
    return pReadFile("./data/c.txt");
  })
  .then(function (data) {
    console.log(data);
  });
```



#### 9.MongoDB

参考[MongoDB 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/mongodb/mongodb-tutorial.html)

##### 9.1. 关系型数据库和非关系型数据库

表就是关系，或者说表与表之间存在关系。

- 所有的关系型数据库都需要通过`sql`语言来操作
- 所有的关系型数据库在操作之前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空
- 非关系型数据库非常灵活
- 有的非关系型数据库就是key-value对
- 但是MongoDB是长得最像关系型数据库的非关系型数据库
  - 数据库--》数据库
  - 数据表--》集合(数组)
  - 表记录--》(文档对象)
- MongoDB不需要设计表结构，也就是说我们可以任意地往里面存数据，没有结构性一说

##### 9.2 安装

- 64位下载地址：[MongoDB Community Download | MongoDB](https://www.mongodb.com/try/download/community)
- 安装
- 配置环境变量
- 最后输入`mongod --version`测试是否安装成功

##### 9.3. 启动和关闭数据库

启动：

```shell
#mongodb 默认使用执行 mongod命令所处盘符根目录下的 /data/db 作为自己数据存储目录
#所以在第一次执行该命令之前先自己手动新建一个/data/db
mongod
```

如果想要修改默认的数据存储目录，可以：

```javascript
mongod --dbpath=数据存储目录路径
```

停止：

```shell
在开启服务的控制台，直接Ctrl+c即可停止。
或者直接关闭开启服务的控制台也可以。
```

##### 9.4. 连接和退出数据库

连接：

```shell
#该命令默认连接本机的MongoDB服务
mongo
```

退出：

```shell
#在连接状态输入exit退出连接
exit
```

##### 9.5. 基本命令

- `show dbs`
  - 查看显示所有数据库
- `db`
  - 查看当前操作的数据库
- `use 数据库名称`
  - 切换到指定的数据库(如果没有会新建)
- 插入数据

##### 9.6. Node中如何操作MongoDB数据

###### 9.6.1 使用官方的`mongodb`包来操作

[mongodb/node-mongodb-native: The Official MongoDB Node.js Driver (github.com)](https://github.com/mongodb/node-mongodb-native)

###### 9.6.2 使用第三方mongoose来操作MongoDB数据库

第三方包：`mongoose`基于MongoDB官方的`mongodb`包再一次做了封装。

- 官网：[Mongoose ODM v6.0.7 (mongoosejs.com)](https://mongoosejs.com/)
- 官方指南：[Mongoose v6.0.7: Schemas (mongoosejs.com)](https://mongoosejs.com/docs/guides.html)
- 官方API文档：[Mongoose v6.0.7: API docs (mongoosejs.com)](https://mongoosejs.com/docs/api.html)

安装：

```javascript
npm i mongoose
```

hello world:

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

**MongoDB数据库的基本概念**

- 可以有多个数据库
- 一个数据库中可以有多个集合(表)
- 一个集合中可以有多个文档(表记录)
- 文档结构很灵活，没有任何限制
- MongoDB非常灵活，不需要像MySQL一样先创建数据库、表、设计表结构
  - 在这里只需要：当我们需要插入数据的时候，只需要指定往哪个数据库的哪个集合操作就可以了
  - 一切都由MongoDB来帮我们自动完成建库建表这件事

```javascript
{
    qq:{
        users:[
            {name:'张三',age:15},
            {name:'李四',age:15},
            {name:'王五',age:15},
            ...
        ],
            products:[
            
        ],
        ...
    },
    taobao:[
                
            ]
}
```

**官方指南**

设计Schema发布model

```javascript
const mongoose = require("mongoose");
import mongoose from "mongoose";
const { Schema } = mongoose;

// 1.连接MongoDB数据库
// 指定连接的数据库不需要存在，当我们插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost:27017/test");

// 2.设计文档结构(表结构)
// 字段名称就是表结构中的属性名称
// 值
// 约束的目的是保证数据的完整性，不要有脏数据
const blogSchema = new Schema({
  username: {
    type: String,
    required: true, //必须有
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

//3.将文档结构发布为模型
// mongoose.model方法就是用来将一个架构发布为model
// 第一个参数：传入一个大写单数名词字符串用来表示我们的数据库名称
//          mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
//          例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
// 返回值：模型构造函数
const User = mongoose.model("User", userSchema);

// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 users集合中的数据为所欲为了(增删改查)

```

增加数据

```javascript
const admin = new User({
  username: "admin",
  password: "123456",
  email: "admin@admin.com",
});
admin.save(function (err, ret) {
  if (err) {
    console.log("保存失败");
  } else {
    console.log("保存成功");
    console.log(ret);
  }
});

```

查询

查询所有:

```javascript
User.find(function (err, ret) {
  if (err) {
    console.log("查询失败");
  } else {
    console.log(ret);
  }
});
```

按条件查询所有：

```javascript
User.find(
  {
    username: "zs",
  },
  function (err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      console.log(ret);
    }
  }
);
```

按条件查询单个：

```javascript
User.findOne(
  {
    username: "zs",
  },
  function (err, ret) {
    if (err) {
      console.log("查询失败");
    } else {
      console.log(ret);
    }
  }
);
```

**删除数据**

根据条件删除一个：

```javascript
User.deleteOne(
  {
    password: "123456",
  },
  function (err, ret) {
    if (err) {
      console.log("删除失败");
    } else {
      console.log("删除成功");
      console.log(ret);
    }
  }
);
```

根据条件删除多个：

```javascript
User.deleteMany(
  {
    password: "123456",
  },
  function (err, ret) {
    if (err) {
      console.log("删除失败");
    } else {
      console.log("删除成功");
      console.log(ret);
    }
  }
);
```

**更新数据**

根据条件更新所有：

```javascript
Model.update()
```

根据指定条件更新一个：

```javascript
Model.findByIdAndUpdate()
```

```javascript
Model.updateOne()
```

更新多个：

```javascript
Model.updateMany()
```

根据id更新一个：

```javascript
User.findByIdAndUpdate(
  "614ee04decfad3e7f96d80a5",
  { password: "123" },
  function (err, ret) {
    if (err) {
      console.log("更新失败");
    } else {
      console.log("更新成功");
      console.log(ret);
    }
  }
);
```



#### 10.其他

##### 文件操作路径和模块路径

文件操作路径：

```javascript
/* 
在文件操作的相对路径中
./data/a.txt 相当于当前目录
data/a.txt   相对于当前目录
/data/a.txt   绝对路径，当前文件模块所处磁盘根目录
c:/xx/xx...  绝对路径
*/
fs.readFile("./data/a.txt", function (err, data) {
  if (err) {
    return console.log("读取失败");
  }
  console.log(data.toString());
});
```

模块操作路径：

```javascript
//   这里如果忽略了,则也是磁盘根目录
require("/data/foo");
//相对路径
require ("./data/foo");
//模块加载的路径中的相对路径不能省略./
```

#### 11. Node综合Web案例

##### 1. 目录结构

```shell
.
|--app.js			 项目的入口文件
|--controllers
|--models			 存储使用mongoose设计的数据模型
|--node_modules		 第三方包
|--package.json		 包描述文件
|--package-lock.json  第三方包版本锁定文件（npm 5 以后才有）
|--public			  公共的静态资源
|--README.md		  项目说明文档
|--routes			  如果业务比较多，代码量大，最好把路由按照业务的分类存储到routes目录中
|--router.js		  简单一点把所有的路由都放到这个文件
|--views			  存储视图目录
```

##### 2. 模板页

- art-template子模板
- art-template模板继承

##### 3.路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要登录 | 备注         |
| --------- | ---- | ------- | ------------------------- | ------------ | ------------ |
| /         | GET  |         |                           |              | 渲染首页     |
| /register | GET  |         |                           |              | 渲染注册页面 |
| /register | POST |         | email、nickname、password |              | 处理注册请求 |
| /login    | GET  |         |                           |              | 渲染登录页面 |
| /login    | POST |         | email、password           |              | 处理登陆请求 |
| /logout   | GET  |         |                           |              | 处理退出请求 |

#### 4.模型设计

#### 5.功能实现

#### 6.书写步骤

- 创建目录结构
- 整合静态页-模板页
  - include
  - block
  - extend
- 设计用户登录、注册、退出的路由
- 用户注册
  - 先处理好客户端页面的内容（表单控件的name、收集表单数据、发起请求）
  - 服务端
    - 先获取客户端请求数据
    - 操作数据库
      - 如果有错，发送500告诉客户端服务器错了
      - 其他的根据我们的业务发送不同的响应数据
- 用户登录
- 用户退出
