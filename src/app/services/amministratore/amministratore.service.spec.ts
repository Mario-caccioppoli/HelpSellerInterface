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
      done();
    });
  });

  it('findById', (done: DoneFn) => {
    service.findById(1).subscribe(resp => {
      expect(resp.id == 1);
      expect(resp.email.length).toBeGreaterThan(0);
      expect(resp.password.length).toBeGreaterThan(0);
      expect(resp.username.length).toBeGreaterThan(0);
      done();
    });
  });

  it('updateAmministratore', (done: DoneFn) => {

    let adminUpdate: Amministratore;
    adminUpdate = {
      email: "aldo@libero.it",
      password: "qwertyuiop",
      username: "aldo1223",
      id: 1
    }
    service.updateAmministratore(adminUpdate).subscribe(resp => {
      expect(resp > 0);
      done();
    });
  });

  it('updateAmministratore', (done: DoneFn) => {
    let adminOriginal: Amministratore;
    adminOriginal = {
      email: "aldo@libeo.it",
      password: "password",
      username: "aldo123",
      id: 1
    }

    service.updateAmministratore(adminOriginal).subscribe(resp => {
      expect(resp > 0);
      done();
    })
  });

});
