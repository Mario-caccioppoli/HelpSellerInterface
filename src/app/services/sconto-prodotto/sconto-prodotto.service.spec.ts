import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ScontoProdotto } from 'src/app/models/ScontoProdotto';
import { Prodotto } from 'src/app/models/Prodotto';
import { Sconto } from 'src/app/models/Sconto';
import { ProdottoService } from '../prodotto/prodotto.service';
import { ScontoService } from '../sconto/sconto.service';

import { ScontoProdottoService } from './sconto-prodotto.service';

describe('ScontoProdottoService', () => {
  let service: ScontoProdottoService;
  let serviceProdotto: ProdottoService;
  let serviceSconto: ScontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ScontoProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  let sp: ScontoProdotto;
  let prodotto: Prodotto;
  let sconto: Sconto;
  prodotto = {
    descrizione:null,
    idAzienda:null,
    immagine:null,
    nomeProdotto:null,
    peso:null,
    prezzo:null,
    quantita:null,
    quantitaMinima:null,
    volume:null,
    id:1,
    recensioni:null,
    sconti:null
  }

  sconto = {
    dataFine:null,
    dataInizio:null,
    idAzienda:null,
    nomeSconto:null,
    percentuale:null,
    tipo:null,
    id:5,
    prodotti:null,
    quantita:null
  }
  sp = {
    prodotto: prodotto,
    sconto: sconto
  }

  it('insert', (done: DoneFn) => {
    service.insertScontoProdotto(prodotto.id, sconto.id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });


  it('delete', (done: DoneFn) => {
    service.deleteScontoProdotto(sp.sconto.id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

});
