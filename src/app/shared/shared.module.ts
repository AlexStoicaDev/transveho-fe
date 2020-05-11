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

@NgModule({
  imports: [RouterModule, CommonModule, MatPaginatorModule],
  declarations: [
    FooterComponent,
    TopNavComponent,
    PaginatorComponent,
    StatusBarComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteModalComponent
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
