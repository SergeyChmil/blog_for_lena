import {Component, OnInit, ViewEncapsulation, Inject, EventEmitter, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NotesService} from "../notes.service";
import {NoteData} from "../note-data";
import {INote} from "../inote";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  @Input() menuButtons:string[];

  constructor(private modalService: NgbModal, private noteService: NotesService) {
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  createNote(newNoteBody: string, newNoteHeader: string, newNoteArticle:string) {
    var newNote: INote = {
      id: null,
      article: newNoteArticle,
      icon: "",
      header: newNoteHeader,
      date: "",
      body: newNoteBody,
      shortBody: "",
      images: [{
        path: "",
        text: "",
        alt_text: ""
      }],
      react(id){  }
    };

    if(newNoteBody !== "" || newNoteHeader !== ""){
      this.noteService.createStock(newNote).subscribe(
        data => { },
        error => console.log('AdminPanel said: Error loading new note')
      );
    }


  }

}
