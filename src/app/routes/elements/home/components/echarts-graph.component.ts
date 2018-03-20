import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
    selector: 'home-chart',
    template: `
        <!--原来是height:99%-->
        <div echarts [options]="option" style="height: 99%;"></div>
    `
})
export class EchartsGraphComponent implements OnInit {

    @Input() id;   // 图表的id值
    option;
    payload;


    constructor(private homeService: HomeService) {
    }

    ngOnInit(): void {
        if (this.id) {
            this.homeService.getOptionAndDataById(this.id)
                .subscribe(data => {
                    if (data['element']) {
                        this.payload = data['element'].dataMsg;
                        const legend = this.payload.legend,
                            dimensionList = this.payload.dimensionList,
                            measureList = this.payload.measureList,
                            that = this;
                        try {
                            eval(data['element'].optionMsg);
                        } catch (e) {
                            console.log(e);
                            // TODO: tell user graph generated failed!
                        }
                    } else {
                        // TODO: tell user graph generated failed!
                    }
                });
        }
    }
}
