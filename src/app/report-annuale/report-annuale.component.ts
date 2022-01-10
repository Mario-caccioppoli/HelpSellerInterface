
import { Component, OnInit } from '@angular/core';

import { Azienda } from '../models/Azienda';

@Component({
  selector: 'app-report-annuale',
  templateUrl: './report-annuale.component.html',
  styleUrls: ['./report-annuale.component.css']
})
export class ReportAnnualeComponent implements OnInit {

  azienda: string = "nomeAzienda";
  anni : string[] = ["2016","2017","2018", "2019", "2020", "2021"]; 
  mesi : string[] = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];

  giorni : number[];

  datiAnnuali = [{ data: [50,80,70,90,60], label:"incassi"}];
  datiMensili = [{ data: [50,80,70,90,60], label:"incassi"}];
  datiGiornalieri = [{ data: [50,80,70,90,60], label:"incassi"}];
  meseScelto :string = "";
  annoScelto : string = "";
  nProdottiTotale : number = 20;
  quantitaTotaleProdotti : number;
  totaleSpedizioni : number;
  totaleIncasso : number;
  nProdottiTotaleAnno : number;
  quantitaTotaleProdottiAnno : number;
  totaleSpedizioniAnno : number;
  totaleIncassoAnno : number;
  nProdottiTotaleMese : number;
  quantitaTotaleProdottiMese : number;
  totaleSpedizioniMese : number;
  totaleIncassoMese : number;
  
  constructor() { }

  ngOnInit(): void {
  }

cambiaMese(event : any){

this.meseScelto = event.target.value;
var mese = event.target.value;
this.aggiornaGiorni();

}

aggiornaGiorni(){
  var mese = this.meseScelto;
  var numeroGiorni = 31;
  let giorni : number[];
  giorni = [];
  if(mese==null || mese==""){
    return;
  }
  if(mese == "Febbraio"){
    if(Number.parseInt(this.annoScelto)%4==0)
      {
        numeroGiorni = 29;
      }
      else{
        numeroGiorni = 28;
      }
  }
  else if(mese=="Novembre" ||mese=="Aprile" ||mese=="Giugno" ||mese=="Settembre"){
  
    numeroGiorni = 30;  
  }
  
  
  for (let index = 1; index <= numeroGiorni; index++) {
    
    giorni.push(index);
  
  }
  this.giorni = giorni;

}

cambiaAnno(event : any){
  this.annoScelto = event.target.value;
  this.aggiornaGiorni();
  }

}