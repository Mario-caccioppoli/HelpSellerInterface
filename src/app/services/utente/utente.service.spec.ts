import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UtenteService } from './utente.service';
import { Utente } from 'src/app/models/Utente';

describe('UtenteService', () => {
  let service: UtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loginAdmin', (done: DoneFn) => {
    let utente: Utente;
    let tipo: string = "Amministratore";
    let email: string = "aldo@libeo.it";
    let password: string = "password";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      utente = resp as Utente;
      expect(resp.tipo.includes(tipo)).toBeTrue;
      expect(resp.email.includes(email)).toBeTrue;
      expect(utente.tipo.includes(resp.tipo)).toBeTrue;
      expect(utente.email.includes(resp.email)).toBeTrue;
      done();
    });
  });

  it('loginAzienda', (done: DoneFn) => {
    let utente: Utente;
    let tipo: string = "Azienda";
    let email: string = "bevande@gmail.com";
    let password: string = "123";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      utente = resp as Utente;
      expect(resp.tipo.includes(tipo)).toBeTrue;
      expect(resp.email.includes(email)).toBeTrue;
      expect(utente.tipo.includes(resp.tipo)).toBeTrue;
      expect(utente.email.includes(resp.email)).toBeTrue;
      done();
    });
  });

  it('loginDistributore', (done: DoneFn) => {
    let utente: Utente;
    let tipo: string = "Distributore";
    let email: string = "mario@gmail.com";
    let password: string = "111";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      utente = resp as Utente;
      expect(resp.tipo.includes(tipo)).toBeTrue;
      expect(resp.email.includes(email)).toBeTrue;
      expect(utente.tipo.includes(resp.tipo)).toBeTrue;
      expect(utente.email.includes(resp.email)).toBeTrue;
      done();
    });
  });
});
