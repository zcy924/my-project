import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ChartDevelopService {
private chartDevUrl = "";

  constructor(private http: HttpClient) {
  }


  preview(paramMsg) {
    return this.http.post<any>(this.chartDevUrl + '/v1/chartModel/preview', paramMsg)
      .pipe(
        tap(_ => console.log(`fetched preview`)),
        catchError(this.handleError('querypreview', []))
      );
  }

  save(paramMsg) {
    return this.http.post(this.chartDevUrl + '/v1/chartModel', paramMsg)
      .pipe(
        tap(_ => console.log(`fetched preview`)),
        catchError(this.handleError('querypreview', []))
      );
  }

  modChart(paramMsg) {
    return this.http.put(this.chartDevUrl, paramMsg)
      .pipe(
        tap(_ => console.log(`fetched delChart`)),
        catchError(this.handleError('delChart', []))
      );
  }
  queryChartSubjects(paramMsg) {
    return this.http.get(this.chartDevUrl + '/queryChartSubjects', {
      params: {orgNo: '0000'}
    }).pipe(
      tap(_ => console.log(`fetched ChartSubjects`)),
      catchError(this.handleError('ChartSubjects', []))
    );
  }

  queryServiceList() {
    return this.http.get(this.chartDevUrl + '/v1/chartModel/serviceList', {
      params: {orgNo: '0000'}
    }).pipe(
      tap(_ => console.log(`fetched ChartSubjects`)),
      catchError(this.handleError('ChartSubjects', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
