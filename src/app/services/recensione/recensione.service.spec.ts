import { TestBed } from '@angular/core/testing';

import { RecensioneService } from './recensione.service';

describe('RecensioneService', () => {
  let service: RecensioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
