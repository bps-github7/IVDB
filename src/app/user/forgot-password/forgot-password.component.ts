import { PasswordValidators } from '../../services/validators/password.validators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'forgotpassword',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
  })
  export class ForgotPasswordComponent {
      name = new FormControl('');
  }
  