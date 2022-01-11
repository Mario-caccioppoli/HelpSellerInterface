import { TestBed } from '@angular/core/testing';

import { AmministratoreServiceService } from './amministratore-service.service';

describe('AmministratoreServiceService', () => {
  let service: AmministratoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmministratoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
