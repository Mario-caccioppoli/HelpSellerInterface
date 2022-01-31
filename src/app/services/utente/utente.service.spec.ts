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
    let tipo: string = "Amministratore";
    let email: string = "aldo@libeo.it";
    let password: string = "password";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      expect(resp.tipo.length).toBeGreaterThan(0);
      expect(resp.email.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('loginAzienda', (done: DoneFn) => {
    let tipo: string = "Azienda";
    let email: string = "bevande@gmail.com";
    let password: string = "123";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      expect(resp.tipo.length).toBeGreaterThan(0);
      expect(resp.email.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('loginDistributore', (done: DoneFn) => {
    let tipo: string = "Distributore";
    let email: string = "mario@gmail.com";
    let password: string = "111";

    service.loginUtente(tipo, email, password).subscribe(resp => {
      expect(resp.tipo.length).toBeGreaterThan(0);
      expect(resp.email.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });
  
});
