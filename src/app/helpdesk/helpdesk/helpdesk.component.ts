import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.css']
})
export class HelpdeskComponent implements OnInit, OnDestroy {
public navLinks: any[];
public activeLinkIndex = -1;
public selectedTabIndex = null;

  constructor(private router: Router) {
    this.navLinks = [
      { label:'Listing', link:'listing', index:1 },
      { label:'Details', link:'details', index:2 },
    ]
    this.activeLinkIndex = 0;
  }

  ngOnInit() {
    console.log('%cHelpdeskComponent', 'background-color:green;color:white');
    console.log(this.router.url);
    console.log(window.history.state);
    const { redirect } = window.history.state;
  }
  ngOnDestroy() {
    console.log('%cHelpdeskComponent', 'background-color:red;color:white');
  }
  // ==========================================================================

  onSelectFocusedIndex(evt) {
    console.log('onSelectFocusedIndex', evt);
  }
  onSelectedIndexChange(evt) {
    console.log('onSelectedIndexChange', evt);
  }

}
