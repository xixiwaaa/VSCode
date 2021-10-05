var express = require("express");

var app = express();
var bodyParser = require("body-parser");

app.use("/public/", express.static("./public/"));

// 配置使用art-template模板引擎
// 第一个参数表示，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template是专门用来在Express中把art-template整合到Express中
// 虽然外面这里不需要加载art-template，但是也必须安装，原因就在于express-art-template依赖了art-template
app.engine("html", require("express-art-template"));

/* 
Express为Response响应对象提供了一个方法：render
render方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
res.render("html模板名",{模板数据})
第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
也就是说Express有一个约定：开发人员把所有的视图文件都放到views目录中
*/

// 如果想要修改默认的views目录，则可以 app.set("views",render函数的默认路径)
//注意：第一个参数views千万不要写错

// 配置body-parser中间件(插件，专门用来解析表单POST请求体)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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

app.get("/", function (req, res) {
  res.render("index.html", {
    comments: comments,
  });
});

app.get("/post", function (req, res) {
  res.render("post.html");
});

app.post("/post", function (req, res) {
  // 1.获取表单POST请求体数据
  // 2.处理
  // 3.发送响应

  // req.query只能拿get请求参数

  console.log(req.body);
  var comment = req.body;
  comment.dateTime = "2021-9-18";
  comments.unshift(comment);
  res.redirect("/");

  //res.send ，res.redirect 这些方法Express会自动结束响应
});

/* app.get("/pinglun", function (req, res) {
  var comment = req.query;
  comment.dateTime = "2021-9-18";
  // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
  comments.unshift(comment);
  res.redirect("/");
  // res.statusCode = 302;
  // res.setHeader("Location", "/");
}); */

app.listen(3000, function () {
  console.log("running....");
});
