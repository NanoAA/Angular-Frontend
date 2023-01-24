import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../components/vote.interface';

@Injectable({
  providedIn: 'root'
})
export class VostesService {
  
  url = localStorage.getItem('url_callback');

  constructor(private _http:HttpClient){}

  onVote(form:Vote){
    console.log(form)
     
  
    if (this.url == null) {
      this.url = '';
    }
    const rs = this._http.post(this.url, form);
  
    console.log(rs);


}
}

/*restaurant-backend.roraimalab.com/api/checkvote */