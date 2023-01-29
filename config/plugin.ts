/*
 * @Author: webyuhan lcs1938083426@gmail.com
 * @Date: 2023-01-28 09:37:53
 * @LastEditors: webyuhan lcs1938083426@gmail.com
 * @LastEditTime: 2023-01-28 12:12:07
 * @FilePath: \egg-socket-server\config\plugin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};

export default plugin;
