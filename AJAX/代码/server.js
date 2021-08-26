// 1.引入express
const { request, response } = require("express");
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get("/server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //   设置响应体
  response.send("HELLO AJAX-2");
});

// all可以接收任意类型的请求
app.all("/server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");

  //   设置响应体
  response.send("HELLO AJAX POST");
});

app.all("/json-server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //  响应一个数据
  const data = {
    name: "atguigu",
  };
  // 对对象进行字符串转换
  let str = JSON.stringify(data);
  //   设置响应体
  response.send(str);
});

// 针对IE缓存
app.get("/ie", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  //   设置响应体
  response.send("HELLO IE-4");
});

// 延时响应
app.get("/delay", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => {
    //   设置响应体
    response.send("延时响应");
  }, 1000);
});

// jQuery服务
app.all("/jquery-server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello jQuery AJAX");
  const data = { name: "啦啦" };
  response.send(JSON.stringify(data));
});

// axios服务
app.all("/axios-server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello jQuery AJAX");
  const data = { name: "啦啦" };
  response.send(JSON.stringify(data));
});

// fetch服务
app.all("/fetch-server", (request, response) => {
  // 设置响应头,设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send("Hello jQuery AJAX");
  const data = { name: "啦啦" };
  response.send(JSON.stringify(data));
});

// jsonp服务
app.all("/jsonp-server", (request, response) => {
  // response.send("console.log('Hello json')");
  const data = {
    name: "啦啦-",
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  // 返回结果
  response.end(`handle(${str})`);
});

// 用户名检测是否存在
app.all("/check-username", (request, response) => {
  // response.send("console.log('Hello json')");
  const data = {
    exist: 1,
    msg: "用户名已经存在",
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  // 返回结果
  response.end(`handle(${str})`);
});

// jQuery-jsonp
app.all("/jquery-jsonp-server", (request, response) => {
  // response.send("console.log('Hello json')");
  const data = {
    name: "啦啦",
    city: ["北京", "上海", "广州"],
  };
  //将数据转化为字符串
  let str = JSON.stringify(data);
  // 接收callback参数
  let cb = request.query.callback;
  // 返回结果
  response.end(`${cb}(${str})`);
});

// CORS
app.all("/cors-server", (request, response) => {
  // 设置响应头
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 也可以设置指定专门的端口才能发送请求
  // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  response.setHeader("Access-Control-Allow-Headers", "*");
  response.setHeader("Access-Control-Allow-Method", "*");
  response.send("Hello CORS");
});

// 4.监听端口启动服务

app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中……");
});
