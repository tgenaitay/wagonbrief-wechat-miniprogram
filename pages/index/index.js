// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    brief: 'Send an offer in 1 minute'
  },
  // load data and log success
  onLoad: function () {
    console.log('index page loaded')
  },
  onShow: function () {
    console.log('index page shown')
  },
  onHide: function () {
    console.log('index page hidden')
  },
  onUnload: function () {
    console.log('index page unloaded')
  },
  onReady: function () {
    console.log('index page ready')
  },
  hitMe: function (e) {
    this.setData({
      newvalue: 'Send me another brief'
    })
    console.log(this.data.newvalue)
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  }
})
