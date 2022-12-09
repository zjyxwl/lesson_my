// 所有请求的封装
import { baseURL, timeout } from './config.js'
function request(options) {
  wx.showLoading({
    title: '数据加载中...',
  })
  // 许愿
  return new Promise((resolve) => {
    // 耗时任务
    console.log(baseURL + options.url);
    // 发送请求
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data || {},
      // 成功后
      success: function(res) {
        resolve(res.data)
      },
      // 失败后
      fail: function(err) {
        reject(err)
      },
      // 不管成功失败， 完成任务
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}

export default request