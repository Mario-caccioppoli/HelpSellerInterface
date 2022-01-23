import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';

import { GestioneOrdiniUploadComponent } from './gestione-ordini-upload.component';

describe('GestioneOrdiniUploadComponent', () => {
  let component: GestioneOrdiniUploadComponent;
  let fixture: ComponentFixture<GestioneOrdiniUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniUploadComponent ],
      imports : [HttpClient,NgForm],
      providers : [LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
