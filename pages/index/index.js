const moment = require('../../lib/moment/moment.js');
const hotTopics = require('../../test/mock/topics/hot');
for (let i = 0; i < hotTopics.length; i++) {
  let item = hotTopics[i];
  item.lastUpdate = moment(item['last_touched'] * 1000).format('YYYY-MM-DD HH:mm:ss');
  item.member['avatar_mini'] = item.member['avatar_mini'].replace(/\/\//gi, 'https://');
  item.member['avatar_normal'] = item.member['avatar_normal'].replace(/\/\//gi, 'https://');
  item.member['avatar_large'] = item.member['avatar_large'].replace(/\/\//gi, 'https://');
}
Page({
  data: {
    topics: {
      hot: hotTopics
    }
  },
  onLoad: function (options) {
    // Do some initialize when page load.
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
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  }
})