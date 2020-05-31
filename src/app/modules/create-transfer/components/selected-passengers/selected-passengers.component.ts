import { Component, Input } from '@angular/core';
import { Passenger } from '@transveho-core';

@Component({
  selector: 'selected-passengers',
  templateUrl: './selected-passengers.component.html',
  styleUrls: ['./selected-passengers.component.scss']
})
export class SelectedPassengersComponent {
  @Input()
  totalNumberOfAdults: number;
  @Input()
  totalNumberOfChildren: number;
  @Input()
  totalNumberOfInfants: number;
  @Input()
  selectedPassengers: Passenger[];
}
