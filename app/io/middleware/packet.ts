module.exports = () => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet received!');
    await next();
  };
};
