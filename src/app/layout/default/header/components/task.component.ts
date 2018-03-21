import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'header-task',
    template: `
    <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
        <div class="item" nz-dropdown>
            <nz-badge >
                <ng-template #content>
                    <i class="anticon anticon-laptop"></i>
                </ng-template>
            </nz-badge>
        </div>
    </nz-dropdown>
    `
})
export class HeaderTaskComponent {

    loading = true;
    constructor(private router: Router){

    }

    change() {
        // setTimeout(() => this.loading = false, 500);
        this.router.navigate(['screen'])
    }

}
