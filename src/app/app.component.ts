import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  private currentList:string = 'Китай';

  constructor( ) {}

  ngOnInit() {}

  onSelect(newList:string){
    this.currentList = newList;
  }

}
