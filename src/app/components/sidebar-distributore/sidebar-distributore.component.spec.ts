import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDistributoreComponent } from './sidebar-distributore.component';

describe('SidebarDistributoreComponent', () => {
  let component: SidebarDistributoreComponent;
  let fixture: ComponentFixture<SidebarDistributoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDistributoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDistributoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
