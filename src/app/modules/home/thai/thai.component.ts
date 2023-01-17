import { Component } from '@angular/core';

@Component({
  selector: 'app-thai',
  templateUrl: './thai.component.html',
  styleUrls: ['./thai.component.scss']
})
export class ThaiComponent {
  folders: Section[] = [
    {
      name: 'Pollo al Curry',
      detail:'Julianas de pollo salteadas con vegetales,',
      number: '$19.00',
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