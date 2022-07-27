import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { BillingDetailsComponent } from './pages/billing-details/billing-details.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';

import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
    {
        path: 'home', component: HomePageComponent, canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'plans', component: AddPlanComponent
    },
    {
        path: 'billing', component: BillingDetailsComponent
    },
    {
        path: 'sign-up', component: SignUpComponent
    },
    {
        path: '', component: LandingPageComponent
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
