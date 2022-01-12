import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';

@Component({
  selector: 'app-report-amministratore',
  templateUrl: './report-amministratore.component.html',
  styleUrls: ['./report-amministratore.component.css']
})
export class ReportAmministratoreComponent implements OnInit {
  azienda: string[]=["Azienda1", "Azienda2","Azienda3","Azienda4","Azienda5"];
  anni : string[] = ["2016","2017","2018", "2019", "2020", "2021"]; 
  mesi : string[] = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
  datiMensili = [{ data: [50,80,70,90,60], label:"incassi"}];
  datiAnnuali = [{ data: [50,80,70,90,60], label:"incassi"}];
  aziendaScelta : string;
  annoScelto : string;
  constructor() { }

  ngOnInit(): void {
  }

  cambiaAzienda(event : any){
this.aziendaScelta = event.target.value;

  }
  cambiaAnno(event : any){
    this.annoScelto = event.target.value;
    
      }
}
