// app.js
// import Leancloud.cn library to store objects on the cloud
const AV = require('./utils/av-weapp-min.js');
const config = require('./keys')

// initialize the Leancloud app https://leancloud.cn/docs/weapp.html
AV.init({
  appId: config.appId,
  appKey: config.appKey,
});

// set an app-level function to grab WeChat user info
App({
  data: {
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onLaunch: function() {
    console.log("the app is launched")
  },
  onShow: function() {
    console.log("the app is shown")
  },
  globalData:{
    userInfo:null
  }
});
