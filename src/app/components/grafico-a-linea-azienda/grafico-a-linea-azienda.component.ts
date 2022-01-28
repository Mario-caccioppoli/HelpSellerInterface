import { Component, Input, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

@Component({
  selector: 'app-grafico-a-linea-azienda',
  templateUrl: './grafico-a-linea-azienda.component.html',
  styleUrls: ['./grafico-a-linea-azienda.component.css']
})
export class GraficoALineaAziendaComponent implements OnInit {

  constructor( private ordineProdottoService:OrdineProdottoService ,private log: LogService) { }

  datiAnnualiDB_IDAzienda=[];
  datiAnnualiTotaliDB_IDAzienda:any=[]

  ngOnInit(): void {
    this.getReportTotaleByAnnoIdAzienda()
  }

  public barChartOptionsLineaAzienda = {
    scaleShowVerticalLines: false,
    responsive: true
    
  };

  @Input() barChartLabelsLineaAzienda : string[];

  barChartTypeLineaAzienda = 'line';
  public barChartLegendLineaAzienda = true;

  
  @Input() barChartDataLineaAzienda : any;

  public colors = [
    { backgroundColor:"orange" },
    { backgroundColor:"orange" },
    { backgroundColor:"orange" },
    { backgroundColor:"orange" }
  ];



  getReportTotaleByAnnoIdAzienda(){
    this.datiAnnualiDB_IDAzienda=[];
    this.ordineProdottoService.findReportAnnualeAzienda(3).subscribe(
      (resp)=>{
        this.log.Debug(GraficoALineaAziendaComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB_IDAzienda.push(resp);  
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
  }
}
