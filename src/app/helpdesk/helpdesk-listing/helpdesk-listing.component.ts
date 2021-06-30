import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk-listing',
  templateUrl: './helpdesk-listing.component.html',
  styleUrls: ['./helpdesk-listing.component.css']
})
export class HelpdeskListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('%cHelpdeskListingComponent', 'background-color:green;color:white')
  }

}
