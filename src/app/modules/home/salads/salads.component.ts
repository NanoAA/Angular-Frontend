import { Component } from '@angular/core';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.scss']
})
export class SaladsComponent {

  wakame: Section[] = [
    {
      name: 'Wakame',
      number: '$10.00',
    }, ];

    ocean: Section[] = [
      {
        name: 'Ocean',
        number: '$22.00',
      }, ];

    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }
  

}

export interface Section {
name: string;
number:string;

}