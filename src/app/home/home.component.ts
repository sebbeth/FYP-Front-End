import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { InputSet } from '../data-structures/InputSet';
import { ResultSetComponent } from './result-set/result-set.component';



import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Object[];
  inputSets: InputSet[];
  test: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.results.push(this.dataService.getResultWithId(10));
    console.log(this.dataService.getResultWithId(10));
//this.inputSets = this.dataService.getAllInputSets(1);

    this.inputSets = this.dataService.getAllInputSets();
  //  console.log(this.inputSets);
  //  .subscribe(data => this.inputSets = data);
    //console.log('OBJECTS' + this.inputSets.toString());
  }

  addComp(): void {
    this.dataService.scheduleComparison('{"input_id":"1","parameters":{"foo":"bar"}}');
  }

}
