import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniCampioneComponent } from './gestione-ordini-campione.component';

describe('GestioneOrdiniCampioneComponent', () => {
  let component: GestioneOrdiniCampioneComponent;
  let fixture: ComponentFixture<GestioneOrdiniCampioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniCampioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniCampioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
