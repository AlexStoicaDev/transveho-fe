import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../authentication/authentication.service";
import {exhaustMap, take} from "rxjs/operators";

const AUTH_API = 'http://localhost:8080/transveho/';

@Injectable()
export class HttpProxyInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const url: string = request.url;

    if (url.includes("auth")) {
      return next.handle(request);
    }

      let newRequest: HttpRequest<any>;
      let params = {};
      const body = request.body;

      const data = new URLSearchParams();
      data.set('body', JSON.stringify(body));

      return this.authenticationService.currentUser.pipe(
        take(1),
        exhaustMap(user => {
          newRequest = request.clone({
            url: AUTH_API + url,
            setParams: params,
            setHeaders: {
              Authorization: user.tokenType + ' ' + user.token
            }
          });
          return next.handle(newRequest);
        })
      );
    }
}
