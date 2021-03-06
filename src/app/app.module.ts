import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {NotesService} from "./notes.service";
import { NoteComponent } from './note/note.component';
import {WindowRefService} from "./window.service";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import {Links} from "./links";

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AdminPanelComponent,
    NotesDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [NotesService, WindowRefService, Links],
  bootstrap: [AppComponent]
})
export class AppModule { }
