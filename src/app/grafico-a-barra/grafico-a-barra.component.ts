import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-a-barra',
  templateUrl: './grafico-a-barra.component.html',
  styleUrls: ['./grafico-a-barra.component.css']
})
export class GraficoABarraComponent implements OnInit {



  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug','Ago','Set','Ott','Nov','Dic'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Incassi', backgroundColor: 'rgba(255, 174, 0, 0.582)',
    borderColor:'rgba(255, 174, 0, 0.582)'
  }
    
  ];

  ngOnInit(): void {
  }

}
