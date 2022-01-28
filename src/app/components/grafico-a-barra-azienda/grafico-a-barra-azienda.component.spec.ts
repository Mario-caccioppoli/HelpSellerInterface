import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { GraficoABarraAziendaComponent } from './grafico-a-barra-azienda.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('GraficoABarraAziendaComponent', () => {
  let component: GraficoABarraAziendaComponent;
  let fixture: ComponentFixture<GraficoABarraAziendaComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoABarraAziendaComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
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
