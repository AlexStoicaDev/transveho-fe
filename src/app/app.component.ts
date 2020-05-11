import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@transveho-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isUserAuthenticated: boolean;
  private userSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService) {
    this.userSubscription = this.authenticationService.currentUser.subscribe(
      currentUser => {
        this.isUserAuthenticated = !!currentUser;
      }
    );
  }
}
