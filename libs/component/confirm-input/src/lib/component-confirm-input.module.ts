import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmInputDirective } from './confirm-input.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmInputDirective],
  exports: [ConfirmInputDirective]
})
export class ComponentConfirmInputModule { }
