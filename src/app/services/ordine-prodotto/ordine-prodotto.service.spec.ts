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

  it('findDettagliOrdine', (done: DoneFn) => {
    service.findDettagliOrdine(2).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('findReportAnnuale', (done: DoneFn) => {
    service.findReportAnnuale().subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('findReportAnnualeAzienda', (done: DoneFn) => {
    service.findReportAnnualeAzienda(2).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('findReportMensileGruppo', (done: DoneFn) => {
    service.findReportMensileGruppo(2022).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('findReportMensileAzienda', (done: DoneFn) => {
    service.findReportMensileAzienda(2022, 2).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

});
