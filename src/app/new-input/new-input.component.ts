import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';

@Component({
  selector: 'app-new-input',
  templateUrl: './new-input.component.html',
  styleUrls: ['./new-input.component.css']
})
export class NewInputComponent implements OnInit {

  textFieldContent = '{"example":"input"}';

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  save(): void {
    this.dataService.storeNewInputDataSet(1,this.textFieldContent);
  }

}
