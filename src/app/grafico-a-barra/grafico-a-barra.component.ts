import { ThrowStmt } from '@angular/compiler';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

    
    this.PrendiAnno(2022)
  }

  public PrendiAnno(val){
    this.ordineProdottoService.findReportMensileGruppo(Number(val)).subscribe(
      (resp)=>{
        this.barChartData = resp;
        this.updateGraph();
      },
      (error)=>{

      }
    )
  }


  updateGraph()
  {
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