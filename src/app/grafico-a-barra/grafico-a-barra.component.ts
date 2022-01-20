import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { Z_ERRNO } from 'zlib';
import { OrdineProdottoService } from '../services/ordine-prodotto/ordine-prodotto.service';

@Component({
  selector: 'app-grafico-a-barra',
  templateUrl: './grafico-a-barra.component.html',
  styleUrls: ['./grafico-a-barra.component.css']
})
export class GraficoABarraComponent implements OnInit {

  @Input()
  barChartLabels : string[]=[];
  
  @Input()
  barChartData : number[]=[]; 

  
  dataForGraphs:any[]=[];
  barChartType = 'bar';
  barChartLegend = true;
  barChartOptions: any; 


  constructor(private ordineProdottoService: OrdineProdottoService) { }

  ngOnInit(): void {
    // this.ordineProdottoService.findReportMensileGruppo(2022).subscribe(
    //   (resp)=>{
    //     this.barChartData = resp;
    //     this.updateGraph();
    //   },
    //   (error)=>{

    //   }
    // )
    
  }
  updateGraph()
  {
    console.log("chiamato update graph")
    this.dataForGraphs=[{
      label:"incassi",
      data:this.barChartData,
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      },
    }];

    this.barChartOptions={
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      }
    }
  }

  public colors = [
    { backgroundColor:"orange" },
    { backgroundColor:"green" },
    { backgroundColor:"blue" },
    { backgroundColor:"yellow" }
  ];

}