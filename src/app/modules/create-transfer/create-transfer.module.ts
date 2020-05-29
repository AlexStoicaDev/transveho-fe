import { NgModule } from '@angular/core';
import { CreateTransferComponent } from './create-transfer.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateTransferResolver } from './resolver/create-transfer.resolver';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '@transveho-shared';
import { SelectedRouteComponent } from './selected-route/selected-route.component';
import { SelectedPassengersComponent } from './selected-passengers/selected-passengers.component';
import { SelectedCarComponent } from './selected-car/selected-car.component';
import { SelectedDriverComponent } from './selected-driver/selected-driver.component';
import { VerifyPassengersStepComponent } from './verify-passengers-step/verify-passengers-step.component';
import { ChooseCarStepComponent } from './choose-car-step/choose-car-step.component';
import { ChooseDriverStepComponent } from './choose-driver-step/choose-driver-step.component';
import { FinalStepComponent } from './final-step/final-step.component';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    SharedModule
  ],
  declarations: [
    CreateTransferComponent,
    SelectedRouteComponent,
    SelectedPassengersComponent,
    SelectedCarComponent,
    SelectedDriverComponent,
    VerifyPassengersStepComponent,
    ChooseCarStepComponent,
    ChooseDriverStepComponent,
    FinalStepComponent
  ],
  providers: [CreateTransferResolver]
})
export class CreateTransferModule {}
