import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { PersonalComponent } from './modules/personal/personal.component';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
    data: { requiresLogin: true },
    canActivate: [AuthenticationGuard, DispatcherGuard]
  },
  {
    path: 'personal',
    component: PersonalComponent,
    pathMatch: 'full',
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
