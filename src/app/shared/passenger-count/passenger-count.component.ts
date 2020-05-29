import { Component, Input } from '@angular/core';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent {
  @Input()
  numberOfAdults: number;
  @Input()
  numberOfChildren: number;
  @Input()
  numberOfInfants: number;
}
