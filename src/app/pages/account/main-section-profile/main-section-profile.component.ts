import { Component, DoCheck, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountUpdateRequestDto } from 'app/dto/account/account-update-request.dto';
import { GenderEnum, User } from 'app/models/user.model';
import { AccountService } from 'app/services/account.service';
import { EventEmitter } from '@angular/core';
import { PasswordUpdateRequestDto } from 'app/dto/account/password-update-request.dto';
import { VerificationCodeRequestDto } from 'app/dto/account/verification-code-request.dto';

@Component({
  selector: 'app-main-section-profile',
  templateUrl: './main-section-profile.component.html',
  styleUrls: ['./main-section-profile.component.css']
})
export class MainSectionProfileComponent implements OnChanges, DoCheck {

  constructor(private readonly accountService: AccountService) {}

  generalInformationForm: FormGroup = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    'firstname': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'lastname': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'gender': new FormControl(''),
    'birthday': new FormControl(''),
    'quote': new FormControl(''),
  });
  passwordForm: FormGroup = new FormGroup({
    'currentPassword': new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    'newPassword': new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    'confirmPassword': new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  verificationCodeForm = new FormGroup({
    'verificationCode': new FormControl('', [
      Validators.required,
      Validators.min(10000),
      Validators.max(99999)
    ])
  })

  passwordsMatching: boolean = true;

  generalInformationconfirmationStatus: boolean = false;

  passwordInformationConfirmationStatus: boolean = false;

  generalInformationDisabled: boolean = true;

  passwordInformationDisabled: boolean = true;

  passwordConfirmationCodeVisibility: boolean = false;

  genders: GenderEnum[] = [GenderEnum.male, GenderEnum.female, GenderEnum.undeclared]

  @Input() user : User = new User();

  @Output() submitGeneralInfoEvent: EventEmitter<User> = new EventEmitter();

  ngOnChanges(): void {
    const { username, firstname, lastname, gender, birthday, quote } = this.user;
    this.generalInformationForm.get('username').setValue(username)
    this.generalInformationForm.get('firstname').setValue(firstname)
    this.generalInformationForm.get('lastname').setValue(lastname)
    this.generalInformationForm.get('gender').setValue(gender)
    this.generalInformationForm.get('birthday').setValue(birthday)
    this.generalInformationForm.get('quote').setValue(quote)
  }

  ngDoCheck(): void {
    this.passwordsMatching = this.passwordForm.get('newPassword').value === this.passwordForm.get('confirmPassword').value
    this.generalInformationDisabled = !(this.generalInformationconfirmationStatus && this.generalInformationForm.valid && this.generalInformationForm.dirty)
    this.passwordInformationDisabled = !(this.passwordForm.valid && this.passwordForm.touched && this.passwordsMatching && this.passwordInformationConfirmationStatus)
  }

  getUsernameInput(){
    return this.generalInformationForm.get('username');
  }

  getFirstnameInput() {
    return this.generalInformationForm.get('firstname');
  } 
  
  getLastnameInput() {
    return this.generalInformationForm.get('lastname');
  }

  getPasswordInput(){
    return this.passwordForm.get('currentPassword')
  }
  getNewPasswordInput() {
    return this.passwordForm.get('newPassword')
  }
  getConfirmationPasswordInput() {
    return this.passwordForm.get('confirmPassword')
  }

  clickConfirmation(){
    this.generalInformationconfirmationStatus = !this.generalInformationconfirmationStatus;
  }
  
  clickPasswordConfirmation(){
    this.passwordInformationConfirmationStatus = !this.passwordInformationConfirmationStatus;
  }
  
  submitGeneralChanges(){
    const payload: AccountUpdateRequestDto = this.generalInformationForm.value as AccountUpdateRequestDto; 
    this.accountService.updateCurrentAccountGeneralInfo(payload).subscribe({
      next : data  => {
        const { user, token } = data
        localStorage.setItem('token', token)
        this.submitGeneralInfoEvent.emit(user)
        this.generalInformationForm.markAsPristine()
        this.generalInformationconfirmationStatus = false
      }, 
      error: err => {
        console.error(err);
      }
    })
  }

  submitPasswordChanges(){
    const payload: PasswordUpdateRequestDto = this.passwordForm.value as PasswordUpdateRequestDto
    this.accountService.updateCurrentAccountPassword(payload).subscribe({
      next: data => {
        this.passwordConfirmationCodeVisibility = true;
      }, 
      error: err => {
        console.error(err);
      }
    })
  }
  submitVerification(){
    const payload : VerificationCodeRequestDto = this.verificationCodeForm.value as VerificationCodeRequestDto;
    this.accountService.confirmUpdatingPassword(payload).subscribe({
      next : data => {
        this.passwordForm.reset();
        this.verificationCodeForm.reset();
        this.passwordConfirmationCodeVisibility = false;
        console.log(data.message)
      }, 
      error: err => {
        console.error(err);
      }
    })
  }
}
