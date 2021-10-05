var http = require("http");

var server = http.createServer();

// request请求事件处理函数，需要接收两个参数：
//  Request请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  Response响应对象
//      响应对象可以用来给客户端发送响应消息

server.on("request", function (request, response) {
  console.log("收到客户端的请求了，请求路径是：" + request.url);

  // response对象有一个方法：write可以用来给客户端发送响应数据
  // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
  response.write("hello");
  response.write("nodejs");

  // 告诉客户端，我的话说完了，你可以呈递给客户了
  response.end();

  // 由于现在我们的服务器的能力还非常弱，无论是什么请求，都只能响应hellonodejs
  /* 
  思考：
      我们希望当请求不同的路径响应不同的结果
      例如：http://127.0.0.1:3000/index
           http://127.0.0.1:3000/login
  */
});
server.listen(3000, function () {
  console.log("服务器启动成功了");
});
