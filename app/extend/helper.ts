/*
 * @Author: webyuhan lcs1938083426@gmail.com
 * @Date: 2023-01-28 09:59:46
 * @LastEditors: webyuhan lcs1938083426@gmail.com
 * @LastEditTime: 2023-01-28 10:47:10
 * @FilePath: \egg-socket-server\app\extend\helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  /**
   * 封装 socket 请求数据格式
   * @param action 事件
   * @param payload 数据
   * @param metadata 元信息
   */
  parseMsg(action, payload = {}, metadata = {}) {
    // 封装 meta 数据,添加当前时间轴
    const meta = Object.assign({}, {
      timestamp: Date.now(),
    }, metadata);
    // 格式化返回数据
    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },
};
