import { Component } from '@angular/core';

@Component({
  selector: 'app-sashimi',
  templateUrl: './sashimi.component.html',
  styleUrls: ['./sashimi.component.scss']
})
export class SashimiComponent {
  folders: Section[] = [
    {
      name: 'Salmón',
      detail:'Salmón ',
      number: '$16.00',
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