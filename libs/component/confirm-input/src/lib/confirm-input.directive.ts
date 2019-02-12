import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

import { ConfirmInputValidator } from './confirm-input.validator';

@Directive({
  selector: '[rsiAppConfirm]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmInputDirective, multi: true }]
})
export class ConfirmInputDirective implements Validator {
  @Input() with: FormControl;

  validate(c: FormControl): { [key: string]: any } | null {
    return ConfirmInputValidator.confirmInput(this.with)(c);
  }
}
