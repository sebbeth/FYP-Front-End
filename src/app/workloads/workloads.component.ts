import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import {Observable} from "rxjs/Observable";
import { InputSet } from '../data-structures/InputSet';

@Component({
  selector: 'app-workloads',
  templateUrl: './workloads.component.html',
  styleUrls: ['./workloads.component.css']
})
export class WorkloadsComponent implements OnInit {


  id: number;
  loaded: boolean = true;
  workload$: Observable<InputSet>;
  workload: String;

  constructor(private route: ActivatedRoute,private router: Router,private dataService: DataService) { }

  ngOnInit() {
    this.id = Number(this.router.url.replace('/workloads/',''));
    this.workload$ = this.dataService.getInputSet(this.id);
    this.workload$.subscribe(workload => {
      this.workload = JSON.stringify(workload);
      this.loaded = true;
    });
  }

}
