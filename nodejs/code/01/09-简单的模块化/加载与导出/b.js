var foo = "bbb";

// console.log(exports);

exports.foo = "hello";

exports.add = function (x, y) {
  return x + y;
};

exports.readFile=function(path,callback){
    console.log("文件路径：",path);
}

var age = 18; //a访问不到

exports.age = age;//a可以访问到

function add(x, y) {
  return x - y;
}
