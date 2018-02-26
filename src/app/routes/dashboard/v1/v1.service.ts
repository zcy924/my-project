import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '@env/environment';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable()
export class V1Service {
    private SERVERAPI = `${environment.SERVICE_URL}`;
    constructor(private http: HttpClient) {
    }

    getTodo(params) {
        return this.http.get(this.SERVERAPI + '/dashboard/v1/todo',{params:params})
            .pipe();

    }

    modTodo(params) {
        return this.http.post(this.SERVERAPI + '/dashboard/v1/todo/mod',params)
            .pipe();

    }

    deleteTodo(id) {
        return this.http.delete(this.SERVERAPI + '/dashboard/v1/todo/'+id)
            .pipe();
    }

    addTodo(params) {
        return this.http.post(this.SERVERAPI + '/dashboard/v1/todo',  params)
            .pipe();

    }

    getCardData() {
        return this.http.get(this.SERVERAPI + '/dashboard/v1/addTodo')
            .pipe();
    }

}



