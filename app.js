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
