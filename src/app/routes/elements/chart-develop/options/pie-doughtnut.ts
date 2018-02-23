export const PIEDOUGHTNUTPAYLOAD = {
legend: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
  measureList: [
    {data: [335], name: "直接访问"},
    {data: [310], name: "邮件营销"},
    {data: [234], name: "联盟广告"},
    {data: [135], name: "视频广告"},
    {data: [1548], name: "搜索引擎"}
  ]
};

export const PIEDOUGHTNUT = `
   let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
  that.option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: that.payload.legend
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: measureList
        }
      ]
    };
`;
