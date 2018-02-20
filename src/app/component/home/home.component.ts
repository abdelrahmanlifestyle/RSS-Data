import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../service/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  rssData: any = [];
  showedRssData: any = [];
  nummberOfClicksOnViewMore: number = 1;
  doublicatedWidthIndexArray: [number] = [0, 6];

  constructor(public serviceData: BackendServiceService) {
    this.serviceData.getRssData().subscribe(rssData => {
      this.rssData = rssData.items;
      this.showedRssData = this.rssData.slice(0, 7);
    });
  }

  ngOnInit() {

  }

  onViewMore() {
    this.nummberOfClicksOnViewMore++;
    if (this.rssData.length > 7 * this.nummberOfClicksOnViewMore) {
      this.doublicatedWidthIndexArray.push(7 * (this.nummberOfClicksOnViewMore - 1));
      this.doublicatedWidthIndexArray.push(7 * this.nummberOfClicksOnViewMore - 1);
      this.showedRssData = this.rssData.slice(0, 7 * this.nummberOfClicksOnViewMore);
    } else {
      debugger;
      this.nummberOfClicksOnViewMore++;
      this.showedRssData = this.rssData.slice(0, 7 * this.nummberOfClicksOnViewMore);
    }
  }

  doublicatedIndexChecker(index) {
    return (this.doublicatedWidthIndexArray.indexOf(index) >= 0);
  }

}
