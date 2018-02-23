export const FUNNELSIMPLEPAYLOAD = {
  legend: ["展现", "点击", "访问", "咨询", "订单"],
  measureList: [
    {data: [60], name: "访问"},
    {data: [40], name: "咨询"},
    {data: [20], name: "订单"},
    {data: [80], name: "点击"},
    {data: [100], name: "展现"}
  ]
};

export const FUNNELSIMPLE = `
  let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
that.option = {
  title: {
    text: "漏斗图",
    subtext: "纯属虚构"
  },
  tooltip: {
    trigger: "item",
  },
  toolbox: {
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: that.payload.legend
  },
  calculable: true,
  series: [
    {
      name: "漏斗图",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      // height: {totalHeight} - y - y2,
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        normal: {
          show: true,
          position: "inside"
        },
        emphasis: {
          textStyle: {
            fontSize: 20
          }
        }
      },
      labelLine: {
        normal: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid"
          }
        }
      },
      itemStyle: {
        normal: {
          borderColor: "#fff",
          borderWidth: 1
        }
      },
      data: measureList
    }
  ]
};
`;












