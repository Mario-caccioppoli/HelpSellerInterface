import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniEffettuaOrdineComponent } from './gestione-ordini-effettua-ordine.component';

describe('GestioneOrdiniEffettuaOrdineComponent', () => {
  let component: GestioneOrdiniEffettuaOrdineComponent;
  let fixture: ComponentFixture<GestioneOrdiniEffettuaOrdineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniEffettuaOrdineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniEffettuaOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
