import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../data.service';
import { ResultObject } from '../../data-structures/ResultObject';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-await-result',
  templateUrl: './await-result.component.html',
  styleUrls: ['./await-result.component.css']
})
export class AwaitResultComponent implements OnInit {

  visible: boolean;
  @Input() dataService: DataService;
  test: Observable<ResultObject>;
  result: ResultObject;

  constructor() { }

  ngOnInit() {
    this.dataService.scheduleComparison('{"account_id":"1","input_id":"1"}')
    .subscribe( (id: Object) => this.test = this.dataService.getResultWithId(id));

    this.test.subscribe(result => this.result = result);

  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }




}
