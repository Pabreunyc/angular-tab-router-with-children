import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnInit() {
    console.log('%cNoteComponent', 'background-color:green;color:white');
  }

  ngOnDestroy(): void {
    console.log('%cNoteComponent', 'background-color:red;color:white');
  }

}
