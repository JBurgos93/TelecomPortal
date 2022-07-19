import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanContainerComponent } from './components/plan-container/plan-container.component';
import { BillingContainerComponent } from './components/billing-container/billing-container.component';
import { PlanContentComponent } from './components/plan-content/plan-content.component';
import { BillingContentComponent } from './components/billing-content/billing-content.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';
import { BillingDetailsComponent } from './pages/billing-details/billing-details.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { PlanPageContentComponent } from './components/plan-page-content/plan-page-content.component';
import { BillingPageContentComponent } from './components/billing-page-content/billing-page-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    LandingPageComponent,
    ErrorPageComponent,
    PlanContainerComponent,
    BillingContainerComponent,
    PlanContentComponent,
    BillingContentComponent,
    AddPlanComponent,
    BillingDetailsComponent,
    SignUpComponent,
    SignUpFormComponent,
    PlanPageContentComponent,
    BillingPageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
