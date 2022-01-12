import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePraticheTrasportoComponent } from './gestione-pratiche-trasporto.component';

describe('GestionePraticheTrasportoComponent', () => {
  let component: GestionePraticheTrasportoComponent;
  let fixture: ComponentFixture<GestionePraticheTrasportoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionePraticheTrasportoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionePraticheTrasportoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
