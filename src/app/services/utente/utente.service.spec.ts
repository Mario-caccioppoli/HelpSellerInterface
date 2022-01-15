import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UtenteService } from './utente.service';

describe('UtenteService', () => {
  let service: UtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
