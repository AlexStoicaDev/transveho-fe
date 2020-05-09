import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInfo } from './user-info';
import { map, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:8080/transveho/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser = new BehaviorSubject<UserInfo>(null);

  constructor(private router: Router, private httpClient: HttpClient) {}

  public logIn(username: string, password: string): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>(AUTH_API + 'login', {
      password: password,
      username: username
    });
  }

  public register(
    username: string,
    password: string,
    email: string,
    role: string
  ) {
    return this.httpClient.post<UserInfo>(AUTH_API + 'register', {
      password: password,
      username: username
    });
  }

  public handleAuthentication(userInfo: UserInfo) {
    this.currentUser.next(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userInfo');
    this.router.navigate(['/auth/login']);
  }

  //TODO improve, what if user manually ads a random token
  public userIsAuthenticated(): boolean {
    // return this.currentUser.pipe(
    //   map(user => !!user),
    //   tap(userIsAuthenticated => {
    //     if (!userIsAuthenticated) {
    //       this.router.navigate(['/auth/login']);
    //     }
    //   })
    // )
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return !!userInfo && userInfo.token;
  }

  public userHasRole(role: string): boolean {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return !!userInfo && userInfo.roles.indexOf(role) !== -1;
  }
}
