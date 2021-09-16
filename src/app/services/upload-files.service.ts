import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  private IMGUR_ACCESS_TOKEN = ""
  private IMGUR_UPLOAD_URL = ""
  
  constructor(private http:HttpClient) { }

  upload(file: any):Observable<any>{
    const fdata = new FormData(); 
    console.log(fdata)
    fdata.append("file", file, file.name)
    let header = new HttpHeaders({
      "authorization": 'Client-ID '+ this.IMGUR_ACCESS_TOKEN
    });
   

    return this.http.post(this.IMGUR_UPLOAD_URL, 'fdata', {headers:header});
  }
}
