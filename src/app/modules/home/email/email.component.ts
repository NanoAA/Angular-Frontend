import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})



export class EmailComponent   {
  

  public message:string ='';

constructor(private http: HttpClient){


}

  onEmail(correo:{valided:boolean}){
    const headers = new HttpHeaders({'myheaders':'correos'});

headers.append('content-type', 'https://restaurant-backend.roraimalab.com/api/checkvote');
    console.log(correo);
    this.http.post('https://restaurant-backend.roraimalab.com/api/checkvote', correo,{headers:headers} )
    .subscribe((res)=>{
      console.log(res)
    })
  }

  
  
  email = new FormControl('', [Validators.required, Validators.email]);

  
}