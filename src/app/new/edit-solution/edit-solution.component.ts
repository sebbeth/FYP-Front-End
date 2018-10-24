import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DataService } from '../../data.service';
import { ComparisonService } from '../comparison.service';
import { Solution } from '../../data-structures/solution';
@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.css']
})
export class EditSolutionComponent implements OnInit {

  @Input() dataService: DataService;
  @Input() comparisonService: ComparisonService;
  @Input() solutionId: number; // Identifier for the solution we are editing, if equal to -1 we are adding a new solution.
  @Output() done = new EventEmitter();

  solution: Solution;
  errors: string;
  loaded: boolean = true;

  constructor() { }

  ngOnInit() {
    this.solution = new Solution();

    if (this.solutionId != -1) {
      this.loaded = false;
       this.dataService.getCustomSolution(this.solutionId).subscribe(
         (response) => {
           this.solution = response;
           console.log(response);
           this.loaded = true;
         }
       );

    }
  }


  cancel(): void {
    this.done.next();

  }

  /*
    determine whether we are editing or making new
    construct the json object from the solution
    send the json object to the api
  */
  save(): void {

    if (this.solutionId != -1) {
      this.solution.id = this.solutionId;
    }
      console.log(this.solution);

      // Ok, now send the API request

      this.dataService.storeCustomSolution(this.solution).subscribe(
        (val) => {
          console.log("SAVE SUCCESSFUL",val);
          this.errors = '';
          this.done.next();
        },
        response => {
          console.log("ERROR SAVING", response );
          this.errors = 'Invalid input, failed to save';
        });
  }


  doneEditing(): void {
    this.done.next();
  }

}
