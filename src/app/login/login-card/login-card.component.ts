import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDto } from 'app/dto/logindto';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  private loginDto: LoginDto = null;
  constructor(

  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void {
    console.log("Hello login");
    console.log(loginForm);
  }

}
