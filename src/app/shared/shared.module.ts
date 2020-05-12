import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent,
    EditUserModalComponent
  ],
  exports: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent
  ]
})
export class SharedModule {}
