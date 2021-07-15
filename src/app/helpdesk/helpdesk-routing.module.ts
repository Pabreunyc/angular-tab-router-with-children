import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskDetailsComponent } from './helpdesk-details/helpdesk-details.component';
import { HelpdeskListingComponent } from './helpdesk-listing/helpdesk-listing.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';


const routes: Routes = [
  {
    path: '',    
    component: HelpdeskComponent,
    children: [
      {
        path: '',
        redirectTo: 'listing'
      },
      {
        path: 'listing',
        component: HelpdeskListingComponent
      },
      {
        path: 'details',
        component: HelpdeskDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
