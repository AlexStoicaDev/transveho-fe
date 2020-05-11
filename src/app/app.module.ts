import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@transveho-core';
import { AuthenticationPagesModule } from './modules/authentication/authentication-pages.module';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarsComponent } from './modules/cars/cars.component';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { PersonalModule } from './modules/personal/personal.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent, CarsComponent, PassengersComponent],
  imports: [
    AuthenticationPagesModule,
    DashboardModule,
    PersonalModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    MatIconModule,
    NotFoundModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
