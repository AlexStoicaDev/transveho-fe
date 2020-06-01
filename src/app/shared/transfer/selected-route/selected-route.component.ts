import { Component, Input } from '@angular/core';

@Component({
  selector: 'selected-route',
  templateUrl: './selected-route.component.html',
  styleUrls: ['./selected-route.component.scss']
})
export class SelectedRouteComponent {
  @Input()
  fromLocation: string;
  @Input()
  toLocation: string;
}
