import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Distributore } from 'src/app/models/Distributore';

import { DistributoreService } from './distributore.service';

describe('DistributoreService', () => {
  let service: DistributoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DistributoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllDistributore', (done: DoneFn) => {
    service.getAllDistributore().subscribe(resp => {
      expect(resp.length).toBeGreaterThanOrEqual(0);
      done();
    }, error => {
      done();
    })
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1).toBeTrue;
      expect(resp.email.length).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  let distributore: Distributore;
  distributore = {
    cognome: "cog",
    email: "email",
    indirizzoSede: "indi",
    idOrdineProva: null,
    nome: "nome",
    ordini: null,
    password: "pass",
    telefono: "111222",
    username: "dad",
    vat: "11119992",
    id: null
  }

  it('insert', (done: DoneFn) => {
    service.insertDistributore(distributore).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      distributore.id = resp;
      done();
    }, error => {
      done();
    });
  });


  it('update', (done: DoneFn) => {
    distributore.email = "nuovamail";
    service.updateDistributore(distributore).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    });
  });

  it('delete', (done: DoneFn) => {
    service.deleteDistributore(distributore.id).subscribe(resp => {
      expect(resp).toBeGreaterThan(0);
      done();
    }, error => {
      done();
    })
  });

});
