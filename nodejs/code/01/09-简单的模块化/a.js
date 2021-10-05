// require是一个方法
// 它的作用是用来加载模块的
// 在Node中，模块有三种：
//     具名的核心模块，例如：fs、http
//     用户自己编写的文件模块
//        相对路径必须加 ./
//        可以省略后缀名
//        相对路径中的 ./ 不能省略，否则会报错
//      在Node中，没有全局作用域，只有模块作用域
//         外部访问不到内部，内部也访问不到外部
/* 
    既然是模块作用域，那如何让模块与模块之间进行通信
    有时候我们加载文件模块的目的不是为了
*/

var foo = "aaa";

console.log("a start");

function add(x, y) {
  return x + y;
}

require("./b.js");

// 推荐：可以省略后缀名
// require("./b");

console.log("a end");

console.log("foo的值是：", foo); //输出aaa
