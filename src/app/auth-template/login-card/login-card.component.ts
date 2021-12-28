import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginResponseDto } from 'app/dto/login-response-dto';
import { LoginDto } from 'app/dto/logindto';
import { AuthenticationService } from 'app/serices/authentication.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  private loginDto: LoginDto = null;
  private errorMessage: string = "";
  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    this.loginDto = loginForm.value;
    this.authenticationService.login(this.loginDto).subscribe(
      {
        "next": (data: LoginResponseDto) => {
          localStorage.setItem('token', data.token)
        },
        "error": (error) => {
          this.errorMessage = error.message;
        }
      }
    )
  }

}
