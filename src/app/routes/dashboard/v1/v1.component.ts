import {NzMessageService} from 'ng-zorro-antd';
import {Component, OnInit} from '@angular/core';
// import { _HttpClient } from '@delon/theme';
import {V1Service} from './v1.service';

@Component({
    selector: 'app-dashboard-v1',
    templateUrl: './v1.component.html'
})
export class DashboardV1Component implements OnInit {

    // constructor(private http: _HttpClient, public msg: NzMessageService) { }
    constructor(private v1Service: V1Service, public msg: NzMessageService) {
    }

    todoData: any;
    cardData: any;
    option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        xAxis: {
            type: 'category',
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    };
    option2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };


    // todoData: any[] = [
    //     {completed: true, avatar: '1', name: '苏先生', content: `请告诉我，我应该说点什么好？`},
    //     {completed: false, avatar: '2', name: 'はなさき', content: `ハルカソラトキヘダツヒカリ`},
    //     {
    //         completed: false,
    //         avatar: '3',
    //         name: 'cipchk',
    //         content: `this world was never meant for one as beautiful as you.`
    //     },
    //     {completed: false, avatar: '4', name: 'Kent', content: `my heart is beating with hers`},
    //     {
    //         completed: false,
    //         avatar: '5',
    //         name: 'Are you',
    //         content: `They always said that I love beautiful girl than my friends`
    //     },
    //     {completed: false, avatar: '6', name: 'Forever', content: `Walking through green fields ，sunshine in my eyes.`}
    // ];

    quickMenu = false;

    webSite: any[] = [];
    salesData: any[] = [];
    offlineChartData: any[] = [];

    ngOnInit() {
        // this.http.get('/chart').subscribe((res: any) => {
        //     this.webSite = res.visitData.slice(0, 10);np
        //     this.salesData = res.salesData;
        //     this.offlineChartData = res.offlineChartData;
        // });
    }

    getTodo() {
        this.v1Service.getTodo()
            .subscribe(data => {
                this.todoData = data;
            });
    }

    updateTodo() {
        const params = {};
        this.v1Service.updateTodo(params)
            .subscribe(data => {
                this.msg.success('修改成功!');
            });

    }

    deleteTodo(id) {
        this.v1Service.deleteTodo(id)
            .subscribe(data => {
                this.msg.success('成功删除该代办事项');
            });

    }

    completeTodo() {
        const params = {};
        this.v1Service.updateTodo(params)
            .subscribe(data => {
                this.msg.success('您已完成该任务!');
            });

    }

    addTodo() {
        const params = {};
        this.v1Service.addTodo(params)
            .subscribe(data => {
                this.msg.success('新增任务成功!');
            });

    }

    getCardData() {
        this.v1Service.getCardData()
            .subscribe(data => {
                this.cardData = data;
            });

    }
}
