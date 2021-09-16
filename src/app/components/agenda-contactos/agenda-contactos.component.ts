import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactoServiceService } from 'src/app/services/contacto-service.service';

@Component({
  selector: 'app-agenda-contactos',
  templateUrl: './agenda-contactos.component.html',
  styleUrls: ['./agenda-contactos.component.css']
})
export class AgendaContactosComponent implements OnInit {

  listContactos: Contacto[] = [
    {nombre:"Facundo", apellido:"Barral", numero:"12345"},
    {nombre:"Lionel", apellido:"Messi", numero:"12345"},
  ]

  constructor(private _dataService: ContactoServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(){
    this._dataService.getContactos().subscribe(data=>{
      this.listContactos = data;
    }, error=>{
      console.log(error)
    })
  }

  eliminarContacto(id: any){
    this._dataService.removeContacto(id).subscribe(data=>{
      this.cargarContactos();
    }, error=>{
      console.log(error)
    })
  }

}
