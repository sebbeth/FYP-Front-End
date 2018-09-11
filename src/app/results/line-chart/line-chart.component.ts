import { Component, Input, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ResultObject } from '../../data-structures/ResultObject';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {

    @Input() resultData: ResultObject;
    @Input() graphData: Array<any>;
  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnInit() {
  //  this.lineChartData = [{data: this.graphData[0], label: 'Solution A'}];
    console.log(this.lineChartLabels);
    let i = 0;
      for (i = 0; i < this.graphData.length; i++) {
        this.lineChartData.push({data: this.graphData[i], label: i});
    }
    let j = 0;
    this.resultData.startDate = '2018-08-26 22:51:26';
    for (j = 0; j < this.graphData[0].length; j++) {
        this.lineChartLabels.push(j);
    }
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
    console.log(this.resultData);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
