import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

// @dynamic
@Directive({
  selector: '[rsiConfirm]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmInputDirective, multi: true }]
})
export class ConfirmInputDirective implements Validator {
  @Input() with: FormControl;

  public static confirmInput(source: FormControl) {
    return (control: FormControl): ValidationErrors | null => {
      const matches = source.value === control.value;

      return matches ? null : { confirm: { value: control.value } };
    };
  }

  validate(control: FormControl): ValidationErrors | null {
    return ConfirmInputDirective.confirmInput(this.with)(control);
  }
}
