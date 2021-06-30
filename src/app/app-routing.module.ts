import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';

export const routes: Routes = [
  /* See home-routing.component for main route.
     Add additional routes here... For example:
  */
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
