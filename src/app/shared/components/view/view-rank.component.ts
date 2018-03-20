import {Component, Inject, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {PANEL_ID} from '@shared/token/injectToken';
import {ScreenService} from "../../../routes/screen/screen.service";
import {InteractService} from "../../../routes/screen/interact.service";
import {RetInfo} from "@core/models/ret-info";
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'view-rank',
    template: `
        <div nz-row [ngStyle]="meta.top?.lineStyle">
            <div nz-col [nzSpan]="12" [ngStyle]="meta.top?.titleStyle">
                {{meta.top?.title}}
            </div>
            <div nz-col [nzSpan]="12" [ngStyle]="meta.top?.subtitleStyle">
                {{meta.top?.subtitle}}
            </div>
        </div>
        <div nz-row style="background-color: #6a6a5569;">
            <div nz-col [nzSpan]="nzSpanLength">
                排名
            </div>
            <div nz-col [nzSpan]="nzSpanLength" *ngFor="let head of meta.fields;">
                {{head?.desc}}
            </div>
        </div>
        <div perfectScrollbar>
            <div nz-row *ngFor="let d of payload;index as i" [ngStyle]="meta.lineStyle">
                <div nz-col [nzSpan]="nzSpanLength">
                    {{i + 1}}
                </div>
                <div nz-col [nzSpan]="nzSpanLength" *ngFor="let f of meta.fields">
                    {{d[f.field]}}
                </div>
            </div>
        </div>
    `,
    styles: [
            `
            div[nz-row] {
                font-size: 16px;
                height: 40px;
                line-height: 39px;
                text-align: center;
            }

            div[nz-row]:hover {
                background-color: #3e4e5a;
                cursor: pointer;
            }

            div[perfectScrollbar] {
                position: relative;
                height: calc(100% - 80px);
                overflow: hidden;
            }

        `
    ]
})
export class ViewRankComponent implements OnInit, OnChanges {

    nzSpanLength;

    top = {
        title: '设备效益综合排名',
        subtitle: '（总行，近一个月)'
    };

    @Input() meta;
    @Input() payload;

    constructor(private screen: ScreenService,
                private http: HttpClient,
                @Inject(PANEL_ID) @Optional() private id,
                private interactService: InteractService) {
    }

    ngOnInit(): void {

        console.log(this.meta);
        console.log(this.meta);console.log(this.meta);


        this.meta = this.meta || {
            top: {},
            fields: [],
            lineStyle: {}
        };
        this.payload = this.payload || [];
        this.nzSpanLength = Math.floor(24 / (this.meta.fields.length + 1));

        if (this.id) {
            this.http.get(environment.SERVICE_URL + 'system/v1/chart/' + this.id)
                .subscribe((data: RetInfo) => {
                    this.meta = JSON.parse(data.element.optionMsg);
                    this.payload = data.element.dataMsg.data;
                    this.nzSpanLength = Math.floor(24 / (this.meta.fields.length + 1));
                });
        }

    }

    // 开发者模式下监测样式与数据源变化
    ngOnChanges(changes: SimpleChanges): void {
        if (this.meta && this.meta.fields) {
            this.nzSpanLength = Math.floor(24 / (this.meta.fields.length + 1));
        }
    }


    detail(d) {
        this.interactService.announceValue(d);
    }

}
