var http = require("http");
var fs = require("fs");
var server = http.createServer();

var wwwDir = "E:/Visual Studio Code/nodejs/www";
server.on("request", function (req, res) {
  var url = req.url;
  fs.readFile("./template.html", function (err, data) {
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
      // 2.1生成需要替换的内容
      var content = "";
      files.forEach(function (item) {
        // 在Ecmascript 6的 ` 字符串中，可以使用${}来引用变量
        content += `
        <tr>
                <td data-value="apple/"><a class="icon dir"
                        href="/E:/Visual%20Studio%20Code/nodejs/www/apple/">${item}/</a></td>
                <td class="detailsColumn" data-value="0"></td>
                <td class="detailsColumn" data-value="1630897379">2021/9/6 上午11:02:59</td>
            </tr>
        `;
      });
      // 2.3替换
      data = data.toString();
      data = data.replace("^_^", content);

      // 3.发送解析替换过后的响应数据
      res.end(data);
    });
  });
});

server.listen(3000, function () {
  console.log("running.....");
});
