export const GAUGESIMPLEPAYLOAD = {
  measureList: [{data: [50], name: "完成率"}]
};

export const GAUGESIMPLE = `
let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
  that.option = {
      tooltip: {
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "业务指标",
          type: "gauge",
          detail: {formatter: "{value}%"},
          data: measureList
        }
      ]
    };
`;
