import { Controller } from 'egg';

export default class UserController extends Controller {
  public async registered() {
    const { ctx } = this;
    const requry = ctx.request.body;
    ctx.body = await ctx.service.user.registered(requry);
  }
  public async login() {
    const { ctx } = this;
    const requry = ctx.request.body;
    ctx.body = await ctx.service.user.login(requry);
  }
}
