import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../data.service';
import { ResultObject } from '../../data-structures/ResultObject';

@Component({
  selector: 'app-await-result',
  templateUrl: './await-result.component.html',
  styleUrls: ['./await-result.component.css']
})
export class AwaitResultComponent implements OnInit {

  @Input() visible: boolean;
  @Input() dataService: DataService;
  test: Observable<ResultObject>;
  result: ResultObject;

  constructor() { }

  ngOnInit() {
    this.dataService.scheduleComparison('{"account_id":"1","input_id":"1"}')
    .subscribe( (id: Object) => this.test = this.dataService.getResultWithId(id));

    this.test.subscribe(result => this.result = result);

  }




}
