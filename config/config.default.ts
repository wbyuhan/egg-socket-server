/*
 * @Author: webyuhan lcs1938083426@gmail.com
 * @Date: 2023-01-28 09:37:53
 * @LastEditors: webyuhan lcs1938083426@gmail.com
 * @LastEditTime: 2023-01-28 12:37:31
 * @FilePath: \egg-socket-server\config\config.default.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    domainWhiteList: [ '*' ],
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    io: {
      init: {},
      namespace: {
        '/io': {
          connectionMiddleware: [ 'auth' ],
          packetMiddleware: [],
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
