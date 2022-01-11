import { TestBed } from '@angular/core/testing';

import { ScontoProdottoServiceService } from './sconto-prodotto-service.service';

describe('ScontoProdottoServiceService', () => {
  let service: ScontoProdottoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontoProdottoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
