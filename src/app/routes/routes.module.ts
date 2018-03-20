import { NgModule } from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {ScreenModule} from "./screen/screen.module";

import { SharedModule } from '@shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
import {AddTodoComponent} from "./dashboard/v1/addTodo.component";
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
// service

import {V1Service} from './dashboard/v1/v1.service';


@NgModule({
    imports: [ SharedModule, RouteRoutingModule, NgxEchartsModule, ScreenModule ],
    declarations: [
        DashboardV1Component,
        DashboardAnalysisComponent,
        DashboardMonitorComponent,
        DashboardWorkplaceComponent,
        AddTodoComponent,
        // passport pages
        UserLoginComponent,
        UserRegisterComponent,
        UserRegisterResultComponent,
        // single pages
        Exception403Component,
        Exception404Component,
        Exception500Component
    ],
    providers: [
        V1Service
    ],
    entryComponents:[
        AddTodoComponent
    ]
})

export class RoutesModule {}
