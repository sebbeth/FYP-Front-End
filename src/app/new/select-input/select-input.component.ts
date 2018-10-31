import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() nextEvent = new EventEmitter();
  errors: string;
  busy: boolean = false;;
  inputSets: Object;
  selectedInputSets: number[];

  textFieldContent = '{"description": "Example Input","start_date": "2018-10-10T00:00:00","spec": [{"type": "C","value": "Intel Xeon CPU E5-2670 @ 2.60GHz",  "unit": "model",},{"type": "M","value": "16","unit": "gb"},{"type": "S","value": "200","unit": "gb"}],"data": [{"C": <value>,"M": <value>,"S": <value>},{"C":<value>,"M": <value>,"S": <value>,}]}';

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
    this.dataService.storeNewInputDataSet(this.textFieldContent)
    .subscribe(
      (val) => {
        console.log("SAVE SUCCESSFUL",val);
        this.errors = '';
        this.load();
        this.setMode(0);
      },
      response => {
        console.log("ERROR SAVING", response );
        this.errors = 'Invalid input, failed to save';
      });

  }

  public delete(input: number): void {
    this.dataService.deleteInputSet(input);
    this.load();
  }

  private load(): void {
    this.busy = true;
    this.selectedInputSets = this.comparisonService.getSelectedInputs();
    this.dataService.getAllInputSets()
    .subscribe(
      result => { this.inputSets = result}
      this.busy = false;
    );
  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }

  public hasNext(): boolean {
    if (this.comparisonService.getSelectedInputs().length > 0) {
      return true;
    }
    return false;
  }


  public next(): void {
    this.nextEvent.next();
  }


}
