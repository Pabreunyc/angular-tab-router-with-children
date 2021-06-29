import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
