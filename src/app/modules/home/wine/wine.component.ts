import { Component } from '@angular/core';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {

  
  folders: Section[] = [
    {
      name: 'Beatrice Pinot Grigio',
      number: '$26.00',
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
number:string;
}