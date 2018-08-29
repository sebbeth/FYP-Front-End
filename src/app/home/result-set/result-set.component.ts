import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-result-set',
  templateUrl: './result-set.component.html',
  styleUrls: ['./result-set.component.css']
})
export class ResultSetComponent implements OnInit {

  @Input() resultSet: Object;
  id: string;
  date: string;

  constructor() { }

  ngOnInit() {
    this.id = JSON.stringify(this.resultSet);
    this.date = this.resultSet.timestamp;
    //this.date = this.resultSet.date;
  }

}
