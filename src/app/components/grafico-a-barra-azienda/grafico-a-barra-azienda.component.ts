import { Component, Input, OnInit } from '@angular/core';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

@Component({
  selector: 'app-grafico-a-barra-azienda',
  templateUrl: './grafico-a-barra-azienda.component.html',
  styleUrls: ['./grafico-a-barra-azienda.component.css']
})
export class GraficoABarraAziendaComponent implements OnInit {

  @Input()
  barChartLabelsBarraAzienda : string[]=[];
  
  @Input()
  barChartDataBarraAzienda : number[]=[]; 

  
  dataForGraphsBarraAzienda:any[]=[];
  barChartTypeBarraAzienda = 'bar';
  barChartLegendBarraAzienda = true;
  barChartOptionsBarraAzienda: any; 

  constructor(private ordineProdottoService: OrdineProdottoService) { }

  ngOnInit(): void {

    this.PrendiAnno(Number)
  }

  PrendiAnno(num){
    this.ordineProdottoService.findReportAnnualeAzienda(2016,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2017,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2018,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2019,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2020,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2021,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2022,1).subscribe(
      (resp)=>{
        this.barChartDataBarraAzienda.push(resp);
        this.updateGraph();
      },
      (error)=>{
        this.barChartDataBarraAzienda.push(0)
      }
    )
  }

  updateGraph()
  {
    this.dataForGraphsBarraAzienda=[{
      label:"incassi",
      data:this.barChartDataBarraAzienda,
      options:{
        scales:{
          y:{
            beginAtZero: true
          }
        }
      },
    }];

    this.barChartOptionsBarraAzienda={
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
