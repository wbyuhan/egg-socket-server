import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);
  // socket.io
  io.of('/').route('message', io.controller.nsp.exchange);
  router.post('/registered', controller.user.registered);
  router.post('/login', controller.user.login);
};
