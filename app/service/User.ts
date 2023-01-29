
import { Service } from 'egg';


export default class UserService extends Service {

  public async add(req:any) {
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
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      console.log(err);
      return { success: false, err };
    });
  }
}
