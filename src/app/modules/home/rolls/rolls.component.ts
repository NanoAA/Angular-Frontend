import { Component } from '@angular/core';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.scss']
})
export class RollsComponent {
  
  
  alaska: Section[] = [
    {
      name: 'Alaska',
      number: '$20.00',
    }, ];

    alaskaespecial: Section[] = [
      {
        name: 'Alaska especial',
        number: '$27.00',
      }, ];

      dinamita: Section[] = [
        {
          name: 'Dinamita',
          number: '$19.00',
        }, ];

        dinamitaespecial: Section[] = [
          {
            name: 'Dinamita especial',
            number: '$23.00',
          }, ];


          ebirollespecial: Section[] = [
          {
            name: 'Ebi roll especial',
            number: '$18.00',
          }, ];
          
          spicytuna: Section[] = [
            {
              name: 'Spicy tuna',
              number: '$22.00',
            }, ];
            
            
          
            california: Section[] = [
              {
                name: 'California ',
                number: '$17.00',
              }, ];

                        
              proteinas: Section[] = [
              {
                name: 'Proteinas ',
                number: '$27.00',
              }, ];

              trioroll: Section[] = [
                {
                  name: 'Trio roll',
                  number: '$27.00',
                }, ];

                kiuri: Section[] = [
                  {
                    name: 'Kiuri ',
                    number: '$27.00',
                  }, ];

                  springroll: Section[] = [
                    {
                      name: 'Spring roll',
                      number: '$24.00',
                    }, ];

                    tiger: Section[] = [
                      {
                        name: 'Tiger ',
                        number: '$22.00',
                      }, ];

                      tigerespecial: Section[] = [
                        {
                          name: 'Tiger especial',
                          number: '$30.00',
                        }, ];

                        dragonroll: Section[] = [
                          {
                            name: 'Dragón roll ',
                            number: '$17.00',
                          }, ];

                          crazykani: Section[] = [
                            {
                              name: 'Crazy kani',
                              number: '$19.00',
                            }, ];

                            scuba: Section[] = [
                              {
                                name: 'Scuba ',
                                number: '$27.00',
                              }, ];

                              phiphi: Section[] = [
                                {
                                  name: 'Phi phi',
                                  number: '$22.00',
                                }, ];

                                bambu: Section[] = [
                                  {
                                    name: 'Bambu ',
                                    number: '$30.00',
                                  }, ];

                                  osaka: Section[] = [
                                    {
                                      name: 'Osaka',
                                      number: '$30.00',
                                    }, ];

                                    bambunew: Section[] = [
                                      {
                                        name: 'bambu new',
                                        number: '$30.00',
                                      }, ];

                                      tentacion: Section[] = [
                                        {
                                          name: 'Tentación',
                                          number: '$22.00',
                                        }, ];

                                        yinyan: Section[] = [
                                          {
                                            name: 'Yin yan',
                                            number: '$27.00',
                                          }, ];

                                          susuki: Section[] = [
                                            {
                                              name: 'Susuki ',
                                              number: '$26.00',
                                            }, ];

                                            fuji: Section[] = [
                                              {
                                                name: 'Fuji ',
                                                number: '$30.00',
                                              }, ];

                                            noriceroll: Section[] = [
                                                {
                                                  name: 'No rice roll',
                                                  number: '$30.00',
                                                }, ];

                                                crispyrice: Section[] = [
                                                  {
                                                    name: 'Crispy rice ',
                                                    number: '$24.00',
                                                  }, ];

                                                  ebirice: Section[] = [
                                                    {
                                                      name: 'Ebi rice ',
                                                      number: '$23.00',
                                                    }, ];

                                                    surimi: Section[] = [
                                                      {
                                                        name: 'Surimi ',
                                                        number: '$22.00',
                                                      }, ];
                                                      musa: Section[] = [
                                                        {
                                                          name: 'Musa ',
                                                          number: '$22.00',
                                                        }, ];

                                                        exclusivo: Section[] = [
                                                          {
                                                            name: 'Exclusivo ',
                                                            number: '$30.00',
                                                          }, ];


              

    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }
  

  
}

export interface Section {
name: string;
number:string;

}