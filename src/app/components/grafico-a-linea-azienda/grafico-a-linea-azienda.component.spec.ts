import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { GraficoALineaAziendaComponent } from './grafico-a-linea-azienda.component';

describe('GraficoALineaAziendaComponent', () => {
  let component: GraficoALineaAziendaComponent;
  let fixture: ComponentFixture<GraficoALineaAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoALineaAziendaComponent ],
      imports: [HttpClientModule],
      providers: [OrdineProdottoService]
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
