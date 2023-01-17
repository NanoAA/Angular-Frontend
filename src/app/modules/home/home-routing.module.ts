import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CocktailsComponent } from "./cocktails/cocktails.component";
import { WineComponent } from './wine/wine.component';
import { RollsComponent } from './rolls/rolls.component';
import { NiguirisComponent } from './niguiris/niguiris.component';
import { SoupComponent } from './soup/soup.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { SaladsComponent } from './salads/salads.component';
import { ThaiComponent } from './thai/thai.component';
import { SashimiComponent } from './sashimi/sashimi.component';

const routes: Routes = [
  {
    path :'',
    component: RestaurantComponent,
  },
  {
    path :'gallery',
    component: GalleryComponent,
  },
  {
    path :'contact',
    component: ContactComponent,
  },

  {
    path :'form',
    component: FormComponent,
  },
  {
    path :'cocktails',
    component: CocktailsComponent,
  },
  {
    path :'wine',
    component: WineComponent,
  },
  {
    path :'rolls',
    component: RollsComponent,
  },
  {
    path :'niguiris',
    component: NiguirisComponent,
  },
  {
    path :'soup',
    component: SoupComponent,
  },
  {
    path :'appetizers',
    component: AppetizersComponent,
  },
  {
    path :'salads',
    component: SaladsComponent,
  },
  {
    path :'rolls',
    component: RollsComponent,
  },
  {
    path :'thai',
    component: ThaiComponent,
  },
  {
    path :'sashimi',
    component: SashimiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
