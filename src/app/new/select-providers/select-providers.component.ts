import { Component, OnInit, Input, Output } from '@angular/core';
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
  providers: Object;
  customSolutions: Object;
  selectedSolutions: number[];
  constructor() { }

  ngOnInit() {
    this.providers = this.dataService.getAllProviders();

    this.comparisonService.setSelectedProviders([1,2]);
    this.comparisonService.setSelectedSolutions([3,5]);

  }


  toggleSolutionSelected(solution: number): void {

  }


  // Component setup and teardown functions
  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }

}
