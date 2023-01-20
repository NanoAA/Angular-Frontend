import { Component, OnInit, VERSION  } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent {
  margarita: Section[] = [
      {
        name: 'Margarita Beer',
        number: '$8.00',
      },
    ];
    amazonia: Section[] = [
      {
        name: 'Amazonia',
        number: '$4.00',
      },
    ];
    
    fruitwine: Section[] = [
      {
        name: 'FRUIT WINE',
        number: '$7.00',
      },
    ];

    almodovar: Section[] = [
      {
        name: 'ALMODOVAR ',
        number: '$18.00',
      },
    ];

    proseccocitric: Section[] = [
      {
        name: 'PROSECCO CITRIC',
        number: '$10.00',
      },
    ];
    mojitoclasico: Section[] = [
      {
        name: 'MOJITO CLASICO',
        number: '$4.00',
      },
    ];

    phuket: Section[] = [
      {
        name: 'PHUKET',
        number: '$7.00',
      },
    ];
    mojitostrawberry: Section[] = [
      {
        name: 'MOJITO STRAWBERRY',
        number: '$5.00',
      },
    ];
    mojitopassion: Section[] = [
      {
        name: 'MOJITO PASSION',
        number: '$5.00',
      },
    ];

    mojitoroyal: Section[] = [
      {
        name: 'MOJITO ROYAL',
        number: '$6.00',
      },
    ];

    bambuspritz: Section[] = [
      {
        name: 'BAMBU SPRITZ',
        number: '$9.00',
      },
    ];

    sparklinrose: Section[] = [
      {
        name: 'SPARKLIN ROSE',
        number: '$8.00',
      },
    ];

    margaritapassion: Section[] = [
      {
        name: 'MARGARITA PASSION',
        number: '$7.00',
      },
    ];
    goodwill: Section[] = [
      {
        name: 'GOOD WILL',
        number: '$5.00',
      },
    ];
    aperolspritz: Section[] = [
      {
        name: 'APEROL SPRITZ',
        number: '$10.00',
      },
    ];
    

    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }

}

export interface Section {
  name: string;
  number:string;
}

