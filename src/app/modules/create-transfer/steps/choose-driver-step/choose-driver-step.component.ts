import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car, Passenger, Personal } from '@transveho-core';

@Component({
  selector: 'choose-driver-step',
  templateUrl: './choose-driver-step.component.html',
  styleUrls: ['./choose-driver-step.component.scss']
})
export class ChooseDriverStepComponent {
  @Output() onSelectDriverOutput: EventEmitter<Personal> = new EventEmitter<
    Personal
  >();

  @Input()
  drivers: Personal[];
  @Input()
  totalNumberOfAdults: number;
  @Input()
  totalNumberOfChildren: number;
  @Input()
  totalNumberOfInfants: number;
  @Input()
  passengers: Passenger[];
  @Input()
  selectedCar: Car;
  @Input()
  fromLocation: string;
  @Input()
  toLocation: string;

  selectedDriverIndex: number = null;

  selectDriver($event: MouseEvent, driver: Personal) {
    $event.stopPropagation();
    this.onSelectDriverOutput.emit(driver);
  }
}
