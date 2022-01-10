import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-a-linea',
  templateUrl: './grafico-a-linea.component.html',
  styleUrls: ['./grafico-a-linea.component.css']
})
export class GraficoALineaComponent implements OnInit {

  constructor( ) { 
   
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  @Input() barChartLabels : string[];

  barChartType = 'line';
  public barChartLegend = true;

  
@Input() barChartData : any;


  ngOnInit(): void {
    
  }
 

}
