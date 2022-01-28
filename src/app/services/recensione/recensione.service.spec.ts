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
    }, error => {
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1).toBeTrue;
      expect(resp.idDistributore).toBeGreaterThan(0);
      done();
    }, error => {
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

  it('insert', (done: DoneFn) => { 
    service.insertRecensione(recensione).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      recensione.id = resp;
      done();
    }, error => {
      done();
    });
  });
    
    it('update', (done: DoneFn) => {
      recensione.testo = "modificato " + recensione.id;
      service.updateRecensione(recensione).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      }, error => {
        done();
      });
    });

    it('delete', (done: DoneFn) => { 
      service.deleteRecensione(recensione.id).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      }, error => {
        done();
      });
    });
});
