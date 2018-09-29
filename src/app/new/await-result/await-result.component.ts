import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../data.service';
import { ComparisonService } from '../comparison.service';
import { ResultObject } from '../../data-structures/ResultObject';
import { Router } from "@angular/router";

import { Observable } from 'rxjs';

@Component({
  selector: 'app-await-result',
  templateUrl: './await-result.component.html',
  styleUrls: ['./await-result.component.css']
})
export class AwaitResultComponent implements OnInit {

  visible: boolean;
  @Input() dataService: DataService;
  @Input() comparisonService: ComparisonService;
  test: Observable<ResultObject>;
  result: ResultObject;

  constructor(private router: Router) { }

  ngOnInit() {


  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;

    console.log(this.comparisonService.getComparison());

    this.dataService.scheduleComparison(this.comparisonService.getComparison())
    .subscribe( (id: Object) => {
      this.test = this.dataService.getResultWithId(id)
      this.router.navigate(['/results/' + id]);

    });

  //  this.test.subscribe(result => this.result = result);
  }

  public hide(): void {
    this.visible = false;
  }




}
