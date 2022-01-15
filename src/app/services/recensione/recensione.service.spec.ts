import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RecensioneService } from './recensione.service';

describe('RecensioneService', () => {
  let service: RecensioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RecensioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
