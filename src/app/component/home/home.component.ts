import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../service/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rssData:any = [];
  showedRssData:any = [];
  nummberOfClicks:number = 1;
  doublicatedWidthIndex:[number] = [0,6];

  constructor(public serviceData: BackendServiceService) {
    this.serviceData.getRssData().subscribe(rssData => {
    this.rssData = rssData.items;
      this.showedRssData = this.rssData.slice(0,7);
    });
  }

  ngOnInit() {
  }

  onViewMore(){
    this.doublicatedWidthIndex.push(7*this.nummberOfClicks);
    this.nummberOfClicks++;
    this.doublicatedWidthIndex.push(7*this.nummberOfClicks-1);
    this.showedRssData = this.rssData.slice(0 , 7*this.nummberOfClicks);
  }

  doublicatedIndexChecker(index){
    return (this.doublicatedWidthIndex.indexOf(index)>=0);
  }

}
