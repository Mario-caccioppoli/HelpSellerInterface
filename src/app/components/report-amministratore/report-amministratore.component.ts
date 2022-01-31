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
  azienda: Azienda[];
  anni : string[] = [];
  anniAzienda: string[]=[];
  anniAziendaLoggata:string[]=[];
  euro: number[]=[];
  euroAzienda: number[]=[];
  euroAziendaLoggata: number[]=[];
  ordineProdottoTotale:OrdineProdotto[];
  quantitaTotaleAnnuale:number=0;
  quantitaTotaleMensile:number=0;
  quantitaTotaleAnnualeAzienda:number=0;


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
  datiAnnualiAziendaByAdmin:number[][]=[]
  //variabiliHtml
  datiAnnualiTotaliDB:any[];
  datiMensiliTotaliDB:any[]=[{data:[],label:"incassi"}];
  datiAnnualiTotaliAziendafindByAdmin:any[]=[{data:[],label:"incassi"}];
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
    this.findReportAnnuale();
    if(this.currentUser.tipo=='Azienda'){
    this.findReportAnnualeAzienda();
    this.findReportMensileAzienda();
    }

    this.getAllAzienda();
    this.getReportTotaleByAnno();
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
  findReportMensileGruppo(){
    if(this.annoScelto!=undefined){
    this.ordineProdottoService.findReportMensileGruppo(Number(this.annoScelto)).subscribe(
      (resp)=>{
        console.log("resp "+resp)
        this.euro = resp as number[];
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
          this.datiMensiliTotaliDB=[{data:this.euro,label:"incassi"}];

      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
    }
  }

  adminFindReportAnnoAzienda(id){
    this.euroAzienda=[]
    this.datiAnnualiDB_IDAzienda=[];
    this.datiAnnualiAziendaByAdmin=[];
    this.anniAzienda=[];
    this.ordineProdottoService.findReportAnnualeAzienda(id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        for(let i = 0; i<resp.length;i++){
          this.datiAnnualiAziendaByAdmin[i] = resp[i];
        }
          for(let i = 0; i<this.datiAnnualiAziendaByAdmin.length;i++){
            this.anniAzienda.push(this.datiAnnualiAziendaByAdmin[i][0].toString());
            this.euroAzienda.push(this.datiAnnualiAziendaByAdmin[i][1]);
          }
        this.datiAnnualiTotaliAziendafindByAdmin=[{data:this.euroAzienda,label:"incassi"}]
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);

      }
    )
  }

  findReportAnnualeAzienda(){
    this.euroAziendaLoggata=[];
    this.anniAziendaLoggata=[];
    this.euroAziendaLoggata=[];
    this.datiAnnualiDB=[];
    this.ordineProdottoService.findReportAnnualeAzienda(this.currentUser.id).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        for(let i = 0; i<resp.length;i++){
          this.datiAnnualiDB[i] = resp[i];
        }

          for(let i = 0; i<this.datiAnnualiDB.length;i++){
            this.anniAziendaLoggata.push(this.datiAnnualiDB[i][0].toString());
            this.euroAziendaLoggata.push(this.datiAnnualiDB[i][1]);
          }
          this.datiAnnualiTotaliDB=[{data:this.euroAziendaLoggata,label:"incassi"}]

      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
  }


  findReportMensileAzienda(){
    if(this.annoScelto!=undefined){
      this.euroAziendaLoggata=[];
      this.ordineProdottoService.findReportMensileAzienda(2022,this.currentUser.id).subscribe(
        (resp)=>{
          console.log("resp "+resp)
          this.euroAziendaLoggata = resp as number[];
          this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
            this.datiMensiliTotaliDB=[{data:this.euroAziendaLoggata,label:"incassi"}];

        },
        (error)=>{
          this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
        }
      )
      }
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





  scegliAnno(event){
    this.annoScelto=event.target.value;
    this.findReportMensileGruppo()
  }

  findAzienda(event){
    const nome=event.target.value;
    this.aziendaService.findAziendeByName(nome).subscribe(
      (resp)=>{
        this.log.Debug(ReportAmministratoreComponent.name,"chiamata a back-end",[resp]);
        this.azienda=resp as Azienda[];
        const idAziendaSelezionata= this.azienda.map(p=>p.id);
        this.adminFindReportAnnoAzienda(idAziendaSelezionata);
      },
      (error)=>{
        this.log.Error(ReportAmministratoreComponent.name,"chiamata a back-end",[error]);
      }
    )
  }

  


}