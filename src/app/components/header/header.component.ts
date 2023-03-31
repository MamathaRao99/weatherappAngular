import { ApiDataService } from './../../service/api-data.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  searchText: string = "Udupi";
  weatherData: any = [];
  dateObj: number = Date.now();
  recent: any = [];
  constructor(private dataService: ApiDataService , private router: Router) {
  }
  ngOnInit(): void {
    this.searchText = ''
  }

  searchData() {
    this.gettingdata(this.searchText);
    this.searchText = '';
    this.router.navigate(['home']);
    // if(this.weatherData.id === this.)
  }
  gettingdata(city:any) {
    this.dataService.getweatherData(city).subscribe(
      (data:any) => {
        this.weatherData = data;
        localStorage.setItem("weatherData", JSON.stringify(this.weatherData));
        this.recent.push(this.weatherData);
        localStorage.setItem('recent', JSON.stringify(this.recent));
        this.dataService.searchCity = this.weatherData;
      })
  
  
  }
}
