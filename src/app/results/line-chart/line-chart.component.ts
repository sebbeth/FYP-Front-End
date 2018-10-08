import { Component, Input, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ResultObject } from '../../data-structures/ResultObject';
import { ProviderHelper } from '../../data-structures/ProviderHelper';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent {

  @Input() resultData: ResultObject;
  // lineChart
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };


    public lineChartColors:Array<any> = [];
  /*
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
    }*/

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  ngOnInit() {

    const providerHelper = new ProviderHelper();
    console.log(this.resultData);
    for (let i = 0; i < this.resultData.data.length; i++) { // For each data object from the API
      this.lineChartData.push({data: this.resultData.data[i].segments, label: providerHelper.getName(this.resultData.data[i].provider)}); // Add the segments array to lineChartData

      // Set the line colour bases on which provider the solution is a child of
      this.lineChartColors.push({
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: providerHelper.getColour(this.resultData.data[i].provider),
      pointBackgroundColor: providerHelper.getColour(this.resultData.data[i].provider),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: providerHelper.getColour(this.resultData.data[i].provider),
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    });
    }
    for (let j = 0; j < this.resultData.data[0].segments.length; j++) { // Now add the X axis labels
      this.lineChartLabels.push(j);
    }
  }

  // events
  public chartClicked(e:any):void {
  console.log(e);
//  this.lineChartData.push({data: 20, label: "Added"});

  //console.log(this.resultData);
}

public chartHovered(e:any):void {
  console.log(e);
}
}
