import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  generalInformationForm: FormGroup;
  passwordForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generalInformationForm = this.formBuilder.group({
      username: "Ramzi-dev611",
      firstname: "Ramzi",
      lastname: "Latrous",
      birthday: "",
      gender: "female",
      quote: "Life is short and gets shorter when you don't live it fully",
    });
    this.generalInformationForm.valueChanges.subscribe({
      next : data => console.log(this.generalInformationForm)
    })
  }

}
