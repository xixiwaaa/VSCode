var fs = require("fs");

// 在Ecmascript 6 中新增了一个API Promise
// Promise是一个构造函数

// 创建Promise容器
// 1.给别人一个承诺
// console.log(1);

//   Promise容器一旦创建，就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  //   console.log(2);
  fs.readFile("./data/a.txt", "utf-8", function (err, data) {
    if (err) {
      // 失败了，承诺容器中的任务失败了
      //   console.log(err);
      // 把容器的Pending状态变为Rejected
      //   调用reject就相当于调用了then方法的第二个参数函数
      reject(err);
    } else {
      //   console.log(3);
      // 承诺容器中的任务成功了
      //   console.log(data);
      // 把容器的Pending状态改为成功Resolved
      //   也就是说这里调用的resolve方法实际上就是then方法传递的那个function
      resolve(data);
    }
  });
});
// console.log(4);

var p2 = new Promise(function (resolve, reject) {
  fs.readFile("./data/b.txt", "utf-8", function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

var p3 = new Promise(function (resolve, reject) {
  fs.readFile("./data/c.txt", "utf-8", function (err, data) {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

// p1就是那个承诺
// 当p1成功了，然后(then)做指定的操作
p1.then(
  function (data) {
    console.log(data);
    // 当p1读取成功的时候
    // 当前函数中的return的结果就可以在后面的then中function接收到
    // 当你return 123 后面就接收到123
    //     return "hello" 后面收到的就是 "hello"
    //      没有return后面收到的就是undefined
    // 上面那些return的数据没有什么用
    // 真正有用的是：我们可以return一个Promise对象
    // 当return一个Promise对象的时候，后续的then中的方法的第一个参数会作为p2的resolve
    return p2;
  },
  function (err) {
    console.log("读取文件失败了", err);
  }
)
  .then(function (data) {
    console.log(data);
    return p3;
  })
  .then(function (data) {
    console.log(data);
  });
