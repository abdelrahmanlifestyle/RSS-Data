import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../service/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  doubleWidthIndex:any = [0,null,null,null,null,null,6];
  rssData = [];
  showedRssData:any = [];
  nummberOfClicks:number = 1;

  constructor(public serviceData: BackendServiceService) {
    this.serviceData.getRssData().subscribe(rssData => {
    this.rssData = rssData.items;
      this.showedRssData = this.rssData.slice(0,7);
    });
    
  }

  ngOnInit() {
  }

  onViewMore(){
    this.nummberOfClicks++;
    this.showedRssData = this.rssData.slice(0 , 7*this.nummberOfClicks);
  }
}
