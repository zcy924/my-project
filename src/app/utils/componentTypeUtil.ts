import {Injector} from '@angular/core';
import * as _ from 'lodash';
import {ECHARTS_DEF_ID, PANEL_ID, TURNOVER_NEGATIVE, TURNOVER_POSITIVE} from '@shared/token/injectToken';
import {EchartsGraphComponent} from "../routes/screen/components/echarts-graph.component";
import {ComponentTypeCode} from './component-type-code';
import {TurnOverComponent} from "../routes/screen/components/turn-over.component";
import {FlipCardComponent} from "../routes/screen/components/flip-card.component";
import {ViewInfoComponent} from '@shared/components/view/view-info.component';
import {ViewDetailComponent} from '@shared/components/view/view-detail.component';
import {ViewRankComponent} from '@shared/components/view/view-rank.component';


export const panelAdapt = (arr: Array<any>, injector: Injector) => {
    const results = [];
    arr.forEach(value => {
        switch (value.type) {
            case '0':
                results.push(_.extend({
                    component: EchartsGraphComponent,
                    injector: Injector.create([{
                        provide: ECHARTS_DEF_ID,
                        useValue: value.id
                    }], injector)
                }, value));
                break;
            case '1':
                results.push(_.extend({
                    component: ViewInfoComponent,
                    injector: Injector.create([{
                        provide: PANEL_ID,
                        useValue: value.id
                    }], injector)
                }, value));
                break;
            case '2':
                results.push(_.extend({
                    component: ViewDetailComponent,
                    injector: Injector.create([{
                        provide: PANEL_ID,
                        useValue: value.id
                    }], injector)
                }, value));
                break;
            case '3':
                results.push(_.extend({
                    component: ViewRankComponent,
                    injector: Injector.create([{
                        provide: PANEL_ID,
                        useValue: value.id
                    }], injector)
                }, value));
                break;
            case '10':
                const provides = [];
                const children = JSON.parse(value.chart_option);
                children.forEach((val, index) => {
                    if (index === 0) {
                        provides.push({
                            provide: TURNOVER_POSITIVE,
                            useValue: {
                                component: ComponentTypeCode.get(val.type),
                                id: val.id
                            }
                        });
                    } else if (index === 1) {
                        provides.push({
                            provide: TURNOVER_NEGATIVE,
                            useValue: {
                                component: ComponentTypeCode.get(val.type),
                                id: val.id
                            }
                        });
                    }
                });
                results.push(_.extend({
                    component: TurnOverComponent,
                    injector: Injector.create([...provides], injector)
                }, value));
                break;
            case '11':
                results.push(_.extend({
                    component: FlipCardComponent,
                    injector: Injector.create([], injector)
                }, value));
                break;
            default:
                results.push(value);    // 空值
                break;
        }
    });
    return results;
};
