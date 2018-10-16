import { Component, OnInit, Input, Output } from '@angular/core';
import { InputSet } from '../../data-structures/InputSet';
import { DataService } from '../../data.service';
import { ComparisonService } from '../comparison.service';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  visible: boolean;
  addNewInput: boolean = false;
  @Input() dataService: DataService;
  @Input() comparisonService: ComparisonService;
  inputSets: Object;
  selectedInputSets: number[];

  textFieldContent = '{"example":"input"}';

  constructor() { }

  ngOnInit() {
    this.load();

/*
    this.inputSets.forEach(function(set: InputSet) {
      console.log('loop' + set.id);
      let inArray = this.selectedInputSets.indexOf(set.id);
      console.log(inArray);
    });*/
  }


  toggleInputSelected(input: number): void {
    this.comparisonService.toggleInput(+input);
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
    this.load();
    this.setMode(0);
  }

  public delete(input: number): void {
    this.dataService.deleteInputSet(input);
    this.load();
  }

  private load(): void {
    this.selectedInputSets = this.comparisonService.getSelectedInputs();
    this.dataService.getAllInputSets()
    .subscribe(
      result => { this.inputSets = result}
    );
  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }


}
