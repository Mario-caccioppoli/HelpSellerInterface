import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AziendaService } from 'src/app/services/azienda/azienda.service';
import { LogService } from 'src/app/services/log.service';

import { VisualizzaAziendeComponent } from './visualizza-aziende.component';

describe('VisualizzaAziendeComponent', () => {
  let component: VisualizzaAziendeComponent;
  let fixture: ComponentFixture<VisualizzaAziendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaAziendeComponent],
      imports : [HttpClientModule],
      providers : [AziendaService,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaAziendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
