import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ScontoService } from './sconto.service';

describe('ScontoService', () => {
  let service: ScontoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ScontoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
