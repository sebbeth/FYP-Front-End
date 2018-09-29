import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import {Observable} from "rxjs/Observable";
import { ResultObject } from '../data-structures/ResultObject';




@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultId: number;
  result: ResultObject;
  graphData: Object[];
  result$: Observable<ResultObject>;

  loaded: boolean = true;

  constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private dataService: DataService) { }

  ngOnInit() {
    let first = [19900,19950,20000,20050,20100,20150,20200,20250,20300,20350,20400,20450,20500,20550,20600,20650,20700,20750,20800,20850];
    let second = [9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900,9900];
    let third = [19900,20000,20100,20150,20200,20300,20350,20400,20450,20500,20600,20650,20700,20750,20800,20850,20900,21000,21100,21200];

    this.loaded = false;
    this.graphData = [first,second,third];

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
