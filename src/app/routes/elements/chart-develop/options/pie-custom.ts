export const PIECUSTOMPAYLOAD = {
  legend: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜素引擎"],
  measureList: [
    {data: [335], name: "直接访问"},
    {data: [310], name: "邮件营销"},
    {data: [274], name: "联盟广告"},
    {data: [235], name: "视频广告"},
    {data: [400], name: "搜索引擎"}
  ]
};

export const PIECUSTOM = `
    let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
  that.option = {
     backgroundColor: '#2c343c',
     title: {
        left: 'center',
        top: 20,
         textStyle: {
            color: '#ccc'
        }
    },
    
    tooltip : {
        trigger: 'item',
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data: measureList,
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
`;
