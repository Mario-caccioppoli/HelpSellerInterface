import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniDettagliOrdineComponent } from './gestione-ordini-dettagli-ordine.component';

describe('GestioneOrdiniDettagliOrdineComponent', () => {
  let component: GestioneOrdiniDettagliOrdineComponent;
  let fixture: ComponentFixture<GestioneOrdiniDettagliOrdineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniDettagliOrdineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniDettagliOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
