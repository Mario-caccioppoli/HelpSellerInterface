import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

import { EmailValidator } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { UtenteService } from 'src/app/services/utente/utente.service';

import { environment } from 'src/environments/environment';
import { utility } from 'src/utility/utility';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  


  constructor(private us: UtenteService, private log: LogService) {

  }

  utente: Utente; 
  currentUser:Utente;
  router: Router;


  myStorage=window.localStorage;


  ngOnInit(): void {
    if(this.myStorage.getItem('currentUser')!=null){
      this.currentUser=JSON.parse(this.myStorage.getItem('currentUser'));
    }
    else{
      this.currentUser=null;
    }
  }


  public login(form) {
    //if(this.utente != undefined)
      let passwordHash=utility.criptaPassword(form.password)

      const fromHTML = {email: form.email, password: form.password, tipo: form.tipo};
      const toBackend = JSON.stringify(fromHTML);
      this.us.loginUtente(toBackend).subscribe(
        (success) => {
          this.log.Debug(LoginComponent.name, "ok", [success]);
          this.utente={
            id: success.id,
            username: success.username,
            email: success.email,
            password: success.password,
            tipo: success.tipo,
            vat: success.vat,
            indirizzo: success.indirizzo,
            descrizione: success.descrizione,
            nome: success.nome,
            cognome: success.cognome,
            telefono: success.telefono,
            logo: success.logo
          }
          this.myStorage.setItem('currentUser',JSON.stringify(this.utente));
          document.getElementById("login").click()
          this.currentUser=JSON.parse(this.myStorage.getItem('currentUser'));
          
        },

        (error) => {
          this.log.Error(LoginComponent.name, "errore", [error]);
        }
      )
    //}

  }

  
  
  public logout() {
    this.myStorage.removeItem('currentUser');
    document.getElementById("logout").click()
    if(this.myStorage.getItem('currentUser')==null){
      this.currentUser=null;
    }
    else{
    console.log(" sessione logout "+this.myStorage.getItem('currentUser') +" storage "+this.currentUser.nome)
    }
  }



  recuperaPassword(form){

  }


} //commit