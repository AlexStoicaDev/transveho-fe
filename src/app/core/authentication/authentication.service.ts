import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserInfo} from './user-info';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  private currentUserSubject : BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;

  constructor(private router: Router, private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(JSON.parse(localStorage.getItem('userInfo')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():UserInfo{
    return this.currentUserSubject.value;
  }

  public logIn(username: string, password: string): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>( 'auth/login', {
      password: password,
      username: username
    }).pipe(tap(userInfo=>{
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.currentUserSubject.next(userInfo);
      return userInfo;
    }));
  }

  public register(
    username: string,
    password: string,
    email: string,
    role: string
  ) {
    return this.httpClient.post<UserInfo>( 'auth/register', {
      password: password,
      username: username
    });
  }

  public logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('userInfo');
    this.router.navigate(['/auth/login']);
  }

  //TODO improve, what if user manually ads a random token
  public isUserAuthenticated(): boolean {
    return !!this.currentUserValue && !!this.currentUserValue.token;
  }

  public userHasRole(role: string): boolean {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return !!userInfo && userInfo.roles.indexOf(role) !== -1;
  }
}
