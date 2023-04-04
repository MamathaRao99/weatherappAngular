import { Component, Input } from '@angular/core';
import { ApiDataService } from 'src/app/service/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private cityService: ApiDataService) { }
  cityData: any = [];
  iconUrl !: string;
  heartFill: boolean = false;
  fav: any = [];
  favId: boolean = false;

  cityDataDetails() {
    this.cityData = this.cityService.searchCity;
    this.cityData = JSON.parse(localStorage.getItem('weatherData') || "[]")
    this.iconUrl = 'https://openweathermap.org/img/wn/' + this.cityData.weather[0].icon + '@2x.png'
    console.log(this.cityData)
    this.onRefresh();
  }

  onRefresh() {
    this.fav = JSON.parse(localStorage.getItem('favourite') || '[]');
    this.favId = this.fav.some((fav: any) => fav.id === this.cityData.id);
    if (this.favId) {
      this.heartFill = true;
    }
    else {
      this.heartFill = false;
    }

  }

  addToFav() {
    this.heartFill = true;
    this.fav = JSON.parse(localStorage.getItem('favourite') || '[]');
    this.favId = this.fav.some((ele: any) => ele.id === this.cityData.id)
    if (!this.favId) {
      this.fav.push(this.cityData);
      localStorage.setItem('favourite', JSON.stringify(this.fav));
    }

  }
  removeFav() {
    this.heartFill = false;
    this.fav = this.fav.filter((ele: any) => ele.id !== this.cityData.id)
    localStorage.setItem('favourite', JSON.stringify(this.fav));
  }

}
