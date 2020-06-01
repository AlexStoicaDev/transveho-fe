import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { Route } from '@transveho-core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RouteFormComponent } from '../route-form/route-form.component';

export interface EditRouteModalData {
  route: Route;
}

@Component({
  selector: 'edit-route-modal',
  templateUrl: './edit-route-modal.component.html',
  styleUrls: ['./edit-route-modal.component.scss']
})
export class EditRouteModalComponent implements AfterViewInit {
  @ViewChild(RouteFormComponent) routeFormComponent: RouteFormComponent;

  constructor(
    public dialogRef: MatDialogRef<EditRouteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditRouteModalData,
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
      action: 'update',
      editedRoute: this.routeFormComponent.getRouteFromFormControls()
    });
  }

  onEditButtonClick() {
    if (this.isRouteFormValid()) {
      this.dialogRef.close({
        action: 'update',
        editedRoute: this.routeFormComponent.getRouteFromFormControls()
      });
    }
  }
}
