import { PasswordValidators } from '../../common/validators/password.validators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'change-password',
  template: `
  name: <input type="text" [formControl]="name">
  `,
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
    name = new FormControl('');

    //   form: FormGroup;
//   constructor(fb: FormBuilder) {
//     this.form = fb.group({
//       oldPassword: ['', 
//         Validators.required, 
//         PasswordValidators.validOldPasswordf
//       ],
//       newPassword: ['', Validators.required],
//       confirmPassword: ['', Validators.required]
//     }, {
//       validator: PasswordValidators.passwordsShouldMatch
//     });
//   }

//   get oldPassword() { return this.form.get('oldPassword'); }
//   get newPassword() { return this.form.get('newPassword'); }
//   get confirmPassword() { return this.form.get('confirmPassword'); }
}
