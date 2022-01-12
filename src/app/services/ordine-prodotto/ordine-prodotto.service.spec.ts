import { TestBed } from '@angular/core/testing';

import { OrdineProdottoService } from './ordine-prodotto.service';

describe('OrdineProdottoService', () => {
  let service: OrdineProdottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdineProdottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
