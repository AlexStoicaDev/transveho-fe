import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteModalComponent } from '..';
import { Personal } from '@transveho-core';
import { UserFormComponent } from '../user-form/user-form.component';

export interface EditUserModalData {
  user: Personal;
}

@Component({
  selector: 'edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements AfterViewInit {
  @ViewChild(UserFormComponent) userFormComponent: UserFormComponent;

  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditUserModalData,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  isUserFormValid(): boolean {
    return this.userFormComponent && this.userFormComponent.isUserFormValid();
  }

  onEnterSubmit($event) {
    this.dialogRef.close({
      action: 'update',
      editedUser: this.userFormComponent.getUserFromFormControls()
    });
  }

  onEditButtonClick() {
    if (this.isUserFormValid()) {
      this.dialogRef.close({
        action: 'update',
        editedUser: this.userFormComponent.getUserFromFormControls()
      });
    }
  }
}
