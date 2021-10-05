// art-template
// art-template不仅可以在浏览器中使用，也可以在node中使用

/* 
1.安装：npm install art-template
该命令在哪执行就会把包下载到哪里，默认会下载到node_modules目录中
node_modules不要改，也不支持改
*/
/* 
在node中使用art-template模板引擎
模板引擎最早就是诞生于服务器领域，后来才发展到了前端

1.安装 npm install art-template
2.在需要使用的文件模块中加载art-template
  只需要使用require方法加载就可以了：var template=require("art-template");参数中的art-template就是你下载的包的名字
  也就是说你install的名字是什么，则你的require中就是什么
3.查文档，使用模板引擎的API
*/

var template = require("art-template");
var fs = require("fs");

// 这里不是浏览器，不能这么用
// template("script 标签 id",{对象})

/* var tplStr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>大家好，我叫:{{name}}</p>
    <p>我今年{{age}}岁了</p>
    <p>我来自{{province}}</p>
    <p>我喜欢{{each hobbies}} {{ $value }} {{/each}}</p>
</body>
</html>
`; */

fs.readFile("./tpl.html", function (err, data) {
  if (err) {
    return console.log("读取文件失败了");
  }
  /* 默认读取到的data是二进制数据
  而模板引擎的render方法需要接收的是字符串
  所以我们在这里需要把data二进制数据转为字符串，才可以给模板引擎使用
   */
  var ret = template.render(data.toString(), {
    name: "杨晶晶",
    age: 18,
    province: "河北",
    hobbies: ["写代码", "吃饭"],
    title: "个人信息",
  });
  console.log(ret);
});
