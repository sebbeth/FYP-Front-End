import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SessionService } from './session.service';

import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { InputSet } from './data-structures/InputSet';
import { ResultObject } from './data-structures/ResultObject';

  const localApiUrl = 'http://localhost/FYP-API/api.php';
  const hostedApiUrl = 'https://something.com/api.php';

  interface testFace {
    id: number;
    timestamp: string;
    status: string;
    data: string;
  }

  interface queuedTask {
    id: number;
    status: string;
}

@Injectable()
export class DataService {


  apiMode = 0;

  testVal: string;

  private



  constructor(private http: HttpClient, private sessionService: SessionService) { }


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





  /***** API query functions *****/

  public getExample(): Object {
    return this.http
        .get("http://localhost/FYP-API/api.php/upload/")
        .map(data => _.values(data))
        .do(console.log);
  }


  public scheduleComparison(input): Observable<number> {

    // Parse the input data first

    let payload = {
      input_id:2,
      solutions:[1,2],
      parameters:{
		      foo:'bar'
	    }
    };


    return this.http.post<queuedTask>(this.getAPIUrl() + '/comparison/', input)
    .map(data => data.id)
    .do(console.log);
  }


  public storeNewInputDataSet(accountId, data): void {
    this.http.post(this.getAPIUrl() + "/upload/",
    '{"account":"1","data":'+data+'}')
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body",
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }


  public getResultWithId(id): Observable<ResultObject> {

    return this.http
          .get<ResultObject>(this.getAPIUrl() + "/comparison/" + id);
  }


  public getAllResults(): Observable<ResultObject[]> {
    return this.http
        .get<ResultObject[]>(this.getAPIUrl() + "/comparison/")
        .map(data => _.values(data));
  }

  public getAllInputSets(): Observable<InputSet[]> {
    return this.http
        .get<InputSet[]> (this.getAPIUrl() + "/upload/")
        .map(data => _.values(data))
        .do(console.log);
  }

  public getAllProviders(): Observable<Object[]> {
    return this.http
        .get(this.getAPIUrl() + "/provider/")
        .map(data => _.values(data))
        .do(console.log);
  }

}
