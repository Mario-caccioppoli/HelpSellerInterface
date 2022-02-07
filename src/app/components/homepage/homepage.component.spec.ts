import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ],
      imports: [HttpClientModule, RouterTestingModule, FormsModule],
      providers: [HomepageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    component.currentUser = {
      email: "aldo@libeo.it",
      username: "aldo123",
      id: 1,
      password: null,
      tipo: "Amministratore"
    }
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();  
    
  });
});
