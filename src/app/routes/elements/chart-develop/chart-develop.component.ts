import {Component, ViewChild} from '@angular/core';
import {CHARTS} from './charts.config';
import {EchartsDevComponent} from './echarts.dev.component';

@Component({
  templateUrl: 'chart-develop.html',
  styleUrls: ['chart-develop.scss']
})
export class ChartDevelopComponent {
  charts = CHARTS;
  selectedChartNo;
  showChart = true;
  icon;
  @ViewChild(EchartsDevComponent) Echart: EchartsDevComponent;

  constructor() {
  }

  select(item) {
    console.log(item);
    if (this.showChart) {
      this.selectedChartNo = item.no;
      this.icon = item.icon;
      this.showChart = false;
    }else {
      this.Echart.select(item);
    }
  }


}
