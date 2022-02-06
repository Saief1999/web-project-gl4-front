import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginResponseDto } from 'app/dto/login-response-dto';
import { LoginDto } from 'app/dto/logindto';
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
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    this.loginDto = loginForm.value;
    this.authenticationService.login(this.loginDto).subscribe(
      (data: LoginResponseDto) => {
          localStorage.setItem('token', data.token)
          console.log(data.token);
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
