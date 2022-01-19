import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogService } from 'src/app/services/log.service';
import { OrdineService } from 'src/app/services/ordine/ordine.service';

import { GestioneOrdiniRicevutiComponent } from './gestione-ordini-ricevuti.component';

describe('GestioneOrdiniRicevutiComponent', () => {
  let component: GestioneOrdiniRicevutiComponent;
  let fixture: ComponentFixture<GestioneOrdiniRicevutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniRicevutiComponent],
      imports : [HttpClientModule],
      providers : [OrdineService,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniRicevutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
