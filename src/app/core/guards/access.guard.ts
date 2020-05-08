import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {
  }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // const requiresAuthentication = router.data.requiresAuthentication || false;
    // const requiresDispatcherRole = router.data.requiresDispatcherRole || false;
    // const requiresAdminRole = router.data.requiresAdminRole || false;

    if (router.data.requiresAdminRoler) {
      return this.authenticationService.userIsAuthenticated() &&  this.authenticationService.userHasRole("ADMIN");
    }
    if (router.data.requiresDispatcherRole) {
      return this.authenticationService.userIsAuthenticated() &&  this.authenticationService.userHasRole("DISPATCHER");
    }
    if(router.data.requiresAuthentication){
      return this.authenticationService.userIsAuthenticated()
    }

    return true;
  }

}
