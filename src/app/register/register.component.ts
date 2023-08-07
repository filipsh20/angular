import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  usernameValidator,
  emailValidator,
  passwordValidator,
} from './validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

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
