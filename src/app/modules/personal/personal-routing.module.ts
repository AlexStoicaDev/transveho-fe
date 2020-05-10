import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { DispatchersComponent } from './dispatchers/dispatchers.component';

const routes: Routes = [
  { path: '', component: DispatchersComponent },
  { path: 'drivers', component: DriversComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule {}

export const routedComponents = [DispatchersComponent, DriversComponent];
