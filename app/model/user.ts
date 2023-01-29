
import { Application } from 'egg';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    userName: { type: String, required: true },
    age: { type: Number },
    phone: {
      type: String,
      validate: {
        validator(v) {
          if (v.length < 8) {
            return false;
          }
        },
        message: '${v} is not a valid phone number!',
      },
    },

  });
    // 参数一： 模型被绑定到什么名字上， 参数二： 绑定的模型数据， 参数三： 对应的数据库表名
  return mongoose.model('user', UserSchema, 'user');
};

