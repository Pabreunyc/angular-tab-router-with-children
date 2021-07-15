import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { HelpdeskService } from 'src/app/_services/helpdesk.service';
import { TPost, IPost } from 'src/app/_services/helpdesk.service';
@Component({
  selector: 'app-helpdesk-listing',
  templateUrl: './helpdesk-listing.component.html',
  styleUrls: ['./helpdesk-listing.component.css']
})
export class HelpdeskListingComponent implements OnInit, OnDestroy {
  posts$: Observable<TPost[]>;

  constructor(
    private helpdesk: HelpdeskService
  ) { }
  
  ngOnInit(): void {
    console.log('%cHelpdeskListingComponent', 'background-color:green;color:white');
    this._init();
  }
  ngOnDestroy(): void {
    console.log('%cHelpdeskListingComponent', 'background-color:red;color:white')
  }
  // ==========================================================================

  private _init() {
    this.posts$ = this.helpdesk.getPosts()
      .pipe(
        tap(console.log),
        delay(1000)
      );
  }
}
