// 0.安装
// 1.引包
const { response } = require("express");
var express = require("express");

// 2.创建服务器应用程序
// 也就是原来的http.createServer
var app = express();

// 在express中开放资源就是一个API的事儿
// 公开指定目录
// 只要这样做了，你就可以直接通过/a/xxx的方式访问a目录中的所有资源了
app.use("/a/", express.static("./a"));
app.use("/node_modules/", express.static("./node_modules"));

// 当服务器收到get请求 / 的时候执行回调处理函数
app.get("/", function (req, res) {
  res.send("hello express!");
});

app.get("/about", function (req, res) {
  res.send("你好，我是express!");
});

// 相当于server.listen
app.listen(3000, function () {
  console.log("app is running at port 3000");
});
