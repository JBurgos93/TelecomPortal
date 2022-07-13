import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
    {
        path: '', component: LandingPageComponent
    },
    {
        path: 'home', component: HomePageComponent
    },
    {
        path: 'login', component: LoginPageComponent
    },
    { 
        path: '*', component: ErrorPageComponent // Doesn't work?
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
