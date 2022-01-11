import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniEffettuatiComponent } from './gestione-ordini-effettuati.component';

describe('GestioneOrdiniEffettuatiComponent', () => {
  let component: GestioneOrdiniEffettuatiComponent;
  let fixture: ComponentFixture<GestioneOrdiniEffettuatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniEffettuatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniEffettuatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
