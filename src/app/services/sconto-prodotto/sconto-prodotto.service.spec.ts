import { TestBed } from '@angular/core/testing';

import { ScontoProdottoService } from './sconto-prodotto.service';

describe('ScontoProdottoService', () => {
  let service: ScontoProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontoProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
