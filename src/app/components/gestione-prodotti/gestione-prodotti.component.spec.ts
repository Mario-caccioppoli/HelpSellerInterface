import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneProdottiComponent } from './gestione-prodotti.component';

describe('GestioneProdottiComponent', () => {
  let component: GestioneProdottiComponent;
  let fixture: ComponentFixture<GestioneProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
