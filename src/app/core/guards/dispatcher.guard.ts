import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userHasDispatcherRole =
      this.authenticationService.userHasRole('DISPATCHER') ||
      this.authenticationService.userHasRole('ADMIN');

    if (!userHasDispatcherRole) {
      if (this.authenticationService.userIsAuthenticated()) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/auth']);
      }
    }
    return userHasDispatcherRole;
  }
}
