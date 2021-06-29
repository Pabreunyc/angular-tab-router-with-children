import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('%cAdminComponent', 'background-color:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cAdminComponent', 'background-color:red;color:white');
  }
}
