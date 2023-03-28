import { ApiDataService } from './../../service/api-data.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText: string = "";
  constructor(private dataService:ApiDataService) { 
  }

  searchData() {
    console.log("SearchData", this.searchText);
    this.dataService.getweatherData(this.searchText).subscribe(data => {
      console.log(data);
    })
  }
  
}
