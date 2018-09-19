import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-solutions',
  templateUrl: './select-solutions.component.html',
  styleUrls: ['./select-solutions.component.css']
})
export class SelectSolutionsComponent implements OnInit {

  @Input() visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
