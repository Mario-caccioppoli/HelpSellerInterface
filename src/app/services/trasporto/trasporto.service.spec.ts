import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Trasporto } from 'src/app/models/Trasporto';

import { TrasportoService } from './trasporto.service';

describe('TrasportoService', () => {
  let service: TrasportoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TrasportoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllTrasporto', (done: DoneFn) => {
    service.getAllTrasporto().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      if(resp != (undefined || null)) {
        expect(resp.id == 1).toBeTruthy;
        expect(resp.indirizzoConsegna.length).toBeGreaterThan(0);
        done();
      } else {
        expect(resp == undefined).toBeTruthy;
        done();
      }

    }, 
    error => {
      done();
    });
  });

  let trasporto: Trasporto;
  let data: Date = new Date();
  data.setFullYear(2020);
  data.setMonth(12);
  data.setDate(11);
  trasporto = {
    dataConsegna: data,
    idOrdine: 2,
    indirizzoConsegna: "indirizzo",
    quantitaMinima: 5,
    id: null
  }

  it('insertTrasporto', (done: DoneFn) => {
    service.insertTrasporto(trasporto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      trasporto.id = resp;
      done();
    },
    error => {
      done();
    });
  });

  trasporto.indirizzoConsegna = "nuovo";
  it('updateTrasporto', (done: DoneFn) => {
    service.updateTrasporto(trasporto).subscribe(resp => {
      console.log("STAMPA UPDATE TRASPORTO " + resp);
      expect(resp).toBeGreaterThan(0);
      done();
    },
    error => {
      done();
    });
  });

});
