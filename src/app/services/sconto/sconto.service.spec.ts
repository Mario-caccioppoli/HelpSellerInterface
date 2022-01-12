import { TestBed } from '@angular/core/testing';

import { ScontoService } from './sconto.service';

describe('ScontoService', () => {
  let service: ScontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
