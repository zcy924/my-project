export const PIESIMPLEPAYLOAD = {
  legend: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
  measureList: [
  {data: [335], name: "直接访问"},
  {data: [310], name: "邮件营销"},
  {data: [234], name: "联盟广告"},
  {data: [135], name: "视频广告"},
  {data: [1548], name: "搜索引擎"}
]
};

export const PIESIMPLE = `
 let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
this.option = {
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: that.payload.legend
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: measureList,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
`;
