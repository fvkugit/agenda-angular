import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactoServiceService } from 'src/app/services/contacto-service.service';

@Component({
  selector: 'app-agenda-lista',
  templateUrl: './agenda-lista.component.html',
  styleUrls: ['./agenda-lista.component.css']
})
export class AgendaListaComponent implements OnInit {

  listContactos: Contacto[] = []

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
