import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMensileComponent } from './report-mensile.component';

describe('ReportMensileComponent', () => {
  let component: ReportMensileComponent;
  let fixture: ComponentFixture<ReportMensileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMensileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
