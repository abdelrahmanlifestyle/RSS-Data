import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {


@Input() viewedData: any;

  constructor() { }

  ngOnInit() {
  }

}
