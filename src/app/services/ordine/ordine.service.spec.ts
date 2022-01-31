import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Ordine } from 'src/app/models/Ordine';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { Prodotto } from 'src/app/models/Prodotto';

import { OrdineService } from './ordine.service';

describe('OrdineService', () => {
  let service: OrdineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OrdineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllOrdine', (done: DoneFn) => {
    service.getAllOrdine().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('getAllOrdinebyDistributore', (done: DoneFn) => {
    service.getAllOrdinebyDistributore(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('getAllOrdinebyAzienda', (done: DoneFn) => {
    service.getAllOrdinebyAzienda(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });
  
  it('findById', (done: DoneFn) => {
    service.findById(2).subscribe(resp => {
      console.log(resp)
      expect(resp.id).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  let ordine: Ordine;
  let date: Date = new Date();
  date.setFullYear(2020);
  date.setMonth(12);
  date.setDate(11);
    let ordineProdotti: OrdineProdotto[] = [];
    let prodotto: Prodotto;

    prodotto = {
      id: 1,
      descrizione: null,
      idAzienda: null,
      immagine: null,
      nomeProdotto: null,
      peso: null,
      prezzo: null,
      quantita: null,
      quantitaMinima: null,
      volume: null,
      recensioni: null,
      sconti: null
    };



    ordine = {
      commento: "comm",
      dataConsegna: date,
      dataOrdinazione: date,
      documento: null,
      idDistributore: 1,
      ordineProdotti: ordineProdotti,
      prezzoTotale: 100,
      stato: "generato",
      id: null
    };


  it('insert', (done: DoneFn) => {
    ordineProdotti.push({
      idOrdine: null,
      prezzoUnitario: 2,
      prodotto: prodotto,
      quantitaOrdine: 100
    }); 
    service.insertOrdine(ordine).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      ordine.id = resp;
      done();
    }, error => {
      done();
    });
  });
});
