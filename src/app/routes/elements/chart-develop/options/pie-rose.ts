export const PIEROSEPAYLOAD = {
  legend: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8"],
  measureList: [
      {data: [10], name: "rose1"},
      {data: [5], name: "rose2"},
      {data: [15], name: "rose3"},
      {data: [25], name: "rose4"},
      {data: [20], name: "rose5"},
      {data: [35], name: "rose6"},
      {data: [30], name: "rose7"},
      {data: [40], name: "rose8"}
  ]
};

export const PIEROSE = `
let measureList = [];
    that.payload.measureList.forEach(val=>{
      measureList.push({
        name:val.name,
        value:val.data[0]
      });
    });
that.option = {
    title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:that.payload.legend
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'半径模式',
            type:'pie',
            radius : [20, 110],
            center : ['25%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:measureList
        },
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 110],
            center : ['75%', '50%'],
            roseType : 'area',
            data:measureList
        }
    ]
};


`;
