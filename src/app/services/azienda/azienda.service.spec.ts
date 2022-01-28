import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Azienda } from 'src/app/models/Azienda';

import { AziendaService } from './azienda.service';

describe('AziendaService', () => {
  let service: AziendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AziendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllAzienda', (done: DoneFn) => {
    service.getAllAzienda().subscribe(resp => {
      expect(resp).toBeInstanceOf(Array);
      resp.forEach(r => {
        expect(r.id).toBeGreaterThan(0);
      });
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1).toBeTrue;
      expect(resp.descrizione.length).toBeGreaterThanOrEqual(0);
      expect(resp.email.length).toBeGreaterThan(0);
      expect(resp.indirizzo.length).toBeGreaterThan(0);
      expect(resp.logo.length).toBeGreaterThan(0);
      expect(resp.nomeAzienda.length).toBeGreaterThan(0);
      expect(resp.password.length).toBeGreaterThan(0);
      expect(resp.vat.length).toBeGreaterThan(0);
      done();
    })
  });

  it('findAziendaByName', (done: DoneFn) => {
    let nome = "bevande";
    service.findAziendeByName(nome).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  it('findAziendaByProdotto', (done: DoneFn) => {
    service.findAziendaByProdotto(7).subscribe(resp => {
      expect(resp.id).toBeGreaterThan(0);
      done();
    });
  });

  let azienda: Azienda;
  azienda = {
    descrizione: "desc",
    email: "email",
    indirizzo: "ind",
    logo: "logo",
    nomeAzienda: "nome",
    password: "pass",
    vat: "11112222",
    id: null,
    prodotti: null,
    ordini: null
  }

  let id = 0;
  it('CUD', (done: DoneFn) => {

    service.insertAzienda(azienda).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      id = resp;
      azienda.id = id;
      done();

    });
  });

  azienda.nomeAzienda = "nomeUpdate";
  it('CUD', (done: DoneFn) => {

    service.updateAzienda(azienda).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();

    });
  });

  it('CUD', (done: DoneFn) => {

    service.deleteAzienda(id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });

  });

});
