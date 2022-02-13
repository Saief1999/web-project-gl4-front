import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { ACCOUNTPROFILELINK, PASSWORDUPDATELINK, PASSWORDVERIFICATIONLINK } from '../../constants';
import { Observable } from 'rxjs';
import { AccountUpdateResponseDto } from 'app/dto/account/account-update-response.dto';
import { AccountUpdateRequestDto } from 'app/dto/account/account-update-request.dto';
import { PasswordUpdateRequestDto } from 'app/dto/account/password-update-request.dto';
import { PasswordUpdateResponseDto } from 'app/dto/account/password-update-response.dto';
import { VerificationCodeRequestDto } from 'app/dto/account/verification-code-request.dto';
import { VerificationCodeResponseDto } from 'app/dto/account/verification-code-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAuthenticatedAccount(): Observable<User> {
    return this.http.get<User>(ACCOUNTPROFILELINK);
  }

  updateCurrentAccountGeneralInfo(payload: AccountUpdateRequestDto): Observable<AccountUpdateResponseDto>{
    return this.http.put<AccountUpdateResponseDto>(ACCOUNTPROFILELINK, payload)
  }

  updateCurrentAccountPassword(payload : PasswordUpdateRequestDto): Observable<PasswordUpdateResponseDto>{
    return this.http.post<PasswordUpdateResponseDto>(PASSWORDUPDATELINK, payload)
  }

  confirmUpdatingPassword(payload: VerificationCodeRequestDto): Observable<VerificationCodeResponseDto>{
    return this.http.put<VerificationCodeResponseDto>(PASSWORDVERIFICATIONLINK, payload);
  }
}
