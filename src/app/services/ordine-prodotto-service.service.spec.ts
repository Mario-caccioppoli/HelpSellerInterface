import { TestBed } from '@angular/core/testing';

import { OrdineProdottoServiceService } from './ordine-prodotto-service.service';

describe('OrdineProdottoServiceService', () => {
  let service: OrdineProdottoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdineProdottoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
