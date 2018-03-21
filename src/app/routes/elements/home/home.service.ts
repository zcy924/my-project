import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@env/environment';
import {catchError, tap} from 'rxjs/operators';
import {handleError} from "@core/err";

@Injectable()
export class HomeService {

    private url = `${environment.SERVICE_URL}`;

    constructor(private http: HttpClient) {

    }

    getHomeDef() {
        return JSON.parse(localStorage.getItem('homeDef'));
    }


    updateHomeDef(def) {
        return this.http.put(this.url + '/system/v1/user/view', {
            no: '0000',
            userHomeDef: JSON.stringify(def)
        }).pipe(
            tap(_ => console.log(`fetched ChartSubjects`)),
            catchError(handleError('ChartSubjects', []))
        );
    }

    // 获取自定义的图表类型
    getSelfDefCharts(params) {
        return this.http.get(this.url + '/homechart/chartModel', {
            params: {orgNo: '0000'}
        }).pipe(
            tap(_ => console.log(`fetched ChartSubjects`)),
            catchError(handleError('ChartSubjects', []))
        );
    }

    // 根据id获取图表详细信息
    getOptionAndDataById(id) {
        return this.http.get(this.url + '/homechart/chartmodel/chartDetail/' + id)
            .pipe(
                tap(_ => console.log(`fetched ChartSubjects`)),
                catchError(handleError('ChartSubjects', []))
            );
    }
}
