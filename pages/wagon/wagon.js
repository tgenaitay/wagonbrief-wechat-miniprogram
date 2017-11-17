// wagon.js
Page({
  // build rough data for the page
  data: {
    logs: []
  },
  // load data and log success
  onLoad: function (option) {

    console.log('wagon page loaded')

    // display toast if form success
    if(option.brief == 1){
      wx.showToast({
      title: 'Received. Thanks!',
      icon: 'success',
      duration: 3000
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
