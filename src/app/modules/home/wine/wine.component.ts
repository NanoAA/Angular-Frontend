import { Component } from '@angular/core';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss']
})
export class WineComponent {

  
  beatricepinotgrigio: Section[] = [
    {
      name: 'Beatrice Pinot Grigio',
      number: '$26.00',
    },
  ]; 
  espumantegolmedianblancdeblancs: Section[] = [
    {
      name: 'Espumante Gol Median Blancde Blancs',
      number: '$25.00',
    },
  ];
  espumantegolmesianrose: Section[] = [
    {
      name: 'Espumante Gol Mesian Rose',
      number: '$25.00',
    },
  ];

  espumantegolmesianmullerthurgan: Section[] = [
    {
      name: 'Espumante Gol Mesian MüLler Thurgan',
      number: '$25.00',
    },
  ];

  asticariccadonna: Section[] = [
    {
      name: 'ASTICA RICCADONNA',
      number: '$70.00',
    },
  ];

  elyssiagrancuveebrut: Section[] = [
    {
      name: 'ELYSSIA GRAN CUVEE BRUT',
      number: '$70.00',
    },
  ];
  bollingerbrut: Section[] = [
    {
      name: 'BOLLINGER BRUT',
      number: '$145.00',
    },
  ];

  elyssiagrancuveepinotnoir: Section[] = [
    {
      name: 'ELYSSIA GRAN CUVEE PINOT NOIR',
      number: '$75.00',
    },
  ];


  moetchandonbrutimperial: Section[] = [
    {
      name: 'MOET & CHANDON BRUT IMPERIAL',
      number: '$120.00',
    },
  ];

  salenteinchardonnay: Section[] = [
    {
      name: 'SALENTEIN CHARDONNAY',
      number: '$27.00',
    },
  ];

  pomar: Section[] = [
    {
      name: 'POMAR',
      number: '$20.00',
    },
  ];

  gatonegro: Section[] = [
    {
      name: 'GATO NEGRO',
      number: '$18.00',
    },
  ];

  castillomolinasauvgblanc: Section[] = [
    {
      name: 'CASTILLO MOLINA SAUVG BLANC',
      number: '$25.00',
    },
  ];
  
  santacarolinareservasauvigb: Section[] = [
    {
      name: 'Santa Carolina Reserva Sauvig B',
      number: '$25.00',
    },
  ];

  santacarolinaestrellassauvignon: Section[] = [
    {
      name: 'SANTA CAROLINA ESTRELLAS SAUVIGNON',
      number: '$15.00',
    },
  ];

  losvascoschardonnay: Section[] = [
    {
      name: 'LOS VASCOS CHARDONNAY',
      number: '$30.00',
    },
  ];

  portillomalbecsalentein: Section[] = [
    {
      name: 'PORTILLO MALBEC SALENTEIN',
      number: '$16.00',
    },
  ];

  achavalferrermalbec: Section[] = [
    {
      name: 'ACHAVAL FERRER MALBEC',
      number: '$128.00',
    },
  ];

  lasmorasvmalbec: Section[] = [
    {
      name: 'LAS MORAS V MALBEC',
      number: '$23.00',
    },
  ];
  
  cavicmoscatoredwine: Section[] = [
    {
      name: 'CAVIC MOSCATO RED WINE ',
      number: '$17.00',
    },
  ];
  
    
  salenteinreservemalbec: Section[] = [
    {
      name: 'SALENTEIN RESERVE MALBEC ',
      number: '$27.00',
    },
  ];

  bodegaprivadamalbec: Section[] = [
    {
      name: 'BODEGA PRIVADA MALBEC',
      number: '$18.00',
    },

  ];
  
  zhiklicorosomalbec: Section[] = [
    {
      name: 'ZHIK LICOROSO MALBEC',
      number: '$88.00',
    },
  ];

  catenacabernet: Section[] = [
    {
      name: 'CATENA CABERNET',
      number: '$77.00',
    },

  ];

  candelaoakmalbec: Section[] = [
    {
      name: 'CANDELA OAK MALBEC',
      number: '$70.00',
    },

  ];
  lindamoramerlotmalbec: Section[] = [
    {
      name: 'LINDA MORA MERLOT MALBEC',
      number: '$13.00',
    },

  ];
  bodegaprivadablendredwine: Section[] = [
    {
      name: 'BODEGA PRIVADA BLEND RED WINE',
      number: '$19.00',
    },

  ];
 
  bodegaprivadacabertsauvg: Section[] = [
    {
      name: 'BODEGA PRIVADA CABERT SAUVG ',
      number: '$19.00',
    },

  ];
  
  sassicaia2009: Section[] = [
    {
      name: 'SASSICAIA 2009',
      number: '$400.00',
    },

  ];

  terredimario: Section[] = [
    {
      name: 'Terre DI Mario',
      number: '$22.00',
    },

  ];


  massiclasicobardolino: Section[] = [
    {
      name: 'MASSI CLASICO BARDOLINO',
      number: '$48.00',
    },

  ];

  massiclasicovalpolicella: Section[] = [
    {
      name: 'MASSI CLASICO VALPOLICELLA',
      number: '$48.00',
    },

  ];

  albamarcabernet: Section[] = [
    {
      name: 'ALBAMAR CABERNET',
      number: '$19.00',
    },

  ];
  
  albamarmerlot: Section[] = [
    {
      name: 'ALBAMAR MERLOT',
      number: '$19.00',
    },

  ];

  castillomolinacarmenere : Section[] = [
    {
      name: 'CASTILLO MOLINA CARMENERE ',
      number: '$25.00',
    },

  ];
  losvascosreservacabernet : Section[] = [
    {
      name: 'LOS VASCOS RESERVA CABERNET',
      number: '$30.00',
    },

  ];
  
  canepanovisimocabernet : Section[] = [
    {
      name: 'CANEPA NOVISIMO CABERNET',
      number: '$20.00',
    },

  ];

    cousinomaculmerlot2018 : Section[] = [
    {
      name: 'COUSIÑO MACUL MERLOT 2018',
      number: '$20.00',
    },

  ];
  
  cousinomaculcabernet2017 : Section[] = [
    {
      name: 'COUSIÑO MACUL CABERNET 2017',
      number: '$20.00',
    },

  ];

  chateaulacroixcabertfrancmerlot : Section[] = [
    {
      name: 'CHATEAU LA CROIX CABERT FRANC MERLOT',
      number: '$33.00',
    },

  ];

  chateautrocardmerlot : Section[] = [
    {
      name: ' CHATEAU TROCARD MERLOT',
      number: '$33.00',
    },

  ];
  
  
  
  elcotocrianza  : Section[] = [
    {
      name: 'EL COTO CRIANZA',
      number: '$30.00',
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