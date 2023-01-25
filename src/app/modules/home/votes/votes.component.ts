import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vote } from 'src/app/shared/components/vote.interface';
import { VotesService } from 'src/app/shared/services/votes.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  constructor(private localHostt: VotesService,private router: Router, private _http:HttpClient){
  
  }

ngOnInit(): void {
  if (localStorage.getItem('url_callback') == null) {
    this.router.navigate(['/restaurant/email'])
  }
}


url = localStorage.getItem('url_callback');
option2:any;
onVote(form:Vote){
  console.log(form)
  console.log('url: ' + this.url);
  this.localHostt.votes(form).subscribe(data =>{
    console.log(data);
    if (data.message == 'voto guardado'){
      this.router.navigate(['/restaurant/succes']);
      localStorage.removeItem('url_callback');
    }
  });
}  


}









