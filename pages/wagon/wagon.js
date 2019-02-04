// wagon.js
Page({
  // build rough data for the page
  data: {
    logs: [],
    fontFamily: 'Circular Black',
  },
  // load data and log success
  onLoad: function (option) {

    console.log('wagon page loaded')

    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://cloud-minapp-12997.cloud.ifanrusercontent.com/1gqUED5JPNpLlpce.ttf")',
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

    // display toast if form success
    if(option.brief == 1){
      wx.showToast({
      title: 'Received!',
      icon: 'success',
      duration: 4000
      });
    }
    
  },
  onShow: function () {
    console.log('wagon page shown')
  },
  onHide: function (){
    console.log('wagon page hidden')
  },
  onUnload: function () {
    console.log('wagon page unloaded')
  },
  onShareAppMessage: function () {
    return {
      title: 'Le Wagon coding school',
      path: 'pages/wagon/wagon'
    }
  }
})
