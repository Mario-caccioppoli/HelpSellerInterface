import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoABarraComponent } from './grafico-a-barra.component';

describe('GraficoABarraComponent', () => {
  let component: GraficoABarraComponent;
  let fixture: ComponentFixture<GraficoABarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoABarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoABarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
