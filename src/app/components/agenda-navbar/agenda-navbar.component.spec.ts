import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaNavbarComponent } from './agenda-navbar.component';

describe('AgendaNavbarComponent', () => {
  let component: AgendaNavbarComponent;
  let fixture: ComponentFixture<AgendaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
