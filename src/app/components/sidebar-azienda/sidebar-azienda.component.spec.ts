import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAziendaComponent } from './sidebar-azienda.component';

describe('SidebarAziendaComponent', () => {
  let component: SidebarAziendaComponent;
  let fixture: ComponentFixture<SidebarAziendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAziendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
