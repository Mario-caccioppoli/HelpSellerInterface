import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniRicevutiComponent } from './gestione-ordini-ricevuti.component';

describe('GestioneOrdiniRicevutiComponent', () => {
  let component: GestioneOrdiniRicevutiComponent;
  let fixture: ComponentFixture<GestioneOrdiniRicevutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniRicevutiComponent ]
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
