const formatters = require('../../utils/formatters.js');
Page({
  data: {
    topics: []
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
    let appInstance = getApp();
    let topic = appInstance.currentTopic || 'hot';
    this.fetchTopics(topic);
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
    let appInstance = getApp();
    if (item.index === 0) {
      appInstance.currentTopic = 'hot';
    } else if (item.index === 1) {
      appInstance.currentTopic = 'latest';
    }
    this.fetchTopics(appInstance.currentTopic);
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
  },
  fetchTopics: function (topic) {
    let that = this;
    wx.request({
      url: `https://www.v2ex.com/api/topics/${topic}.json`,
      success: function (res) {
        console.log(res.data);
        that.setData({
          topics: formatters.topicListFormatter(res.data)
        });
      }
    });
  }
})