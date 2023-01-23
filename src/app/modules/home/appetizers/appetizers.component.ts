import { Component } from '@angular/core';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.scss']
})
export class AppetizersComponent {
  edamame: Section[] = [
    {
      name: 'Edamame',
      number: '$8.00',
    },
  ];

  minipizzadesalmon: Section[] = [
    {
      name: 'Mini pizza de Salmón',
      number: '$19.00',
    },
  ];

  cevichedemero: Section[] = [
    {
      name: 'Ceviche de Mero',
      number: '$17.00',
    },
  ];

  baggafish: Section[] = [
    {
      name: 'Bagga fish',
      number: '$15.00',
    },
  ];

  bolsitasdekani: Section[] = [
    {
      name: 'Bolsitas de Kani',
      number: '$16.00',
    },
  ];

  tiraditoderobalo: Section[] = [
    {
      name: 'Tiradito de róbalo',
      number: '$16.00',
    },
  ];

  langostinoscrunk: Section[] = [
    {
      name: 'Tiradito de róbalo',
      number: '$19.00',
    },
  ];

  phobias: Section[] = [
    {
      name: 'Phobias',
      number: '$19.00',
    },
  ];
  

  nasulangostinos: Section[] = [
    {
      name: 'Nasu langostinos',
      number: '$12.00',
    },
  ];
  
  tunacraker: Section[] = [
    {
      name: 'Tuna Craker',
      number: '$12.00',
    },
  ];
  
  croquetassake: Section[] = [
    {
      name: 'Croquetas sake',
      number: '$10.00',
    },
  ];

  gyosas: Section[] = [
    {
      name: 'Gyosas',
      number: '$8.00',
    },
  ];

  tartardeatunosalmon: Section[] = [
    {
      name: 'Tartar de atún o salmón',
      number: '$19.00',
    },
  ];

  scolar: Section[] = [
    {
      name: 'Scolar',
      number: '$19.00',
    },
  ];
  
  cocoroll: Section[] = [
    {
      name: 'Coco roll',
      number: '$22.00',
    },
  ];

  yakitori: Section[] = [
    {
      name: 'Yakitori',
      number: '$10.00',
    },
  ];

  ebitogarashi: Section[] = [
    {
      name: 'Ebi togarashi',
      number: '$9.00',
    },
  ];

  tunaaesamo: Section[] = [
    {
      name: 'Tuna sésamo',
      number: '$19.00',
    },
  ];

  cevichebites: Section[] = [
    {
      name: 'Ceviche bites',
      number: '$17.00',
    },
  ];

  cookieebi: Section[] = [
    {
      name: 'Cookie Ebi',
      number: '$23.00',
    },
  ];

  spicyextravaganza: Section[] = [
    {
      name: 'Spicy Extravaganza',
      number: '$22.00',
    },
  ];


  nuttysalmon: Section[] = [
    {
      name: 'Nutty Salmón',
      number: '$20.00',
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