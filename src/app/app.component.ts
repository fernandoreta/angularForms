import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor (private auth: AuthService) {}
  ngOnInit () {
    this.userSub = this.auth.user.subscribe(user => {
      // insted of  true and false ternary function
      this.isAuthenticated = !!user;
    });
  }

  showForms() {

  }

  ngOnDestroy () {
    this.auth.user.unsubscribe();
  }

}
