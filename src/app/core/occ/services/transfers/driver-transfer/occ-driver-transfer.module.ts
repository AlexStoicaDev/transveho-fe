import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccDriverTransferService } from './occ-driver-transfer.service';
import { AuthenticationModule } from '../../../../authentication';

@NgModule({
  imports: [HttpClientModule, AuthenticationModule],
  providers: [OccDriverTransferService]
})
export class OccDriverTransferModule {}
