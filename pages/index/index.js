const moment = require('../../lib/moment/moment.js');

function getFormatedTopicData (topics) {
  for (let i = 0; i < topics.length; i++) {
    let item = topics[i];
    item.lastUpdate = moment(item['last_touched'] * 1000).format('YYYY-MM-DD HH:mm:ss');
    item.member['avatar_mini'] = item.member['avatar_mini'].replace(/\/\//gi, 'https://');
    item.member['avatar_normal'] = item.member['avatar_normal'].replace(/\/\//gi, 'https://');
    item.member['avatar_large'] = item.member['avatar_large'].replace(/\/\//gi, 'https://');
  }
  return topics;
}

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
            hot: getFormatedTopicData(res.data)
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