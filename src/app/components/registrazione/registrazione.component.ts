import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { UtenteService } from 'src/app/services/utente/utente.service';
import { utility } from 'src/utility/utility';
import { testRegex } from '../RegEx/regex';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private us: UtenteService, private log: LogService) { }

  distributore: Distributore;
  utente: Utente;
  currentUser: Utente;
  myStorage = window.localStorage;
  azienda: Azienda;

  reg: RegExp;

  rX: testRegex;

  ngOnInit(): void {
    if(this.myStorage.getItem('currentUser')!=null){
      this.currentUser=JSON.parse(this.myStorage.getItem('currentUser'));
    }
    else{
      this.currentUser=null;
    }
  }

  public registrazioneDistributore(form) {

  if ((form.username && form.email && form.password && form.vat && form.indirizzo && form.civico && form.cap && form.citta && form.nome && form.cognome && form.telefono)!='') {
  var checkvat = form.vat; var checktel = form.telefono;

  if (this.rX.regexUsername(form.username) != true) {
    return alert ('Username errato');
  }

    if (checkvat.length > 12) {
      return alert('VAT Number errato. Riprovare.');
    }

    if (checktel.length > 10) {
      return alert('Numero di telefono errato. Riprovare.');
    }

    let passwordHash=utility.criptaPassword(form.password)

  this.distributore = {
    id: null,
    username: form.username,
    email: form.email,
    password: passwordHash,
    vat: form.vat,
    indirizzoSede: form.indirizzofull = (form.indirizzo + " " + form.civico + ", " + form.cap + " " + form.citta),
    nome: form.nome,
    cognome: form.cognome,
    telefono: form.telefono,
    idOrdineProva: null,
    ordini: null
  }

    this.us.insertUtenteDistributore(this.distributore).subscribe(
      (success) => {
        this.log.Debug(RegistrazioneComponent.name, "ok", [success]);
      },

      (error) => {
        this.log.Error(RegistrazioneComponent.name, "errore", [error]);
        alert('VAT Number, E-mail o Username già esistente nel database. Si prega di reinserire i dati.');
      }
    )
  } else {return alert('Controllare che tutti i campi siano compilati prima di procedere.');}
}

// Registrazione Azienda by Admin

public registrazioneAzienda(form) {

  if ((form.email && form.password && form.societa && form.vat && form.indirizzo && form.descrizione && form.logo)!='') {
    var checkvat = form.vat; 

      if (checkvat.length > 12) {
        return alert('VAT Number errato. Riprovare.');
      }

    let passwordHash=utility.criptaPassword(form.password)
  
    this.azienda = {
      id: null,
      email: form.email,
      password: passwordHash,
      nomeAzienda: form.societa,
      vat: form.vat,
      indirizzo: form.indirizzofull = (form.indirizzo + " " + form.civico + ", " + form.cap + " " + form.citta),
      descrizione: form.descrizione,
      logo: form.logo,
      prodotti: null,
      ordini: null
    }
  
      this.us.insertUtenteAzienda(this.azienda).subscribe(
        (success) => {
          this.log.Debug(RegistrazioneComponent.name, "ok", [success]);
        },
  
        (error) => {
          this.log.Error(RegistrazioneComponent.name, "errore", [error]);
          alert('VAT Number o E-mail già esistente nel database. Si prega di reinserire i dati.');
        }
      )
    } else {return alert('Controllare che tutti i campi siano compilati prima di procedere.');}
  }

  checktypeA() {
    const account = this.myStorage.getItem('currentUser');
    const obj = JSON.parse(account);
    const tipo = obj.tipo;
    if (tipo == "Amministratore") {
      return true;
    } else {
      return false;
    }
  }

}





