import { Component } from '@angular/core';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent {
    folders: Section[] = [
      {
        name: 'Margarita Beer',
        number: '$8.00',
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

