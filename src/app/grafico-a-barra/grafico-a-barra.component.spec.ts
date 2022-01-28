import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdineProdottoService } from '../services/ordine-prodotto/ordine-prodotto.service';

import { GraficoABarraComponent } from './grafico-a-barra.component';

describe('GraficoABarraComponent', () => {
  let component: GraficoABarraComponent;
  let fixture: ComponentFixture<GraficoABarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoABarraComponent ],
      imports: [HttpClientModule],
      providers: [OrdineProdottoService]
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
