import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('%cDocumentComponent', 'background-color:green;color:white');
  }
  ngOnDestroy() {
    console.log('%cDocumentComponent', 'background-color:red;color:white');
  }
}
