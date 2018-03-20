import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '@shared/shared.module';
import {NgxEchartsModule} from 'ngx-echarts';

import {TabAlternativesComponent} from './components/tab-alternatives.component';
import {EchartsGraphComponent} from './components/echarts-graph.component';
import {CardAlternativesComponent} from './components/card-alternatives.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {WarningMessageComponent} from './components/warning-message.component';

@NgModule({
    imports: [
        SharedModule,
        NgxEchartsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        CardAlternativesComponent,
        TabAlternativesComponent,
        EchartsGraphComponent,
        WarningMessageComponent

    ],
    entryComponents: [
        CardAlternativesComponent,
        TabAlternativesComponent,
        EchartsGraphComponent,
        WarningMessageComponent
    ],
    providers: [
        CanDeactivateGuard
    ]
})
export class HomeModule {

}
