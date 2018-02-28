// pages/topic/topic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicId: '',
    topicInfo: null,
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!options.id) {
      wx.navigateBack({});
      return;
    }
    this.setData({
      topicId: options.id
    });
    let that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      success: function (res) {
        let data = res.data;
        if (data[0]) {
          data = data[0];
        }
        console.log(data);
        that.setData({
          topicInfo: data
        });
      }
    });
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
      success: function (res) {
        console.log(res.data);
        that.setData({
          replies: res.data
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})