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
import { CocktailsComponent } from './cocktails/cocktails.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { WineComponent } from './wine/wine.component';
import { NiguirisComponent } from './niguiris/niguiris.component';
import { SoupComponent } from './soup/soup.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { SaladsComponent } from './salads/salads.component';
import { RollsComponent } from './rolls/rolls.component';
import { ThaiComponent } from './thai/thai.component';
import { SashimiComponent } from './sashimi/sashimi.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    GalleryComponent,
    ContactComponent,
    FormComponent,
    RestaurantComponent,
    CocktailsComponent,
    WineComponent,
    NiguirisComponent,
    SoupComponent,
    AppetizersComponent,
    SaladsComponent,
    RollsComponent,
    ThaiComponent,
    SashimiComponent,
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
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule  
  ]
})
export class HomeModule { }
