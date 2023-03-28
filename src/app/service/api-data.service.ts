import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { 
    
  }
  getweatherData(city : string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a53344cef106497d3d688f5887f3354f');
  }
  
}
