import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-a-linea',
  templateUrl: './grafico-a-linea.component.html',
  styleUrls: ['./grafico-a-linea.component.css']
})
export class GraficoALineaComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Incassi'}
    
  ];

  ngOnInit(): void {
  }

}
