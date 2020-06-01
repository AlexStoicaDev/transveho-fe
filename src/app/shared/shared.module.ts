import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditUserModalComponent } from './user/edit-user-modal/edit-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateUserModalComponent } from './user/create-user-modal/create-user-modal.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { MatSelectModule } from '@angular/material/select';
import { CarFormComponent } from './car/car-form/car-form.component';
import { DirectivesModule } from '@transveho-core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EditCarModalComponent } from './car/edit-car-modal/edit-car-modal.component';
import { CreateCarModalComponent } from './car/create-car-modal/create-car-modal.component';
import { CreateRouteModalComponent } from './route/create-route-modal/create-route-modal.component';
import { EditRouteModalComponent } from './route/edit-route-modal/edit-route-modal.component';
import { RouteFormComponent } from './route/route-form/route-form.component';
import { CreatePassengerModalComponent } from './passenger/create-passenger-modal/create-passenger-modal.component';
import { EditPassengerModalComponent } from './passenger/edit-passenger-modal/edit-passenger-modal.component';
import { PassengerFormComponent } from './passenger/passenger-form/passenger-form.component';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule
} from '@mat-datetimepicker/core';
import { PassengerCountComponent } from './passenger/passenger-count/passenger-count.component';
import { SelectedCarComponent } from './transfer/selected-car/selected-car.component';
import { SelectedDriverComponent } from './transfer/selected-driver/selected-driver.component';
import { MatCardModule } from '@angular/material/card';
import { SelectedPassengersComponent } from './transfer/selected-passengers/selected-passengers.component';
import { SelectedRouteComponent } from './transfer/selected-route/selected-route.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    DirectivesModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatCardModule
  ],
  declarations: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent,
    EditUserModalComponent,
    CreateUserModalComponent,
    UserFormComponent,
    CarFormComponent,
    EditCarModalComponent,
    CreateCarModalComponent,
    CreateRouteModalComponent,
    EditRouteModalComponent,
    RouteFormComponent,
    CreatePassengerModalComponent,
    EditPassengerModalComponent,
    PassengerFormComponent,
    PassengerCountComponent,
    SelectedCarComponent,
    SelectedDriverComponent,
    SelectedPassengersComponent,
    SelectedRouteComponent
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent,
    PassengerCountComponent,
    SelectedCarComponent,
    SelectedDriverComponent,
    SelectedPassengersComponent,
    SelectedRouteComponent
  ]
})
export class SharedModule {}
