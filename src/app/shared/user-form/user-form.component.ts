import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DrivingLicenseCategory,
  Personal,
  PersonalStatus,
  SpokenLanguages
} from '@transveho-core';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input()
  user: Personal;
  userFormGroup: FormGroup;
  drivingLicenseCategories: Array<string> = [];
  spokenLanguages: Array<string> = [];
  personalStatuses: Array<string> = [];

  @Output() onSubmitOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.addValuesToDrivingLicenseCategoriesArray();
    this.addValuesToSpokenLanguagesArray();
    this.addValuesToPersonalStatusesArray();
  }

  addValuesToDrivingLicenseCategoriesArray() {
    for (let value in DrivingLicenseCategory) {
      if (typeof DrivingLicenseCategory[value] === 'number') {
        this.drivingLicenseCategories.push(value);
      }
    }
  }

  addValuesToSpokenLanguagesArray() {
    for (let value in SpokenLanguages) {
      if (typeof SpokenLanguages[value] === 'number') {
        this.spokenLanguages.push(value);
      }
    }
  }

  addValuesToPersonalStatusesArray() {
    for (let value in PersonalStatus) {
      if (typeof PersonalStatus[value] === 'number') {
        this.personalStatuses.push(value);
      }
    }
  }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      username: [
        this.user.username,
        [Validators.required, Validators.minLength(4), Validators.maxLength(12)]
      ],
      email: [
        this.user.email,
        [Validators.required, Validators.email, Validators.maxLength(30)]
      ],
      lastName: [
        this.user.lastName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      firstName: [
        this.user.firstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      phoneNumber: [
        this.user.phoneNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      driverLicenseCategory: [
        this.user.drivingLicenseCategory,
        [Validators.required]
      ],
      spokenLanguages: [this.user.spokenLanguage, [Validators.required]],
      userStatus: [this.user.userStatus, [Validators.required]]
    });
  }

  isUserFormValid(): boolean {
    return this.userFormGroup.valid;
  }

  getUserFromFormControls(): Personal {
    const editUserFormControls = this.userFormGroup.controls;
    return {
      drivingLicenseCategory: editUserFormControls.driverLicenseCategory.value,
      id: 0,
      role: undefined,
      spokenLanguage: editUserFormControls.spokenLanguages.value,
      userStatus: editUserFormControls.userStatus.value,
      username: editUserFormControls.username.value,
      email: editUserFormControls.email.value,
      lastName: editUserFormControls.lastName.value,
      firstName: editUserFormControls.firstName.value,
      phoneNumber: editUserFormControls.phoneNumber.value
    };
  }

  onSubmit() {
    if (this.isUserFormValid) {
      this.onSubmitOutput.emit();
    }
  }
}
