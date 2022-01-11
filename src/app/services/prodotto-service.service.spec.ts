import { TestBed } from '@angular/core/testing';

import { ProdottoServiceService } from './prodotto-service.service';

describe('ProdottoServiceService', () => {
  let service: ProdottoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
