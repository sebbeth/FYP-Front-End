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
    //this.dataService.getAccount('me@sebbrown.net','pwd').subscribe(output => console.log(output));
  }


  getSolutionList(result: ResultObject): Object[] {

    let output = [];
    let names = [];
    let counters = [];
    let ids = [];
    console.log(result.providers);
    let providerHelper = new ProviderHelper();
    let i = 0;
    result.providers.forEach((provider) => {

      const indexOfId = ids.indexOf(provider,0);
      if (indexOfId > -1 ) {
      // Don't add it, instead interate the counter
        counters[indexOfId] = counters[indexOfId] + 1;
        console.log(indexOfId);
        console.log('ids' + ids);
      } else {
        ids.push(provider);
        names.push(providerHelper.getName(provider));
        counters.push(1);
      }
      i++;
    });

for (let i = 0; i < ids.length; i++) {


      output.push(
        {
          name: providerHelper.getName(ids[i]),
          counter: counters[i]
        }
      );
  }
    return output;

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

  providerTooltip(provider: Object): string {
    return '<em>Tooltip</em> <u>with</u> <b>HTML</b>';
  }

  isSignedIn(): boolean {
    return this.sessionService.isSignedIn();
  }

}
