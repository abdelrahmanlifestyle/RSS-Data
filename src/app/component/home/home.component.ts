import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../../service/backend-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rssData = [];


  constructor(public serviceData: BackendServiceService) {
    this.serviceData.getRssData().subscribe(rssData => {
    this.rssData = rssData.items;
      console.log(this.rssData);
    });
  }

  ngOnInit() {
  }

}
