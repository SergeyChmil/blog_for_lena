import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {NoteData} from "./note-data";
import {INote} from "./inote";
import {Links} from "./links";
import {link} from "fs";


@Injectable()
export class NotesService {

  constructor(private http:Http, private links:Links) {

  }

  getNotesApi():Observable<NoteData[]>{
    return this.http.get(this.links.localDataURL)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "NotesService said: server error, getNotesApi"));
  }

  createStock(newNote:INote): Observable<any> {
    console.log(newNote)
    return this.http.post(this.links.localDataURL, {header: newNote.header, body: newNote.body, images: newNote.images,
      article: newNote.article})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "getStocksAPI says: error"));
  };

}
