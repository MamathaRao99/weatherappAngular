import { Component } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {
  recentData: any = [];
  heartFill: any = [];
  favData: any = [];
  favId: boolean = false;
  visible: boolean = false;
  
  onRefresh() {
    this.recentData = JSON.parse(localStorage.getItem('recent') || '[]');
    this.favData = JSON.parse(localStorage.getItem('favourite') || '[]');
    this.recentData.map((ele: any) => {
      this.favData.map((ele1: any) => {
        if (ele.id === ele1.id) {
          this.heartFill[ele1.id] = true;
        }
      })
    })
  }

  addToFav(data: any) {
    this.favData = JSON.parse(localStorage.getItem('favourite') || '[]');
    this.favId = this.favData.some((ele: any) => ele.id === data.id)
  if (!this.favId) {
    this.favData.push(data);
    localStorage.setItem('favourite', JSON.stringify(this.favData));
  }

  }
  removeFav(data: any) {
    this.favData = this.favData.filter((ele: any) => ele.id !== data.id)
    localStorage.setItem('favourite', JSON.stringify(this.favData));
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
    localStorage.removeItem('recent');
    window.location.reload();
  }

  noclr() {
    this.visible = false;
  }
}
