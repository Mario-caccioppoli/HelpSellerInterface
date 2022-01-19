import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

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
});
