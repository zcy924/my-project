import {Component, Injector, OnInit} from '@angular/core';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {CardAlternativesComponent} from './components/card-alternatives.component';
import {HomeService} from './home.service';

import * as _ from 'lodash';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {

    openSetting = false;
    setting = false;
    cards;
    tabs;
    alternatives;

    pendingTabs = [];

    constructor(private modal: NzModalService,
                private injector: Injector,
                private homeService: HomeService,
                private _message: NzMessageService) {
    }

    cardModal(card) {
        this.modal.open({
            content: CardAlternativesComponent,
            footer: false,
            componentParams: {
                card: card,
                cards: this.cards,
                alts: this.alternatives
            }
        }).subscribe(value => {
            if (value.id) {
                this.cards[this.cards.indexOf(card)] = value;
            }
        }, () => {

        });
    }

    deleteCard(i) {
        console.log(i);
        this.cards[i] = {};
    }

    openPanel(i, r) {
        this.tabs[r][i] = {
            name: '请选择...',
            pending: true
        };
    }

    swap(i, r) {
        let index = -1;
        this.pendingTabs.forEach((val, idx) => {
            if (val.index[0] === i && val.index[1] === r) {
                this.tabs[r][i] = val.tab;
                index = idx;
            }
        });
        if (index !== -1) {
            this.pendingTabs.splice(index, 1);
        }
    }

    deleteTab(i, r) {
        let index = -1;
        this.pendingTabs.forEach((val, idx) => {
            if (val.index[0] === i && val.index[1] === r) {
                index = idx;
            }
        });
        if (index !== -1) {
            this.pendingTabs.splice(index, 1);
        }

        this.tabs[r].splice(i, 1);
    }

    addTab(r) {
        this.tabs[r].push(
            {
                name: '请选择...',
                pending: true
            }
        );
        // 需要调用nz-tabset的组件方法来激活新增的选项
    }

    selectTab(evt) {
        _.forEachRight(this.pendingTabs, (val, idx) => {
            if (val.index[0] === evt.index[0] && val.index[1] === evt.index[1]) {
                this.pendingTabs.splice(idx, 1);
            }
        });
        this.pendingTabs.push({
            tab: evt.tab,
            index: evt.index
        });
    }

    openSettings() {
        this.openSetting = true;
        setTimeout(() => {
            this.setting = true;
            this.openSetting = false;
        }, 500);
    }

    /**
     * 1.过滤pending为true的tab
     * 2.保存设置到服务端
     */
    saveSetting() {
        this.openSetting = true;

        for (let l = this.tabs[0].length - 1; l >= 0; l--) {
            if (this.tabs[0][l].pending === true) {
                this.tabs[0].splice(l, 1);
            }
        }
        for (let l = this.tabs[1].length - 1; l >= 0; l--) {
            if (this.tabs[1][l].pending === true) {
                this.tabs[1].splice(l, 1);
            }
        }

        const homeDef = {
            cards: [],
            tabs: [[], []]
        };

        this.cards.forEach(val => {
            homeDef.cards.push(_.omit(val, ['component', 'injector']));
        });

        this.tabs.forEach((tabSet, index) => {
            tabSet.forEach(val => {
                homeDef.tabs[index].push(_.omit(val, ['component', 'injector']));
            });
        });

        this.homeService.updateHomeDef(homeDef)
            .subscribe(data => {
                this.setting = false;
                this.openSetting = false;
                localStorage.setItem('homeDef', JSON.stringify(homeDef));
                this._message.create('success', `驾驶舱配置成功！`);
            });
    }


    ngOnInit(): void {

        // 获取当前用户的主页配置
        this.cards = this.homeService.getHomeDef().cards;
        this.tabs = this.homeService.getHomeDef().tabs;

        // 获取可选择内容
        this.homeService.getSelfDefCharts({orgNo: '0000'})
            .subscribe((data) => {
                const list = data['retList'] || [];
                this.alternatives = list.filter((value) => {
                    return value.type == '0';
                });
            });
    }

    trackByFn(index) {
        return index;
    }


}

