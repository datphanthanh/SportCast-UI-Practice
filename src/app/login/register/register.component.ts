import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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
      this.router.navigate(['/login'], { relativeTo: this.route });
      console.warn(this.profileForm.value);
    }
  }

  get loginFormControl() {
    return this.profileForm.controls;
  }
}
