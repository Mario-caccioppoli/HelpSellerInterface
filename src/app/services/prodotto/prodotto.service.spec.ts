import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Prodotto } from 'src/app/models/Prodotto';

import { ProdottoService } from './prodotto.service';

describe('ProdottoService', () => {
  let service: ProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllProdotto', (done: DoneFn) => {
    service.getAllProdotto().subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.descrizione.length).toBeGreaterThanOrEqual(0);
      expect(resp.idAzienda).toBeGreaterThan(0);
      expect(resp.prezzo).toBeGreaterThan(0);
      done();
    });
  });

  it('getProdottoByAzienda', (done: DoneFn) => {
    service.getProdottoByIdAzienda(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findProdottyBySconto', (done: DoneFn) =>{
    service.findProdottiBySconto(4).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    })
  });

  it('findProdottiByIdInAzienda', (done: DoneFn) => {
    service.findProdottiByIdInAzienda(1, 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findProdottiByNomeInAzienda', (done: DoneFn) => {
    service.findProdottiByNomeInAzienda("cola", 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  let prodotto: Prodotto;
  prodotto = {
    descrizione: "desc",
    idAzienda: 1,
    immagine: "img",
    nomeProdotto: "nome",
    peso: 2,
    prezzo: 3,
    quantita: 1000,
    quantitaMinima: 5,
    volume: 2,
    id: null,
    recensioni: null,
    sconti: null
  };

  let id = 0;

  it('CUD', (done: DoneFn) => {
    service.insertProdotto(prodotto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      id = resp;
      prodotto.id = id;
      done();
    });
  });

  prodotto.descrizione = "descrizione";
  it('CUD', (done: DoneFn) => {
    service.updateProdotto(prodotto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });
  
  it('CUD', (done: DoneFn) => {
    service.deleteProdotto(id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  
});
