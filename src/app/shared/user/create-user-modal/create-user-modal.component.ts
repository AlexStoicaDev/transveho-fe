import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild
} from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Personal, PersonalRole } from '@transveho-core';

export interface CreateUserModalData {
  userRole: PersonalRole;
}

@Component({
  selector: 'create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent implements AfterViewInit {
  @ViewChild(UserFormComponent) userFormComponent: UserFormComponent;

  emptyUser: Personal = {
    drivingLicenseCategory: undefined,
    email: '',
    firstName: '',
    id: 0,
    lastName: '',
    phoneNumber: '',
    role: undefined,
    spokenLanguage: undefined,
    userStatus: undefined,
    username: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreateUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateUserModalData,
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
      action: 'create',
      newUser: this.userFormComponent.getUserFromFormControls()
    });
  }

  onCreateButtonClick() {
    if (this.isUserFormValid()) {
      this.dialogRef.close({
        action: 'create',
        newUser: this.userFormComponent.getUserFromFormControls()
      });
    }
  }
}
