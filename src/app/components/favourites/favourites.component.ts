import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
 favData: any = JSON.parse(localStorage.getItem('favourites') || '[]');
}
