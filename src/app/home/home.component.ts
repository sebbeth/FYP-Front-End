import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { SessionService } from '../session.service';

import { InputSet } from '../data-structures/InputSet';

import { ResultObject } from '../data-structures/ResultObject';


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
  test: string;

  constructor(private dataService: DataService, private sessionService: SessionService) { }

  ngOnInit() {
    this.results = this.dataService.getAllResults();
  }

  /*

  */
  generateProviderIconsForResult(result: ResultObject): string[] {

    let output = [];
    result.providers.forEach((provider) => {
      switch(provider) {
        case 0: {
          output.push('<i class="fas fa-server"></i>');
          break;
        }
        case 1: {
          output.push('<i class="fab fa-aws"></i>');
          break;
        }
        case 2: {
          output.push('Google Cloud');
          break;
        }
        default: {
          //statements;
          break;
        }
      }
    });



    return output;
  }

}
