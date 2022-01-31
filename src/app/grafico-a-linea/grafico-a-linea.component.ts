import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-a-linea',
  templateUrl: './grafico-a-linea.component.html',
  styleUrls: ['./grafico-a-linea.component.css']
})
export class GraficoALineaComponent implements OnInit {

  @Input() 
  barChartLabels : string[];

  @Input() 
  barChartData : any;
  
  
  constructor( ) { 
   
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
    
  };
  


  barChartType = 'line';
  public barChartLegend = true;

  
  


  ngOnInit(): void {
    
  }
  
  public colors:Array<any> = [
    { backgroundColor:"orange",
    borderWidth:1,
    pointBackgroundColor:'blue',
    pointHoverRadius:10,
    borderColor: 'black' },
    
  ];

}
