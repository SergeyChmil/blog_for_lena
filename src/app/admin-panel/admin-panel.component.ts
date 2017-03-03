import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor( private modalService: NgbModal ) { }

  open(content){
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
