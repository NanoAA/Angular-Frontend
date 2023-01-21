import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CorreoE} from '../components/email.interface'
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { 
    
  }
  private apiUrl = "https://restaurant-backend.roraimalab.com/checkvote";
  
  sendPostRequest(data: Object): Observable<Object> {
    return this.http.post<Object>(this.apiUrl, data);

  }
}
