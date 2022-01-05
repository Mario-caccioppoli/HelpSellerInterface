import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoALineaComponent } from './grafico-a-linea.component';

describe('GraficoALineaComponent', () => {
  let component: GraficoALineaComponent;
  let fixture: ComponentFixture<GraficoALineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoALineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoALineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
