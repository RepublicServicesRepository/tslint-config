import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { ConfirmInputValidators } from '@rsi/core';

@Directive({
  selector: '[rsiAppConfirm]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmInputDirective, multi: true }]
})
export class ConfirmInputDirective implements Validator {
  @Input() with: FormControl;

  validate(c: FormControl): { [key: string]: any } | null {
    return ConfirmInputValidators.confirmInput(this.with)(c);
  }
}
