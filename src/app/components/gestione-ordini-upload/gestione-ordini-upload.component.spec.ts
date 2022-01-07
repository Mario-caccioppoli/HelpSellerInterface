import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneOrdiniUploadComponent } from './gestione-ordini-upload.component';

describe('GestioneOrdiniUploadComponent', () => {
  let component: GestioneOrdiniUploadComponent;
  let fixture: ComponentFixture<GestioneOrdiniUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneOrdiniUploadComponent ]
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
