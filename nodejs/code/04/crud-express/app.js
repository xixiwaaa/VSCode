/* 
app.js入门模块
  职责：
      创建服务
      做一些服务相关配置
        -模板引擎
        -body—parser解析表单 post请求体
        -提供静态资源服务
      挂载路由
      监听端口启动服务
*/

var express = require("express");
var router = require("./router");
var bodyParser = require("body-parser");

var app = express();

app.use("/node_modules/", express.static("./node_modules/"));
app.use("/public/", express.static("./public/"));

app.engine("html", require("express-art-template"));

// 配置模板引擎和body-parser一定要在app.use(router);挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// router(app);

// 把路由容器挂载到app服务中
app.use(router);

app.listen(3000, function () {
  console.log("running 3000...");
});

module.exports = app;
