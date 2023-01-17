import { Component } from '@angular/core';

@Component({
  selector: 'app-niguiris',
  templateUrl: './niguiris.component.html',
  styleUrls: ['./niguiris.component.scss']
})
export class NiguirisComponent {
  folders: Section[] = [
    {
      name: 'Niguiri de salmón',
      detail:'Niguiri de salmón',
      number: '$3.00',
    },
   /* {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },*/
  ];
 /* notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];*/

}

export interface Section {
name: string;
detail:string;
number:string;

}
