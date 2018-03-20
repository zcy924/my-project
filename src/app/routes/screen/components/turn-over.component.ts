import {Component, Inject, Injector, Input, Optional} from '@angular/core';
import {
    ECHARTS_DEF_ID, PANEL_ID,
    TURNOVER_NEGATIVE, TURNOVER_POSITIVE,
} from '@shared/token/injectToken';

// 该组件所包含的正反两面的组件没有交互关系
@Component({
    selector: 'turn-over',
    template: `
        <div class="zijin-flip-container">
            <div class="zijin-card" [ngStyle]="flipped">
                <div class="front" (click)="setFlipped()">
                    <ng-container *ngComponentOutlet="comps[0]?.component;injector:comps[0]?.injector;"></ng-container>
                </div>
                <div class="back" (click)="setFlipped()">
                    <ng-container *ngComponentOutlet="comps[1].component;injector:comps[1]?.injector;"></ng-container>
                </div>
            </div>
        </div>
    `,
})
export class TurnOverComponent {


    @Input() comps = [
        // GeneralRankingComponent,
        // GeneralDetailComponent
    ];

    flipped = null;

    constructor(private injector: Injector,
                @Inject(TURNOVER_POSITIVE) @Optional() c1,
                @Inject(TURNOVER_NEGATIVE) @Optional() c2) {
        console.log(c1);
        console.log(c2);

        if (!this.comps.length) {
            this.comps.push(...[
                {
                    component: c1 ? c1.component : null,
                    injector: Injector.create([
                        {
                            provide: PANEL_ID,
                            useValue: c1 ? c1.id : null
                        }
                    ], this.injector)
                },
                {
                    component: c2 ? c2.component : null,
                    injector: Injector.create([
                        {
                            provide: PANEL_ID,
                            useValue: c2 ? c2.id : null
                        }
                    ], this.injector)
                }
            ]);
        }
    }

    setFlipped() {
        if (!this.flipped) {
            this.flipped = {transform: 'rotateY(180deg)'};
        } else {
            this.flipped = null;
        }
    }

}


