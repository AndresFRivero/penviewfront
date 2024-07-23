import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../../interfaces/auth-response';
import { Observable } from 'rxjs';
import { AuthRequestLogin } from '../../interfaces/auth-request-login';
import { DemoMongo } from '../../interfaces/demo-mongo';
import { URL_AUTH_LOGIN } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login = { token: "tokenjwtservice"}

  constructor(private http: HttpClient) { }

  getLoginResponse(): Login {
    return this.login
  }

  getLoginJWT(authRequestLogin: AuthRequestLogin): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(URL_AUTH_LOGIN, authRequestLogin);
  }

  getAll(): Observable<DemoMongo> {
    return this.http.get<DemoMongo>("http://localhost:9090/api/mongo/findAll");
  }

  getToken(): any {
    return sessionStorage.getItem("jwt")?.toString();
  }
}
