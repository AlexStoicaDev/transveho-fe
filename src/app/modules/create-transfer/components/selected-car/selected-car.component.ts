import { Component, Input } from '@angular/core';
import { Car } from '@transveho-core';

@Component({
  selector: 'selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent {
  @Input()
  selectedCar: Car;
}
