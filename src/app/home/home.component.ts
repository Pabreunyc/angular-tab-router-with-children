import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy
 {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Notes',
            link: '/notes',
            index: 0
        }, {
            label: 'Photos',
            link: '/photos',
            index: 1
        }, {
            label: 'Documents',
            link: '/documents',
            index: 2
        },
    ];
    this.activeLinkIndex = 0;
  }
  ngOnInit(): void {
    console.log('%cHomeComponent.init', 'background-color:green;color:white;')
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  ngOnDestroy(): void {
    console.log('%cHomeComponent.init', 'background-color:red;color:white;')
  }

 /// =========================================================================
  onSelectFocusedIndex(evt) {
    console.log('onSelectFocusedIndex', evt);
  }
}
