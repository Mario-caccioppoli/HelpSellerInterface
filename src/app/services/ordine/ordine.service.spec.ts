import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Ordine } from 'src/app/models/Ordine';

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
    });
  });

  it('getAllOrdinebyDistributore', (done: DoneFn) => {
    service.getAllOrdinebyDistributore(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('getAllOrdinebyAzienda', (done: DoneFn) => {
    service.getAllOrdinebyAzienda(1).subscribe(resp => {
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
    })
  })

  let ordine: Ordine;
    let date: Date = new Date("2022-01-01");
    ordine = {
      commento: "comm",
      dataConsegna: date,
      dataOrdinazione: date,
      documento: null,
      idDistributore: 1,
      ordineProdotti: null,
      prezzoTotale: 100,
      stato: "generato",
      id: null
    };
    let id = 0;

  it('CUD', (done: DoneFn) => {
  
    service.insertOrdine(ordine).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      id = resp;
      ordine.id = id;
      done();
    });
  });

  ordine.commento = "commento"
  it('CUD', (done: DoneFn) => {
    service.updateOrdine(ordine).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });
      
  it('CUD', (done: DoneFn) => {
    service.deleteOrdine(id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });
});
