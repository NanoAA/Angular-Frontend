import { CorreoE } from './../../../shared/components/email.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService  } from '../../../shared/services/email.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})



export class EmailComponent implements 


OnInit  {
  
  users:any;

constructor(private localHostt: EmailService){
this.localHostt.users().subscribe((data:any)=>{
  this.users = data;
  
});}

getUserFromData(data:any){
  console.warn(data)
  this.localHostt.saveUser(data).subscribe((result)=>{
    console.warn(result)
  })
}

ngOnInit(): void {
  
}


onCorreo(form:CorreoE){

this.localHostt.correos(form).subscribe(data =>{
  console.log(data)
})

}



}

