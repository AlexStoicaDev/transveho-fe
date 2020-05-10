import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
    canActivate: [AuthenticationGuard, DispatcherGuard]
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./modules/personal/personal.module').then(m => m.PersonalModule),
    canActivate: [AuthenticationGuard, DispatcherGuard]
  },
  {
    path: 'passengers',
    component: PassengersComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard, DispatcherGuard]
  },
  {
    path: 'cars',
    component: CarsComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard, DispatcherGuard]
  },
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/authentication/authentication-pages.module').then(
        m => m.AuthenticationPagesModule
      )
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
