import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '@env/environment';

@Injectable()
export class V1Service {
    private SERVERAPI = `${environment.SERVICE_URL}`;

    constructor(private http: HttpClient) {
    }

    getTodo() {
        return this.http.get(this.SERVERAPI + '/dashboard/v1/getTodo')
            .pipe();

    }

    updateTodo(params) {
        return this.http.post(this.SERVERAPI + '/dashboard/v1/updateTodo', {params: params})
            .pipe();

    }

    deleteTodo(id) {
        return this.http.delete(this.SERVERAPI + '/dashboard/v1/deleteTodo/:id')
            .pipe();
    }

    addTodo(params) {
        return this.http.post(this.SERVERAPI + '/dashboard/v1/addTodo', {params: params})
            .pipe();

    }

    getCardData() {
        return this.http.get(this.SERVERAPI + '/dashboard/v1/addTodo')
            .pipe();
    }

}



