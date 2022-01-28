import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoALineaAziendaComponent } from './grafico-a-linea-azienda.component';

describe('GraficoALineaAziendaComponent', () => {
  let component: GraficoALineaAziendaComponent;
  let fixture: ComponentFixture<GraficoALineaAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoALineaAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoALineaAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
