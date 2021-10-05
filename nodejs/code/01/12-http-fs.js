/* 1.结合fs发送文件中的数据
2.Content-Type
    不同的资源对应的Content-Type是不一样的，具体参照http://tool.oschina.net/commons
    图片不需要指定编码
    一般只为字符数据才指定编码 
 */

var fs = require("fs");
var http = require("http");

var server = http.createServer();

server.on("request", function (req, res) {
  var url = req.url;

  if (url === "/") {
    //   我们要发送的还是在文件中的内容
    fs.readFile("./resource/index.html", function (err, data) {
      if (err) {
        //   url:统一资源定位符
        // 一个url最终其实是要对一个资源的
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        // data默认是二进制数据，可以通过.toString转为咱们能识别的字符串
        // res.end()支持两种数据类型，一种是二进制，一种是字符串
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(data);
      }
    });
  } else if (url === "/a") {
    //   我们要发送的还是在文件中的内容
    fs.readFile("./resource/1.jpg", function (err, data) {
      if (err) {
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败，请稍后重试！");
      } else {
        // data默认是二进制数据，可以通过.toString转为咱们能识别的字符串
        // res.end()支持两种数据类型，一种是二进制，一种是字符串
        res.setHeader("Content-Type", "image/jpeg;charset=utf-8");
        res.end(data);
      }
    });
  }
});

server.listen(3000, function () {
  console.log("Server is running...");
});
