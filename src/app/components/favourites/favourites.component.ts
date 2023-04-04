import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  favData: any = JSON.parse(localStorage.getItem('favourite') || '[]');
  heartFill: boolean = false;
  fav: any = [];
  favId: boolean = false;
  visible : boolean = false;

  onRefresh() {
    this.fav = JSON.parse(localStorage.getItem('favourite') || '[]');
  }
  removeFavourites(data : any) {
    this.fav = this.fav.filter((ele: any) => ele.id !== data.id);
    localStorage.setItem('favourite', JSON.stringify(this.fav));
    window.location.reload();
  }

  showDialog() {
    this.visible = true;
  }
  clear() {
    this.visible = true;
  }
  yes() {
    this.visible = false;
    localStorage.removeItem('favourite');
    window.location.reload();
  }

  noclr() {
    this.visible = false;
  }

}





