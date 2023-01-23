import { Component } from '@angular/core';

@Component({
  selector: 'app-sashimi',
  templateUrl: './sashimi.component.html',
  styleUrls: ['./sashimi.component.scss']
})
export class SashimiComponent {
   
  Salmon: Section[] = [
    {
      name: 'Salmón',
      number: ' 4 piezas $16.00 + Opciones',
    }, ];

    atun: Section[] = [
      {
        name: ' Atún ',
        number: '4 piezas $16.00 + Opciones',
      }, ];

      mixtos: Section[] = [
        {
          name: 'Mixtos',
          number: '16 piezas $55.00 + Opciones',
        }, ];



              

    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }
  


}

export interface Section {
name: string;
number:string;

}