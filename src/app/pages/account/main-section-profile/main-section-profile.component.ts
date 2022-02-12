import { Component, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountUpdateRequestDto } from 'app/dto/account/account-update-request.dto';
import { GenderEnum, User } from 'app/models/user.model';
import { AccountService } from 'app/services/account.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-section-profile',
  templateUrl: './main-section-profile.component.html',
  styleUrls: ['./main-section-profile.component.css']
})
export class MainSectionProfileComponent implements OnChanges {

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

  generalInformationconfirmationStatus: boolean = false;

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

  getUsernameInput(){
    return this.generalInformationForm.get('username');
  }

  getFirstnameInput() {
    return this.generalInformationForm.get('firstname');
  } 
  
  getLastnameInput() {
    return this.generalInformationForm.get('lastname');
  }

  clickConfirmation(){
    this.generalInformationconfirmationStatus = !this.generalInformationconfirmationStatus;
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
      }
    })
  }
}
