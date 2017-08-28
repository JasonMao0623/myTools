// pages/kuaidi/kuaidi.js
//获取配置文件信息
var num = "824812062419";
var kdConfig=require("../../utils/config/kuaidi.js");
var configData = kdConfig.kdConfig;
var url = configData[0].url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'company':'请选择物流公司',
    'isWarn' :'warn-false',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取缓存中的oddnum
    var oddNum = wx.getStorageSync("oddNum");
    if (oddNum) {
      this.setData({
        'oddNum': oddNum
      })
    }
    //如果已经设置了单号和公司改变按钮的颜色
    if(this.data.code&&this.data.oddNum){
      //console.log(1);
      this.setData({
        'className': 'blue'
      })
    }
  },
  //快递公司点击事件
  onCompanyTap: function () {
    wx.navigateTo({
      url: '/pages/kuaidi/company/index',
    })
  },
  //快递单号输入完成事件
  onOddNumConfirm: function (event) {
     num=event.detail.value;
     wx.setStorageSync('oddNum', num);
  },
  //点击查询事件
  onCheckTap: function () {
    this.setData({
      'isWarn': 'warn-false'
    })
      var num=this.data.oddNum;
      var postType=this.data.code;
      this.check(num, postType,this.navigateFun);
  },
  //查询快递事件
  check:function(num,postType,callback){
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: {
        type:postType,
        postid:num,
        id:1,
        valicode:'',
        temp:''
      },
      method:'GET',
      success: function (res) {
        //console.log(res);
        callback(res);
      }
    })
  },
  //callback函数，用于处理返回的数据以及重定向
  navigateFun:function(res){
    //console.log(res);
    var data =res.data;
    if(data.status=='200'){
      var detail=data.data;
      //由于数据量较大，所以讲数据放到缓存里面
      var details={};
      details.detail=detail;
      details.oddNum=this.data.oddNum;
      details.name=this.data.company;
      details.url = this.data.url;
      wx.setStorageSync('details', details);
      wx.navigateTo({
        url: '/pages/kuaidi/result/index',
      })
    }else{
      // wx.showModal({
      //   title: '警告',
      //   content: '你得单号有误，请重新输入',
      // })
      this.setData({
        'isWarn': 'warn-true'
      })
    }
  },
  //扫码函数
  onScanTap:function(){
    var that =this;
    wx.scanCode({
      success:function(res){
        //console.log(res);
        that.setData({
          'oddNum':res.result,
        });
        wx.setStorageSync('oddNum', res.result);
      }
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
    //获取缓存参数
    var storage = wx.getStorageSync("company");
    if (storage) {
      this.setData({
        'company': storage.name,
        'code': storage.code,
        'url': storage.url
      })
    };
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