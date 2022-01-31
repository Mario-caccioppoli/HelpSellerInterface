import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DocumentoService } from 'src/app/services/documento/documento.service';

import { GestioneOrdiniUploadComponent } from './gestione-ordini-upload.component';

describe('GestioneOrdiniUploadComponent', () => {
  let component: GestioneOrdiniUploadComponent;
  let fixture: ComponentFixture<GestioneOrdiniUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniUploadComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [DocumentoService]
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
