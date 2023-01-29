
module.exports = () => {
  return async (ctx, next) => {
    const { app, socket } = ctx;
    socket.emit('res', 'connected!');
    app.io.on('connection', () => {
      console.log('socket.connected------', ctx.socket.connected);
    });
    await next();
    // execute when disconnect.
  };
};
