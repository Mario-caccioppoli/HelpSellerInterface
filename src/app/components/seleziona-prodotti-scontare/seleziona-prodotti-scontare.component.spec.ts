import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LogService } from 'src/app/services/log.service';

import { SelezionaProdottiScontareComponent } from './seleziona-prodotti-scontare.component';

describe('SelezionaProdottiScontareComponent', () => {
  let component: SelezionaProdottiScontareComponent;
  let fixture: ComponentFixture<SelezionaProdottiScontareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelezionaProdottiScontareComponent],
      imports : [HttpClientModule,RouterTestingModule, FormsModule],
      providers : [LogService,SelezionaProdottiScontareComponent,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezionaProdottiScontareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
