import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TestHomeComponent } from './pages/test-home/test-home.component';
import { TestAdminComponent } from './pages/test-admin/test-admin.component';
import { TestDispatcherComponent } from './pages/test-dispatcher/test-dispatcher.component';
import {
  AdminGuard,
  AuthenticationGuard,
  DispatcherGuard
} from '@transveho-core';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: TestHomeComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'admin',
    component: TestAdminComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard, AdminGuard]
  },
  {
    path: 'dispatcher',
    component: TestDispatcherComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard, DispatcherGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthenticationRoutingModule {}
