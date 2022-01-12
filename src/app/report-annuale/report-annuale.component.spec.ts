import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnnualeComponent } from './report-annuale.component';

describe('ReportAnnualeComponent', () => {
  let component: ReportAnnualeComponent;
  let fixture: ComponentFixture<ReportAnnualeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnnualeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnnualeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
