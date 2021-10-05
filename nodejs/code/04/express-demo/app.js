var express = require("express");

// 1.创建app
var app = express();

/* app.get("/", function (req, res) {
  //   res.write("hello");
  //   res.write("world");
  //   res.end();

  //   res.end("hello world");

  res.send("hello world");
});

app.get("/login", function (req, res) {
  //   res.write("hello");
  //   res.write("world");
  //   res.end();

  //   res.end("hello world");

  res.send("login page");
}); */

// 当以 /public/开头的时候，去./public目录中找对应的资源
// 这种方式更容易辨识，推荐这种方式
app.use("/public/", express.static("./public"));

// 当以/a/开头的时候(相当于起了别名)，去./public目录中找对应的资源
app.use("/a/", express.static("./public"));

// 当省略第一个参数的时候，则可以通过省略/public/的方式来访问
// 这种方式的好处就是可以省略/public/
app.use(express.static("./public"));

app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(3000, function () {
  console.log("express app is running");
});
