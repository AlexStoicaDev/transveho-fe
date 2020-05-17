import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { DispatchersComponent } from './dispatchers/dispatchers.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { DriversResolve } from './drivers/resolver/drivers.resolve';
import { DispatchersResolve } from './dispatchers/resolver/dispatchers.resolve';

const routes: Routes = [
  {
    path: 'personal',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    children: [
      {
        path: 'dispatchers',
        component: DispatchersComponent,
        resolve: { dispatchers: DispatchersResolve }
      },
      {
        path: 'drivers',
        component: DriversComponent,
        resolve: { drivers: DriversResolve }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule {}

export const routedComponents = [DispatchersComponent, DriversComponent];
