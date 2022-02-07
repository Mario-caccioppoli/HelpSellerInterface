import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';

import { ProfiloAziendaComponent } from './profilo-azienda.component';

describe('ProfiloAziendaComponent', () => {
  let component: ProfiloAziendaComponent;
  let fixture: ComponentFixture<ProfiloAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAziendaComponent],
      imports : [HttpClientModule,RouterTestingModule, FormsModule],
      providers : [LogService,AziendaService,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAziendaComponent);
    component = fixture.componentInstance;
    component.currentUser = {
      email: "mario@gmail.com",
      username: "marioooo",
      id: 1,
      password: null,
      tipo: "Distributore",
      nome: "mario",
      cognome: "de gregorio",
      vat: "125425",
      telefono: "2525145",
      indirizzo: "napoli"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
