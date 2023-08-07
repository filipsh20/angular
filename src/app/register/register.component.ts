import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  usernameValidator,
  emailValidator,
  passwordValidator,
} from '../../utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

  usernameTouched = false;
  emailTouched = false;
  passwordTouched = false;

  onFieldFocus(fieldName: string) {
    if (fieldName === 'username') {
      this.usernameTouched = true;
    } else if (fieldName === 'email') {
      this.emailTouched = true;
    } else if (fieldName === 'password') {
      this.passwordTouched = true;
    }
  }

  onFieldBlur(fieldName: string) {
    if (fieldName === 'username') {
      this.usernameTouched = true;
    } else if (fieldName === 'email') {
      this.emailTouched = true;
    } else if (fieldName === 'password') {
      this.passwordTouched = true;
    }
  }

  form: FormGroup<any> = this.formBuilder.group({
    username: ['', [Validators.required, usernameValidator]],
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, passwordValidator]],
  });

  submit() {
    const { username, email, password } = this.form.controls;
    console.log(username.value, email.value, password.value);
  }
}
