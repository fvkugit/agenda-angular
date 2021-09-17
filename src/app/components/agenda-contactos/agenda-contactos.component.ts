import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactoServiceService } from 'src/app/services/contacto-service.service';

@Component({
  selector: 'app-agenda-contactos',
  templateUrl: './agenda-contactos.component.html',
  styleUrls: ['./agenda-contactos.component.css']
})
export class AgendaContactosComponent implements OnInit {

  listContactos: Contacto[] = []
  searchValue = +this.aRoute.snapshot.paramMap.get('texto')!;
  oculto: boolean = true;
  accion: string = "Mostrar";
  accionIcon : string = "bi-eye-fill"

  constructor(private _dataService: ContactoServiceService, private router: Router, private aRoute: ActivatedRoute) { }

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

  ocultar(){
    this.oculto = !this.oculto;
    if (this.oculto) { this.accion = "Mostrar"; this.accionIcon ="bi bi-eye-fill" } else { this.accion = "Ocultar"; this.accionIcon = "bi-eye-slash-fill" }
  }

  numeroOculto(numero: string){
    return numero.replace(/([0-9])/g, "*")
  
  }

}
