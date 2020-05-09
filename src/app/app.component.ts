import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@transveho-core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) {
    this.userSubscription = this.authenticationService.currentUser
      .pipe(map(user => !!user))
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }
}
