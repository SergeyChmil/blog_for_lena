import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {NoteData} from "./note-data";

@Injectable()
export class NotesService {

  private _localDataURL:string;
  imagesURL: string;
  private _localDomainURL: string;

  constructor(private http:Http) {
    this._localDataURL = "http://localhost:3000/notes";
    this._localDomainURL = "http://localhost:4200";
    this.imagesURL = "src/imgs/notes_illustrations/";
  }

  getNotesApi():Observable<NoteData[]>{
    return this.http.get(this._localDataURL)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "NotesService said: server error, getNotesApi"));
  }

  createStock(newNoteBody: string, newNoteHeader: string): Observable<any> {

    var imageDummy:Object[] = [{
      "path": "",
      "text": "",
      "alt_text": ""
    }];




    return this.http.post(this._localDataURL, {header: newNoteHeader, body: newNoteBody, images: imageDummy})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "getStocksAPI says: error"));
  };

}
