// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cardList: [
        {
          src:'../../images/icon2.jpg',
          bind:'statusview',
          name: 'aa',
          content: '焊机状态统计报表'
        }, {
          src:'../../images/icon4.jpg',
          name: 'aa',
          bind:'warnview',
          content: '焊机质量预警报表'
        }, {
          src:'../../images/icon3.jpg',
          name: 'aa',
          bind:'employeeview',
          content: '员工工作强度报表'
        }, {
          src:'../../images/icon1.jpg',
          name: 'aa',
          bind:'costview',
          content: '焊机成本统计报表'
        }, {
          src:'../../images/icon5.jpg',
          name: 'aa',
          bind:'status',
          content: '设备实时状态'
        }, {
          src:'../../images//icon6.jpg',
          name: 'aa',
          bind:'status',
          content: '设备信息'
        }
      ]

  },

  /**
   * 设备状态统计报表
   */
  statusview:function(){
    wx.navigateTo({
      url: '../../pages/home/page/status/index'
    })
  },
    /**
   * 设备成本统计报表
   */
  costview:function(){
    console.log("warnview");
    wx.navigateTo({
      url: '../../pages/home/page/cost/index'
    })
  },
  /**
   * 员工统计报表
   */
  employeeview:function(){
    console.log("employeeview");
    wx.navigateTo({
      url: '../../pages/home/page/employee/index'
    })
  },
    /**
   * 设备预警报表
   */
  warnview:function(){
    console.log("warnview");
    wx.navigateTo({
      url: '../../pages/home/page/warn/index'
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