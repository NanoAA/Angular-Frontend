import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vote } from 'src/app/shared/components/vote.interface';
@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  constructor(private router: Router, private _http:HttpClient){
  
  }

ngOnInit(): void {
  if (localStorage.getItem('url_callback') == null) {
    this.router.navigate(['/restaurant/email'])
  }
}


url = localStorage.getItem('url_callback');

onVote(form:Vote){
  console.log(form)

  if (this.url == null) {
    this.url = '';
  }
  const rs = this._http.post(this.url, form);

  console.log(rs);
}  


}









