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

    this.PrendiAnnoByAzienda()
  }

  PrendiAnnoByAzienda(){
    this.ordineProdottoService.findReportAnnualeAzienda(1).subscribe(
      (resp)=>{
        //this.barChartDataBarraAzienda.push(resp);
        console.log(resp)
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
