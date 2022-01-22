import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utente } from 'src/app/models/Utente';
import { LogService } from 'src/app/services/log.service';
import { UtenteService } from 'src/app/services/utente/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private us: UtenteService, private log: LogService) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  utente: Utente; router: Router;
  public currentUserSubject: BehaviorSubject<Utente>;
  public currentUser: Observable<Utente>;

  ngOnInit(): void {
  }



  public get currentUserValue(): Utente {
    return this.currentUserSubject.value;
  }
  
  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  public recupero(form) {
    if(this.utente != undefined)
    {
      this.utente = {
        username: null,
        password: null,
        id: null,
        email: form.email,
        tipo: null,
        vat: null,
        indirizzo: null,
        descrizione: null,
        nome: null,
        cognome: null,
        telefono: null,
        logo: null,
      };
      this.us.recuperoUtente(this.utente.email).subscribe(
        (success) => {
          this.log.Debug(LoginComponent.name, "ok", [success]);
          
          this.utente = success as Utente;
        },

        (error) => {
          this.log.Error(LoginComponent.name, "errore", [error]);
        }
      )
    }

  }

} //commit
