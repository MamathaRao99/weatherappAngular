import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecentComponent } from './recent/recent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { HometabComponent } from './hometab/hometab.component';
import { FooterComponent } from './footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FavouritesComponent,
    RecentComponent,
    FooterComponent,
    HometabComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FavouritesComponent,
    RecentComponent,
    FooterComponent,
    HometabComponent,

  ]
})
export class ComponentsModule { }
