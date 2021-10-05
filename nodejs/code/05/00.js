function add(x, y, callback) {
  //callback就是回调函数
  /*
    相当于：
    var x = 10;
    var y = 20;
    var callback = function(ret){
    console.log(ret);
    }
    */
  console.log(1);
  setTimeout(function () {
    var ret = x + y;
    callback(ret);
  }, 1000);
}
add(10, 20, function (ret) {
  console.log(ret);
  //我们现在拿到这个结果可以做任何操作
});
