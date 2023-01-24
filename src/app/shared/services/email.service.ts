import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CorreoE} from '../components/email.interface';
import {responseE} from '../components/responseE.interface';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  url = 'https://restaurant-backend.roraimalab.com/api/checkvote'

  constructor(private _http:HttpClient){}

  users(){
    return this._http.get(this.url);
  }

  saveUser(data:any){
    return this._http.post(this.url, data)
  }
correos(form:CorreoE):Observable<responseE> {

  let direccion = this.url;
  return this._http.post<responseE>(direccion, form)

}


}


/*restaurant-backend.roraimalab.com/api/checkvote */