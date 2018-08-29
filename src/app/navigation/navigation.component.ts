import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  apiMode: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.apiMode = this.getAPIMode();
  }

  setAPIMode(mode): void {
    this.dataService.setAPIMode(mode);
    this.apiMode = this.getAPIMode();
  }

  getAPIMode(): number {
    return this.dataService.getAPIMode();
  }

  getAccountId(): number {
    return this.dataService.getAccountId();
  }

}
