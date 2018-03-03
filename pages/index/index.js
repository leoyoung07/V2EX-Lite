const formatters = require('../../utils/formatters.js');
Page({
  data: {
    topics: {
      hot: []
    }
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    let that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: function (res) {
        console.log(res.data);
        that.setData({
          topics: {
            hot: formatters.topicListFormatter(res.data)
          }
        });
      }
    });
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap: function (e) {
    let id = e.currentTarget.dataset.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/topic/topic?id=' + id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    });
  },
  customData: {
    hi: 'MINA'
  }
})