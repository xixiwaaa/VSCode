var http = require("http");
var fs = require("fs");

// 1.创建Server
var server = http.createServer();
// 2.监听Server的request请求事件，设置请求处理函数
var wwwDir = "E:/Visual Studio Code/nodejs/www";
server.on("request", function (req, res) {
  var url = req.url;

  var filePath = "/index.html";
  if (url !== "/") {
    filePath = url;
  }
  //   console.log(filePath, wwwDir + filePath);
  // /index.html E:/Visual Studio Code/nodejs/www/index.html
  // /a.txt E:/Visual Studio Code/nodejs/www/a.txt

  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end("404 Not Found.");
    }
    res.end(data);
  });
});

// 3.绑定端口号，启动服务
server.listen(3000, function () {
  console.log("running.....");
});
