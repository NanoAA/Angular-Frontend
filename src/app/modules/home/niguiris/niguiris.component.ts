import { Component } from '@angular/core';

@Component({
  selector: 'app-niguiris',
  templateUrl: './niguiris.component.html',
  styleUrls: ['./niguiris.component.scss']
})
export class NiguirisComponent {

  niguiridesalmon: Section[] = [
    {
      name: 'Niguiri de salmón',
      number: '$3.00',
    },
  ];

  niguiridetun: Section[] = [
    {
      name: 'Niguiri de atún',
      number: '$3.00',
    },
  ];

  niguirideanguila: Section[] = [
    {
      name: 'Niguiri de anguila',
      number: '$8.00',
    },
  ];

  
  niguiriebi: Section[] = [
    {
      name: 'Niguiri ebi',
      number: '$5.00',
    },
  ];
  
  niguirideikura: Section[] = [
    {
      name: 'Niguiri de ikura',
      number: '$11.00',
    },
  ];

  niguiridepescadoblanco: Section[] = [
    {
      name: 'Niguiri de pescado blanco',
      number: '$2.00',
    },
  ];
  
  niguiridemasago: Section[] = [
    {
      name: 'Niguiri de Masago',
      number: '$7.00',
    },
  ];
  
  niguiridekani: Section[] = [
    {
      name: 'Niguiri de kani',
      number: '$3.00',
    },
  ];
  
  niguiriscrunk: Section[] = [
    {
      name: 'Niguiris crunk',
      number: '$23.00',
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
