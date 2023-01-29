
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);
  // socket.io
  io.of('/').route('server', io.controller.nsp.exchange);
  router.post('/add', controller.user.add);
};
