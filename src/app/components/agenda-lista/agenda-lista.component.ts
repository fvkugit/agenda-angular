import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/Contacto';

@Component({
  selector: 'app-agenda-lista',
  templateUrl: './agenda-lista.component.html',
  styleUrls: ['./agenda-lista.component.css']
})
export class AgendaListaComponent implements OnInit {

  listContactos: Contacto[] = [
    {
      nombre: 'Facundo',
      apellido: 'Barral',
      numero: '3413252428',
      id: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
