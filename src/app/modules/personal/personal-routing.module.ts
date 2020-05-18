import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { DispatchersComponent } from './dispatchers/dispatchers.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { DriversResolver } from './drivers/resolver/drivers.resolver';
import { DispatchersResolver } from './dispatchers/resolver/dispatchers.resolver';

const routes: Routes = [
  {
    path: 'personal',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    children: [
      {
        path: 'dispatchers',
        component: DispatchersComponent,
        resolve: { dispatchers: DispatchersResolver }
      },
      {
        path: 'drivers',
        component: DriversComponent,
        resolve: { drivers: DriversResolver }
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
