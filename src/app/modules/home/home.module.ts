import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    GalleryComponent,
    ContactComponent,
    FormComponent,
    RestaurantComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule
  ]
})
export class HomeModule { }
