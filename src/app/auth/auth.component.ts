import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
  isLoading = false;
  isLoginMode = false;
  errorMsg = null;
  switchToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitForm(myForm: NgForm) {
    // This is if the user disable the required from the dev tools
    if (!myForm.valid) { return; }

    let authObs: Observable<AuthResponseData>;
    const email = myForm.value.email;
    const password = myForm.value.password;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else   {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./app-forms']);
    },
      errorMes => {
        console.log(errorMes);
        this.errorMsg = errorMes;
        this.isLoading = false;
      });
        myForm.reset();
      }

  ngOnInit() {
  }
      }
