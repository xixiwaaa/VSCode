var fs = require("fs");

// $.ajax({
//     ...
//     success: function(data){

//     }
// })

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//          (只有一个参数 error。成功：文件写入成功，error是null；失败：文件写入失败，error就是错误对象)

// 文件名不能包含\ / : * ? " < > 这些字符
fs.writeFile("./hello>.txt", "吃饭了", function () {
  if (error) {
    console.log("写入失败");
  } else {
    console.log("文件写入成功");
  }
});
