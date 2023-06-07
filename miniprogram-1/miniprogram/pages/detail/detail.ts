//detail.js
Page({
  data: {
    event: {}
  },
  onLoad: function (options) {
    const events = [
      {
        id: 1,
        name: "足球比赛",
        date: "2023-07-01",
        location: "北京",
        description: "这是一场足球比赛的详细描述。"
      },
      {
        id: 2,
        name: "篮球比赛",
        date: "2023-07-15",
        location: "上海",
        description: "这是一场篮球比赛的详细描述。"
      }
    ];

    const eventId = options.id;
    const event = events.find((event) => event.id == eventId);
    this.setData({
      event: event
    });
  }
});