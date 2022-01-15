import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { GestioneOrdiniDettagliOrdineComponent } from './gestione-ordini-dettagli-ordine.component';

describe('GestioneOrdiniDettagliOrdineComponent', () => {
  let component: GestioneOrdiniDettagliOrdineComponent;
  let fixture: ComponentFixture<GestioneOrdiniDettagliOrdineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniDettagliOrdineComponent ],
      imports : [HttpClientModule],
      providers : [OrdineProdottoService,DistributoreService,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniDettagliOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
