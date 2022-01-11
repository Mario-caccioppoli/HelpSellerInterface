import { TestBed } from '@angular/core/testing';

import { DistributoreServiceService } from './distributore-service.service';

describe('DistributoreServiceService', () => {
  let service: DistributoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
