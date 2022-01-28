import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAmministratoreComponent } from './report-amministratore.component';

describe('ReportAmministratoreComponent', () => {
  let component: ReportAmministratoreComponent;
  let fixture: ComponentFixture<ReportAmministratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAmministratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
