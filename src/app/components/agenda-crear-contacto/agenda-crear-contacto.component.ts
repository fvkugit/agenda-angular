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
  image: string = '';

  constructor(
    private fb: FormBuilder,
    private _dataService: ContactoServiceService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.crearContacto = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numero: ['', Validators.required],
      correo: ['', Validators.required],
      github: [''],
      linkedin: [''],
      twitter: [''],
      instagram: [''],
      imagen: [''],
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
  private readBase64(file: File): Promise<any> {
    const reader = new FileReader();
    const future = new Promise((resolve, reject) => {
      reader.addEventListener('load', function () {
        resolve(reader.result);
      }, false);
      reader.addEventListener('error', function (event) {
        reject(event);
      }, false);
    
      reader.readAsDataURL(file);
    });
    return future;
  }
  //

  cargarDatos(){
    this._dataService.getContacto(this.id).subscribe(data=>{
      this.image = data.imagen
      this.crearContacto.patchValue({
        nombre: data.nombre,
        apellido: data.apellido,
        numero: data.numero,
        correo: data.correo,
        github: data.github,
        linkedin: data.linkedin,
        twitter: data.twitter,
        instagram: data.instagram,
        imagen: data.imagen,
      });
    }, error=>{
      console.log(error);
    })
  }

  async crear() {
    if(this.file != undefined){ 
      await this.readBase64(this.file)
    .then((data) => {
        this.image = data
    });
    }
    const contact: Contacto = {
      nombre: this.crearContacto.get('nombre')?.value,
      apellido: this.crearContacto.get('apellido')?.value,
      numero: this.crearContacto.get('numero')?.value.toString(),
      correo: this.crearContacto.get('correo')?.value,
      github: this.crearContacto.get('github')?.value,
      linkedin: this.crearContacto.get('linkedin')?.value,
      twitter: this.crearContacto.get('twitter')?.value,
      instagram: this.crearContacto.get('instagram')?.value,
      imagen: this.image,
    };
    console.log(contact)
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
    this._dataService.updateContacto(id, contacto).subscribe(data=>{
      this.router.navigate(['/']);
    }, error=>{
      console.log(error)
    })
  }

}
