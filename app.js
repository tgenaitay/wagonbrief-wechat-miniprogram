// app.js
App({
  data: {
  },
  onLaunch: function() {
    console.log("the app is launched")
    require('./utils/sdk-v1.16.0')
    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId)
  },
  onShow: function() {
    console.log("the app is shown")
  },
  globalData:{
    clientId: '698275f390739a365931'
  }
});
