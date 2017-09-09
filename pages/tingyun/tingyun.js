Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser();
  },
  //图片点击事件
  onLoginTap:function(){
    this.getUser();
  },
  //获取用户信息事件
  getUser:function(){
    var that = this;
    var avatarUrl = "/images/tingyun/user-logo.png";
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        avatarUrl = userInfo.avatarUrl
        that.setData({
          userLogo: avatarUrl
        })
      },
      fail: function () {
        that.setData({
          userLogo: avatarUrl
        })
      }
    })
  },
  onIntoTap: function (e) {
    var tag = e.currentTarget.dataset.tag;
    var url = '/pages/tingyun/tingyun_detail/tingyun_detail?tag='+tag;
    wx.navigateTo({
      url: url
    })
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