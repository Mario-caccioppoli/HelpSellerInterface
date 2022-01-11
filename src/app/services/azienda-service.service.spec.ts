import { TestBed } from '@angular/core/testing';

import { AziendaServiceService } from './azienda-service.service';

describe('AziendaServiceService', () => {
  let service: AziendaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AziendaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
