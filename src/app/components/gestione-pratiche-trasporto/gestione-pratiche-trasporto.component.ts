
import { Component, Input, OnInit} from '@angular/core';
import { Trasporto } from 'src/app/models/Trasporto';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { TrasportoService } from 'src/app/services/trasporto/trasporto.service';
import { testRegex } from '../TestRegex/regex';

@Component({
  selector: 'app-gestione-pratiche-trasporto',
  templateUrl: './gestione-pratiche-trasporto.component.html',
  styleUrls: ['./gestione-pratiche-trasporto.component.css']
})
export class GestionePraticheTrasportoComponent implements OnInit {

  currentUser: Utente=JSON.parse(localStorage.getItem("currentUser"));
  constructor(private ts: TrasportoService, private log: LogService) { }

  rX: testRegex = new testRegex();

  trasporto: Trasporto;
  trasporti: Trasporto[] = [];

  tipoSpedizione : string;
  numeroDivisioni : number;
  dataConvert: string;

  @Input() idOrdine;
  @Input() quantitaOp;
  @Input() prezzoOp;

  ngOnInit(): void {
    this.findTrasportiInOrdine();
   }

  setValue(spedizione: string) {
  this.tipoSpedizione = spedizione;
  }


aggiungiDivisione(form){

  if ((form.via || form.civico || form.cap || form.citta || form.paese || form.provincia || form.data || form.quantita ) == ('' || undefined || 0)) {
    return alert ("Si prega di inserire tutti i campi prima di procedere");
  }

  if(this.rX.regexCitta(form.citta)!= true) {
    return alert("Città non valida, si prega di riprovare");
  }

  if(this.rX.regexVia(form.via)!= true) {
    return alert("Indirizzo non valido, si prega di riprovare");
  }

  if(this.rX.regexCivico(form.civico)!= true) {
    return alert("Numero civico non valido, si prega di riprovare");
  }

  if(this.rX.regexCAP(form.cap)!= true) {
    return alert("CAP non valido, si prega di riprovare");
  }

  if(this.rX.regexProvincia(form.provincia)!= true) {
    return alert("Provincia non valida, si prega di riprovare");
  }

  if(this.rX.regexPaese(form.paese)!= true) {
    return alert("Paese non valido, si prega di riprovare");
  }

  var inputData = new Date(form.data);
  this.dataConvert = inputData.toLocaleDateString('en-GB');
  form.data = this.dataConvert;
  
  if(this.rX.regexData(form.data)!= true) {
    return alert("Data non valida, si prega di riprovare");
  }  

  var convData = new Date(inputData);
  this.dataConvert = convData.toISOString().slice(0, 10);
  form.data = this.dataConvert;

  if(this.rX.regexQuantita(form.quantita)!= true) {
    return alert("Quantità non valida, si prega di riprovare");
  }

  this.trasporto = {
    id: null,
    indirizzoConsegna: form.via + " " + form.civico + ", " + form.cap + " " + form.citta + " " + "(" + form.provincia + "), " + form.paese,
    quantitaMinima: form.quantita,
    dataConsegna: form.data,
    idOrdine: this.idOrdine,
  }
  
  this.trasporti.push(this.trasporto);
  document.getElementById("staticBackdrop").click();
  
}

concludiPratica() {
  if (this.trasporti.length <= 0) { 
    return alert("Aggiungere almeno 1 Divisione prima di procedere"); 
  } else {
  this.ts.insertTrasportoMultiplo(this.trasporti).subscribe(
    (success) => {
      this.log.Debug(GestionePraticheTrasportoComponent.name, "ok", [success]);
      alert("Gestione Pratica inserita con successo");
      window.location.reload();
    },

    (error) => {
      this.log.Error(GestionePraticheTrasportoComponent.name, "errore", [error]);
      alert('Inserimento Pratica Trasporto fallita, si prega di riprovare.');
    }
  )}
}


eliminaDivisione(indice : number){
  this.trasporti.splice(indice,1);
}

public inserimentoGpt(form) {

  if ((form.via || form.civico || form.cap || form.citta || form.paese || form.provincia || form.data ) == ('' || undefined || 0)) {
    return alert ("Si prega di inserire tutti i campi prima di procedere");
  }

  if(this.rX.regexCitta(form.citta)!= true) {
    return alert("Città non valida, si prega di riprovare");
  }

  if(this.rX.regexVia(form.via)!= true) {
    return alert("Indirizzo non valido, si prega di riprovare");
  }

  if(this.rX.regexCivico(form.civico)!= true) {
    return alert("Numero civico non valido, si prega di riprovare");
  }

  if(this.rX.regexCAP(form.cap)!= true) {
    return alert("CAP non valido, si prega di riprovare");
  }

  if(this.rX.regexProvincia(form.provincia)!= true) {
    return alert("Provincia non valida, si prega di riprovare");
  }

  if(this.rX.regexPaese(form.paese)!= true) {
    return alert("Paese non valido, si prega di riprovare");
  }

  var inputData = new Date(form.data);
  this.dataConvert = inputData.toLocaleDateString('en-GB');
  form.data = this.dataConvert;
  
  if(this.rX.regexData(form.data)!= true) {
    return alert("Data non valida, si prega di riprovare");
  }  

  var convData = new Date(inputData);
  this.dataConvert = convData.toISOString().slice(0, 10);
  form.data = this.dataConvert;

  this.trasporto = {
    id: null,
    indirizzoConsegna: form.via + " " + form.civico + ", " + form.cap + " " + form.citta + " " + "(" + form.provincia + "), " + form.paese,
    quantitaMinima: this.quantitaOp,
    dataConsegna: form.data,
    idOrdine: this.idOrdine,
  }

  this.ts.insertTrasporto(this.trasporto).subscribe(
    (success) => {
      this.log.Debug(GestionePraticheTrasportoComponent.name, "ok", [success]);
      alert("Gestione Pratica inserita con successo");
      window.location.reload();
    },

    (error) => {
      this.log.Error(GestionePraticheTrasportoComponent.name, "errore", [error]);
      alert('Inserimento Pratica Trasporto fallita, si prega di riprovare.');
    }
  )
}

findTrasportiInOrdine(){
  this.ts.findTrasportiInOrdine(this.idOrdine).subscribe(
    (resp)=>{
      this.log.Debug(GestionePraticheTrasportoComponent.name, "ok", [resp]);
      this.trasporti=resp;
    },
    (error)=>{
      this.log.Error(GestionePraticheTrasportoComponent.name, "errore", [error]);
    }
  )
}


}
