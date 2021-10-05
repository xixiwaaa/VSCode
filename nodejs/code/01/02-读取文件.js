// 浏览器中的JavaScript是没有文件操作能力的
// 但是Node中的JavaScript具有文件操作的能力

// fs是file-system的简写，就是文件系统的意思
// 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require("fs");

// 2.读取文件
// 第一个参数就是要读取的文件路径
// 第二个参数是一个回调函数
/*
成功：data  是 数据
      error 是 null
失败：data   是 undefined 没有数据
      error 是 错误对象
 */
fs.readFile("./helloo.txt", function (error, data) {
  console.log(data);
  /*
文件中存储的其实都是二进制数据0 1
这里看不到0 1是因为二进制转换为16进制了
但是无论是二进制还是16进制，人类都不认识
所以我们可以通过toString方法把其转换为我们能认识的字符 
 */
  //   console.log(data);
  //   console.log(error);
  //   console.log(data.toString());
  if (error) {
    console.log("读取文件失败了");
  } else {
    console.log(data.toString);
  }
});
