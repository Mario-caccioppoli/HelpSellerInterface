import { TestBed } from '@angular/core/testing';

import { ScontoServiceService } from './sconto-service.service';

describe('ScontoServiceService', () => {
  let service: ScontoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
