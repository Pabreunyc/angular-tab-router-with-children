import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('%cHelpdeskComponent', 'background-color:green;color:white')
  }

}
