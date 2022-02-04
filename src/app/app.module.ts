import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { RegistrationPageComponent } from './auth-template/registration-page/registration-page.component';
import { LoginCardComponent } from './auth-template/login-card/login-card.component';
import { SignupCardComponent } from './auth-template/signup-card/signup-card.component';
import { ErrorMessageComponent } from './auth-template/error-message/error-message.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmEmailComponent } from './auth-template/confirm-email/confirm-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegistrationPageComponent,
    LoginCardComponent,
    SignupCardComponent,
    ErrorMessageComponent,
    ConfirmEmailComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
