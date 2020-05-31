import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car, Passenger, Personal } from '@transveho-core';

@Component({
  selector: 'final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent {
  @Output() onCreateTransfer: EventEmitter<any> = new EventEmitter<any>();

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
  selectedDriver: Personal;
  @Input()
  fromLocation: string;
  @Input()
  toLocation: string;

  createTransfer($event: MouseEvent) {
    this.onCreateTransfer.emit($event);
  }
}
