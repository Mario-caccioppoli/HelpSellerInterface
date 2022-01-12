import { TestBed } from '@angular/core/testing';

import { AmministratoreService } from './amministratore.service';

describe('AmministratoreService', () => {
  let service: AmministratoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmministratoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
