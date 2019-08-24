import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: 'auth',
    component: AuthComponent
  },
  { path: 'app-forms',
    component: FormsComponent
  },
  { path: 'app-services-component',
    component: ServicesComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ServicesComponentComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }