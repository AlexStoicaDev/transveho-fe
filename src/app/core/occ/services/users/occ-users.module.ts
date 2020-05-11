import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccUsersService } from './occ-users.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccUsersService]
})
export class OccUsersModule {}
