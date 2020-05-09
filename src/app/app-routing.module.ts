import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestHomeComponent } from './modules/authentication/pages/test-home/test-home.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { TestAdminComponent } from './modules/authentication/pages/test-admin/test-admin.component';
import { TestDispatcherComponent } from './modules/authentication/pages/test-dispatcher/test-dispatcher.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
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
