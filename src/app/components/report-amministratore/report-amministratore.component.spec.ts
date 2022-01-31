import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AziendaService } from 'src/app/services/azienda/azienda.service';

import { ReportAmministratoreComponent } from './report-amministratore.component';

describe('ReportAmministratoreComponent', () => {
  let component: ReportAmministratoreComponent;
  let fixture: ComponentFixture<ReportAmministratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAmministratoreComponent ],
      imports: [HttpClientModule],
      providers: [AziendaService]
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
