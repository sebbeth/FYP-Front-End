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

  addComp(): void {
    this.dataService.scheduleComparison('{"input_id":"1","parameters":{"foo":"bar"}}');
  }

}
