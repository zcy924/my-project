export const PIENESTPAYLOAD = {
  legend: ["直达", "营销广告", "搜索引擎", "邮件营销", "联盟广告", "视频广告", "百度", "谷歌", "必应", "其他"],
  measureList: [
    {data: [335], name: "直达"},
    {data: [679], name: "营销广告"},
    {data: [1548], name: "搜索引擎"},
    {data: [310], name: "邮件营销"},
    {data: [234], name: "联盟广告"},
    {data: [135], name: "视频广告"},
    {data: [1048], name: "百度"},
    {data: [251], name: "谷歌"},
    {data: [147], name: "必应"},
    {data: [102], name: "其他"}
  ]
};

export const PIENEST = `
 let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });

 this.option = {
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
          selectedMode: "single",
          radius: [0, "30%"],

          label: {
            normal: {
              position: "inner"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: measureList.slice(0,3)
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "55%"],
          label: {
            normal: {
              formatter: "{a|{a}}{abg|}\\n{hr|}\\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: measureList.slice(3)
        }
      ]
    };

`;
