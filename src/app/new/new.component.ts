import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';
import { Comparison } from '../data-structures/comparison';
import { ComparisonService } from './comparison.service';

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

  test: Object;
  @ViewChild(SelectInputComponent) selectInputComponent;
  @ViewChild(SelectProvidersComponent) selectProvidersComponent;
  @ViewChild(AwaitResultComponent) awaitResultComponent;


  constructor(
    public dataService: DataService,
    private router: Router,
    private sessionService: SessionService,
    public comparisonService: ComparisonService) { }

    ngOnInit() {
      this.stage = 0;
      this.comparisonService = new ComparisonService();
      console.log(this.comparisonService.setAccount(this.sessionService.getAccountId())); // TODO this is hardcoded
      console.log(this.comparisonService.getComparison());

    }

    ngAfterContentInit() {

      this.refreshStage();
   }


  /* NAV controls */
  next(): void {
    this.stage++;
    this.refreshStage();
  }


  previous(): void {
    this.stage--;
    this.refreshStage();
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
        break;
      }
      case 1: {

        this.selectInputComponent.hide();
        this.selectProvidersComponent.show();
        this.awaitResultComponent.hide();
        break;
      }
      case 2: {

        this.selectInputComponent.hide();
        this.selectProvidersComponent.hide();
        this.awaitResultComponent.show();
        break;
      }
      default: {
        //statements;
        break;
      }
    }
    console.log(this.comparisonService.getComparison());

  }







}
