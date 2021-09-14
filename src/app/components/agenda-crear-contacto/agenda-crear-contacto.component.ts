import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/interfaces/Contacto';

@Component({
  selector: 'app-agenda-crear-contacto',
  templateUrl: './agenda-crear-contacto.component.html',
  styleUrls: ['./agenda-crear-contacto.component.css']
})
export class AgendaCrearContactoComponent implements OnInit {

  crearContacto: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.crearContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numero: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  crear(){
    const contacto: Contacto = {
      nombre: this.crearContacto.get('nombre')?.value,
      apellido: this.crearContacto.get('apellido')?.value,
      numero: this.crearContacto.get('numero')?.value,
    }

    console.log(contacto)
  }

}
