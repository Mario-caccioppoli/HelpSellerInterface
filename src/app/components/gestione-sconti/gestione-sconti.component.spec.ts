import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneScontiComponent } from './gestione-sconti.component';

describe('GestioneScontiComponent', () => {
  let component: GestioneScontiComponent;
  let fixture: ComponentFixture<GestioneScontiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioneScontiComponent ]
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
