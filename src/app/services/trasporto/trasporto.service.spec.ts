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
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1);
      expect(resp.indirizzoConsegna.length).toBeGreaterThan(0);
      done();
    });
  });

  let trasporto: Trasporto;
  let data: Date = new Date("2022-02-02");
  trasporto = {
    dataConsegna: data,
    idOrdine: 1,
    indirizzoConsegna: "indirizzo",
    quantitaMinima: 5,
    id: null
  }

  it('insertTrasporto', (done: DoneFn) => {
    service.insertTrasporto(trasporto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      trasporto.id = resp;
      done();
    });
  });

  trasporto.indirizzoConsegna = "nuovo";
  it('updateTrasporto', (done: DoneFn) => {
    service.updateTrasporto(trasporto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    });
  });

  it('deleteTrasporto', (done: DoneFn) => {
    service.deleteTrasporto(trasporto.id).subscribe(resp => {
      expect(resp == trasporto.id);
      done();
    })
  })
});
