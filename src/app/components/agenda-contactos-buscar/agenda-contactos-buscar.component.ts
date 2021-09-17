import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactoServiceService } from 'src/app/services/contacto-service.service';

@Component({
  selector: 'app-agenda-contactos-buscar',
  templateUrl: './agenda-contactos-buscar.component.html',
  styleUrls: ['./agenda-contactos-buscar.component.css']
})
export class AgendaContactosBuscarComponent implements OnInit {

  listContactos: Contacto[] = []
  searchValue: string;

  constructor(private _dataService: ContactoServiceService, private aRoute: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.cargarContactos();
    this.searchValue = this.aRoute.snapshot.paramMap.get('texto')!;
  }

  cargarContactos(){
    this._dataService.getContactos().subscribe(data=>{
      for (const x of data) {
        if(x.nombre.toLowerCase().includes(this.searchValue.toLowerCase()) || x.apellido.toLowerCase().includes(this.searchValue.toLowerCase())){
          this.listContactos.push(x)
        }
      }
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
