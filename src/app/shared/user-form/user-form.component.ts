import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DrivingLicenseCategory,
  Personal,
  PersonalRole,
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
  @Input()
  userRole: PersonalRole;
  userFormGroup: FormGroup;
  drivingLicenseCategories: Array<string> = [];
  spokenLanguages: Array<string> = [];
  personalStatuses: Array<string> = [];
  PersonalRole = PersonalRole;

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
    this.userFormGroup = this.formBuilder.group(this.getControlsConfig());
    debugger;
  }

  getControlsConfig() {
    let personalControlsConfig = this.getPersonalControlsConfig();
    if (this.userRole === PersonalRole.DRIVER) {
      personalControlsConfig = {
        ...personalControlsConfig,
        ...this.getDriverExtraControlsConfig()
      };
    }
    return {
      ...personalControlsConfig,
      userStatus: [this.user.userStatus, [Validators.required]]
    };
  }

  getPersonalControlsConfig() {
    return {
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
      ]
    };
  }

  getDriverExtraControlsConfig() {
    return {
      driverLicenseCategory: [
        this.user.drivingLicenseCategory,
        [Validators.required]
      ],
      spokenLanguages: [this.user.spokenLanguage, [Validators.required]]
    };
  }

  isUserFormValid(): boolean {
    return this.userFormGroup.valid;
  }

  getUserFromFormControls(): Personal {
    debugger;
    const userFormControls = this.userFormGroup.controls;
    const userFromFormData = {
      id: 0,
      role: this.userRole,
      spokenLanguage: undefined,
      drivingLicenseCategory: undefined,
      userStatus: userFormControls.userStatus.value,
      username: userFormControls.username.value,
      email: userFormControls.email.value,
      lastName: userFormControls.lastName.value,
      firstName: userFormControls.firstName.value,
      phoneNumber: userFormControls.phoneNumber.value
    };
    if (this.userRole === PersonalRole.DRIVER) {
      return this.setDriverProperties(userFromFormData);
    }
    return userFromFormData;
  }

  setDriverProperties(user: Personal): Personal {
    const userFormControls = this.userFormGroup.controls;
    return {
      ...user,
      spokenLanguage: userFormControls.spokenLanguages.value,
      drivingLicenseCategory: userFormControls.driverLicenseCategory.value
    };
  }

  onSubmit() {
    if (this.isUserFormValid) {
      this.onSubmitOutput.emit();
    }
  }
}
