import { TestBed } from '@angular/core/testing';

import { TrasportoService } from './trasporto.service';

describe('TrasportoService', () => {
  let service: TrasportoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasportoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
