import {NgModule} from '@angular/core';
import {ChartDevelopService} from './chart-develop.service';
import {ChartDevelopComponent} from './chart-develop.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsDevComponent} from './echarts.dev.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NgZorroAntdModule,
    NgxEchartsModule,
  ],
  declarations: [
    ChartDevelopComponent,
    EchartsDevComponent,
  ],
  providers: [
    ChartDevelopService,
  ],
  exports: [EchartsDevComponent]
})
export class ChartDevelopModule {

}
