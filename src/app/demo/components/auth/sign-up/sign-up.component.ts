import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    // @ts-ignore
    signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.initForm();
  }

    private initForm() {
        this.signUpForm = this.formBuilder.group({
             username: ['', Validators.required],
             fullname: ['', Validators.required],
             email: ['', Validators.required],
             dateOfBirth: [''],
             address: [''],
             country: ['', Validators.required],
             gender: ['', Validators.required]

        })
    }
    get userNameInvalid() {
        return (
            // @ts-ignore
            this.signUpForm.get('username').hasError('required') && this.signUpForm.get('username').touched
        );
    }
}
