import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';
import { ComparisonService } from '../comparison.service';

@Component({
  selector: 'app-select-providers',
  templateUrl: './select-providers.component.html',
  styleUrls: ['./select-providers.component.css']
})
export class SelectProvidersComponent implements OnInit {

  visible: boolean;
  @Input() dataService: DataService;
  @Input() comparisonService: ComparisonService;
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();

  providers: Object;
  customSolutions: Object;
  selectedSolutions: number[];
  constructor() { }

  ngOnInit() {
    this.providers = this.dataService.getAllProviders();
    this.customSolutions = this.dataService.getAllCustomSolutions();
  }


  toggleSolutionSelected(solution: number): void {
    this.comparisonService.toggleSolution(+solution);
  }

  public selectAll(solutions): void {
    console.log(solutions);
    solutions.forEach((solution) => {
      this.comparisonService.toggleSolution(+solution.id);
    });
  }

  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }

  public hasNext(): boolean {
    if (this.comparisonService.getSelectedSolutions().length > 0) {
      return true;
    }
  return false;
  }


  public next(): void {
    this.nextEvent.next();
  }

  public hasPrevious(): boolean {
    return true;
  }


  public previous(): void {
    this.previousEvent.next();
  }

}
