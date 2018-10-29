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
    responsive: true,
    scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Cost (AUD)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Time (Hours)'
      }
    }]
  },
  tooltips: {
          callbacks: {
              label: function(tooltipItems, data) {
                  return "$" + tooltipItems.yLabel.toString();
              }
            }
          }
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

    this.resultData.time.forEach((time) => {
      this.lineChartLabels.push(this.getDateFromTime(time));
    });

  //  this.resultData = this.pruneSegments(this.resultData);

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

  }

  // events
  public chartClicked(e:any):void {
  console.log(e);
//  this.lineChartData.push({data: 20, label: "Added"});

  //console.log(this.resultData);
}

private pruneSegments(result: ResultObject ): ResultObject {

    console.log('PRUNE');
    console.log(result);
    console.log('DONE');

    result.data.forEach((solution) => {

      let pruneLength = -1;
      if (solution.segments.length > 200) {
        pruneLength = 24 * 30;
      }

      if (pruneLength != -1) {
        let i;
        for (i = 0; i < solution.segments.length; i = i + pruneLength) {
          solution.segments.splice(i,pruneLength);
          this.lineChartLabels.splice(i,pruneLength);
        }
      }
      console.log(solution.segments);

    });
    return result;
}

private getDateFromTime(time: number): string {
  let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
  date.setUTCSeconds(time);
  return date.toLocaleString();

}

public chartHovered(e:any):void {
  console.log(e);
}
}
