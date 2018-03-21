import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {ECHARTS_DEF_ID} from '@shared/token/injectToken';
import {HomeService} from "../../elements/home/home.service";

@Component({
    selector: 'chart-view',
    template: `
        <div echarts [options]="option" style="height: 99%;"></div>
    `
})
export class EchartsGraphComponent implements OnInit {

    @Input() pid;
    @Input() option;
    payload;

    // 注入图表的id值
    constructor(@Inject(ECHARTS_DEF_ID) @Optional() private id,
                private homeService: HomeService) {
    }

    ngOnInit(): void {

        const id = this.id || this.pid;
        if (id) {
            this.homeService.getOptionAndDataById(this.id)
                .subscribe(data => {
                    console.log('1111111111111111');
                    console.log(data);
                    if (data['element']) {
                        this.payload = data['element'].dataMsg;
                        const legend = this.payload.legend,
                            dimensionList = this.payload.dimensionList,
                            measureList = this.payload.measureList,
                            that = this;
                        console.log('echarts-graph.component');
                        try {
                            eval(data['element'].optionMsg);    // TODO(ccliu): 如果禁止使用eval，那么服务器应该需要生成js文件
                        } catch (e) {
                            console.log(e);
                        }
                    } else {

                    }
                }, (err) => {
                    console.log(err);
                });
        } else if (this.option) {
            console.log('option bind!');
        } else {
            console.log('图表初始化失败，未获取到任何id');
        }
    }
}
