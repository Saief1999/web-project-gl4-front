import { Component, DoCheck, OnInit, SimpleChanges, } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { RegistrationDto } from 'app/dto/registration-dto';

@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit, DoCheck {

  private registrationDto: RegistrationDto = null;
  private validRpeatedPassword: boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  valid_value(repeatedPasswordInput: NgModel, passwordInput: NgModel): void {
    this.validRpeatedPassword = repeatedPasswordInput.value === passwordInput.value || repeatedPasswordInput.value.lengh >= 5;
    console.log(this.validRpeatedPassword)
  }

  register(registrationForm: NgForm): void {
    this.registrationDto = registrationForm.value;
    console.log(this.registrationDto);
  }
  ngDoCheck(): void {

  }
}
