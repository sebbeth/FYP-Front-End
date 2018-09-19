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

  constructor(
    private dataService: DataService,
    private router: Router) { }

  textFieldContent = '{"example":"input"}';
  stage: number;
  busy: boolean = false;
  inputSets: Object;

  ngOnInit() {
    this.stage = Number(this.router.url.replace('/new/',''));
    this.inputSets = this.dataService.getAllInputSets();
  }


  public uploadDataSet(): void {
    if (this.textFieldContent === '') {
      return null;
    }
    let data = JSON.parse(this.textFieldContent);
    this.dataService.storeNewInputDataSet(1,data);
  }



}
