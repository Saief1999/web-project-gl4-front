import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseDto } from 'app/dto/auth/login-response-dto';
import { LoginDto } from 'app/dto/auth/logindto';
import { RegistrationDto } from 'app/dto/auth/registration-dto';
import { RegistrationResponseDto } from 'app/dto/auth/registration-response-dto';
import { LOGINLINK, REGISTRATIONLINK, EMAILCONFIRMATIONLINK, RESENDCONFIRMATIONLINK } from '../../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials: LoginDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(LOGINLINK, credentials);
  }

  signup(accountInformations: RegistrationDto): Observable<RegistrationResponseDto> {
    return this.http.post<RegistrationResponseDto>(REGISTRATIONLINK, accountInformations);
  }

  confirmEmail(token : String): Observable<string>{
    return this.http.post<string>(`${EMAILCONFIRMATIONLINK}`,{'token': token});
  }

  isAuthenticated(): boolean {
    return !! localStorage.getItem('token');
  }

  resendConfirmation(): Observable<string>{
    return this.http.get<string>(`${RESENDCONFIRMATIONLINK}`);
  }
}
