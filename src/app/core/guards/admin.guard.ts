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
export class AdminGuard implements CanActivate {
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
    const userHasAdminRole: boolean = this.authenticationService.userHasRole(
      'ADMIN'
    );
    if (!userHasAdminRole) {
      this.router.navigate(['/auth/home']);
    }
    return userHasAdminRole;
  }
}
