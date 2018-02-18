import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../service/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rssData = [];
  showedRssData:any = [];
  // restOfRssData:any = [];
  nummberOfClicks:number = 1;

  constructor(public serviceData: BackendServiceService) {
    this.serviceData.getRssData().subscribe(rssData => {
    this.rssData = rssData.items;
      console.log(this.rssData);
      this.showedRssData = this.rssData.slice(0,7);
      // this.restOfRssData = this.rssData.slice(7,this.rssData.length);
    });
  }

  ngOnInit() {
  }

  onViewMore(){
    this.nummberOfClicks = 2;
    this.showedRssData = this.rssData.slice(0 , 7*this.nummberOfClicks);
  }

}
