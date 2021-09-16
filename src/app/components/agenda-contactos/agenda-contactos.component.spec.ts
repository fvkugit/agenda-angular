import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaContactosComponent } from './agenda-contactos.component';

describe('AgendaContactosComponent', () => {
  let component: AgendaContactosComponent;
  let fixture: ComponentFixture<AgendaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
