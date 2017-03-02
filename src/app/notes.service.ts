import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {NoteData} from "./note-data";

@Injectable()
export class NotesService {

  private _linkLocalData:string;
  imagesLink: string;
  private _linkLocalDomain: string;

  constructor(private http:Http) {
    this._linkLocalData = "http://localhost:3000/notes";
    this._linkLocalDomain = "http://localhost:4200";
    this.imagesLink = "src/imgs/notes_illustrations/";
  }

  getNotesApi():Observable<NoteData[]>{
    return this.http.get(this._linkLocalData)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "NotesService said: server error, getNotesApi"));
  }

}
