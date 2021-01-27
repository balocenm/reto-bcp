import {FormControl, Validators} from '@angular/forms';

export class AgencyControl extends FormControl {
  static valid = [Validators.required];
  constructor(valor = null) {
    super(valor, AgencyControl.valid);
  }
}
