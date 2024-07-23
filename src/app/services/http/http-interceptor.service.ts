import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  loginService: LoginService = inject(LoginService);

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token: String = this.loginService.getToken();

    if (token != ""){
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json;chartset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
    }

    return next.handle(req);
  }
}
