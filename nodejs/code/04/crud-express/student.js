/* 
students.js
数据操作文件模块
职责：操作文件中的数据，只处理数据，不关心业务

这里才是我们学习Node的精华部分：奥义之所在
封装异步API
*/

var fs = require("fs");
var dbPath = "./db.json";
/* 
获取所有学生列表
*/
exports.find = function (callback) {
  fs.readFile(dbPath, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};
/* 
根据id获取学生信息对象
@param  {Number}      id          学生    id
@param  {Function}  callback    回调函数
*/
exports.findById = function (id, callback) {
  fs.readFile(dbPath, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;
    var ret = students.find(function (item) {
      return item.id === parseInt(id);
    });
    callback(null, ret);
  });
};

/* 
添加保存学生
*/
exports.save = function (student, callback) {
  fs.readFile(dbPath, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    // 处理id唯一的，不重复
    student.id = students[students.length - 1].id + 1;

    // 把用户传递的对象保存到数组中
    students.push(student);

    // 把对象数据转换为JSON字符串
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err);
      }
      // 成功就没有错误，所以错误对象是null
      callback(null);
    });
  });
};
/* 
更新(修改)学生
*/
exports.updateById = function (student, callback) {
  fs.readFile(dbPath, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    // 注意：这里记得把id统一转换为数字类型
    student.id = parseInt(student.id);
v
    // 你想修改谁，就需要把谁找出来
    // Ecmascript 6 中的一个数组方法：find
    // 需要接收一个函数作为参数
    // 当某个遍历项符合 item.id ===  student.id 条件的时候，find会终止遍历，同时返回遍历项
    var stu = students.find(function (item) {
      return item.id === student.id;
    });

    // 遍历拷贝对象
    for (var key in student) {
      stu[key] = student[key];
    }

    // 把对象数据转换为JSON字符串
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err);
      }
      // 成功就没有错误，所以错误对象是null
      callback(null);
    });
  });
};
/* 
删除学生
*/
/* 
callback中的参数
    第一个参数是 err(成功是null，错误是错误对象)
    第二个参数是 结果(成功是数组，错误是undefined)

*/
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, "utf-8", function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    // ES6 API findIndex
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id);
    });

    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId,1);

    // 把对象数据转换为JSON字符串
    var fileData = JSON.stringify({
      students: students,
    });
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err);
      }
      // 成功就没有错误，所以错误对象是null
      callback(null);
    });
  });
};
