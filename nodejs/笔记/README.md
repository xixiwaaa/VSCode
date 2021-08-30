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

#### Hello World

1.创建编写JavaScript脚本文件

2.打开终端，定位到脚本文件所属目录

3.输入`node文件名`执行对应的文件

注意：文件名不要使用`node.js`来命名，也就是说除了`node`这个名字之外都可以随便起，而且最好也不要使用中文

- 解析执行JavaScript
- 读写文件
- http
