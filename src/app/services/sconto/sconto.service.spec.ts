import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Sconto } from 'src/app/models/Sconto';

import { ScontoService } from './sconto.service';

describe('ScontoService', () => {
  let service: ScontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ScontoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSconto', (done: DoneFn) => {
    service.getAllSconto().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('findScontiByAzienda', (done: DoneFn) => {
    service.findScontiByAzienda(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('getAllScontoByTipo', (done: DoneFn) => {
    service.getAllScontoByTipo("catalogo").subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('getAllScontoByTypoAndAzienda', (done: DoneFn) => {
    service.getAllScontoByTipoAndIdAzienda("catalogo", 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(4).subscribe(resp => {
      expect(resp.id == 4).toBeTrue;
      expect(resp.idAzienda).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('findScontiByNomeinAzienda', (done: DoneFn) => {
    service.findScontiByNomeInAzienda("nome", 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    });
  });

  let sconto: Sconto;
  let data: Date = new Date();
  data.setFullYear(2020);
  data.setMonth(12);
  data.setDate(11);
  sconto = {
    dataFine: data,
    dataInizio: data,
    idAzienda: 1,
    nomeSconto: "nomeNew",
    percentuale: 10,
    tipo: "catalogo",
    id: null,
    prodotti: null,
    quantita: null
  };


  it('insert', (done: DoneFn) => {
    service.insertSconto(sconto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      sconto.id = resp;
      done();
    }, error => {
      done();
    });
  });
  
  it('update', (done: DoneFn) => {
    sconto.nomeSconto = "nuovo";
    service.updateSconto(sconto).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });
  
  it('delete', (done: DoneFn) => {
    service.deleteSconto(sconto.id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });
  

});
