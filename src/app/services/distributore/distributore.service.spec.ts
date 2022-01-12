import { TestBed } from '@angular/core/testing';

import { DistributoreService } from './distributore.service';

describe('DistributoreService', () => {
  let service: DistributoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
