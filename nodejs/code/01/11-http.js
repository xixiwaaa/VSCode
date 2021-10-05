// require
// 端口号

var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  /* 
  在服务端默认发送的数据，其实是utf8编码的内容
  但是浏览器不知道你是utf8编码的内容
  浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
  中文操作系统默认是gbk
  解决方法就是正确的告诉浏览器我们给它发送的内容是什么编码的
  在http协议中，Content-Type就是用来告诉对方我们给它发送的数据内容是什么类型的
  */
  /*  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.end("你好 world"); */
  var url = req.url;

  if (url === "/plain") {
    // text/plain 就是普通文本的意思
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end("你好 world");
  } else if (url === "/html") {
    // 如果我们发送的是HTML格式的字符串，则也要告诉浏览器我们给它发送的是HTML格式的
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end("<p>hello html <a href=''>点我</p>");
  }
});

server.listen(5000, function () {
  console.log("Server is running...");
});
