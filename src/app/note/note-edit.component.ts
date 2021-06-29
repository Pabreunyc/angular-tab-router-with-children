import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService, INote } from './note.service';
import { isNumber } from 'util';
import { CanComponentDeactivate } from '../_guards/unsaved-changes.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  constructor(protected noteService: NoteService, protected router: Router) { }

  ngOnInit() {
    console.log('%cNoteEditComponent', 'background-color:green;color:white');
  }
  ngOnDestroy() {
    console.log('%cNoteComponent', 'background-color:red;color:white');
  }
  canDeactivate(): boolean {
    console.log('checking canDeactivate');
    return true;
  }

  // ==========================================================================
  onClickSubmit(formData: INote) {
    if (formData.name && formData.note) {
      this.noteService.addNote(formData.name, formData.note);
    }
    this.router.navigate(['notes/list']);
  }
}
