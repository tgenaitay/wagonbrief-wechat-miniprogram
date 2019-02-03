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
      source: 'url("https://lc-HjPUb8O5.cn-n1.lcfile.com/8e81a759dd146bf79f09.ttf")',
      success(res) {
        console.log(res.status)
        self.setData({ loaded: true })
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
