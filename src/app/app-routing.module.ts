import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';

const routes: Routes = [
  {
    path: 'passengers',
    component: PassengersComponent,
    pathMatch: 'full',
    canActivate: [ DispatcherGuard,AuthenticationGuard]
  },
  {
    path: 'cars',
    component: CarsComponent,
    pathMatch: 'full',
    canActivate: [ DispatcherGuard,AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
