import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() clickedAction=new EventEmitter<boolean>();
  @Input() moreItemsChecher: Boolean;
  
  constructor() { }

  ngOnInit() {

  }

  myFunction(){
    this.clickedAction.emit(true);
  }

}
