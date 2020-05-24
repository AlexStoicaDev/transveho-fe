import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { CarsResolver } from './modules/cars/resolver/cars.resolver';
import { RoutesComponent } from './modules/routes/routes.component';
import { RoutesResolver } from './modules/routes/resolver/routes.resolver';
import { PassengersResolver } from './modules/passengers/resolver/passengers.resolver';

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengersComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard]
  },
  {
    path: 'cars',
    component: CarsComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { cars: CarsResolver }
  },
  {
    path: 'routes',
    component: RoutesComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { routes: RoutesResolver }
  },
  {
    path: 'passengers',
    component: PassengersComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { passengers: PassengersResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
