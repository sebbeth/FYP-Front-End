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
const hostedApiUrl = 'https://sbrown.hbcapp.com/api.php';

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

  private username: string;
  private password: string;


  constructor(
     private http: HttpClient,
     private sessionService: SessionService
   ) {
 }


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
  }

  public getAPIMode(): number {
    return this.apiMode;
  }

  public getAPIUrl(): string {

    let substring = "https://fyp.sebbrown.net";
    if (location.href.indexOf(substring) !== -1) {
      return hostedApiUrl;
    } else {
      return localApiUrl;
    }
  }

  public storeCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  private getHttpHeaders(): Object {
  //  console.log('DATA' + this.sessionService.getAccountId());

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain',
        'authorization': 'basic ' + btoa(this.username + ":" + this.password)
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
    comparison.parameters = '{"run_time_hours":200}';

    return this.http.post<queuedTask>(this.getAPIUrl() + '/comparison/', comparison,this.getHttpHeaders())
    .map(data => data.id)
    .do(console.log);
  }


  public storeNewInputDataSet(accountId, data): void {
    this.http.post(this.getAPIUrl() + "/upload/",
    '{"account":"1","input":'+data+'}',this.getHttpHeaders())
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
      .get<ResultObject>(this.getAPIUrl() + "/comparison/" + id,this.getHttpHeaders());
    }

    /*
    for refrence, here is how to do work on the response of GET request before returning the observable

    return this.http
    .get<ResultObject>(this.getAPIUrl() + "/comparison/" + id,this.getHttpHeaders())
    .map(response=>{
          response.data = JSON.parse(response.data); // Extract the result data stored as a string from the Result object and store it as JSON.
          return response;
      })

    */


    public deleteInputSet(id): void {
      this.http.delete(this.getAPIUrl() + "/upload/" + id,this.getHttpHeaders()).subscribe();
    }

    public getAllResults(): Observable<ResultObject[]> {
      return this.http
      .get<ResultObject[]>(this.getAPIUrl() + "/comparison/",this.getHttpHeaders())
      .map(data => _.values(data))
      .do(console.log);
    }

    public getInputSet(id: Number): Observable<InputSet> {
      return this.http
      .get<InputSet> (this.getAPIUrl() + "/upload/" + id,this.getHttpHeaders())
      .map(data => _.values(data))
      .do(console.log);
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
