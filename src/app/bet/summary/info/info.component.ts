import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
  ) {
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
    console.warn(this.profileForm.value);
    if (this.profileForm.valid) {
      console.warn(this.profileForm.value);
    }
  }

  get loginFormControl() {
    return this.profileForm.controls;
  }
}
