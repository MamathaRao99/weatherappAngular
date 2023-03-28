import { RecentComponent } from './recent/recent.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'favourite',component: FavouritesComponent},
  {path:'recent',component: RecentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
