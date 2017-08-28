// pages/kuaidi/company/index.js
var data = require('../../../utils/config/kuaidiCompany.js')
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
    //将快递公司添加到data里面
    this.setData({
      companies: data.data,
    }) 
  } ,
  //电话号码点击事件
  onCallTap:function(e){
    //console.log(e);
    var phoneNum = e.currentTarget.dataset.num;
    this.call(phoneNum);
  },
  //打电话事件
  call:function(num){
    wx.makePhoneCall({
      phoneNumber: num,
    })
  },
  //company点击事件
  onCompanyTap:function(e){
    var code = e.currentTarget.dataset.code;
    var name = e.currentTarget.dataset.name;
    var url = e.currentTarget.dataset.url;
    var data={
      code:code,
      name:name,
      url:url
    }
    wx.setStorageSync("company", data);
    wx.switchTab({
      url: '/pages/kuaidi/kuaidi',
    })
    // wx.redirectTo({
    //   url: '/pages/kuaidi/kuaidi?name='+name+'&code='+code+'&url='+url,
    // })
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