import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { OrdineService } from './ordine.service';

describe('OrdineService', () => {
  let service: OrdineService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OrdineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
