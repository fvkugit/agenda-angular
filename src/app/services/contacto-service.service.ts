import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../interfaces/Contacto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {
  private url = "https://localhost:44380/"
  private api = "api/Aplication/"
  constructor(private x: HttpClient) { }

  getContactos(): Observable<any>{
    return this.x.get(this.url + this.api);
  }
  getContacto(id: number): Observable<any>{
    return this.x.get(this.url + this.api + id);
  }
  createContacto(data: object): Observable<any>{
    return this.x.post(this.url + this.api, data)
  }
  removeContacto(id: number): Observable<any>{
    return this.x.delete(this.url + this.api + id)
  }
  updateContacto(id: number, data: Contacto): Observable<any>{
    return this.x.put(this.url + this.api + id, data)
  }

}
