import { FormControl, Validators } from '@angular/forms';

class ConfirmInputValidator extends Validators {

  public static confirmInput = (source: FormControl) => {
    return (control: FormControl): { [key: string]: any } | null => {
      const matches = source.value === control.value;

      return matches ? null : { confirm: { value: control.value } };
    };
  }
}

export { ConfirmInputValidator };
