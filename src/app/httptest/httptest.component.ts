import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';
import { DataService } from '../data.service';

interface Course {
    description: string;
    courseListIcon:string;
    iconUrl:string;
    longDescription:string;
    url:string;
}


@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit {

  courses$: Object;



   constructor(private dataService: DataService) {
   }

   ngOnInit() {
      /* this.courses$ = this.http
           .get("http://localhost/FYP-API/api.php/upload/")
           .map(data => _.values(data))
           .do(console.log);*/

        this.courses$ = this.dataService.getExample();
   }




}
