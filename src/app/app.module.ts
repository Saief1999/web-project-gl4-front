import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AuthentificationInterceptorProvider } from "./interceptors/auth.interceptor";
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { RegistrationPageComponent } from './pages/auth/registration-page.component';
import { LoginCardComponent } from './pages/auth/login-card/login-card.component';
import { SignupCardComponent } from './pages/auth/signup-card/signup-card.component';
import { ErrorMessageComponent } from './pages/auth/error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import { CinemasPageComponent } from './pages/cinemas/cinemas-page.component';
import { CinemaElementComponent } from "./pages/cinemas/cinema-element/cinema-element.component"
import { ConfirmEmailComponent } from './pages/auth/confirm-email/confirm-email.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import { TopSectionComponent } from './pages/account/top-section/top-section.component';
import { MainSectionProfileComponent } from './pages/account/main-section-profile/main-section-profile.component';
import { HttpErrorInterceptorProvider } from './interceptors/http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationPageComponent,
    LoginCardComponent,
    SignupCardComponent,
    CinemasPageComponent,
    CinemaElementComponent,
    ErrorMessageComponent,
    ConfirmEmailComponent,
    AccountPageComponent,
    TopSectionComponent,
    MainSectionProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthentificationInterceptorProvider, HttpErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
