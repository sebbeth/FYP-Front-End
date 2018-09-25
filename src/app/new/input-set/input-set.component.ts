import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-set',
  templateUrl: './input-set.component.html',
  styleUrls: ['./input-set.component.css']
})
export class InputSetComponent implements OnInit {

  title: string;
  @Input() inputSet: Object;
  @Output() checked: boolean = false;

  constructor() { }

  ngOnInit() {
    this.title = JSON.stringify(this.inputSet);
  }

  public edit(): void {

  }

  public use(): void {
    if (this.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }

}
