import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloAziendaComponent } from './profilo-azienda.component';

describe('PaginaAziendaComponent', () => {
  let component: ProfiloAziendaComponent;
  let fixture: ComponentFixture<ProfiloAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiloAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiloAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
