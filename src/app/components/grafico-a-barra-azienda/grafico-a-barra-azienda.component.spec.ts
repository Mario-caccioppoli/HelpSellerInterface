import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { GraficoABarraAziendaComponent } from './grafico-a-barra-azienda.component';

describe('GraficoABarraAziendaComponent', () => {
  let component: GraficoABarraAziendaComponent;
  let fixture: ComponentFixture<GraficoABarraAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoABarraAziendaComponent ],
      imports: [HttpClientModule],
      providers: [OrdineProdottoService]
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
