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
import { PersonalComponent } from './modules/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    PassengersComponent,
    PersonalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MatIconModule,
    AuthenticationPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
