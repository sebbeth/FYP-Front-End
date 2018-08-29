import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { InputSet } from './data-structures/InputSet';
import { ResultObject } from './data-structures/ResultObject';

  const localApiUrl = 'http://localhost/FYP-API/api.php';
  const hostedApiUrl = 'https://something.com/api.php';



@Injectable()
export class DataService {


  apiMode = 0;

  testVal: string;

  private



  constructor(private http: HttpClient) { }


  public setAPIMode(mode) {
    switch (mode) {
      case 0:
        this.apiMode = 0;
      break;
      case 1:
        this.apiMode = 1;
      break;
      default:
      // do nothing
    }
    console.log(this.getAPIUrl());
  }

  public getAPIMode(): number {
    return this.apiMode;
  }

  public getAPIUrl(): string {
    if (this.apiMode == 0) {
      return localApiUrl;
    } else {
      return hostedApiUrl;
    }
  }


  public getAccountId(): number {
    return 1; //TODO implement this
  }

  /***** API query functions *****/

  public getExample(): Object {
    return this.http
        .get("http://localhost/FYP-API/api.php/upload/")
        .map(data => _.values(data))
        .do(console.log);
  }

  public getResultWithId(id): Observable<ResultObject[]> {
    const params = new HttpParams()
    .set('limitToFirst', "1");

    return this.http
        .get<ResultObject[]>(this.getAPIUrl() + "/comparison/" + id, {params})
        .map(data => _.values(data))
        .do(console.log);
  }

  public scheduleComparison(input): number {
  //  console.log('schedule');
    //this.http.post(this.getAPIUrl() + '/comparison/', input, httpOptions);
    return 5;
  }


  public storeNewInputDataSet(accountId, data): void {

  }


  public getAllResults(): Observable<ResultObject[]> {
    return this.http
        .get<ResultObject[]>(this.getAPIUrl() + "/comparison/")
        .map(data => _.values(data))
        .do(console.log);
  }

  public getAllInputSets(): Observable<InputSet[]> {
    return this.http
        .get<InputSet[]> (this.getAPIUrl() + "/upload/")
        .map(data => _.values(data))
        .do(console.log);
  }

}
