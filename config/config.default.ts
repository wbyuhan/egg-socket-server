import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1674869868805_4599';

  // add your egg config in here
  config.middleware = [];
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/socket',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
    },
  };
  // 安全
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*', 'http://localhost:3000' ],
  };
  //
  config.jwt = {
    secret: '123456', // 自定义token的加密条件字符串，可按各自的需求填写
    ignore: [ '/registered', '/login' ], // 哪些请求不需要认证
    // enable: true, // default is false
    // match: '/jwt', // optional
    // expiresIn: '24h',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    io: {
      init: {},
      namespace: {
        '/': {
          connectionMiddleware: [ 'connection' ],
          packetMiddleware: [ 'packet' ],
        },
      },
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
