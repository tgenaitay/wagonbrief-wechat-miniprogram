// index.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    brief: 'Send an offer in 1 minute',
    fontFamily: 'Circular Black',
  },
  // load data and log success
  onLoad: function () {
    console.log('index page loaded')
    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://cloud-minapp-12997.cloud.ifanrusercontent.com/1gqUED5JPNpLlpce.ttf")',
      success(res) {
        console.log(res.status)
      },
      fail: function (res) {
        console.log(res.status)
      },
      complete: function (res) {
        console.log(res.status)
      }
    })
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
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/index/index'
    }
  }
})
