import { Injectable } from '@angular/core';
import {
  CreateUserModalComponent,
  DeleteModalComponent,
  EditUserModalComponent
} from '@transveho-shared';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Personal, PersonalRole } from '@transveho-core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  openCreateUserModal(userRole: PersonalRole) {
    return this.dialog.open(CreateUserModalComponent, {
      id: 'createUserModal',
      width: '500px',
      data: { userRole }
    });
  }

  openUpdateUserModal(user: Personal) {
    return this.dialog.open(EditUserModalComponent, {
      width: '500px',
      data: { user }
    });
  }

  openDeleteUserModal() {
    return this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data: { name: 'user' }
    });
  }

  addUserAtTheBeggingOfTheArray(
    user: Personal,
    userArray: Array<Personal>
  ): Array<Personal> {
    userArray.unshift(user);
    return userArray;
  }

  updateUserInArray(
    elementIndex: number,
    updatedUser: Personal,
    userArray: Array<Personal>
  ): Array<Personal> {
    return userArray
      .slice(0, elementIndex)
      .concat([updatedUser, ...userArray.slice(elementIndex + 1)]);
  }

  removeUserFromArray(
    elementIndex: number,
    userArray: Array<Personal>
  ): Array<Personal> {
    return userArray
      .slice(0, elementIndex)
      .concat(userArray.slice(elementIndex + 1));
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }
}
