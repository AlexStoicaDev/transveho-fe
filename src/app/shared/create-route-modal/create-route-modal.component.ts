import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core';
import { RouteFormComponent } from '../route-form/route-form.component';
import { Route } from '@transveho-core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'create-route-modal',
  templateUrl: './create-route-modal.component.html',
  styleUrls: ['./create-route-modal.component.scss']
})
export class CreateRouteModalComponent implements AfterViewInit {
  @ViewChild(RouteFormComponent) routeFormComponent: RouteFormComponent;

  emptyRoute: Route = {
    distanceInKm: 0,
    fromLocation: '',
    id: 0,
    notes: '',
    priceInEur: 0,
    priceInRon: 0,
    returnRouteId: 0,
    toLocation: '',
    transitRoute: false
  };

  constructor(
    public dialogRef: MatDialogRef<CreateRouteModalComponent>,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  isRouteFormValid(): boolean {
    return (
      this.routeFormComponent && this.routeFormComponent.isRouteFormValid()
    );
  }

  onEnterSubmit($event) {
    this.dialogRef.close({
      action: 'create',
      newUser: this.routeFormComponent.getRouteFromFormControls()
    });
  }

  onCreateButtonClick() {
    if (this.isRouteFormValid()) {
      this.dialogRef.close({
        action: 'create',
        newUser: this.routeFormComponent.getRouteFromFormControls()
      });
    }
  }
}
