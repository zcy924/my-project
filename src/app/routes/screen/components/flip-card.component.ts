import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {InteractService} from '../interact.service';
import {AdDirective} from '@shared/directives/ad.directive';

// 该组件正反两面包含的组件有交互关系
@Component({
    selector: 'flip-ranking',
    template: `
        <div class="zijin-flip-container">
            <div class="zijin-card" [ngStyle]="flipped">
                <div class="front">
                    <ng-container *ngComponentOutlet="comps[0]"></ng-container>
                </div>
                <div class="back" (click)="setFlipped()">
                    <ng-template panel-host></ng-template>
                </div>
            </div>
        </div>
    `,
    providers: [InteractService]
})
export class FlipCardComponent implements OnInit, AfterViewInit {


    @Input() comps = [
        // GeneralRankingComponent,
        // DetailViewComponent
    ];

    flipped = null;

    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private interactService: InteractService) {
    }

    ngOnInit(): void {
        this.interactService.valueAnnounced$
            .subscribe(value => { // TODO(ccliu): check why execute twice every time?
                // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DetailViewComponent);
                // const viewContainerRef = this.adHost.viewContainerRef;
                // viewContainerRef.clear();
                // const componentRef = viewContainerRef.createComponent(componentFactory);
                // componentRef.instance['data'] = value;
                // this.setFlipped();
            });
    }

    ngAfterViewInit() {
        // setTimeout(() => {
        //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.comps[1]);
        //   let viewContainerRef = this.adHost.viewContainerRef;
        //   viewContainerRef.clear();
        //   let componentRef = viewContainerRef.createComponent(componentFactory);
        //   componentRef.instance["data"] = [1, 2, 3];
        //
        // }, 0);
    }

    setFlipped() {
        if (!this.flipped) {
            this.flipped = {transform: 'rotateY(180deg)'};
        } else {
            this.flipped = null;
        }
    }

}
