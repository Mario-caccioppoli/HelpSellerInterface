import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoABarraAziendaComponent } from './grafico-a-barra-azienda.component';

describe('GraficoABarraAziendaComponent', () => {
  let component: GraficoABarraAziendaComponent;
  let fixture: ComponentFixture<GraficoABarraAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoABarraAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoABarraAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
