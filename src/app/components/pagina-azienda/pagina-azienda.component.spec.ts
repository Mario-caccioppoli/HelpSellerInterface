import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAziendaComponent } from './pagina-azienda.component';

describe('PaginaAziendaComponent', () => {
  let component: PaginaAziendaComponent;
  let fixture: ComponentFixture<PaginaAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
