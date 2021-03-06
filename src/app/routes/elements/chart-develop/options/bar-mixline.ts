export const BARMIXLINEPAYLOAD = {
  legend: ["蒸发量", "降水量", "平均温度"],
  dimensionList: [
    {
      name: "",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
    }
    ],
  measureList: [
    {
      name: "蒸发量",
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],

    },
    {
      name: "降水量",
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],

    },
    {
      name: "平均温度",
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

    }
  ]


};

export const BARMIXLINE = `
that.option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:that.payload.legend
    },
    xAxis: [
        {
            type: 'category',
            data:that.payload.dimensionList[0].data,
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series:  [
    {
      name: that.payload.measureList[0].name,
      type: 'bar',
      data: that.payload.measureList[0].data,
    },
    {
      name: that.payload.measureList[1].name,
      type: 'bar',
      data: that.payload.measureList[1].data,

    },
    {
      name: that.payload.measureList[2].name,
      type: 'line',
      yAxisIndex: 1,
      data: that.payload.measureList[2].data

    }
    ],
};

`;
