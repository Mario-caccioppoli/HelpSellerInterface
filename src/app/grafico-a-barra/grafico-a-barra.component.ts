import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-a-barra',
  templateUrl: './grafico-a-barra.component.html',
  styleUrls: ['./grafico-a-barra.component.css']
})
export class GraficoABarraComponent implements OnInit {



  constructor() { }

    barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

 @Input() barChartLabels : any;
  barChartType = 'bar';
  barChartLegend = true;
  @Input() barChartData : any; 
    


  ngOnInit(): void {
  }
  

}