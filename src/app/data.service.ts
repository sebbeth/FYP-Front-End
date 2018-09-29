import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { SessionService } from './session.service';

import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';

import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { InputSet } from './data-structures/InputSet';
import { ResultObject } from './data-structures/ResultObject';
import { Account } from './data-structures/account';
import { Comparison } from './data-structures/comparison';

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

  private getHttpHeaders(): Object {

    //TODO complete this with session
    let username: string = 'me@sebbrown.net';
    let password: string = 'pwd';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain',
        'authorization': 'basic ' + btoa(username + ":" + password)
      })
    };
    return httpOptions;
  }





  /***** API query functions *****/

  public getExample(): Object {
    return this.http
    .get("http://localhost/FYP-API/api.php/upload/",this.getHttpHeaders())
    .map(data => _.values(data))
    .do(console.log);
  }


  public scheduleComparison(comparison: Comparison): Observable<number> {

    // Parse the input data first
    //    let input: Object = comparison;
    //  input.solutions = comparison.solutions.join();
    //input.inputs = comparison.inputs.join();

    return this.http.post<queuedTask>(this.getAPIUrl() + '/comparison/', comparison,this.getHttpHeaders())
    .map(data => data.id)
    .do(console.log);
  }


  public storeNewInputDataSet(accountId, data): void {
    this.http.post(this.getAPIUrl() + "/upload/",
    '{"account":"1","data":'+data+'}',this.getHttpHeaders())
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
      .get<ResultObject>(this.getAPIUrl() + "/comparison/" + id,this.getHttpHeaders())
      .map(response=>{
            response.data = JSON.parse(response.data); // Extract the result data stored as a string from the Result object and store it as JSON.
            return response;
        })
    }

    private process(input:any) {
      return input;
    }


    public getAllResults(): Observable<ResultObject[]> {
      return this.http
      .get<ResultObject[]>(this.getAPIUrl() + "/comparison/",this.getHttpHeaders())
      .map(data => _.values(data));
    }

    public getAllInputSets(): Observable<InputSet[]> {
      return this.http
      .get<InputSet[]> (this.getAPIUrl() + "/upload/",this.getHttpHeaders())
      .map(data => _.values(data))
      .do(console.log);
    }

    public getAllProviders(): Observable<Object[]> {
      return this.http
      .get(this.getAPIUrl() + "/provider/",this.getHttpHeaders())
      .map(data => _.values(data))
      .do(console.log);
    }
    public getAccount(email: string, password: string): Observable<Account> {
      return this.http
      .get<Account>(this.getAPIUrl() + "/account/",this.getHttpHeaders())
      .map(data => _.values(data));
    }

  }
