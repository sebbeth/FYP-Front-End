import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SessionService } from '../session.service';

import { InputSet } from '../data-structures/InputSet';

import { ResultObject } from '../data-structures/ResultObject';
import { ProviderHelper } from '../data-structures/ProviderHelper';


import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Observable<ResultObject[]>;

  constructor(private dataService: DataService, private sessionService: SessionService) { }

  ngOnInit() {
    this.results = this.dataService.getAllResults();
    this.dataService.getAccount('me@sebbrown.net','pwd').subscribe(output => console.log(output));
  }

  /*

  */
  generateProviderIconsForResult(result: ResultObject): string[] {

    let providerHelper = new ProviderHelper();
    let output = [];
    result.providers.forEach((provider) => {
      output.push(providerHelper.getName(provider));
      }
    );



    return output;
  }

}
