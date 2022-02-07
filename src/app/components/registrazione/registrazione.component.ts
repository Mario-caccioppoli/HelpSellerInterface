import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/models/Azienda';
import { Distributore } from 'src/app/models/Distributore';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { UtenteService } from 'src/app/services/utente/utente.service';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { utility } from 'src/utility/utility';
import { testRegex } from '../TestRegex/regex';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  constructor(
    private us: UtenteService, 
    private as: AziendaService, 
    private ds: DistributoreService, 
    private log: LogService) { }

  distributore: Distributore;
  utente: Utente;
  currentUser: Utente;
  myStorage = window.localStorage;
  azienda: Azienda;

  rX: testRegex = new testRegex();

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

  if(this.rX.regexUsername(form.username)!= true) {
    return alert("L'username deve avere lunghezza di almeno 8 caratteri");
  }

  if(this.rX.regexEmail(form.email)!= true) {
    return alert("E-mail non valida, si prega di riprovare");
  }

  if(this.rX.regexPassword(form.password)!= true) {
    return alert("La password deve avere una lunghezza minima di 8 caratteri ed includere lettere maiuscole, minuscole, numeri e almeno un simbolo");
  }

  if(this.rX.regexVAT(form.vat)!= true) {
    return alert("VAT Number non valido, si prega di riprovare");
  }

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

  if(this.rX.regexNome(form.nome)!= true) {
    return alert("Nome non valido, si prega di riprovare");
  }

  if(this.rX.regexNome(form.cognome)!= true) {
    return alert("Cognome non valido, si prega di riprovare");
  }

  if(this.rX.regexTelefono(form.telefono)!= true) {
    return alert("Il numero inserito non è valido, si prega di riprovare");
  }

  if(this.rX.regexProvincia(form.provincia)!= true) {
    return alert("La Provincia inserita non è valida, si prega di riprovare");
  }

  if(this.rX.regexPaese(form.paese)!= true) {
    return alert("Il Paese inserito non è valido, si prega di riprovare");
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
    indirizzoSede: form.indirizzofull = (form.indirizzo + " " + form.civico + ", " + form.cap + " " + form.citta + " " + "(" + form.provincia + "), " + form.paese),
    nome: form.nome,
    cognome: form.cognome,
    telefono: form.telefono,
    idOrdineProva: null,
    ordini: null
  }

    this.ds.insertDistributore(this.distributore).subscribe(
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
  
    if(this.rX.regexEmail(form.email)!= true) {
      return alert("E-mail non valida, si prega di riprovare");
    }
  
    if(this.rX.regexPassword(form.password)!= true) {
      return alert("La password deve avere una lunghezza minima di 8 caratteri ed includere lettere maiuscole, minuscole, numeri e almeno un simbolo");
    }
  
    if(this.rX.regexVAT(form.vat)!= true) {
      return alert("VAT Number non valido, si prega di riprovare");
    }
  
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
  
    if(this.rX.regexNome(form.societa)!= true) {
      return alert("Nome società non valido, si prega di riprovare");
    }

    if(this.rX.regexDescrizione(form.descrizione)!= true) {
      return alert("Descrizione troppo lunga, non deve superare i 500 caratteri, si prega di riprovare");
    }

    if(this.rX.regexLogo(form.societa)!= true) {
      return alert("Logo non valido, si prega di riprovare");
    }

    if(this.rX.regexProvincia(form.provincia)!= true) {
      return alert("Il numero inserito non è valido, si prega di riprovare");
    }
  
    if(this.rX.regexPaese(form.paese)!= true) {
      return alert("Il numero inserito non è valido, si prega di riprovare");
    }

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
      indirizzo: form.indirizzofull = (form.indirizzo + " " + form.civico + ", " + form.cap + " " + form.citta + " " + "(" + form.provincia + "), " + form.paese),
      descrizione: form.descrizione,
      logo: form.logo,
      prodotti: null,
      ordini: null
    }
  
      this.as.insertAzienda(this.azienda).subscribe(
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

