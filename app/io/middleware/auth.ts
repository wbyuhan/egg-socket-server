module.exports = () => {
  return async (ctx:any) => {
    const { app, socket } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/io');
    const query = socket.handshake.query;
    console.log('socket', socket);
    console.log('id', id);
    console.log('nsp', nsp);
    console.log('query', query);

    // 用户信息
    // const { room, userId } = query;
    if (query) {
      socket.emit('gbmsg', 'connected!');
    }

    // 检查房间是否存在，不存在则踢出用户
    // 备注：此处 app.redis 与插件无关，可用其他存储代替


  };
};
