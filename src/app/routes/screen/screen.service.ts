import {Injectable} from '@angular/core';
import {handleError} from '@core/err';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '@env/environment';
import {Observable} from 'rxjs/Observable';
import {defaultLayoutConfig} from "@core/models/screen";


@Injectable()
export class ScreenService {
    private SERVERAPI = `${environment.SERVICE_URL}`;
    private url = `${environment.SERVICE_URL}` + '/chartsDevelop';

    constructor(private http: HttpClient,) {

    }

    getScreenDef() {

        console.log(localStorage.getItem('screenDef'));
        return JSON.parse(localStorage.getItem('screenDef')) || {
            layout: defaultLayoutConfig,
            cCards: [null, null],
            rCards: [null, null],
            lCards: [null, null, null]
        };
    }


    updateScreenDef(def) {
        return this.http.put(this.SERVERAPI + '/system/v1/user/screen', {
            no: '0000',
            userScreenView: def
        });
    }


    getServiceData(params): Observable<any> {
        console.log(params);
        return this.http.get(this.SERVERAPI + '/system/v1/user').pipe(
            catchError(handleError('getUsers', []))
        );
    }

}
