import { Component, OnInit, Input, Output } from '@angular/core';
import { InputSet } from '../../data-structures/InputSet';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  visible: boolean;
  addNewInput: boolean = false;
  @Input() dataService: DataService;
  inputSets: Object;

  textFieldContent = '{"example":"input"}';

  constructor() { }

  ngOnInit() {
    this.inputSets = this.dataService.getAllInputSets();
  }

  setMode(mode: number) {
    if (mode == 0) {
      this.addNewInput = false;
    } else {
      this.addNewInput = true;
    }
  }

  saveNewInput(): void {
    this.dataService.storeNewInputDataSet(1,this.textFieldContent);
    this.setMode(0);
  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }


}
