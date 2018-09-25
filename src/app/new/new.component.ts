import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';
import { Comparison } from '../data-structures/comparison';

import {Observable} from "rxjs/Observable";
import { SessionService } from '../session.service';

import { AwaitResultComponent }  from './await-result/await-result.component';
import { SelectInputComponent }  from './select-input/select-input.component';
import { SelectProvidersComponent }  from './select-providers/select-providers.component';


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
  showSelectInput: boolean = false;
  newInputIsVisible: boolean = false;
  selectInputIsVisible: boolean = false;
  selectSolutionsIsVisible: boolean = false;
  awaitResultIsVisible: boolean = false;
  breadcrumbCss: string[];
  comparison: Comparison;
  test: Object;
  @ViewChild(SelectInputComponent) selectInputComponent;
  @ViewChild(SelectProvidersComponent) selectProvidersComponent;
  @ViewChild(AwaitResultComponent) awaitResultComponent;


  constructor(
    public dataService: DataService,
    private router: Router,
    private sessionService: SessionService) { }

    ngOnInit() {
      this.stage = 0;
      this.selectInputIsVisible = true;
      this.refreshStage();


      this.comparison = new Comparison();
    //  this.comparison.account = this.sessionService.getAccountId();

      console.log(this.comparison);
    }

    ngAfterViewInit() {
      this.refreshStage();
   }

    // TODO remove this
    uploadDataSet(): void {
    if (this.textFieldContent === '') {
      return null;
    }
    let data = JSON.parse(this.textFieldContent);
    this.dataService.storeNewInputDataSet(1,data);
  }


  /* NAV controls */
  next(): void {
    this.stage++;
    this.refreshStage();
  }

  hasNext(): boolean {
    if (this.stage < 2) {
      return true;
    }
    return false;
  }

  previous(): void {
    this.stage--;
    this.refreshStage();
  }

  hasPrevious(): boolean {
    if ( this.stage == 1 ) {
      return true;
    }
    return false;
  }

  /*
  This function updates the variables used to define which page in the wizard is being displayed.
  The breadcrumb's state is also set here.
  */
  refreshStage(): void {
    switch(this.stage) {
      case 0: {

        this.selectInputComponent.show();
        this.selectProvidersComponent.hide();
        this.awaitResultComponent.hide();
        this.breadcrumbCss = ['blue-crumb','light-blue-crumb','light-blue-crumb'];

        break;
      }
      case 1: {

        this.selectInputComponent.hide();
        this.selectProvidersComponent.show();
        this.awaitResultComponent.hide();
        this.breadcrumbCss = ['light-blue-crumb','blue-crumb','light-blue-crumb'];
        break;
      }
      case 2: {

        this.selectInputComponent.hide();
        this.selectProvidersComponent.hide();
        this.awaitResultComponent.show();
        this.breadcrumbCss = ['light-blue-crumb','light-blue-crumb','blue-crumb'];
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }


  executeComparison(): void {
    this.test = this.dataService.scheduleComparison('{"account_id":"1","input_id":"1"}');
  }






}
