import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import {Observable} from "rxjs/Observable";
import { ResultObject } from '../data-structures/ResultObject';
import { ProviderHelper } from '../data-structures/ProviderHelper';




@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultId: number;
  result: ResultObject;
  result$: Observable<ResultObject>;
  providerHelper: ProviderHelper = new ProviderHelper;
  loaded: boolean = true;

  constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private dataService: DataService) { }

  ngOnInit() {
    this.loaded = false;
    this.resultId = Number(this.router.url.replace('/results/',''));
    this.result$ = this.dataService.getResultWithId(this.resultId);
    this.result$.subscribe(result => {
      this.result = result
      console.log('test')
      this.loaded = true;
    });
  /*  this.result$.subscribe(
      function(result) {
        this.result = result;
        this.graphData = [first,second,third];
        this.loaded = true;

      }
    );*/

  }

}
