import { TestBed } from '@angular/core/testing';

import { AziendaService } from './azienda.service';

describe('AziendaService', () => {
  let service: AziendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AziendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
