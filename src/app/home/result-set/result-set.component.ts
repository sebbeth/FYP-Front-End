import { Component, OnInit, Input  } from '@angular/core';
import { ResultObject } from '../../data-structures/ResultObject';

@Component({
  selector: 'app-result-set',
  templateUrl: './result-set.component.html',
  styleUrls: ['./result-set.component.css']
})
export class ResultSetComponent implements OnInit {

  @Input() resultSet: ResultObject;
  id: number;
  date: string;

  constructor() { }

  ngOnInit() {
    this.id = Number(this.resultSet.id);
    this.date = this.resultSet.timestamp;
  }

}
