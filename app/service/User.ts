
import { Service } from 'egg';

export default class UserService extends Service {

  public async registered(req:any) {
    const ctx = this.ctx;
    const isExistUser = await ctx.model.User.findOne({
      $or: [
        {
          userName: req.userName,
        },
        {
          phone: req.phone,
        },
      ],
    });
    if (isExistUser) {
      if (isExistUser.userName === req.userName) return { success: true, msg: '用户名已经存在', code: 0 };
      return { success: true, msg: '用户已经存在', code: 0 };
    }
    return ctx.model.User.create(req).then(res => {
      console.log('res', res);
      return { success: true, msg: res, data: {}, code: 0 };
    }).catch(err => {
      console.log(err);
      return { success: false, err };
    });
  }
  public async login(params:any) {
    const { ctx, app } = this;
    const isExistUser = await ctx.model.User.findOne({
      $or: [
        {
          userName: params.userName,
        },
        {
          phone: params.phone,
        },
      ],
    });
    if (!isExistUser) {
      return { success: false, msg: '用户还未注册请注册', code: 0 };
    }
    if (params.phone === isExistUser.phone) {
      const token = app.jwt.sign({
        username: params.username,
      }, app.config.jwt.secret, {
        expiresIn: '1800s', // 有效期时间
      });
      await ctx.model.User.updateOne({ username: params.username }, { token }, { multi: true });
      const user = await ctx.model.User.findOne({ username: params.username });
      return { success: true, data: user, code: 0 };
    }
    return { success: false, data: { msg: '密码错误,请重新输入!' }, code: 0 };
  }
}
