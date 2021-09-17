import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaContactosBuscarComponent } from './agenda-contactos-buscar.component';

describe('AgendaContactosBuscarComponent', () => {
  let component: AgendaContactosBuscarComponent;
  let fixture: ComponentFixture<AgendaContactosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaContactosBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaContactosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
