import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
    
  constructor(private cookieService: CookieService) {} //inyectar el servicio de cookies en el constructor

 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.get('token'); //recuperar el token del cookie
    let newRequest = request;
    if (token) {
      newRequest = request.clone({
        headers: request.headers.set('authorization', token)
      });
    }
   return next.handle(newRequest);
  }
}
