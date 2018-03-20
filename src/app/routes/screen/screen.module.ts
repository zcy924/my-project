import {NgModule} from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import {ScreenRoutingModule} from './screen-routing.module';
import {SharedModule} from '@shared/shared.module';
import {ScreenComponent} from './screen.component';
import {FlipCardComponent} from './components/flip-card.component';
import {CardAlternativesComponent} from './components/card-alternatives.component';
import {TurnOverComponent} from './components/turn-over.component';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CarouselComponent} from './components/carousel.component';
import {AngularSplitModule} from 'angular-split';
import {EchartsGraphComponent} from "./components/echarts-graph.component";

const COMPONENTS = [
    ScreenComponent,
    CardAlternativesComponent,
    FlipCardComponent,
    TurnOverComponent,
    CarouselComponent,
    EchartsGraphComponent,
];

@NgModule({
    imports: [
        SharedModule,
        NgxEchartsModule,
        PerfectScrollbarModule,
        AngularSplitModule,
        ScreenRoutingModule,
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...COMPONENTS
    ],
    providers: []
})
export class ScreenModule {

}
