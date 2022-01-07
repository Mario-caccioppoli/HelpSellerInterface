import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaAziendeComponent } from './visualizza-aziende.component';

describe('VisualizzaAziendeComponent', () => {
  let component: VisualizzaAziendeComponent;
  let fixture: ComponentFixture<VisualizzaAziendeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaAziendeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaAziendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
