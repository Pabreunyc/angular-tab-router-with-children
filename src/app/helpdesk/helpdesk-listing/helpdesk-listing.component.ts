import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk-listing',
  templateUrl: './helpdesk-listing.component.html',
  styleUrls: ['./helpdesk-listing.component.css']
})
export class HelpdeskListingComponent implements OnInit, OnDestroy {

  constructor() { }
  
  ngOnInit(): void {
    console.log('%cHelpdeskListingComponent', 'background-color:green;color:white')
  }
  ngOnDestroy(): void {
    console.log('%cHelpdeskListingComponent', 'background-color:red;color:white')
  }
}
