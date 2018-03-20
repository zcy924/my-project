import {Observable} from 'rxjs/Observable';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HomeComponent} from './home.component';
import {NzModalService} from 'ng-zorro-antd';
import {WarningMessageComponent} from './components/warning-message.component';
import {Injectable} from '@angular/core';


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<HomeComponent> {

    constructor(private modal: NzModalService) {
    }

    canDeactivate(component: HomeComponent,
                  route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        console.log(state.url);
        //
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!component.setting) {
            return true;
        }
        // // Otherwise ask the user with the dialog service and return its
        // // observable which resolves to true or false when the user decides
        return new Promise<boolean>((resolve, reject) => {
            const nzModalSubject = this.modal.open({
                title: '警告！',
                content: WarningMessageComponent,
                componentParams: {
                    type: 'warning',
                    message: '!!!',
                    description: '您正在编辑驾驶舱，如果离开，当前编辑的信息将不会保存，是否确定离开?'

                }
            });
            nzModalSubject.on('onOk', () => {
                resolve(true);
            });

            nzModalSubject.on('onCancel', () => {
                resolve(false);
            });
        });
    }
}

