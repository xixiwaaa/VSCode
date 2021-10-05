/* 
在Node中，每个模块内部都有一个自己的module对象
该module对象中，有一个成员叫：exports，也是一个对象
也就是说如果你需要对外导出成员，只需要把导出的成员挂载到module.exports

我们发现，每次导出接口成员的时候都通过module.exports.xxx = xxx 的方式很麻烦，
所以。Node为了简化我们的操作，专门提供了一个变量：exports 等于 module.exports, .得太多了

*/
/* var module = {
  exports: {},
}; */

// 两者一致，那就说明，我们可以使用任意一方来导出内部成员
// console.log(exports === module.exports);

// exports.foo = "bar";
// module.exports.add = function (x, y) {
//   return x + y;
// };

/* 
当一个模块需要导出单个成员的时候
直接给exports赋值是不管用的
*/

exports.a = 123;
exports = {}; //已经断开和module.exports的联系了，后续再给exports添加都没用了
exports.foo = "bar"; //{ a: 123 }
module.exports.b = 456; //{ a: 123, b: 456 }

// 给exports赋值会断开和module.exports之间的引用
// 同理给module.exports重新赋值也会断开和exports之间的引用
/* module.exports = "hello";
exports.foo = "world"; */

// 这里导致exports!==module.exports
/* module.exports = {
  foo: "bar",
};
// 但是这里又重新建立两者的引用关系
exports = module.exports;
exports.foo = "hello"; */

exports.foo = "bar";
module.exports.a = 123; //{foo: 'bar',a:123}

exports = {
  a: 456,
}; //exports !== module.exports

module.exports.foo = "haha"; //{foo: 'haha',a: 123}

exports.c = 456; //没有任何关系

// 重新建立了和module.exports之间的引用关系了
exports = module.exports;

// 由于在上面建立了引用关系,所以这里是生效的
exports.a = 789; // {foo: 'haha',a: 789}

// 断开引用，重新赋值了
module.exports = function () {
  console.log("hello");
};

/* 
真正使用的时候：
    导出多个成员：exports.xxx=xxx
    导出多个成员也可以：module.exports={
        
    }
    导出单个成员：module.exports
*/

// 谁来require我，谁就得到module.exports
// 默认在代码的最后有一句
// return module.exports;
/* 
一定要记住，最后return的是module.exports，不是exports，所以你给exports重新赋值不管用
*/
