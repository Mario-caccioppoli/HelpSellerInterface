import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Recensione } from 'src/app/models/Recensione';

import { RecensioneService } from './recensione.service';

describe('RecensioneService', () => {
  let service: RecensioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RecensioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllRecensione', (done: DoneFn) => {
    service.getAllRecensione().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1);
      expect(resp.idDistributore).toBeGreaterThan(0);
      done();
    });
  });

  let recensione: Recensione;
    let data: Date = new Date("2022-01-01");
    recensione = {
      data: data,
      id: null,
      idDistributore: 1,
      idProdotto: 1,
      testo: "ok",
      voto: 4
    };
    let id = 0;

  it('CUD', (done: DoneFn) => { 
    service.insertRecensione(recensione).subscribe(resp => {
      expect(resp > 0);
      id = resp;
      recensione.id = id;
      done();
    });
  });
    
    recensione.testo = "modificato";
    it('CUD', (done: DoneFn) => { 
      service.updateRecensione(recensione).subscribe(resp => {
        expect(resp > 0);
        done();
      });
    });

    it('CUD', (done: DoneFn) => { 
      service.deleteRecensione(id).subscribe(resp => {
        expect(resp > 0);
        done();
      })
    });
});
