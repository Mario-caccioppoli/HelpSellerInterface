import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { REPL_MODE_SLOPPY } from 'repl';
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
  anni : string[] = [];
  euro: number[]=[];


  @Input()
  mesi : string[] = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];


  
  datiAnnualiTotali = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];
  datiMensiliTotali = [{ data: [50,80,70,90,60,70,80], label:"incassi"}];

  data=[100,200,300];

  //array per salvare dati
  datiAnnualiDB:number[][]=[];
  datiMensiliDB=[];
  datiAnnualiDB_IDAzienda=[]
  datiMensiliDB_IDAzienda=[]
  //variabiliHtml
  datiAnnualiTotaliDB:any[];
  datiMensiliTotaliDB:any[];
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
    if(this.currentUser != null) {
      this.findReportAnnuale();
      this.findReportAnnualeAzienda();
      //this.findReportMensileGruppo();
      this.findReportMensileAzienda();
      this.getAllAzienda();
      this.getReportTotaleByAnno();
    }

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

  findReportAnnuale(){
    this.euro=[];
    this.ordineProdottoService.findReportAnnuale().subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        for(let i = 0; i<resp.length;i++){
          this.datiAnnualiDB[i] = resp[i];
        }

          for(let i = 0; i<this.datiAnnualiDB.length;i++){
            this.anni.push(this.datiAnnualiDB[i][0].toString());
            this.euro.push(this.datiAnnualiDB[i][1]);
          }
          this.datiAnnualiTotaliDB=[{data:this.euro,label:"incassi"}]
        
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
    
  }


  findReportAnnualeAzienda(){
    this.euro=[];
    this.ordineProdottoService.findReportAnnualeAzienda(Number(this.annoScelto)).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  findReportMensileGruppo(){
    if(this.annoScelto!=undefined){
    this.ordineProdottoService.findReportMensileGruppo(Number(this.annoScelto)).subscribe(
      (resp)=>{
        console.log("resp "+resp)
        this.euro = resp as number[];
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        // for(let i = 0; i<resp.length;i++){
        //   this.datiMensiliDB[i] = resp[i];
        // }

        //   for(let i = 0; i<this.datiMensiliDB.length;i++){
        //     //this.anni.push(this.datiMensiliDB[i][0]);
        //     this.euro.push(this.datiMensiliDB[i][1]);
        //   }
          console.log("eeee "+this.euro)
          this.datiMensiliTotaliDB=[{data:this.euro,label:"incassi"}]
        
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
    }
  }
  findReportMensileAzienda(){
    this.ordineProdottoService.findReportMensileAzienda(2021,1).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        console.log("Mensile azienda "+resp)
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
  }





  
  getReportTotaleByAnno(){
    this.ordineProdottoService.findReportAnnuale().subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        //this.datiAnnualiDB.push(resp);  
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        
      }
    )
    this.datiAnnualiTotaliDB=[{data:this.datiAnnualiDB,label:"incassi"}]
  }


  getReportTotaleByAnnoIdAzienda(event){
    
    this.datiAnnualiDB_IDAzienda=[];
    this.ordineProdottoService.findReportAnnualeAzienda(1).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        
      }
    )
    console.log(" AZIENDA "+this.datiAnnualiDB_IDAzienda)
    this.datiAnnualiTotaliDB_IDAzienda=[{data:this.datiAnnualiDB_IDAzienda,label:"incassi"}]
  }


  scegliAnno(event){
    this.annoScelto=event.target.value;
    this.findReportMensileGruppo()
    // this.ordineProdottoService.findReportMensileGruppo(Number(this.annoScelto)).subscribe(
    //   (resp)=>{
    //     this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);

    //   },
    //   (error)=>{
    //     this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
    //   }
    // )
    //this.graficoABarra;
    //this.graficoABarra.PrendiAnno(this.annoScelto)
  }



}