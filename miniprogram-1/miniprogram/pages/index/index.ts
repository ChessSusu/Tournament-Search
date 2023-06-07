//index.js
Page({
  data: {
    events: [
      {
        id: 1,
        name: "足球比赛",
        date: "2023-07-01",
        location: "北京"
      },
      {
        id: 2,
        name: "篮球比赛",
        date: "2023-07-15",
        location: "上海"
      }
    ]
  },
  viewDetail: function (e) {
    const eventId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${eventId}`
    });
  }
});