import {AfterViewInit, Component, ElementRef, Injector, OnInit, QueryList, ViewChildren} from '@angular/core';
import {HomeService} from "../elements/home/home.service";
import {NzModalService} from 'ng-zorro-antd';
import {CardAlternativesComponent} from './components/card-alternatives.component';
import {panelAdapt} from "../../utils/componentTypeUtil";
import {ScreenService} from './screen.service';

import * as _ from 'lodash';


@Component({
    templateUrl: './screen.html',
    styleUrls: ['./screen.scss']
})
export class ScreenComponent implements OnInit, AfterViewInit {

    splitConf = null;
    setting = false;
    openSetting = false;
    fullScreen = false;
    alternatives; // 图表选择项

    lCards;
    rCards;
    cCards;
    carouselCards;
    activeId = 0;

    slideContents: QueryList<ElementRef>;

    @ViewChildren('content')
    set _slideContents(value: QueryList<ElementRef>) {
        this.slideContents = value;
    }

    constructor(private injector: Injector,
                private modal: NzModalService,
                private homeService: HomeService,
                private screen: ScreenService) {
    }

    ngOnInit() {

        const screenConfig = this.screen.getScreenDef();

        // 获取布局settings
        this.splitConf = screenConfig.layout;
        this.lCards = screenConfig.lCards;
        this.rCards = screenConfig.rCards;
        this.cCards = screenConfig.cCards;

        // 获取Components
        this.lCards = panelAdapt(this.lCards, this.injector);
        this.rCards = panelAdapt(this.rCards, this.injector);
        this.cCards = panelAdapt(this.cCards, this.injector);

        // this.carouselCards = [
        //     {
        //         'id': '57e47e72-7c1b-4da8-8d28-075f9cb32755',   // 获取组件的定义
        //         'icon': null,
        //         'name': '折线图',
        //         'chartDesc': '测试',
        //         componentType: 2,
        //         component: FlipCardComponent,
        //     },
        //     {
        //         'id': '57e47e72-7c1b-4da8-8d28-075f9cb32755',
        //         'icon': null,
        //         'name': '折线图',
        //         'chartDesc': '测试',
        //         componentType: 1,
        //         component: TurnOverComponent,
        //     }
        // ];

        this.alternatives = [];
        this.homeService.getSelfDefCharts({orgNo: '0000'})
            .subscribe((data) => {
                this.alternatives = panelAdapt(data['retList'] || [], this.injector);
            });
    }

    cardModal(card) {
        this.modal.open({
            content: CardAlternativesComponent,
            footer: false,
            componentParams: {
                alts: this.alternatives
            }
        }).subscribe(value => {
            if (value.id) {

                console.log(value);
                console.log(card);
                if (this.lCards.indexOf(card) !== -1) {
                    this.lCards[this.lCards.indexOf(card)] = value;
                } else if (this.rCards.indexOf(card) !== -1) {
                    this.rCards[this.rCards.indexOf(card)] = value;
                } else if (this.cCards.indexOf(card) !== -1) {
                    this.cCards[this.cCards.indexOf(card)] = value;
                }
            }
        }, () => {

        });
    }

    active(i: number) {
        this.activeId = i;
    }

    next() {
        const length = this.carouselCards.length;
        if (++this.activeId >= length) {
            this.activeId = 0;
        }
    }

    prev() {
        const length = this.carouselCards.length;
        if (--this.activeId < 0) {
            this.activeId = length - 1;
        }
    }

    openSettings() {
        this.openSetting = true;
        setTimeout(() => {
            this.splitConf.disabled = false;
            this.setting = true;
            this.openSetting = false;
        }, 500);
    }

    saveSettings() {
        this.openSetting = false;
        this.setting = false;
        this.splitConf.disabled = true;

        console.log(_.transform(this.lCards, (result, item: any) => {
            result.push(item.id || null);
        }, []));


        const params = {
            layout: this.splitConf,
            lCards: _.transform(this.lCards, (result, item: any) => {
                result.push({
                    id: item.id,
                    type: item.type,
                    chart_option: item.chart_option
                });
            }, []),
            rCards: _.transform(this.rCards, (result, item: any) => {
                result.push({
                    id: item.id,
                    type: item.type,
                    chart_option: item.chart_option
                });
            }, []),
            cCards: _.transform(this.cCards, (result, item: any) => {
                result.push({
                    id: item.id,
                    type: item.type,
                    chart_option: item.chart_option
                });
            }, []),
            // carouselCards: this.carouselCards
        };

        this.screen.updateScreenDef(params)
            .subscribe(data => {
                localStorage.setItem('screenDef', JSON.stringify(params));
                console.log(data);
            });


    }

    onDragEnd(columnindex: number, e: { gutterNum: number, sizes: Array<number> }) {
        console.log('columnindex', columnindex);
        console.log('sizesArray', e.sizes);
        if (columnindex === -1) { // Column dragged
            // Set size for all visible columns
            this.splitConf.lColumn.size = e.sizes[0];
            this.splitConf.cColumn.size = e.sizes[1];
            this.splitConf.rColumn.size = e.sizes[2];
            // this.splitConf.columns.filter(c => c.visible === true).forEach((column, index) => column.size = e.sizes[index]);
        } else if (columnindex === 1) { // Row dragged
            // Set size for all visible rows from specified column
            this.splitConf.lColumn.rows.filter(r => r.visible === true).forEach((row, index) => row.size = e.sizes[index]);
        } else if (columnindex === 2) {
            this.splitConf.cColumn.rows.filter(r => r.visible === true).forEach((row, index) => row.size = e.sizes[index]);
        } else if (columnindex === 3) {
            this.splitConf.rColumn.rows.filter(r => r.visible === true).forEach((row, index) => row.size = e.sizes[index]);

        }

    }


    ngAfterViewInit(): void {
        // set interval loop of carousel cards
        // setInterval(() => {
        //     const length = this.carouselCards.length;
        //     if (++this.activeId >= length) {
        //         this.activeId = 0;
        //     }
        // }, 5000);
    }

    trackByFn(index) {
        return index;
    }


}
