import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { RegistrationPageComponent } from './auth-template/registration-page/registration-page.component';
import { LoginCardComponent } from './auth-template/login-card/login-card.component';
import { SignupCardComponent } from './auth-template/signup-card/signup-card.component';
import { CinemasPageComponent } from './cinemas/cinemas-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page.component';
import { ConfirmEmailComponent } from './auth-template/confirm-email/confirm-email.component';
import { AccountPageComponent } from './account-template/account-page/account-page.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  {
    path: 'register', component: RegistrationPageComponent,
    children: [
      { path: '', redirectTo: "/register/login", pathMatch: 'full' },
      { path: 'login', component: LoginCardComponent },
      { path: 'signup', component: SignupCardComponent }
    ]
  },
  { path: 'account', component: AccountPageComponent },
  { path: 'cinemas', component: CinemasPageComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, 
    //   {
    //   useHash: true
    // }
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
