import { Component } from '@angular/core';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.scss']
})
export class SoupComponent {
  sopamiso: Section[] = [
    {
      name: 'Sopa Miso',
      number: '$5.00',
    }];

    ebisoup: Section[] = [
      {
        name: 'Ebi Soup ',
        number: '$10.00',
      }];

      sopabambu: Section[] = [
        {
          name: 'Sopa Bambu',
          number: '$12.00',
        }];

        scroll(el: HTMLElement) {
          el.scrollIntoView({behavior: 'smooth'});
      }
      

}

export interface Section {
name: string;
number:string;

}
