import { Component, OnInit } from '@angular/core';
import { ChartsModule, BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit {

  private datasets = [
    {
      label: "Prezzo Mountainbike",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];

  private labels = ['Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
  private colors = [{backgroundColor: ["#009688"]}];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
  }

  

}
