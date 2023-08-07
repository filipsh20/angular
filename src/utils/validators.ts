import { ValidationErrors, AbstractControl } from '@angular/forms';

export function usernameValidator(control: AbstractControl): ValidationErrors | null {
  const username: string = control.value;
  if (/^[a-zA-Z0-9]{8,40}$/.test(username)) return null;
  return { error: true };
}

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  const email: string = control.value;
  if(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)) return null;
  return {error: true}
}

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const password: string = control.value;
  if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) return null;
  return {error: true}
}