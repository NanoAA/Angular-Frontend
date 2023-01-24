import { CorreoE } from './../../../shared/components/email.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService  } from '../../../shared/services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})



export class EmailComponent implements 


OnInit  {
  
  users:any;
  public messages = '';
constructor(private localHostt: EmailService, private router: Router){
  
}

getUserFromData(data:any){
  console.warn(data)
  this.localHostt.saveUser(data).subscribe((result)=>{
    console.warn(result)
  })
}

ngOnInit(): void {
  const message = '';
  console.log(localStorage.getItem('url_callback'));
}



onCorreo(form:CorreoE){
if (form.email == ''){
  this.messages = 'Email es requerido.';
}
this.localHostt.correos(form).subscribe(data =>{
  if(data.hasOwnProperty('message')){
    this.messages = data.message;
  }else {
    this.messages = '';
    var url_callback = 'https://restaurant-backend.roraimalab.com/api/votes/'+ data.client +'/edit'
    localStorage.setItem('url_callback', JSON.stringify(url_callback));

    this.router.navigate(['/restaurant/votes'])


  }
})

}



}

