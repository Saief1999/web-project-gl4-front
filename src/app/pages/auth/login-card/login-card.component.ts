import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginResponseDto } from 'app/dto/auth/login-response-dto';
import { LoginDto } from 'app/dto/auth/logindto';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  private loginDto: LoginDto = null;
  errorMessage: string = "";
  constructor(
    private authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    this.loginDto = loginForm.value;
    this.authenticationService.login(this.loginDto).subscribe(
      (data: LoginResponseDto) => {
          localStorage.setItem('token', data.token)
          this.router.navigate(['/account'])
        },
      (error) => {
          this.errorMessage = error.error.message;
          console.log(error);
        }
    )
  }

  setError() : void {
    this.errorMessage = ""
  }

}
