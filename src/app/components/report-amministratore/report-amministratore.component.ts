import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { observable } from 'rxjs';
import { GraficoABarraComponent } from 'src/app/grafico-a-barra/grafico-a-barra.component';
import { Azienda } from 'src/app/models/Azienda';
import { Ordine } from 'src/app/models/Ordine';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { Utente } from 'src/app/models/Utente';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';
import { GraficoABarraAziendaComponent } from '../grafico-a-barra-azienda/grafico-a-barra-azienda.component';
import { GraficoALineaAziendaComponent } from '../grafico-a-linea-azienda/grafico-a-linea-azienda.component';

@Component({
  selector: 'app-report-amministratore',
  templateUrl: './report-amministratore.component.html',
  styleUrls: ['./report-amministratore.component.css']
})
export class ReportAmministratoreComponent implements OnInit {
  aziende: Azienda[];
  anni : string[] = ["2016","2017","2018", "2019", "2020", "2021","2022"]; 

  @Input()
  mesi : string[] = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];


  
  datiAnnualiTotali = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];
  datiMensiliTotali = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];

  data=[100,200,300];

  //array per salvare dati
  datiAnnualiDB=[];
  datiMensiliDB=[];
  datiAnnualiDB_IDAzienda=[]
  datiMensiliDB_IDAzienda=[]
  //variabiliHtml
  datiAnnualiTotaliDB:any[];
  datiAnnualiTotaliDB_IDAzienda:any[];
  datiAnnualiTotaliByMeseDB:number[] = [];



@ViewChild("graficoABarra") graficoABarra! : GraficoABarraComponent;

@ViewChild("graficoABarraAzienda") graficoABarraAzienda! : GraficoABarraAziendaComponent;

@ViewChild("graficoALineaAzienda") graficoALineaAzienda! : GraficoALineaAziendaComponent;

  datiAnnualiOrdini: Ordine[];
  aziendaScelta : string;
  annoScelto : string;

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"))

  constructor(private aziendaService: AziendaService,private ordineProdottoService: OrdineProdottoService ,
    private ordineService: OrdineService, private log: LogService) { }

    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      //this.graficoABarra.updateGraph();
    }
  ngOnInit(): void {
    this.getAllAzienda()
    this.getReportTotaleByAnno()
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
  
  
  getReportTotaleByAnno(){
    this.ordineProdottoService.findReportAnnuale(2016).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp);  
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2017).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
      },
      (error)=>{
       // this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2018).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2019).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2020).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2021).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnuale(2022).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.datiAnnualiDB.push(resp)
        
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB.push(0)
      }
    )
    this.datiAnnualiTotaliDB=[{data:this.datiAnnualiDB,label:"incassi"}]
  }


  getReportTotaleByAnnoIdAzienda(){
    this.datiAnnualiDB_IDAzienda=[];
    this.ordineProdottoService.findReportAnnualeAzienda(2016,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        } 
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2017,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
       // this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2018,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2019,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2020,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2021,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    this.ordineProdottoService.findReportAnnualeAzienda(2022,this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        if(resp==undefined){
          this.datiAnnualiDB_IDAzienda.push(resp)
        }
        else{
          this.datiAnnualiDB_IDAzienda.push(0);
        }
      },
      (error)=>{
        //this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        this.datiAnnualiDB_IDAzienda.push(0)
      }
    )
    console.log(" AZIENDA "+this.datiAnnualiDB_IDAzienda)
    this.datiAnnualiTotaliDB_IDAzienda=[{data:this.datiAnnualiDB_IDAzienda,label:"incassi"}]
  }


  findReportTotaleByAnno(event : any){
    this.annoScelto=event.target.value;
    this.graficoABarra;
    this.graficoABarra.PrendiAnno(this.annoScelto)
  }







  // getReportAziendaByMesi(event : any){
  //   this.aziendaScelta = event.target.value;
  // }



  // cambiaAzienda(event : any){
    
  //   console.log(this.aziendaScelta)

  // }

  // cambiaAnno(event : any){
  //   this.annoScelto = event.target.value;
    
  // }
}
