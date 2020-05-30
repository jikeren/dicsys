
var _wxcharts = require('../../../utils/plugins/wxcharts')

Page({
  data: {
    currtab: 2,
    swipertab: [{ name: '条形', index: 0 }, { name: '折线', index: 1 }, { name: '饼', index: 2 }, { name: '区域', index: 3 },],
    items: [
      {value: 'date', name: '日报表'},
      {value: 'month', name: '月报表', checked: 'true'},
    ],
    listData:[
      {"code":"KX000001","text":"680","type":"680"},
      {"code":"KX000002","text":"680","type":"680"},
      {"code":"KX000003","text":"680","type":"680"},
      {"code":"KX000004","text":"680","type":"680"},
      {"code":"KX000005","text":"680","type":"680"},
      {"code":"KX000006","text":"680","type":"680"},
      {"code":"KX000007","text":"680","type":"680"},
      {"code":"KX000008","text":"680","type":"680"},
      {"code":"KX000009","text":"680","type":"680"},
      {"code":"KX000010","text":"680","type":"680"},
      {"code":"KX000011","text":"680","type":"680"},
      {"code":"KX000012","text":"680","type":"680"},
      {"code":"KX000017","text":"680","type":"680"}
    ],
    chooseItem:"",
    date:"1998-10-10"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.graphShow()
  },

  /**
   * @Explain：获取设备信息
   */
  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  /**
   * @Explain：选项卡切换
   */
  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.graphShow()
  },

  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  /**
   * @Explain：初始化静态图表
   */
  graphShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.barShow()
        break
      case 1:
        that.lineShow()
        break
      case 2:
        that.pieShow()
        break
      case 3:
        that.areaShow()
        break
    }
  },


 
  pieShow: function () {
    let pie = {
      canvasId: 'pieGraph',
      type: 'pie',
      series: [{
        name: '焊丝成本',
        data: 36.5,
      }, {
        name: '气体成本',
        data: 15.5,
      }, {
        name: '能耗成本',
        data: 90.5,
        color: '#0154A6',
      }, {
        name: '摊销成本',
        data: 10.5,
      }],
      width: 300,
      height: 240,
      dataLabel: true
    }
    new _wxcharts(pie)
  },

  barShow: function () {
    let bar = {
      canvasId: 'barGraph',
      type: 'column',
      categories: ['KX0002012', 'KX0002013', 'KX0002014', 'KX0002015'],
      series: [
      //   {
      //   name: '成交量1',
      //   data: [15, 20, 45, 37, 4, 80]
      // },
      {
        name: '焊机使用率',
        data: [70, 40, 65, 90]
      }],
      yAxis: {
        format: function (val) {
          return val + '%';
        }
      },
      width: 360,
      height: 220
    }
    new _wxcharts(bar)
  },
  radioChange:function(e){
    console.log(e.detail);
  },
  lineShow: function () {
    let line = {
      canvasId: 'lineGraph',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: 360,
      height: 300
    }
    new _wxcharts(line)
  },

  areaShow: function () {
    let area = {
      canvasId: 'areaGraph',
      type: 'area',
      categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
      series: [{
        name: '成交量1',
        data: [70, 40, 65, 100, 34, 18],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [15, 20, 45, 37, 4, 80],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: 320,
      height: 200
    }
    new _wxcharts(area)
  }

})