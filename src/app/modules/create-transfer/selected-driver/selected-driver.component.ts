import { Component, Input } from '@angular/core';
import { Personal } from '@transveho-core';

@Component({
  selector: 'selected-driver',
  templateUrl: './selected-driver.component.html',
  styleUrls: ['./selected-driver.component.scss']
})
export class SelectedDriverComponent {
  @Input()
  selectedDriver: Personal;
}
