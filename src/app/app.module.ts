import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {NotesService} from "./notes.service";
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
