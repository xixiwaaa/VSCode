/* 
默认得到的是对象
使用对象中的成员必须.某个成员来访问
有时候，对于一个模块，我们仅仅就是希望导出一个方法
*/
var fooExports = require("./foo");

console.log(fooExports);
