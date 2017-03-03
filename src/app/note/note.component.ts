import {Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, NgZone} from '@angular/core';
import {NoteData} from "../note-data";
import {IImage} from "../inote";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, AfterViewInit {

  @Input() private _data: NoteData;
  // @ViewChild('cardo') el: ElementRef;

  private _images: IImage[] = [];
  public state: string = "inactive";
  order:number = 0;
  private _ctaBtnText: string = "Читать далее";

  constructor(private _ngZone: NgZone,) {
  }

  ngOnInit() {
    this.createImages();
    this.order = this._data.id +1;
  }

  ngAfterViewInit() {
    this._data.emitter.subscribe(
      data => this.toggleState(data),
      error => console.log('Note Component clicked emit error')
    );
  }

  private createImages() {
    for (var i: number = 0; i < this._data.images.length; i++) {
      let image: IImage = this._data.images[i];
      this._images.push(image);

    }
  }

  toggleState(pSignal: string) {

    if (this.state === 'inactive' && pSignal === 'true') {

      this.order = 0;
      this.state = 'active';

      // console.log('toggleState true2')
    } else if (this.state === 'active' && pSignal === 'false') {
      this.order = this._data.id + 1;
      this.state = 'inactive';

      // console.log('toggleState false')
    }
  }

}
