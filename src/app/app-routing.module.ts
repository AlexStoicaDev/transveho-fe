import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengersComponent } from './modules/passengers/passengers.component';
import { CarsComponent } from './modules/cars/cars.component';
import { AuthenticationGuard, DispatcherGuard } from '@transveho-core';
import { CarsResolver } from './modules/cars/resolver/cars.resolver';
import { RoutesComponent } from './modules/routes/routes.component';
import { RoutesResolver } from './modules/routes/resolver/routes.resolver';
import { PassengersResolver } from './modules/passengers/resolver/passengers.resolver';
import { CreateTransferComponent } from './modules/transfer/create-transfer/create-transfer.component';
import { CreateTransferResolver } from './modules/transfer/create-transfer/resolver/create-transfer.resolver';
import { CurrentTransferResolver } from './modules/transfer/driver-transfer/current-transfer/resolver/current-transfer.resolver';
import { CurrentTransferComponent } from './modules/transfer/driver-transfer/current-transfer/current-transfer.component';
import {PreviousTransfersComponent} from "./modules/transfer/driver-transfer/previous-transfers/previous-transfers.component";
import {PreviousTransfersResolver} from "./modules/transfer/driver-transfer/previous-transfers/resolver/previous-transfers.resolver";

const routes: Routes = [
  {
    path: 'cars',
    component: CarsComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { cars: CarsResolver }
  },
  {
    path: 'routes',
    component: RoutesComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { routes: RoutesResolver }
  },
  {
    path: 'passengers',
    component: PassengersComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: { passengers: PassengersResolver, routes: RoutesResolver }
  },
  {
    path: 'create-transfer',
    component: CreateTransferComponent,
    pathMatch: 'full',
    canActivate: [DispatcherGuard, AuthenticationGuard],
    resolve: {
      createTransferStepperData: CreateTransferResolver
    }
  },
  {
    path: 'current-transfer',
    component: CurrentTransferComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard],
    resolve: {
      currentTransfer: CurrentTransferResolver
    }
  },
  {
    path: 'previous-transfers',
    component: PreviousTransfersComponent,
    pathMatch: 'full',
    canActivate: [AuthenticationGuard],
    resolve: {
      previousTransfers: PreviousTransfersResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
