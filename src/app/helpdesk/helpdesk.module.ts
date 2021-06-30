import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { HelpdeskListingComponent } from './helpdesk-listing/helpdesk-listing.component';
import { HelpdeskDetailsComponent } from './helpdesk-details/helpdesk-details.component';


@NgModule({
  declarations: [HelpdeskComponent, HelpdeskListingComponent, HelpdeskDetailsComponent],
  imports: [
    CommonModule,
    HelpdeskRoutingModule
  ],
  exports: [
    HelpdeskRoutingModule
  ]
})
export class HelpdeskModule { }
