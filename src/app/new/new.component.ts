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
    breadcrumbCss: string[];
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.stage = 0;
    this.selectInputIsVisible = true;
    this.inputSets = this.dataService.getAllInputSets();
    this.refreshStage();
  }


  public uploadDataSet(): void {
    if (this.textFieldContent === '') {
      return null;
    }
    let data = JSON.parse(this.textFieldContent);
    this.dataService.storeNewInputDataSet(1,data);
  }



  private next(): void {
    this.stage++;
    this.refreshStage();
  }

  private hasNext(): boolean {
    if (this.stage < 2) {
      return true;
    }
    return false;
  }

  private previous(): void {
    this.stage--;
    this.refreshStage();
  }

  private hasPrevious(): boolean {
    if ( this.stage == 1 ) {
      return true;
    }
    return false;
  }

  /*
  This function updates the variables used to define which page in the wizard is being displayed.
  The breadcrumb's state is also set here.
  */
  private refreshStage(): void {
    switch(this.stage) {
      case 0: {
        this.selectInputIsVisible = true;
        this.selectSolutionsIsVisible = false;
        this.awaitResultIsVisible = false;
        this.breadcrumbCss = ['blue-crumb','light-blue-crumb','light-blue-crumb'];
        break;
      }
      case 1: {
        this.selectInputIsVisible = false;
        this.selectSolutionsIsVisible = true;
        this.awaitResultIsVisible = false;
        this.breadcrumbCss = ['light-blue-crumb','blue-crumb','light-blue-crumb'];
        break;
      }
      case 2: {
        this.selectInputIsVisible = false;
        this.selectSolutionsIsVisible = false;
        this.awaitResultIsVisible = true;
        this.breadcrumbCss = ['light-blue-crumb','light-blue-crumb','blue-crumb'];
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }






}
