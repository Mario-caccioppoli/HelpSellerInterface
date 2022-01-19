import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Ordine } from 'src/app/models/Ordine';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

@Component({
  selector: 'app-report-amministratore',
  templateUrl: './report-amministratore.component.html',
  styleUrls: ['./report-amministratore.component.css']
})
export class ReportAmministratoreComponent implements OnInit {
  aziende: Azienda[];
  anni : string[] = ["2016","2017","2018", "2019", "2020", "2021","2022"]; 
  mesi : string[] = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];


  
  datiAnnualiTotali = [{ data: [50,80,70,80,73,70,90], label:"incassi"}];
  datiMensiliTotali = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];

  datiAnnualiTotaliByAzienda = [{ data: [50,80,70,80,73,70,90], label:"incassi"}];
  datiMensiliTotaliByAzienda = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];

  datiAnnualiTotali2016:number;
  datiAnnualiTotali2017:Ordine[];
  datiAnnualiTotali2018:Ordine[];
  datiAnnualiTotali2019:Ordine[];
  datiAnnualiTotali2020:Ordine[];
  datiAnnualiTotali2021:Ordine[];
  datiAnnualiTotali2022:Ordine[];


  datiMensiliTotaliGennaio:number;
  datiMensiliTotaliFebbraio:Ordine[];
  datiMensiliTotaliMarzo:Ordine[];
  datiMensiliTotaliAprile:Ordine[];
  datiMensiliTotaliMaggio:Ordine[];
  datiMensiliTotaliGiugno:Ordine[];
  datiMensiliTotaliLuglio:Ordine[];
  datiMensiliTotaliAgosto:Ordine[];
  datiMensiliTotaliSettembre:Ordine[];
  datiMensiliTotaliOttobre:Ordine[];
  datiMensiliTotaliNovembre:Ordine[];
  datiMensiliTotaliDicembre:Ordine[];


  datiAnnualiOrdini: Ordine[];
  aziendaScelta : string;
  annoScelto : string;
  constructor(private aziendaService: AziendaService,private ordineProdottoService: OrdineProdottoService ,
    private ordineService: OrdineService, private log: LogService) { }

  ngOnInit(): void {
    this.getAllAzienda()
    //this.getReportTotaleByAnno()
  }
  getAllAzienda(){
    this.aziendaService.getAllAzienda().subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.aziende = resp as Azienda[];
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
  }
  // getReportTotaleByAnno(){
  //   this.ordineService.getAllReportBy2016().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2016 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2017().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2017 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2018().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2018 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2019().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2019 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2020().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2020 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2021().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2021 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  //   this.ordineService.getAllReportBy2022().subscribe(
  //     (resp)=>{
  //       this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
  //       this.datiAnnuali2022 = resp as Ordine[];
  //     },
  //     (error)=>{
  //       this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
  //     }
  //   )
  // }

  getReportAziendaByMesi(event : any){
    this.aziendaScelta = event.target.value;
  }





  // cambiaAzienda(event : any){
    
  //   console.log(this.aziendaScelta)

  // }
  cambiaAnno(event : any){
    this.annoScelto = event.target.value;
    
  }
}
