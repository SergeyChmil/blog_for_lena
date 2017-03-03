import {INote, IImage} from "./inote";
import {OnInit, EventEmitter} from "@angular/core";

export class NoteData implements INote, OnInit {
  // id:number;
  // header:string;
  // icon:string;
  // date:string;
  // body:string;
  // shortBody:string;
  // images:IImage[];

  public emitter: EventEmitter<string>;

  constructor(private inputData: INote) {
    this.emitter = new EventEmitter();
    this.createShortText();
  }

  react(pId: number) {
    if (pId === this.id) {
      this.emitter.emit('true');
      // console.log('event ')
    } else {
      this.emitter.emit('false');
    }
  }

  ngOnInit() {
    // this.createShortText();
  }

  private createShortText() {
    var rawShortString: string = this.body.substr(0, 299);
    var spaces: number = rawShortString.split(" ").length - 1;
    var finishIndex: number = rawShortString.lastIndexOf(' ');

    var finalText = (rawShortString.substr(0, finishIndex));
    var newSymbolsInTheEndOfText: string = '...';
    if (finalText.charAt(finalText.length - 1) === '.') {
      newSymbolsInTheEndOfText = '..'
    }

    this.shortBody = finalText.concat(newSymbolsInTheEndOfText);
  }

  /***
   * Getters
   */

  get id(): number {
    return this.inputData.id;
  }

  get header(): string {
    return this.inputData.header;
  }

  get icon(): string {
    return this.inputData.icon;
  }

  get date(): string {
    return this.inputData.date;
  }

  get body(): string {
    return this.inputData.body;
  }

  get images(): IImage[] {
    return this.inputData.images;
  }

  get imagesPathKey(): string{
    return this.inputData.imagesPathKey;
  }

  get shortBody(): string {
    return this.inputData.shortBody;
  }

  /***
   * Setters
   */

  set shortBody(pString: string) {
    this.inputData.shortBody = pString;
  }

}


