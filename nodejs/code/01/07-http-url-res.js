var http = require("http");

// 1.创建Server
var server = http.createServer();

// 2.监听request请求事件，设置请求处理函数
server.on("request", function (req, res) {
  console.log("收到请求了，请求路径是：" + req.url);
  console.log(
    "请求我的客户端的端口号是：",
    req.socket.remoteAddress,
    req.socket.remotePort
  );

  // res.write("hello");
  // res.write("world");
  // res.end();

  // 上面的方式比较麻烦，推荐使用更简单的方式，直接end的同时发送响应数据
  // res.end("hello nodejs");

  // 根据不同的请求路径发送不同的响应结果
  // 1.获取请求路径
  //   req.url 获取到的是端口号之后的那一部分路径
  //   也就是说所有的url都是以 / 开头的
  // 2.判断路径处理响应

  var url = req.url;
  if (url === "/") {
    res.end("index page");
  } else if (url === "/login") {
    res.end("login page");
  } else if (url === "/products") {
    var products = [
      {
        name: "苹果 X",
        price: 8888,
      },
      {
        name: "菠萝 X",
        price: 3888,
      },
      {
        name: "小辣椒 X",
        price: 1888,
      },
    ];
    // 响应内容只能是二进制数据或者字符串
    // 数字
    // 对象
    // 数组
    // 布尔值
    res.end(JSON.stringify(products));
  } else {
    res.end("404 Not Found.");
  }
});

// 3.绑定端口号，启动服务 是否需要预约，微信上没有晚上的挂号  费用也是20元吗
server.listen(8000, function () {
  console.log("服务启动成功，可以访问了");
});
