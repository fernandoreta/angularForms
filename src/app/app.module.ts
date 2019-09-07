import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ObsComponent } from './obs/obs.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: 'app-auth',
    component: AuthComponent
  },
  { path: 'app-forms',
    component: FormsComponent
  },
  { path: 'app-services-component',
    component: ServicesComponentComponent
  },
  { path: 'app-obs',
    component: ObsComponent
  },
  { path: 'app-info',
    component: InfoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ServicesComponentComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    ObsComponent,
    InfoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
