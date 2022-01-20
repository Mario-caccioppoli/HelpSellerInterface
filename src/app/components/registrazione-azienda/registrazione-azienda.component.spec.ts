import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazioneAziendaComponent } from './registrazione-azienda.component';

describe('RegistrazioneAziendaComponent', () => {
  let component: RegistrazioneAziendaComponent;
  let fixture: ComponentFixture<RegistrazioneAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrazioneAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrazioneAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
