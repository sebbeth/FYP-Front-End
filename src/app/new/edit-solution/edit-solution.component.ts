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
  cpu_options: string[] = [
    "",
    "Intel Xeon CPU E5-2670 @ 2.60GHz",
    "AMD Ryzen Threadripper 1950X",
    "Intel Core i5-4288U @ 2.60GHz"
  ];
  frequency_options: string[] = [
    "Once only"
  //  "Yearly",
    //"Every two years"
  ];
  //TODO connect setup cost to data
  solution_spec_cpu: string;
  solution_spec_memory: number;
  solution_spec_disk: number;
  solution_spec_storage: number;

  solution_setup_cost: number;
  solution_setup_frequency: string;

  usage_cost_cpu: number;
  usage_cost_memory: number;
  usage_cost_disk: number;
  usage_cost_storage: number;
  usage_cost_any: number;
  constructor() { }

  ngOnInit() {
    this.solution = new Solution();

    this.solution_spec_cpu = this.cpu_options[0];
    this.solution_spec_memory = 0;
    this.solution_spec_disk = 0;
    this.solution_spec_storage = 0;
    this.solution_setup_cost = 0;


    this.solution.usage_costs[0] = {type:'C',value:0};
    this.solution.usage_costs[1] = {type:'M',value:0};
    this.solution.usage_costs[2] = {type:'D',value:0};
    this.solution.usage_costs[3] = {type:'S',value:0};
    this.solution.usage_costs[4] = {type:'any', value:0};

    this.solution_setup_frequency = this.frequency_options[0];

    if (this.solutionId != -1) {
      this.loaded = false;
      this.dataService.getCustomSolution(this.solutionId).subscribe(
        (response) => {
          this.solution = response;
          this.solution_spec_cpu = response.spec[0].value;
          this.solution_spec_memory = response.spec[1].value;
          this.solution_spec_disk = response.spec[2].value;
          this.solution_spec_storage = response.spec[3].value;
          this.solution_setup_cost = response.setup_costs[0].cost;

          this.loaded = true;
        });
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

      this.solution.spec[0] = {type:"C", value:this.solution_spec_cpu};
      this.solution.spec[1] = {type:"M", value:this.solution_spec_memory, unit:'gb'};
      this.solution.spec[2] = {type:"D", value:this.solution_spec_disk, unit:'mbs'};
      this.solution.spec[3] = {type:"S", value:this.solution_spec_storage, unit:'gb'};

      this.solution.setup_costs[0] = { description: "Setup Costs",
				cost: this.solution_setup_cost,
				repeat_in_months: 12 };

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

      getUsageCostLabel(identifier: string): string {
        switch(identifier) {
          case 'C':
            return 'CPU';
          case 'M':
            return 'Memory';
          case 'D':
            return 'Disk i/o';
          case 'S':
            return 'Storage';
          case 'any':
            return 'Any usage';
          default:
              return '?';
        }
      }

      doneEditing(): void {
        this.done.next();
      }

      isLocal(): boolean {
        if (this.solution.type == 'local') {
          return true;
        }
        return false;
      }

    }
