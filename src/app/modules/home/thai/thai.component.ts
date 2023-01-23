import { Component } from '@angular/core';

@Component({
  selector: 'app-thai',
  templateUrl: './thai.component.html',
  styleUrls: ['./thai.component.scss']
})
export class ThaiComponent {
   
  polloalcurry: Section[] = [
    {
      name: 'Pollo al Curry ',
      number: '$19.00',
    }, ];

    lomitocremycoco: Section[] = [
      {
        name: ' Lomito cremy coco',
        number: '$21.00',
      }, ];

      lomitojengibre: Section[] = [
        {
          name: 'Lomito jengibre',
          number: '$16.00',
        }, ];

        lomitocitrus: Section[] = [
          {
            name: 'Lomito citrus',
            number: '$22.00',
          }, ];


          meropanang: Section[] = [
          {
            name: 'Mero panang',
            number: '$30.00',
          }, ];
          
          merodossabores: Section[] = [
            {
              name: 'Mero dos sabores ',
              number: '$30.00',
            }, ];
            
            
          
            merocebollin: Section[] = [
              {
                name: 'Mero cebollin',
                number: '$27.00',
              }, ];

                        
              salmonwasabi: Section[] = [
              {
                name: 'Salmon wasabi',
                number: '$30.00',
              }, ];

              arrozalacarta: Section[] = [
                {
                  name: 'Arroz a la carta ',
                  number: '$17.00',
                }, ];

                arrozyakimeshi: Section[] = [
                  {
                    name: 'Arroz yakimeshi ',
                    number: '$18.00',
                  }, ];

                  arrozbangkok: Section[] = [
                    {
                      name: 'Arroz bangkok',
                      number: '$18.00',
                    }, ];

                    arrozmalai: Section[] = [
                      {
                        name: 'Arroz malai ',
                        number: '$30.00',
                      }, ];

                      tallarinesdepolloolomito: Section[] = [
                        {
                          name: 'Tallarines de pollo o lomito',
                          number: '$17.00',
                        }, ];

                        tallarinesmixtos: Section[] = [
                          {
                            name: 'Tallarines mixtos',
                            number: '$18.00',
                          }, ];

                          padthaidepolloolomito: Section[] = [
                            {
                              name: 'Pad thai de pollo o lomito',
                              number: '$17.00',
                            }, ];

                            padthaimixto: Section[] = [
                              {
                                name: 'Pad thai mixto ',
                                number: '$19.00',
                              }, ];

                              noodleskyoto: Section[] = [
                                {
                                  name: 'Noodles Kyoto',
                                  number: '$25.00',
                                }, ];


              

    scroll(el: HTMLElement) {
      el.scrollIntoView({behavior: 'smooth'});
  }
  

}

export interface Section {
name: string;
number:string;

}