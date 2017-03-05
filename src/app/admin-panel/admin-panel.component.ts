import {Component, OnInit, ViewEncapsulation, Inject, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NotesService} from "../notes.service";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor( private modalService: NgbModal, private noteService:NotesService) { }

  open(content){
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  createNote(newNoteBody:string, newNoteHeader:string){
    this.noteService.createStock(newNoteBody,newNoteHeader).subscribe(
      data => { },
      error => console.log('sdvdfvdbgrgb 1111111111111')
    );
  }

}
