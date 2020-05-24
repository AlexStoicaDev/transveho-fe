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
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MatSelectModule } from '@angular/material/select';
import { CarFormComponent } from './car-form/car-form.component';
import { DirectivesModule } from '@transveho-core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EditCarModalComponent } from './edit-car-modal/edit-car-modal.component';
import { CreateCarModalComponent } from './create-car-modal/create-car-modal.component';
import { CreateRouteModalComponent } from './create-route-modal/create-route-modal.component';
import { EditRouteModalComponent } from './edit-route-modal/edit-route-modal.component';
import { RouteFormComponent } from './route-form/route-form.component';
import { CreatePassengerModalComponent } from './create-passenger-modal/create-passenger-modal.component';
import { EditPassengerModalComponent } from './edit-passenger-modal/edit-passenger-modal.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule
} from '@mat-datetimepicker/core';

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
    MatNativeDatetimeModule
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
    PassengerFormComponent
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent
  ]
})
export class SharedModule {}
