import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-select-providers',
  templateUrl: './select-providers.component.html',
  styleUrls: ['./select-providers.component.css']
})
export class SelectProvidersComponent implements OnInit {

  @Input() visible: boolean;
  @Input() dataService: DataService;
  providers: Object;
  customSolutions: Object;
  selectedSolutions: number[];
  constructor() { }

  ngOnInit() {
    this.providers = this.dataService.getAllProviders();
  }


  toggleSolutionSelected(solution: number): void {

  }

}
