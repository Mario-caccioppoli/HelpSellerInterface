import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TrasportoService } from './trasporto.service';

describe('TrasportoService', () => {
  let service: TrasportoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TrasportoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
