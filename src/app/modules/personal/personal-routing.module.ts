import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { DispatchersComponent } from './dispatchers/dispatchers.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';

const routes: Routes = [
  {
    path: 'personal',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    children: [
      { path: '', component: DispatchersComponent },
      { path: 'drivers', component: DriversComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule {}

export const routedComponents = [DispatchersComponent, DriversComponent];
