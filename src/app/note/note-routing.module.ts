import { NgModule } from '@angular/core';
import { RouterModule,
  Routes,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { NoteGuard } from '../_guards/note.guard';
import { UnsavedChangesGuard } from '../_guards/unsaved-changes.guard';


import {
  NoteComponent,
  NoteDeleteComponent,
  NoteDetailComponent,
  NoteListComponent,
  NoteEditComponent
} from './';

const routes: Routes = [
  {
    path: '',
    component: NoteComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: NoteListComponent,
        canActivate: [NoteGuard],
        data:
        {
          title: 'List',
        }
      },
      {
        path: 'edit',
        component: NoteEditComponent,
        canDeactivate: [UnsavedChangesGuard],
        data:
        {
          title: 'Edit',
        }
      },
      {
        path: 'detail/:id',
        component: NoteDetailComponent,
        data:
        {
          title: 'Detail',
        }
      },
      {
        path: 'delete/:id',
        component: NoteDeleteComponent,
        data:
        {
          title: 'Delete',
        }
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class NoteRoutingModule { }
