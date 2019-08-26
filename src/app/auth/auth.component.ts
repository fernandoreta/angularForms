import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLoginMode = false;

  switchToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm(myForm: NgForm) {
    // This is if the user disable the required from the dev tools
    if (!myForm.valid) { return; }

    const email = myForm.value.email;
    const password = myForm.value.password;

    if (this.isLoginMode) {
      // ...
    } else {
      // because return something in authservice IN THE POST LINE this is an observable
      this.authService.signUp(email, password).subscribe(resData => {
        console.log(resData);
      }, error => {
        console.log(error);
      });
      myForm.reset();
    }
    }


  ngOnInit() {
  }

}
