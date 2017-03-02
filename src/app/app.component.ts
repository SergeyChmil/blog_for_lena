import {Component, OnInit, animate, transition, style, trigger, state} from '@angular/core';
import {NotesService} from "./notes.service";
import {NoteData} from "./note-data";
import {NoteComponent} from "./note/note.component";
import {INote} from "./inote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('noteState', [
      state('inactive', style({
        width: '23.5%'
      })),
      state('active', style({
        width: '100%'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  private _rawData: INote[];
  private _notes: NoteData[] = [];

  constructor(private _notesService: NotesService) {

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
            rawData.imagesPathKey = this._notesService.imagesLink;
            var note: NoteData = new NoteData(rawData);
            // console.log(' fdvdvdfv')
            this._notes.push(note);
          }
        }.bind(this)
      );
  }

  toggleNotes(pNote: NoteData) {
    console.log(pNote)
    for (var key in this._notes) {
      var note: NoteData = this._notes[key];
      note.react(pNote.id)
    }
  }

}
