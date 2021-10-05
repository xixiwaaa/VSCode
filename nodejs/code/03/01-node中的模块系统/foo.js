var foo = "bar";

function add(x, y) {
  return x + y;
}

// 只能得到我想要给你的成员
// 这样做的目的是解决变量命名冲突的问题

// exports.add = add;

// exports = add;//得到{}，不可行

/* 
如果一个模块需要直接导出某个成员，而非挂载的方式
那这个时候必须使用下面这种方式
*/
module.exports = add;

module.exports = function (x, y) {
  return x + y;
};

module.exports = {
  add: function () {
    return x + y;
  },
  str: "hello",
};
// 你可以认为在每个模块的最后return了这个exports

/* 
exports是一个对象
我们可以通过多次为这个对象添加成员实现对外导出多个内部成员
*/

// exports.str = "hello";

/* 
现在我们有一个需求：
我们希望加载得到直接就是一个方法、字符串、数字、数组
*/
