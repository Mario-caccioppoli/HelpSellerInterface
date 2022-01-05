import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezionaProdottiScontareComponent } from './seleziona-prodotti-scontare.component';

describe('SelezionaProdottiScontareComponent', () => {
  let component: SelezionaProdottiScontareComponent;
  let fixture: ComponentFixture<SelezionaProdottiScontareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelezionaProdottiScontareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionaProdottiScontareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
