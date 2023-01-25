import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})



export class RestaurantComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(){
  }
  timerInterval: any
  showModal(){
    Swal.fire({
      timer: 2000,
      timerProgressBar: true,
      imageUrl: '../../../../assets/img/modal.jpg',
      imageWidth: 400,
      imageHeight: 500,
      
      didOpen: () => {
        Swal.showLoading()
        
        this.timerInterval = setInterval(() => {
        }, 100)
      },
      willClose: () => {
        clearInterval(this.timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    
    
  }

}

