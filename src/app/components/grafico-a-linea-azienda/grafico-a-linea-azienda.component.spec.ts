import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { GraficoALineaAziendaComponent } from './grafico-a-linea-azienda.component';

describe('GraficoALineaAziendaComponent', () => {
  let component: GraficoALineaAziendaComponent;
  let fixture: ComponentFixture<GraficoALineaAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoALineaAziendaComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
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
