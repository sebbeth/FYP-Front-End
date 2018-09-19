import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-await-result',
  templateUrl: './await-result.component.html',
  styleUrls: ['./await-result.component.css']
})
export class AwaitResultComponent implements OnInit {

  @Input() visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
