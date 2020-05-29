import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Passenger } from '@transveho-core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'verify-passengers-step',
  templateUrl: './verify-passengers-step.component.html',
  styleUrls: ['./verify-passengers-step.component.scss']
})
export class VerifyPassengersStepComponent {
  @ViewChild(MatAccordion) passengersAccordion: MatAccordion;
  @Output() onRemovePassengerOutput: EventEmitter<Passenger> = new EventEmitter<
    Passenger
  >();

  @Input()
  passengers: Passenger[];

  removePassenger(passenger: Passenger) {
    this.onRemovePassengerOutput.emit(passenger);
  }
}
