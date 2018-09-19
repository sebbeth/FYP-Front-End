import { Component, OnInit, Input, Output } from '@angular/core';
import { InputSet } from '../../data-structures/InputSet';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  @Input() visible: boolean;
  @Input() inputSets: Object;

  constructor() { }

  ngOnInit() {
  }

}
