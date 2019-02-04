// offer.js
var app = getApp()
Page({
  // build rough data for the page
  data: {
    loading: false,
    fontFamily: 'Circular Black',
  },
  // load data and log success
  onLoad: function () {
    console.log('brief page loaded')
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
  },
  onUnload: function () {
    console.log('brief page unloaded')
  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  // handle the form submission
  bindFormSubmit: function(e) {
    // LOADING
    // 1. enable the loading animation on send button
    this.setLoading()
    // 2. show a Loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })

    let tableName = 'partners'
    let Offer = new wx.BaaS.TableObject(tableName)
    let offer = Offer.create()

    // 设置方式一
    let partner = {
      name: e.detail.value.name,
      email: e.detail.value.email,
      phone: e.detail.value.phone,
      company: e.detail.value.company,
      description: e.detail.value.description,
      offer: e.detail.value.offer,
      cities: e.detail.value.cities
    }

    offer.set(partner).save().then(res => {
      // success
      console.log(res)
      // REDIRECT USER
      wx.reLaunch({
        url: '/pages/wagon/wagon?brief=1'
      });
    }, err => {
      //err 为 HError 对象
    })
     
  }  
  
})
