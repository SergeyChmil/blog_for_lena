import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, NgZone} from '@angular/core';
import {NoteData} from "../note-data";
import {IImage} from "../inote";
import {Links} from "../links";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, AfterViewInit {

  @Input() private _data: NoteData;
  @Input() private _currentList: string;

  private _images: IImage[] = [];
  public state: string = "inactive";
  public zOrder: number;
  private _ctaBtnText: string = "Читать далее";

  constructor(private _ngZone: NgZone, private _links:Links) {
  }

  ngOnInit() {
    this.zOrder =  this._data.id + 1;
    this.createImages();
  }

  ngAfterViewInit() {
    this._data.emitter.subscribe(
      data => this.toggleState(data),
      error => console.log('Note Component clicked emit error')
    );
  }

  createImages() {
      for (var i: number = 0; i < this._data.images.length; i++) {
        let image: IImage = this._data.images[i];
        this._images.push(image);
      }
  }

  toggleState(pSignal: string) {
    if (this.state === 'inactive' && pSignal === 'true') {
      this.zOrder = 0;
      this.state = 'active';
    }
    else if (this.state === 'active' && pSignal === 'false') {
      this.zOrder = this._data.id + 1;
      this.state = 'inactive';
    }
  }

}
