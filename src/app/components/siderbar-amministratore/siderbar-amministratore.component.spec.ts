import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarAmministratoreComponent } from './siderbar-amministratore.component';

describe('SiderbarAmministratoreComponent', () => {
  let component: SiderbarAmministratoreComponent;
  let fixture: ComponentFixture<SiderbarAmministratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiderbarAmministratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderbarAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
