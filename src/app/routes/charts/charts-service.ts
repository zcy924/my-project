import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '@env/environment';

@Injectable()
export class ChartsService {
    private SERVERAPI = `${environment.SERVICE_URL}`;

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get(this.SERVERAPI + 'system/user')
            .pipe();
    }

}

