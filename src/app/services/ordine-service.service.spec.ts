import { TestBed } from '@angular/core/testing';

import { OrdineServiceService } from './ordine-service.service';

describe('OrdineServiceService', () => {
  let service: OrdineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
