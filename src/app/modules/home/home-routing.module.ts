import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
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
    path :'restaurant',
    component: RestaurantComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
