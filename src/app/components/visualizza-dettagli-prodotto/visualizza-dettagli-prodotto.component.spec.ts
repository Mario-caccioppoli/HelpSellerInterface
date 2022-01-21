import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaDettagliProdottoComponent } from './visualizza-dettagli-prodotto.component';

describe('VisualizzaDettagliProdottoComponent', () => {
  let component: VisualizzaDettagliProdottoComponent;
  let fixture: ComponentFixture<VisualizzaDettagliProdottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaDettagliProdottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaDettagliProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
