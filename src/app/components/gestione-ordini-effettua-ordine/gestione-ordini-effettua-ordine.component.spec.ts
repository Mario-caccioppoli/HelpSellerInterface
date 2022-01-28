import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ProdottoService } from 'src/app/services/prodotto/prodotto.service';

import { GestioneOrdiniEffettuaOrdineComponent } from './gestione-ordini-effettua-ordine.component';

describe('GestioneOrdiniEffettuaOrdineComponent', () => {
  let component: GestioneOrdiniEffettuaOrdineComponent;
  let fixture: ComponentFixture<GestioneOrdiniEffettuaOrdineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniEffettuaOrdineComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [ProdottoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniEffettuaOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
