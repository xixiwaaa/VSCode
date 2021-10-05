const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1.连接MongoDB数据库
// 指定连接的数据库不需要存在，当我们插入第一条数据之后就会自动被创建出来
mongoose.connect("mongodb://localhost:27017/test");

// 2.设计文档结构(表结构)
// 字段名称就是表结构中的属性名称
// 值
// 约束的目的是保证数据的完整性，不要有脏数据
const userSchema = new Schema({
  username: {
    type: String,
    required: true, //必须有
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

//3.将文档结构发布为模型
// mongoose.model方法就是用来将一个架构发布为model
// 第一个参数：传入一个大写单数名词字符串用来表示我们的数据库名称
//          mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
//          例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
// 返回值：模型构造函数
const User = mongoose.model("User", userSchema);

// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 users集合中的数据为所欲为了(增删改查)
// const admin = new User({
//   username: "张三",
//   password: "123453",
//   email: "admin@admin.com",
// });
// admin.save(function (err, ret) {
//   if (err) {
//     console.log("保存失败");
//   } else {
//     console.log("保存成功");
//     console.log(ret);
//   }
// });

// 查询数据
// User.find(function (err, ret) {
//   if (err) {
//     console.log("查询失败");
//   } else {
//     console.log(ret);
//   }
// });

// 用户注册
//  1.判断用户是否存在
//    如果已存在，结束注册
//    如果不存在，注册(保存一条用户信息)
User.find().then(function (data) {
  console.log(data);
});

// User.findOne({
//   username: "aaa",
// })
//   .then(function (user) {
//     if (user) {
//       // 用户已存在，不能注册
//       console.log("用户已存在");
//     } else {
//       return new User({
//         username: "aaa",
//         password: "123",
//         email: "123@123.com",
//       }).save();
//     }
//   })
//   .then(function (ret) {});

// User.find(
//   {
//     username: "zs",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("查询失败");
//     } else {
//       console.log(ret);
//     }
//   }
// );

// User.findOne(
//   {
//     username: "zs",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("查询失败");
//     } else {
//       console.log(ret);
//     }
//   }
// );

// 删除数据
// User.remove(
//   {
//     username: "zs",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("删除失败");
//     } else {
//       console.log("删除成功");
//       console.log(ret);
//     }
//   }
// );

// 删除一条数据
// User.deleteOne(
//   {
//     password: "123456",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("删除失败");
//     } else {
//       console.log("删除成功");
//       console.log(ret);
//     }
//   }
// );

// 删除多条数据
// User.deleteMany(
//   {
//     password: "123456",
//   },
//   function (err, ret) {
//     if (err) {
//       console.log("删除失败");
//     } else {
//       console.log("删除成功");
//       console.log(ret);
//     }
//   }
// );

// 更新数据
// User.findByIdAndUpdate(
//   "614ee04decfad3e7f96d80a5",
//   { password: "123" },
//   function (err, ret) {
//     if (err) {
//       console.log("更新失败");
//     } else {
//       console.log("更新成功");
//       console.log(ret);
//     }
//   }
// );
