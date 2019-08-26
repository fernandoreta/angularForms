import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor() { }

  isLoginMode = false;

  switchToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm(myForm: NgForm) {
    console.log(myForm.value);
    myForm.reset();
  }

  ngOnInit() {
  }

}
