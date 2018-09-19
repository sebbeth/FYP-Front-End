import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


    textFieldContent = '{"example":"input"}';
    stage: number;
    busy: boolean = false;
    inputSets: Object;
    showSelectInput: boolean = true;
    selectInputIsVisible: boolean = false;
    selectSolutionsIsVisible: boolean = false;
    awaitResultIsVisible: boolean = false;

  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.stage = 0;
    this.selectInputIsVisible = true;
    this.inputSets = this.dataService.getAllInputSets();
  }


  public uploadDataSet(): void {
    if (this.textFieldContent === '') {
      return null;
    }
    let data = JSON.parse(this.textFieldContent);
    this.dataService.storeNewInputDataSet(1,data);
  }



  private next(): void {
    switch(this.stage) {
      case 0: {
        this.selectInputIsVisible = false;
        this.selectSolutionsIsVisible = true;
        this.stage++;
        break;
      }
      case 1: {
        this.selectSolutionsIsVisible = false;
        this.awaitResultIsVisible = true;
        this.stage++;
        break;
      }
      case 2: {

        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }

  private previous(): void {

  }

  private hasNext(): boolean {
    return true;
  }




}
