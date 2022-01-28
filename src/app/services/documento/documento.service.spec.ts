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
    }, error => {
      done();
    });
  });

  it('getDocumentoByIdOrder', (done: DoneFn) => {
    service.getDocumentiByIdOrder(1).subscribe(resp => {
      expect(resp.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(4).subscribe(resp => {
      expect(resp.autore.length).toBeGreaterThan(0);
      expect(resp.id == 1).toBeTrue;
      expect(resp.idOrdine).toBeGreaterThan(0);
      expect(resp.titolo.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  let documento: Documento;
  let data: Date = new Date();
  data.setFullYear(2020);
  data.setMonth(12);
  data.setDate(11); 
  documento = {
    autore: "aut",
    data: data,
    idOrdine: 1,
    titolo: "tit",
    id: null
  }

  it('insert', (done: DoneFn) => {
    service.insertDocumento(documento).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      documento.id = resp;
      done();
    }, error => {
      done();
    });
  });


    it('update', (done: DoneFn) => {
      documento.autore = "new";
      service.updateDocumento(documento).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      }, error => {
        done();
      });
    });

    it('delete', (done: DoneFn) => {
      service.deleteDocumento(documento.id).subscribe(resp => {
        expect(resp).toBeGreaterThan(0);
        done();
      }, error => {
        done();
      });
    });

});
