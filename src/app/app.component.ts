import {Component, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  private menuButtons:string[] = ['Китай', "не Китай"];
  private currentList:string = this.menuButtons[0];
  parentSubject:Subject<any> = new Subject();

  constructor( ) {}

  ngOnInit() { }

  onSelect(newList:any){
    this.currentList = newList;
    this.parentSubject.next(newList);
  }

}
