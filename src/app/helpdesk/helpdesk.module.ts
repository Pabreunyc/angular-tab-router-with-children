import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { HelpdeskListingComponent } from './helpdesk-listing/helpdesk-listing.component';
import { HelpdeskDetailsComponent } from './helpdesk-details/helpdesk-details.component';


@NgModule({
  declarations: [
    HelpdeskComponent,
    HelpdeskListingComponent,
    HelpdeskDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HelpdeskRoutingModule
  ],
  exports: [
    HelpdeskRoutingModule
  ]
})
export class HelpdeskModule { }
