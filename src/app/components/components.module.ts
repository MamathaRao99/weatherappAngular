import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecentComponent } from './recent/recent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HomeTabComponent,
    FavouritesComponent,
    RecentComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    HttpClientModule,
    TabViewModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    HomeTabComponent,
    FavouritesComponent,
    RecentComponent
  ]
})
export class ComponentsModule { }
