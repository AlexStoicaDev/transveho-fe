import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { DashboardResolver } from './resolver/dashboard.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: { transfers: DashboardResolver },
    canActivate: [DispatcherGuard, AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

export const routedComponents = [DashboardComponent];
