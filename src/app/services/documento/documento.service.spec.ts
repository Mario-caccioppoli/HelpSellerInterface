import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Documento } from 'src/app/models/Documento';

import { DocumentoService } from './documento.service';

describe('DocumentoService', () => {
  let service: DocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllDocumento', (done: DoneFn) => {
    service.getAllDocumento().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    });
  });

  it('getDocumentoByIdOrder', (done: DoneFn) => {
    service.getDocumentiByIdOrder(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.autore.length).toBeGreaterThan(0);
      expect(resp.id == 1).toBeTrue;
      expect(resp.idOrdine).toBeGreaterThan(0);
      expect(resp.titolo.length).toBeGreaterThan(0);
      done();
    });
  });

  let documento: Documento;
  let date: Date = new Date("2022-01-01");  
  documento = {
    autore: "aut",
    data: date,
    idOrdine: 1,
    titolo: "tit",
    id: null
  }
  let id = 0;

  it('CUD', (done: DoneFn) => {
    service.insertDocumento(documento).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      id = resp;
      documento.id = id;
      done();
    });
  });

    documento.autore = "new";
    it('CUD', (done: DoneFn) => {
      service.updateDocumento(documento).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      });
    });

    it('CUD', (done: DoneFn) => {
      service.deleteDocumento(id).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      });
    });

});
