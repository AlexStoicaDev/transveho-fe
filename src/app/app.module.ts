import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessServicesModule, CoreModule } from '@transveho-core';
import { AuthenticationPagesModule } from './modules/authentication/authentication-pages.module';
import { SharedModule } from '@transveho-shared';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalModule } from './modules/personal/personal.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { CarsModule } from './modules/cars/cars.module';
import { RoutesModule } from './modules/routes/routes.module';
import { PassengersModule } from './modules/passengers/passengers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BusinessServicesModule,
    AuthenticationPagesModule,
    DashboardModule,
    PersonalModule,
    CarsModule,
    RoutesModule,
    PassengersModule,
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
