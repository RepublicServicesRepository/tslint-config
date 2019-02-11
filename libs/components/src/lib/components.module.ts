import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class ComponentsModule {}
