import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('%cPhotoComponent', 'background-color:green;color:white');
  }
  ngOnDestroy() {
    console.log('%cPhotoComponent', 'background-color:red;color:white');
  }
}
