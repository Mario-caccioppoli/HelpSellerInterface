import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';

import { GestioneOrdiniDownloadComponent } from './gestione-ordini-download.component';

describe('GestioneOrdiniDownloadComponent', () => {
  let component: GestioneOrdiniDownloadComponent;
  let fixture: ComponentFixture<GestioneOrdiniDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniDownloadComponent ],
      imports: [HttpClient,NgForm],
      providers: [,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneOrdiniDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
