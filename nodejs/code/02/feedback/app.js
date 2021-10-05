// app application 应用程序
// 把当前模块所有依赖项都声明在文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，把所有的HTML文件都放到views(视图)
// 我们为了方便的统一处理这些静态资源，所以我们约定，把所有的静态资源都放在public
// 哪些资源能被用户访问，哪些资源不能被用户访问，我们现在可以通过代码来进行非常灵活的控制
// public 整个public目录中的资源都允许被访问

var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require("url");

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

/* 
/pinglun?name=的撒的撒&message=的撒的撒
对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
所以你不可能通过去判断完整的url路径来处理这个请求

结论：对于我们来讲，其实只需要判定，如果你的请求路径是 /pinglun的时候，那我们就认为你提交表单的请求过来了
*/

http
  .createServer(function (req, res) {
    //简写方式，该函数会直接被注册为server的request请求事件处理函数
    // 使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转一个对象(通过query属性来访问)
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
      /* 
      /public/css/main.css
      /public/js/main.js
      /public/lib/jquery.js
      统一处理：如果请求路径是以/public/开头的，则我认为你要获取public中的某个资源，所以我们就直接可以把请求路径当做文件路径来直接进行读取
      */
      fs.readFile("." + pathname, function (err, data) {
        if (err) {
          return res.end("404 Not Found.");
        }
        res.end(data);
      });
    } else if (pathname === "/pinglun") {
      // 注意：这个时候无论/pinglun?xxx之后是什么，我们都不用担心了，因为我的pathname是不包含?之后的那个路径

      // 一次请求对应一次响应，响应结束这次请求也就结束了
      // res.end(JSON.stringify(parseObj.query));

      // 我们已经使用url模块的parse方法把请求路径中的查询字符串给解析成一个对象了
      /* 
      所以接下来要做的就是：
        1.获取表单提交的数据 parseObj.query
        2.将当前日期添加到数据对象中，然后存储到数组中
        3.让用户重定向跳转到首页 /
          当用户重新请求 / 的时候，我们数组中的数据已经发生变化了，所以用户看到的页面也就变了
      */
      var comment = parseObj.query;
      comment.dateTime = "2021-9-11 10:19";
      comments.push(comment);
      // 服务端这个时候已经把数据存储好了，接下来就是然后用户重新请求 / 首页，就可以看到最新的留言内容了

      /* 
      如何通过服务器让客户端重定向?
        1.状态码设置为302(临时重定向)
          statusCode
        2.在响应头中通过Location告诉客户端往哪儿重定向
          setHeader
      如果客户端发现收到服务器的响应的状态码是302就会自动去响应头中找Location，然后对该地址发起新的请求
      所以我们就看到客户端自动跳转了
      */
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
/* 
-Node不适合从来没有接触过服务端的人学习
-如果想要真正地学好服务端，还是老牌的Java、PHP这些平台
-Node不是特别适合入门服务端，但不代表Node不强大
-Node很厉害，具有经验的人可以玩得非常牛
-不适合新手的原因就在于比较偏底层，而且太灵活
-Java、PHP好入门的原因就在于：这些平台屏蔽了一些底层
-res.redirect('重定向')
*/
/* 
写案例照着下面的步骤写：
1. / index.html
2.开放public目录中的静态资源
  当开放 /public/xxx的时候，读取响应public目录中的具体资源
3.当请求 /post 的时候，响应 post.html
4. /pinglun
  4.1接收表单提交数据
  4.2存储表单提交的数据
  4.3让表单重定向到 / 
    statusCode
    setHeader
*/

/* 
明天要学的内容：
模块系统
Express(第三方Web开发框架)
  这两天做的事，在框架里面就是一个API的事
  使用框架的目的就是让我们更加专注于业务，而不是底层细节
*/
