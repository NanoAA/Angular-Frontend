import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../components/vote.interface';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  
  url = localStorage.getItem('url_callback');
  
  constructor(private _http:HttpClient){}

votes(form:Vote):Observable<Vote> {

  if (this.url == null) {
    this.url = '';
  }
  console.log(JSON.parse(this.url));

  let direccion = 'https://restaurant-backend.roraimalab.com/api/votes/'+ JSON.parse(this.url) +'/edit';
  console.log(direccion);
  // localStorage.removeItem('url_callback');
  return this._http.post<Vote>(direccion, form)

}

}

/*restaurant-backend.roraimalab.com/api/checkvote */