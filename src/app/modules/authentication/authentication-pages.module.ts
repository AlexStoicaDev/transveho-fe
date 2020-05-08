import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TestHomeComponent } from './pages/test-home/test-home.component';
import { TestAdminComponent } from './pages/test-admin/test-admin.component';
import { TestDispatcherComponent } from './pages/test-dispatcher/test-dispatcher.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    TestHomeComponent,
    TestAdminComponent,
    TestDispatcherComponent
  ],
  exports: [LoginPageComponent],
  imports: [
    AuthenticationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule
  ]
})
export class AuthenticationPagesModule {}
