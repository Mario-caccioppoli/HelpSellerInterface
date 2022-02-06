
import { Component, OnInit} from '@angular/core';
import { Divisione } from 'src/app/divisione';
import { Trasporto } from 'src/app/models/Trasporto';
import { LogService } from 'src/app/services/log.service';
import { TrasportoService } from 'src/app/services/trasporto/trasporto.service';
import { testRegex } from '../TestRegex/regex';

@Component({
  selector: 'app-gestione-pratiche-trasporto',
  templateUrl: './gestione-pratiche-trasporto.component.html',
  styleUrls: ['./gestione-pratiche-trasporto.component.css']
})
export class GestionePraticheTrasportoComponent implements OnInit {

  constructor(private ts: TrasportoService, private log: LogService) { }

  rX: testRegex = new testRegex();

  trasporto: Trasporto;

  tipoSpedizione : string;
  numeroDivisioni : number;
  divisioni : Divisione[];
  divisione: Divisione;

  ngOnInit(): void { }

  setValue(spedizione: string) {
  this.tipoSpedizione = spedizione;
  }



aggiungiDivisione(form){
  var id = this.divisioni.length -1;
  var div;
  div.setID(id);
  div.setVia(form.via);
  div.setCivico(form.civico)
  div.setCitta(form.citta)
  div.setProvincia(form.provincia)
  div.setCAP(form.cap)
  div.setQuantita(form.quantita)
  this.divisioni.push(div);
}


eliminaDivisione(indice : number){
  this.divisioni.splice(indice,1);
}

public inserimentoGpt(form) {

  if ((form.indirizzo || form.civico || form.cap || form.citta || form.paese || form.provincia)==('' || undefined || 0)) {
    return alert ("Si prega di inserire tutti i campi prima di procedere");
  }

console.log(form.citta);
console.log(form.indirizzo);

  if(this.rX.regexCitta(form.citta)!= true) {
    return alert("Città non valida, si prega di riprovare");
  }

  if(this.rX.regexVia(form.indirizzo)!= true) {
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

  this.trasporto = {
    id: null,
    indirizzoConsegna: form.indirizzo + " " + form.civico + ", " + form.cap + " " + form.citta + " " + "(" + form.provincia + "), " + form.paese,
    quantitaMinima: null,
    dataConsegna: form.dataConsegna,
    idOrdine: null,
  }

  this.ts.insertTrasporto(this.trasporto).subscribe(
    (success) => {
      this.log.Debug(GestionePraticheTrasportoComponent.name, "ok", [success]);
    },

    (error) => {
      this.log.Error(GestionePraticheTrasportoComponent.name, "errore", [error]);
      alert('Inserimento Pratica Trasporto fallita, si prega di riprovare.');
    }
  )
}


}
