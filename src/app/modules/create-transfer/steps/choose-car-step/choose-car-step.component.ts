import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car, Passenger } from '@transveho-core';

@Component({
  selector: 'choose-car-step',
  templateUrl: './choose-car-step.component.html',
  styleUrls: ['./choose-car-step.component.scss']
})
export class ChooseCarStepComponent {
  @Output() onSelectCarOutput: EventEmitter<Car> = new EventEmitter<Car>();

  @Input()
  cars: Car[];
  @Input()
  totalNumberOfAdults: number;
  @Input()
  totalNumberOfChildren: number;
  @Input()
  totalNumberOfInfants: number;
  @Input()
  passengers: Passenger[];
  @Input()
  fromLocation: string;
  @Input()
  toLocation: string;

  selectedCarIndex: number = null;

  selectCar($event: MouseEvent, car: Car) {
    $event.stopPropagation();
    this.onSelectCarOutput.emit(car);
  }
}
