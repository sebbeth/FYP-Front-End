import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-set',
  templateUrl: './input-set.component.html',
  styleUrls: ['./input-set.component.css']
})
export class InputSetComponent implements OnInit {

  title: string;
  @Input() inputSet: Object;


  constructor() { }

  ngOnInit() {
    this.title = JSON.stringify(this.inputSet);
  }

  private edit(): void {

  }

  private use(): void {

  }

}
