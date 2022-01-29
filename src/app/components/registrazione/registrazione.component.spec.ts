import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UtenteService } from 'src/app/services/utente/utente.service';

import { RegistrazioneComponent } from './registrazione.component';

describe('RegistrazioneComponent', () => {
  let component: RegistrazioneComponent;
  let fixture: ComponentFixture<RegistrazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrazioneComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [UtenteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
