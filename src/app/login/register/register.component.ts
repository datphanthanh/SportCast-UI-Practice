import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.profileForm = fb.group({
      username: new FormControl('', [
       Validators.required 
      ]),
      password: new FormControl('', [
        Validators.required 
       ]),
      repeatPassword: new FormControl('', [
        Validators.required 
       ]),
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get loginFormControl() {
    return this.profileForm.controls;
  }
}
