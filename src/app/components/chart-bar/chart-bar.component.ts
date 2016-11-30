import { Component, OnInit } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {

  constructor(){
    
  }

  private nDS = [
    [
    {
      label: "Prezzo Mountainbike Atala 29",
      data: [1600, 1950, 1800, 1590, 1490, 1590]
    }
    ],
    [
    {
      label: "Prezzo Medio Borse Gucci",
      data: [256, 250, 310, 289, 290, 290.50]
    }
    ],
    [
    {
      label: "Prodotti in Sconto",
      data: [120, 19, 180, 1500, 1002, 130]
    }
    ]
  ];
  

  private labels = ['Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
  private nColors = [
    [{
      backgroundColor: "rgba(00,211,194,1)",
      borderColor: '#009688',
      pointBackgroundColor: 'rgba(0,181,174,1)',
      pointBorderColor: '#009688',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }],
    [{
      backgroundColor: "rgba(00,221,205,1)",
      borderColor: '#009688',
      pointBackgroundColor: 'rgba(0,181,174,1)',
      pointBorderColor: '#009688',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }],
    [{
      backgroundColor: "rgba(00,221,210,1)",
      borderColor: '#009688',
      pointBackgroundColor: 'rgba(0,181,174,1)',
      pointBorderColor: '#009688',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }]
  ];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  ngOnInit() {
  }


onChartHovered(event){
  console.log('event:',event);
  this.nDS[0][0].data = [0, 0, 0, 0, 0, 0];
  let me = this;
  window.setTimeout(function(r){
    me.nDS[0][0].data = [1600, 1950, 1800, 1590, 1490, 1590];
  },1000);
}
  

}
