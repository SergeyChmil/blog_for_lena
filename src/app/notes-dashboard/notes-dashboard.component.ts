import {Component, OnInit, trigger, state, style, transition, animate, Input} from '@angular/core';
import {INote} from "../inote";
import {NoteData} from "../note-data";
import {NotesService} from "../notes.service";
import {WindowRefService} from "../window.service";

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
  private _notes: NoteData[] = [];
  private _window: Window;
  @Input() currentList:string;

  constructor(private _notesService: NotesService,  private  windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this._notesService.getNotesApi()
      .subscribe(
        data => this._rawData = data,
        error => console.log('AppComponent said: Server error'),
        function () {
          for (var key in this._rawData) {
            var rawData:INote = this._rawData[key];
            rawData.imagesPathKey = this._notesService.imagesURL;
            var note: NoteData = new NoteData(rawData);
            this._notes.push(note);
          }
        }.bind(this)
      );
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
    }
  }

}
