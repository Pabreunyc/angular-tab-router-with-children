import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk-details',
  templateUrl: './helpdesk-details.component.html',
  styleUrls: ['./helpdesk-details.component.css']
})
export class HelpdeskDetailsComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnInit() {
    console.log('%cHelpdeskDetailsComponent', 'background-color:green;color:white');
  }
  ngOnDestroy(): void {
    console.log('%cHelpdeskDetailsComponent', 'background-color:red;color:white');
  }
  
}
