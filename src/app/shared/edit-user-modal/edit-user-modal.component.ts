import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteModalComponent } from '..';
import { Personal } from '@transveho-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface EditUserModalData {
  userType: string;
  user: Personal;
}

@Component({
  selector: 'edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss']
})
export class EditUserModalComponent implements OnInit {
  // @ViewChild('hiddenSubmitButton') hiddenSubmitButton: ElementRef<HTMLElement>;

  editFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditUserModalData
  ) {}

  ngOnInit(): void {
    this.editFormGroup = this.formBuilder.group({
      username: [
        this.data.user.username,
        [Validators.required, Validators.minLength(4), Validators.maxLength(12)]
      ],
      email: [
        this.data.user.email,
        [Validators.required, Validators.email, Validators.maxLength(30)]
      ],
      lastName: [
        this.data.user.lastName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      firstName: [
        this.data.user.firstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      phoneNumber: [
        this.data.user.phoneNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  onSubmit() {
    if (this.editFormGroup.valid) {
      this.dialogRef.close({
        action: 'update',
        editedUser: this.getUserFromFormControls(this.editFormGroup.controls)
      });
    }
  }

  getUserFromFormControls(editUserFormControls): Personal {
    return {
      drivingLicenseCategory: undefined,
      id: 0,
      role: undefined,
      spokenLanguage: undefined,
      userStatus: undefined,
      username: editUserFormControls.username.value,
      email: editUserFormControls.email.value,
      lastName: editUserFormControls.lastName.value,
      firstName: editUserFormControls.firstName.value,
      phoneNumber: editUserFormControls.phoneNumber.value
    };
  }
}
