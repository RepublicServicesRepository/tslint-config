import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmInputDirective } from './confirm-input.directive';
import { ConfirmInputValidator } from './confirm-input.validator';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmInputDirective],
  exports: [ConfirmInputDirective, ConfirmInputValidator]
})
export class ComponentConfirmInputModule { }
