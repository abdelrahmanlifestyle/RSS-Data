import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() onClickAction = new EventEmitter<boolean>();
  @Input() moreItemsChecher;
  
  constructor() { }

  ngOnInit() {

  }

  myFunction(){
    this.onClickAction.emit();
  }

}
