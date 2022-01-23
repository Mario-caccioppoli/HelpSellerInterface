import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Amministratore } from 'src/app/models/Amministratore';
import { AmministratoreService } from './amministratore.service';

describe('AmministratoreService', () => {
  let service: AmministratoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      
    });
    service = TestBed.inject(AmministratoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllAmministratore', (done: DoneFn) => {
    service.getAllAmministratore().subscribe(resp => {
      expect(resp).toBeInstanceOf(Array);
      resp.forEach(r => {
        expect(r.id).toBeGreaterThan(0);
      });
    });
  });

});
