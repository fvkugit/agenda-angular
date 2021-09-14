import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCrearContactoComponent } from './agenda-crear-contacto.component';

describe('AgendaCrearContactoComponent', () => {
  let component: AgendaCrearContactoComponent;
  let fixture: ComponentFixture<AgendaCrearContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCrearContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCrearContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
