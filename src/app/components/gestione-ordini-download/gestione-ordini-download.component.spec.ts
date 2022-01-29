import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentoService } from 'src/app/services/documento/documento.service';

import { GestioneOrdiniDownloadComponent } from './gestione-ordini-download.component';

describe('GestioneOrdiniDownloadComponent', () => {
  let component: GestioneOrdiniDownloadComponent;
  let fixture: ComponentFixture<GestioneOrdiniDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniDownloadComponent ],
      imports: [HttpClientModule],
      providers: [DocumentoService]
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
