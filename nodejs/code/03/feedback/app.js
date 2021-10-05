var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require("url");

const { response } = require("express");
var express = require("express");

var comments = [
  {
    name: "张三",
    message: "吃饭了",
    dateTime: "2021-9-8",
  },
  {
    name: "张三2",
    message: "吃饭了",
    dateTime: "2021-9-8",
  },
  {
    name: "张三3",
    message: "吃饭了",
    dateTime: "2021-9-8",
  },
  {
    name: "张三4",
    message: "吃饭了",
    dateTime: "2021-9-8",
  },
];
var app = express();

app.get("/", function (req, res) {
  res.send("hello express!");
});

http
  .createServer(function (req, res) {
    var parseObj = url.parse(req.url, true);

    // 单独获取不包含查询字符串的路径部分(该路径不包含问号之后)
    var pathname = parseObj.pathname;

    // var url = req.url;
    if (pathname === "/") {
      fs.readFile("./views/index.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found.");
        }
        // render 是渲染的意思
        var htmlStr = template.render(data.toString(), {
          comments: comments,
        });
        res.end(htmlStr);
      });
    } else if (pathname === "/post") {
      fs.readFile("./views/post.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found.");
        }
        res.end(data);
      });
    } else if (pathname.indexOf("/public/") === 0) {
      fs.readFile("." + pathname, function (err, data) {
        if (err) {
          return res.end("404 Not Found.");
        }
        res.end(data);
      });
    } else if (pathname === "/pinglun") {
      var comment = parseObj.query;
      comment.dateTime = "2021-9-11 10:19";
      comments.push(comment);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();

      // console.log("收到表单请求了", parseObj.query);
    } else {
      // 其他的都处理成404 找不到
      fs.readFile("./views/404.html", function (err, data) {
        if (err) {
          return res.end("404 Not Found.");
        }
        res.end(data);
      });
    }
  })
  .listen(3000, function () {
    console.log("running...");
  });
