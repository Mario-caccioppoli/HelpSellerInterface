import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestordEffordCartComponent } from './gestord-efford-cart.component';

describe('GestordEffordCartComponent', () => {
  let component: GestordEffordCartComponent;
  let fixture: ComponentFixture<GestordEffordCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestordEffordCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestordEffordCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
