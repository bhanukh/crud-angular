import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import enableExporting from 'highcharts/modules/exporting';

enableExporting(Highcharts);

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  All=[
    {
    "credorax": [
        {
            "date": "03",
            "name": "credorax",
            "allTransactions": 4,
            "successTransactions": 0,
            "acquirer": "credorax"
        },
        {
            "date": "06",
            "name": "credorax",
            "allTransactions": 2,
            "successTransactions": 0,
            "acquirer": "credorax"
        }
    ],
    "securetrade": [
        {
            "date": "06",
            "name": "Secure Trade",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "securetrade"
        }
    ],
    "acapture": [
        {
            "date": "09",
            "name": "Acapture",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "acapture"
        }
    ],
    "dalenys": [
        {
            "date": "03",
            "name": "Dalenys",
            "allTransactions": 2,
            "successTransactions": 1,
            "acquirer": "dalenys"
        },
        {
            "date": "05",
            "name": "Dalenys",
            "allTransactions": 5,
            "successTransactions": 0,
            "acquirer": "dalenys"
        }
    ],
    "novalnet": [
        {
            "date": "05",
            "name": "Novalnet",
            "allTransactions": 2,
            "successTransactions": 0,
            "acquirer": "novalnet"
        }
    ],
    "truevo": [
        {
            "date": "02",
            "name": "Truevo",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "truevo"
        },
        {
            "date": "05",
            "name": "Truevo",
            "allTransactions": 5,
            "successTransactions": 1,
            "acquirer": "truevo"
        },
        {
            "date": "06",
            "name": "Truevo",
            "allTransactions": 11,
            "successTransactions": 10,
            "acquirer": "truevo"
        },
        {
            "date": "07",
            "name": "Truevo",
            "allTransactions": 12,
            "successTransactions": 9,
            "acquirer": "truevo"
        }
    ],
    "emerchantpay": [
        {
            "date": "06",
            "name": "eMerchantPay",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "emerchantpay"
        }
    ],
    "clearhaus": [
        {
            "date": "06",
            "name": "Clearhaus",
            "allTransactions": 2,
            "successTransactions": 0,
            "acquirer": "clearhaus"
        }
    ],
    "payabl": [
        {
            "date": "06",
            "name": "Payabl",
            "allTransactions": 3,
            "successTransactions": 0,
            "acquirer": "payabl"
        }
    ],
    "firstdata": [
        {
            "date": "05",
            "name": "FirstData",
            "allTransactions": 2,
            "successTransactions": 1,
            "acquirer": "firstdata"
        },
        {
            "date": "06",
            "name": "FirstData",
            "allTransactions": 3,
            "successTransactions": 1,
            "acquirer": "firstdata"
        }
    ],
    "sofort": [
        {
            "date": "02",
            "name": "Sofort",
            "allTransactions": 4,
            "successTransactions": 3,
            "acquirer": "sofort"
        },
        {
            "date": "03",
            "name": "Sofort",
            "allTransactions": 2,
            "successTransactions": 2,
            "acquirer": "sofort"
        }
    ],
    "network": [
        {
            "date": "05",
            "name": "Network",
            "allTransactions": 2,
            "successTransactions": 0,
            "acquirer": "network"
        },
        {
            "date": "08",
            "name": "Network",
            "allTransactions": 7,
            "successTransactions": 7,
            "acquirer": "network"
        },
        {
            "date": "09",
            "name": "Network",
            "allTransactions": 4,
            "successTransactions": 0,
            "acquirer": "network"
        }
    ],
    "truevo_bank": [
        {
            "date": "02",
            "name": "Truevo Bank",
            "allTransactions": 5,
            "successTransactions": 3,
            "acquirer": "truevo_bank"
        },
        {
            "date": "03",
            "name": "Truevo Bank",
            "allTransactions": 3,
            "successTransactions": 3,
            "acquirer": "truevo_bank"
        },
        {
            "date": "05",
            "name": "Truevo Bank",
            "allTransactions": 4,
            "successTransactions": 4,
            "acquirer": "truevo_bank"
        },
        {
            "date": "06",
            "name": "Truevo Bank",
            "allTransactions": 8,
            "successTransactions": 6,
            "acquirer": "truevo_bank"
        },
        {
            "date": "08",
            "name": "Truevo Bank",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "truevo_bank"
        }
    ],
    "worldline": [
        {
            "date": "06",
            "name": "Worldline",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "worldline"
        },
        {
            "date": "08",
            "name": "Worldline",
            "allTransactions": 24,
            "successTransactions": 12,
            "acquirer": "worldline"
        }
    ],
    "safecharge": [
        {
            "date": "06",
            "name": "SafeCharge",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "safecharge"
        }
    ],
    "transact": [
        {
            "date": "06",
            "name": "Transact",
            "allTransactions": 3,
            "successTransactions": 1,
            "acquirer": "transact"
        }
    ],
    "truelayer": [
        {
            "date": "03",
            "name": "True Layer",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "truelayer"
        }
    ],
    "payvision": [
        {
            "date": "05",
            "name": "Payvision",
            "allTransactions": 1,
            "successTransactions": 0,
            "acquirer": "payvision"
        }
    ]
}
]
data:any={};
parsedData = {};
card:any={};
  ngOnInit(): void {
    this.All.forEach((item: any) => {
      this.card=Object.keys(item)
      console.log(this.card)
    });
    this.card.forEach((item:any)=>{
      this.parsedData = (this.All[0] as any)[item].forEach( (i: any) =>{
        this.data=[item,i.allTransactions]
        console.log(this.data);
      })
    })
  //  this.All.network.forEach((item)=>{
  //   this.network.push(item.allTransactions)
  //  })
  //  this.All.truevo.forEach((item)=>{
  //   this.truevo.push(item.allTransactions)
  //  })
  //  this.All.truevo_bank.forEach((item)=>{
  //   this.truevo_bank.push(item.allTransactions)
  //  })
  //  this.All.credorax.forEach((item)=>{
  //   this.credorax.push(item.allTransactions)
  //  })
  //  this.All.clearhaus.forEach((item)=>{
  //   this.clearhaus.push(item.allTransactions)
  //  })
  //  this.All.safecharge.forEach((item)=>{
  //   this.safecharge.push(item.allTransactions)
  //  })
   this.chartOptions.series=[{
    name:this.data.item,
    type:'pie',
    data:this.data,
    selected:true
   }
 ]
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
      styledMode:true
    },
    title: {
      text: 'Browser market shares in March, 2022',
      align: 'left'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true
        },
        showInLegend: true
      }
    },

}
}

