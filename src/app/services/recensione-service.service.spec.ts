import { TestBed } from '@angular/core/testing';

import { RecensioneServiceService } from './recensione-service.service';

describe('RecensioneServiceService', () => {
  let service: RecensioneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
