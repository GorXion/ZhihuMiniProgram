// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: '1月24日 星期三',
    intro: "如何选择适合自己的读物?如何啃下艰涩的博物?如何养成日常阅读的习惯?如何记住读物中的知识?这是知名自由撰稿人张佳玮的高效率阅读经验分享",
    search: false
  },

  searchFocus(event) {
    this.setData({
      search: true
    })
  },

  tapMaskView() {
    this.setData({
      search: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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