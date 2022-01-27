import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { OrdineProdotto } from 'src/app/models/OrdineProdotto';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from '../prodotto/prodotto.service';

import { OrdineProdottoService } from './ordine-prodotto.service';

describe('OrdineProdottoService', () => {
  let service: OrdineProdottoService;
  let serviceProdotto: ProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OrdineProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllOrdineProdotto', (done: DoneFn) => {
    service.getAllOrdineProdotto().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.idOrdine == 1).toBeTrue;
      expect(resp.prezzoUnitario).toBeGreaterThan(0);
      expect(resp.quantitaOrdine).toBeGreaterThan(0);
      done();
    });
  });

  it('findDettagliOrdine', (done: DoneFn) => {
    service.findDettagliOrdine(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findReportAnnuale', (done: DoneFn) => {
    service.findReportAnnuale(2022).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  it('findReportAnnualeAzienda', (done: DoneFn) => {
    service.findReportAnnualeAzienda(2022, 2).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  it('findReportMensileGruppo', (done: DoneFn) => {
    service.findReportMensileGruppo(2022).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  it('findReportMensileAzienda', (done: DoneFn) => {
    service.findReportMensileAzienda(2022, 2).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  let op: OrdineProdotto;
  let prodotto: Prodotto;
  prodotto = {
    descrizione: null,
    idAzienda: null,
    immagine: null,
    nomeProdotto: null,
    peso: null,
    prezzo: null,
    quantita: null,
    quantitaMinima: null,
    volume: null,
    id: 2,
    recensioni: null,
    sconti: null
  }

  op = {
    idOrdine: 20,
    prezzoUnitario: 10,
    prodotto: prodotto,
    quantitaOrdine: 30
  };


  it('CUD', (done: DoneFn) => {

    service.insertOrdineProdotto(op).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done()
    });
  });

  op.quantitaOrdine = 50;
  it('CUD', (done: DoneFn) => {
    service.updateOrdineProdotto(op).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  it('CUD', (done: DoneFn) => {
    service.deleteOrdineProdotto(20, 2).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

});
