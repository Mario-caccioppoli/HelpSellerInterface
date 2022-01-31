import { ThrowStmt } from '@angular/compiler';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { OrdineProdottoService } from '../services/ordine-prodotto/ordine-prodotto.service';

@Component({
  selector: 'app-grafico-a-barra',
  templateUrl: './grafico-a-barra.component.html',
  styleUrls: ['./grafico-a-barra.component.css']
})
export class GraficoABarraComponent implements OnInit {

  @Input()
  barChartLabels : string[]=[];
  
  // @Input()
  // barChartData : number[]=[]; 

  //@Input() 
  //barChartLabels : string[];

  @Input() 
  barChartData : any;

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    //scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
         ticks: {
            beginAtZero: true,
            //stepSize: 50000 //<- set this
         }
      }]
   },
    
  }

  
  // dataForGraphs:any[]=[];
  // barChartType = 'bar';
  // barChartLegend = true;
  // barChartOptions: any; 


  constructor() { }

  ngOnInit(): void {

  }


  

  //public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];


  // updateGraph()
  // {
  // public barChartData=[{
  //     label:"incassi",
  //     data:this.barChartData,
  //     options:{
  //       scales:{
  //         y:{
  //           beginAtZero: true
  //         }
  //       }
  //     },
  //   }];

  //   this.barChartOptions={
  //     scales:{
  //       yAxes:[{
  //         ticks:{
  //           beginAtZero:true
  //         }
  //       }]
  //     }
  //   }
  // }

  public colors = [
    { backgroundColor:"orange" },
    { backgroundColor:"green" },
    { backgroundColor:"blue" },
    { backgroundColor:"yellow" }
  ];

}