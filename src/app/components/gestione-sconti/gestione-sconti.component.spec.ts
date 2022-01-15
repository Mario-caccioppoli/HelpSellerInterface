import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';
import { ScontoService } from 'src/app/services/sconto/sconto.service';

import { GestioneScontiComponent } from './gestione-sconti.component';

describe('GestioneScontiComponent', () => {
  let component: GestioneScontiComponent;
  let fixture: ComponentFixture<GestioneScontiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneScontiComponent ],
      imports : [HttpClientModule,FormsModule],
      providers : [ScontoService,LogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneScontiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
