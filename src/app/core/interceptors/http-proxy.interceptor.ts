import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

const AUTH_API = 'http://localhost:8080/transveho/';

@Injectable()
export class HttpProxyInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url: string = request.url;

    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      request = request.clone({
        url: AUTH_API + url,
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
          ContentType: 'application/json'
        }
      });
    } else {
      request = request.clone({
        url: AUTH_API + url
      });
    }
    return next.handle(request);
  }
}
