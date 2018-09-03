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
  result: Observable<ResultObject[]>;


  constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private dataService: DataService) { }

  ngOnInit() {
    this.resultId = Number(this.router.url.replace('/results/',''));
    this.result = this.dataService.getResultWithId(this.resultId);
  }

}
