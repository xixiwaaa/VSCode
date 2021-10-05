var http = require("http");
var fs = require("fs");
var server = http.createServer();
var template = require("art-template");

var wwwDir = "E:/Visual Studio Code/nodejs/code/02";
server.on("request", function (req, res) {
  var url = req.url;
  fs.readFile("./template-Apache.html", function (err, data) {
    if (err) {
      return res.end("404 Not Found.");
    }
    /* 
1.如何得到wwwDir目录列表中的文件名和目录名
    fs.readdir
2.如何将得到的文件名和目录名替换到template.html中
  2.1在template.html中需要替换的位置预留一个特殊的标记(就像以前使用模板引擎的标记一样)
  2.2根据files生成需要的HTML内容

只要做了这两件事儿，那这个问题就解决了
*/
    fs.readdir(wwwDir, function (err, files) {
      if (err) {
        return res.end("Can not find www dir.");
      }

      //   这里只需要使用模板引擎解析替换data中的模板字符串就可以了
      // 数据就是files
      // 然后去你的template.html文件中编写你的模板语法就可以了
      var htmlStr = template.render(data.toString(), {
        title: "杨晶晶",
        files: files,
      });
      // 3.发送解析替换过后的响应数据
      res.end(htmlStr);
    });
  });
});

server.listen(3000, function () {
  console.log("running.....");
});
