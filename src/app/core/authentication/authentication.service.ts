import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {UserInfo} from "./user-info";
import {map, take, tap} from "rxjs/operators";

const AUTH_API = 'http://localhost:8080/transveho/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser = new BehaviorSubject<UserInfo>(null);

  constructor(private httpClient: HttpClient) {
  }

  public logIn(username: string, password: string): Observable<UserInfo> {
    debugger
    return this.httpClient.post<UserInfo>(AUTH_API + 'login', {
      password: password,
      username: username
    });
  }

  public register(username: string, password: string, email: string, role: string) {
    return this.httpClient.post<UserInfo>(AUTH_API + 'register', {
      password: password,
      username: username
    });
  }

  public handleAuthentication(userInfo: UserInfo) {
    debugger
    this.currentUser.next(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userInfo');
    //this.router.navigate(['/auth']);
  }

  public userIsAuthenticated(){
    return this.currentUser.pipe(
      take(1),
      map(user=>!!user),
      tap(userIsAuthenticated=>{
        if(!userIsAuthenticated){
          //this.router.navigate(['/auth']);
        }
      })
    )
  }

  public userHasRole(role: string): boolean {
    return JSON.parse(localStorage.getItem('userInfo')).getRole()[0] === role;
  }
}
