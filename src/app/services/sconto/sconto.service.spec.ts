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
    });
  });

  it('findScontiByAzienda', (done: DoneFn) => {
    service.findScontiByAzienda(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('getAllScontoByTipo', (done: DoneFn) => {
    service.getAllScontoByTipo("catalogo").subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('getAllScontoByTypoAndAzienda', (done: DoneFn) => {
    service.getAllScontoByTipoAndIdAzienda("catalogo", 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1);
      expect(resp.idAzienda).toBeGreaterThan(0);
      done();
    });
  });

  it('findScontiByNomeinAzienda', (done: DoneFn) => {
    service.findScontiByNomeInAzienda("nome", 1).subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  let sconto: Sconto;
  let data: Date = new Date("2022-01-01");
  sconto = {
    dataFine: data,
    dataInizio: data,
    idAzienda: 1,
    nomeSconto: "nome",
    percentuale: 10,
    tipo: "catalogo",
    id: null,
    prodotti: null,
    quantita: null
  };

  let id = 0;

  it('CUD', (done: DoneFn) => {
    service.insertSconto(sconto).subscribe(resp => {
      expect(resp > 0);
      id = resp;
      sconto.id = id;
      done();
    });
  });
  
  sconto.nomeSconto = "nuovo";
  it('CUD', (done: DoneFn) => {
    service.updateSconto(sconto).subscribe(resp => {
      expect(resp > 0);
      done();
    });
  });
  
  it('CUD', (done: DoneFn) => {
    service.deleteSconto(id).subscribe(resp => {
      expect(resp > 0);
      done();
    })
  });
  

});
