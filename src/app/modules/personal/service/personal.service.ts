import { Injectable } from '@angular/core';
import {
  CreateUserModalComponent,
  DeleteModalComponent,
  EditUserModalComponent
} from '@transveho-shared';
import { MatDialog } from '@angular/material/dialog';
import { Personal, PersonalRole } from '@transveho-core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(public dialog: MatDialog) {}

  //TODO have only user or psersonal for components names not bouth
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
      width: '250px'
    });
  }
}
