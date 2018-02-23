import {Component, Input, OnInit} from '@angular/core';
import {CHARTTYPEMAPPING} from './charts.config';
import {ChartDevelopService} from './chart-develop.service';
import {NzMessageService} from 'ng-zorro-antd';
import {THEMES} from './constant';
import {NzModalSubject} from 'ng-zorro-antd';
import * as _ from 'lodash';
// import 'brace/mode/javascript';
// import 'brace/theme/clouds';

@Component({
  selector: 'echarts-dev',
  templateUrl: './echarts.dev.html'
})
export class EchartsDevComponent implements OnInit {

  @Input() chartType;
  @Input() icon;
  themes = THEMES;
  formModel = {
    modelMsg: {
      service: null,
      // creator_orgNo: this.sessionService.getUserSession().orgNo, //保存接口使用
      dimensionRows: [''],
      measureRows: ['']
    },
    componentMsg: {
      icon: '',
      subject: '',  // 组件主题
      name: '',  // 组件名称
      describe: '', // 组件描述
      creator_orgNo: '0000',
      creator: '0000'
    }
  };
  aceConfig = {
    text: '',
    mode: 'javascript',
    theme: 'clouds',
    readOnly: false,
    textChanged: (text) => {
      this.aceConfig.text = text;
    },
    options: {
      printMargin: false
    }
  };

  payload;
  payloadStr;
  option;
  availableServices;
  availableFields;
  chartNo: string;
  flag = false;
  modData;
  modId;


  constructor(private chartService: ChartDevelopService,
              private nzModal: NzModalSubject,
              private message: NzMessageService) {
  }

  ngOnInit() {
    if (this.modData != null) {
      this.formModel.componentMsg.name = this.modData.componentMsg['chartName'];
      this.formModel.componentMsg.describe = this.modData.componentMsg['chartDesc'];
      this.formModel.componentMsg.subject = this.modData.componentMsg['chartSubjectId'];
      this.formModel.componentMsg.icon = this.modData.componentMsg['icon'];

      this.chartService.queryServiceList()
        .subscribe(data => {
          this.availableServices = data['retList'];
        });
      this.payload = this.modData['dataMsg'];
      this.payloadStr = JSON.stringify(this.modData['dataMsg'], null, 2);
      this.aceConfig.text = this.modData.optionMsg;
      const that = this;
      eval(this.aceConfig.text);
    }else {
      this.formModel.componentMsg.icon = this.icon;

      this.chartService.queryServiceList()
        .subscribe(data => {
          this.availableServices = data['retList'];
        });

      this.payload = CHARTTYPEMAPPING[this.chartType].payload;
      this.payloadStr = JSON.stringify(this.payload, null, 2);
      this.aceConfig.text = CHARTTYPEMAPPING[this.chartType].text;
      // console.log(this.aceConfig.text);

      const that = this;
      eval(this.aceConfig.text);
    }
  }

  selectService(service) {
    this.availableFields = service.returnParam;
  }

  getJsonData() {
    const params = _.extend(
      _.omit(this.formModel.modelMsg, ['service']),
      _.omit(this.formModel.modelMsg.service, ['returnParam'])
    );
    console.log(params);
    this.chartService.preview(params)
      .subscribe(data => {
        console.log(data);
        this.payload = data['element'];
        this.payloadStr = JSON.stringify(data['element'], null, 2);
      });
  }

  addMeasure() {
    this.formModel.modelMsg.measureRows.push('');
  }

  deleteMeasure() {
    this.formModel.modelMsg.measureRows.length = this.formModel.modelMsg.measureRows.length - 1;
  }

  preview() {
    const that = this;
    try {
      eval(this.aceConfig.text);
    } catch (e) {
      console.log(e);
      console.log(e.message);
      console.log(e.name);
    }
  }

  save() {

    delete this.formModel.modelMsg.service['returnParam'];

    const params = _.extend(
      {optionMsg: this.aceConfig.text},
      this.formModel
    );

    console.log(params);
    this.chartService.save(params)
      .subscribe(data => {
        console.log(data);
        this.message.success('图表保存成功！');
      });
  }

  modSave() {
    delete this.formModel.modelMsg.service['returnParam'];
    this.formModel.componentMsg['chartId'] = this.modId;
    const params = _.extend(
      {optionMsg: this.aceConfig.text},
      this.formModel
    );
    this.chartService.modChart(params)
      .subscribe(data => {
        console.log(data);
        this.nzModal.destroy();
        this.message.success('修改成功！');
      });
  }

  onChartInit() {
    setTimeout(() => {
      this.ngOnInit();
    }, 10);
  }

  select(item) {
    this.formModel.modelMsg.service = null;
    this.formModel.modelMsg.dimensionRows = [''];
    this.formModel.modelMsg.measureRows = [''];
    this.formModel.componentMsg.describe = '';
    this.formModel.componentMsg.name = '';
    this.formModel.componentMsg.subject = null;
    this.formModel.componentMsg.icon = item.icon;
    this.chartService.queryServiceList()
      .subscribe(data => {
        this.availableServices = data['retList'];
      });

    this.payload = CHARTTYPEMAPPING[item['no']].payload;
    this.payloadStr = JSON.stringify(this.payload, null, 2);
    this.aceConfig.text = CHARTTYPEMAPPING[item['no']].text;
    // console.log(this.aceConfig.text);

    const that = this;
    eval(this.aceConfig.text);
  }
}
