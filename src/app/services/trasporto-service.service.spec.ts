import { TestBed } from '@angular/core/testing';

import { TrasportoServiceService } from './trasporto-service.service';

describe('TrasportoServiceService', () => {
  let service: TrasportoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrasportoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
