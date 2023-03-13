import { Component , OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import { data } from 'jquery';
import { object } from 'rxfire/database';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit  {
  All= {
    current: [
      {
        successCount: 1,
        totalCount: 14,
        Count: '1st',
      },
      {
        successCount: 25,
        totalCount: 36,
        Count: '2nd',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '3rd',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '4th',
      },
      {
        successCount: 3,
        totalCount: 25,
        Count: '5th',
      },
      {
        successCount: 11,
        totalCount: 32,
        Count: '6th',
      },
      {
        successCount: 2,
        totalCount: 4,
        Count: '7th',
      },
      {
        successCount: 11,
        totalCount: 16,
        Count: '8th',
      },
      {
        successCount: 2,
        totalCount: 12,
        Count: '9th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '10th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '11th',
      },
      {
        successCount: 0,
        totalCount: 13,
        Count: '12th',
      },
      {
        successCount: 7,
        totalCount: 20,
        Count: '13th',
      },
      {
        successCount: 2,
        totalCount: 5,
        Count: '14th',
      },
      {
        successCount: 0,
        totalCount: 8,
        Count: '15th',
      },
      {
        successCount: 1,
        totalCount: 1,
        Count: '16th',
      },
      {
        successCount: 0,
        totalCount: 1,
        Count: '17th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '18th',
      },
      {
        successCount: 3,
        totalCount: 40,
        Count: '19th',
      },
      {
        successCount: 7,
        totalCount: 20,
        Count: '20th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '21st',
      },
      {
        successCount: 17,
        totalCount: 22,
        Count: '22nd',
      },
      {
        successCount: 21,
        totalCount: 37,
        Count: '23rd',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '24th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '25th',
      },
    ],
    previous: [
      {
        successCount: 0,
        totalCount: 14,
        Count: '1st',
      },
      {
        successCount: 1,
        totalCount: 37,
        Count: '2nd',
      },
      {
        successCount: 0,
        totalCount: 46,
        Count: '3rd',
      },
      {
        successCount: 5,
        totalCount: 21,
        Count: '4th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '5th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '6th',
      },
      {
        successCount: 4,
        totalCount: 14,
        Count: '7th',
      },
      {
        successCount: 3,
        totalCount: 8,
        Count: '8th',
      },
      {
        successCount: 3,
        totalCount: 44,
        Count: '9th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '10th',
      },
      {
        successCount: 0,
        totalCount: 14,
        Count: '11th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '12th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '13th',
      },
      {
        successCount: 0,
        totalCount: 17,
        Count: '14th',
      },
      {
        successCount: 6,
        totalCount: 32,
        Count: '15th',
      },
      {
        successCount: 2,
        totalCount: 30,
        Count: '16th',
      },
      {
        successCount: 0,
        totalCount: 21,
        Count: '17th',
      },
      {
        successCount: 0,
        totalCount: 24,
        Count: '18th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '19th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '20th',
      },
      {
        successCount: 4,
        totalCount: 13,
        Count: '21st',
      },
      {
        successCount: 2,
        totalCount: 24,
        Count: '22nd',
      },
      {
        successCount: 7,
        totalCount: 18,
        Count: '23rd',
      },
      {
        successCount: 12,
        totalCount: 54,
        Count: '24th',
      },
      {
        successCount: 1,
        totalCount: 9,
        Count: '25th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '26th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '27th',
      },
      {
        successCount: 2,
        totalCount: 18,
        Count: '28th',
      },
      {
        successCount: 0,
        totalCount: 29,
        Count: '29th',
      },
      {
        successCount: 1,
        totalCount: 27,
        Count: '30th',
      },
      {
        successCount: 0,
        totalCount: 0,
        Count: '31st',
      },
    ],
    name: 'All',
    previousColumn: {
      total: 514,
      success: 53,
      averageTotal: 16.58,
      averageSuccess: 1.71,
    },
    previousTillColumn: {
      total: 440,
      success: 50,
      averageTotal: 17.6,
      averageSuccess: 2,
    },
    currentColumn: {
      total: 306,
      success: 113,
      averageTotal: 12.24,
      averageSuccess: 4.52,
    },
    forecastColumn: {
      total: 357,
      success: 119,
      averageTotal: 11.52,
      averageSuccess: 3.84,
    },
    mid: 'All',
  }
  currentData:any=[];
  currData:any=[];
  prevData:any=[];
  successRate:any=[];
  successRatepre:any=[];
  ngOnInit(): void {
    this.currentData=[];
    this.currData=[];
    this.prevData=[];
    this.successRate=[];
    this.successRatepre=[]
    this.All.current.forEach((item)=>{
        this.currentData.push(item.successCount)
      }
    )
    this.currData=(Object.values(this.currentData))
    console.log(this.currData)

    this.All.current.forEach((item)=>{
      let avg=item.successCount/item.totalCount*100;
      if(Number.isNaN(avg)){
        this.successRate.push(0)
      }
      this.successRate.push(avg)
    })
    this.All.previous.forEach((item)=>{
      let avg=item.successCount/item.totalCount*100;
      if(Number.isNaN(avg)){
        this.successRatepre.push(0)
      }
      this.successRatepre.push(avg)
    })
    console.log(this.successRatepre)


     this.All.previous.forEach((item)=>{
      this.prevData.push(item.successCount)
    }
  )
  this.prevData=(Object.values(this.prevData))
  console.log(this.prevData)

  this.chartOptions.series=[

    {
      type:'line',
      name:'current',
      data:this.currData,
     },
    {
    type:'line',
    name:'prev',
    data:this.prevData
   }]
  }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {

  series:[{
  type:'line',
  name:'current',
  data:this.currData
 },
{
  type:'line',
  name:'prev',
  data:this.prevData
}],
tooltip:{
  shared:true,
  formatter:function(){
    console.log(this)
   let current=`${this.y}/${this.x} `
    return this.x +`<br>`+
    'Current:' + `${current}*100` +
    'Previus:' + this.x
  }
}
}
}


