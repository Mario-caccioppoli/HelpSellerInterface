import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DistributoreService } from 'src/app/services/distributore/distributore.service';
import { LogService } from 'src/app/services/log.service';
import { OrdineProdottoService } from 'src/app/services/ordine-prodotto/ordine-prodotto.service';

import { GestioneOrdiniEffettuatiComponent } from './gestione-ordini-effettuati.component';

describe('GestioneOrdiniEffettuatiComponent', () => {
  let component: GestioneOrdiniEffettuatiComponent;
  let fixture: ComponentFixture<GestioneOrdiniEffettuatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniEffettuatiComponent],
      imports: [HttpClientModule],
      providers:[OrdineProdottoService,DistributoreService,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniEffettuatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
