import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/Contacto';
import { ContactoServiceService } from 'src/app/services/contacto-service.service';
import { UploadFilesService } from 'src/app/services/upload-files.service';

@Component({
  selector: 'app-agenda-crear-contacto',
  templateUrl: './agenda-crear-contacto.component.html',
  styleUrls: ['./agenda-crear-contacto.component.css'],
})
export class AgendaCrearContactoComponent implements OnInit {
  crearContacto: FormGroup;
  accion = 'Crear';
  ruta: string = "";
  id: number;
  //Upload files
  file: File;
  loading: boolean = false;
  error: boolean = false;
  creando: boolean = false;
  sLink: string = '';
  base64textString: string;

  constructor(
    private fb: FormBuilder,
    private _upload: UploadFilesService,
    private _dataService: ContactoServiceService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.crearContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.aRoute.url.subscribe(url => this.ruta = url[0].path);
    this.id = this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    if(this.ruta=="editar"){ 
      this.accion = "Editar";
      this.cargarDatos(); 
    }
  }

  // File upload
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this._upload.upload(this.file).subscribe((event: any) => {
      if (typeof event === 'object') {
        // Short link via api response
        this.sLink = event.link;
        this.loading = false; // Flag variable
      }
    });
  }
  //

  cargarDatos(){
    this._dataService.getContacto(this.id).subscribe(data=>{
      this.crearContacto.patchValue({
        nombre: data.nombre,
        apellido: data.apellido,
        numero: data.numero,
      });
    }, error=>{
      console.log(error);
    })
  }

  crear() {
    const contact: Contacto = {
      nombre: this.crearContacto.get('nombre')?.value,
      apellido: this.crearContacto.get('apellido')?.value,
      numero: this.crearContacto.get('numero')?.value.toString(),
    };
    if (this.ruta == "editar"){ 
      this.actualizarContacto(contact, this.id); 
    }
    else { this.nuevoContacto(contact); }
  }

  nuevoContacto(contacto: Contacto) {
    this.creando = true;
    this._dataService.createContacto(contacto).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.error = true;
        this.creando = false;
      }
    );
  }

  actualizarContacto(contacto: Contacto, id: number){
    contacto.id = this.id
    console.log(contacto)
    this._dataService.updateContacto(id, contacto).subscribe(data=>{
      this.router.navigate(['/']);
    }, error=>{
      console.log(error)
    })
  }


}
