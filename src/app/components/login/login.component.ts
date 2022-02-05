import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { UtenteService } from 'src/app/services/utente/utente.service';
import { utility } from 'src/utility/utility';
import { testRegex } from '../TestRegex/regex';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private us: UtenteService, private log: LogService, private router: Router) {
  }

  utente: Utente; 
  currentUser:Utente;
  rX: testRegex = new testRegex();
  myStorage=window.localStorage;


  ngOnInit(): void {
    if(this.myStorage.getItem('currentUser')==null){
      this.currentUser=null;
    }
    else{
      this.currentUser=JSON.parse(this.myStorage.getItem('currentUser'));
    }
  }

  public login(form) {

    if(this.rX.regexEmail(form.email)!= true) {
      return alert("E-mail non valida, si prega di riprovare");
    }
  
    if(this.rX.regexPassword(form.password)!= true) {
      return alert("La password deve avere una lunghezza minima di 8 caratteri ed includere lettere maiuscole, minuscole, numeri e almeno un simbolo");
    }    

      const tipo = form.tipo;
      const email = form.email;
      const passwordHash = utility.criptaPassword(form.password);
      this.us.loginUtente(tipo, email, passwordHash).subscribe(
        (success) => {
          this.log.Debug(LoginComponent.name, "ok", [success]);
          this.utente={
            id: success.id,
            username: success.username,
            email: success.email,
            password: passwordHash,
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
          window.location.reload()
          this.router.navigate(['/']);         
        },

        (error) => {
          this.log.Error(LoginComponent.name, "errore", [error]);
          window.alert("DATI NON CORRETTI, RIPROVA")
        }
      )
  }

  logout() {
    this.myStorage.removeItem('currentUser');
    document.getElementById("logout").click()
    if(this.myStorage.getItem('currentUser')==null){
      this.currentUser=null;
      window.location.reload();
      this.router.navigateByUrl('/');
    }
    else{
    console.log(" sessione logout "+this.myStorage.getItem('currentUser') +" storage "+this.currentUser.nome)
    }
  }

  recuperaPassword(form){

    if(this.rX.regexEmail(form.email)!= true) {
      return alert("E-mail non valida, si prega di riprovare");
    }

    this.us.recuperoPassword(form.email).subscribe(
      (resp)=>{
        this.log.Debug(LoginComponent.name, "errore", [resp]);
        console.log("interp "+resp)
        document.getElementById("recover").click()
        window.alert("EMAIL INVIATA")
      },
      (error)=>{
        this.log.Error(LoginComponent.name, "errore", [error]);
      }
    )
  }

  loginRecupero(form){

    if(this.rX.regexEmail(form.email)!= true) {
      return alert("E-mail non valida, si prega di riprovare");
    }
  
    if(this.rX.regexPassword(form.password)!= true) {
      return alert("La password deve avere una lunghezza minima di 8 caratteri ed includere lettere maiuscole, minuscole, numeri e almeno un simbolo");
    }

      console.log(form.email+" "+form.tipo)
      const tipo = form.tipo;
      const email = form.email;
      const password = form.password;
      this.us.loginUtente(tipo, email, password).subscribe(
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
          console.log("arriva "+form.email+form.password+form.tipo)
          this.myStorage.setItem('currentUser',JSON.stringify(this.utente));
          document.getElementById("login").click()
          this.currentUser=JSON.parse(this.myStorage.getItem('currentUser'));
          window.location.reload()
        },

        (error) => {
          this.log.Error(LoginComponent.name, "errore", [error]);
          window.alert("DATI NON CORRETTI, RIPROVA")
        }
      )
  } 
} 

