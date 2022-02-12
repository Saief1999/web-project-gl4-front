import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/user.model';
import { ACCOUNTPROFILELINK } from '../../constants';
import { Observable } from 'rxjs';
import { AccountUpdateResponseDto } from 'app/dto/account/account-update-response.dto';
import { AccountUpdateRequestDto } from 'app/dto/account/account-update-request.dto';

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
}
