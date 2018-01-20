import {Component, OnInit, trigger, state, style, transition, animate, Input} from '@angular/core';
import {INote} from "../inote";
import {NoteData} from "../note-data";
import {NotesService} from "../notes.service";
import {WindowRefService} from "../window.service";
import {Links} from "../links";
import {Subject} from "rxjs";

@Component({
  selector: 'app-notes-dashboard',
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css'],
  animations: [
    trigger('noteExpand', [
      state('inactive', style({
        width: '23.5%'
      })),
      state('active', style({
        width: '100%'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})
export class NotesDashboardComponent implements OnInit {

  private _rawData: INote[];
  private _rawData2: number = 23;
  private _notes: NoteData[] = [];
  private _showedNotes: NoteData[] = [];
  private _window: Window;
  @Input() currentList:string;
  @Input() parentSubject:Subject<any>;

  constructor(private _notesService: NotesService,  private  windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit() {
    this.loadData();


    this.parentSubject.subscribe(
      event => {
        this.toggleDisplayList(event);
      }
    )
  }

  private loadData() {
    this._notesService.getNotesApi()
      .subscribe(
        data => this._rawData = data,
        error => console.log('AppComponent said: Server error'),
        function () {
          for (var key in this._rawData) {
            var rawData:INote = this._rawData[key];
            var note: NoteData = new NoteData(rawData);
            this._notes.push(note);
            // this.toggleDisplayList(this.currentList);
            // this._showedNotes.push(note);
          }
          this.toggleDisplayList(this.currentList);
          console.log(this.currentList)
        }.bind(this)
      );
  }

  toggleDisplayList(pState:string){
    this._showedNotes = [];
    for(var key in this._notes){
      var note:NoteData = this._notes[key];
      if(note.article === pState){
        this._showedNotes.push(note);
      }
    }
  }

  toggleNotes(pNote: NoteData) {
    for (var key in this._notes) {
      var note: NoteData = this._notes[key];
      note.react(pNote.id)
    }
  }

  focusOnNote(event, pId:any){
    if(event.toState==="active"){
      let element = document.getElementById('note' + pId);
      this._window.scrollTo(0, element.offsetTop);
      // console.log(this.currentList)
    }
  }

  getOrder():number{
    return 1;
  }

}
